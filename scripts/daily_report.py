import requests
import os
from datetime import datetime, timedelta

UMAMI_USER = os.environ["UMAMI_USER"]
UMAMI_PASS = os.environ["UMAMI_PASS"]
UMAMI_WEBSITE_ID = os.environ["UMAMI_WEBSITE_ID"]
NTFY_TOPIC = os.environ["NTFY_TOPIC"]

# Umami Cloud utilise cette URL
BASE = "https://api.umami.is/v1"

print(f"Tentative de connexion sur {BASE}/auth/login")
print(f"User: {UMAMI_USER}")

auth_response = requests.post(
    f"{BASE}/auth/login",
    json={"username": UMAMI_USER, "password": UMAMI_PASS},
    headers={"Content-Type": "application/json"}
)

print(f"Status code: {auth_response.status_code}")
print(f"Réponse: {auth_response.text[:300]}")

if auth_response.status_code != 200:
    print("Échec auth — on essaie l'URL alternative")
    BASE2 = "https://app.umami.is/api"
    auth_response = requests.post(
        f"{BASE2}/auth/login",
        json={"username": UMAMI_USER, "password": UMAMI_PASS},
        headers={"Content-Type": "application/json"}
    )
    print(f"Status code alt: {auth_response.status_code}")
    print(f"Réponse alt: {auth_response.text[:300]}")
    if auth_response.status_code == 200:
        BASE = BASE2

token = auth_response.json().get("token")

if not token:
    print("Erreur auth Umami — vérifier les credentials")
    exit(1)

print("Auth OK — token récupéré")

headers = {"Authorization": f"Bearer {token}"}

now = datetime.utcnow()
end = int(now.replace(hour=0, minute=0, second=0, microsecond=0).timestamp() * 1000)
start = end - 86400000

def get(path, params={}):
    url = f"{BASE}{path}"
    r = requests.get(url, headers=headers, params=params)
    print(f"GET {url} → {r.status_code}")
    if not r.ok:
        print(f"  Erreur: {r.text[:200]}")
    return r.json() if r.ok else {}

stats = get(f"/websites/{UMAMI_WEBSITE_ID}/stats", {
    "startAt": start,
    "endAt": end
})
print(f"Stats: {stats}")

visits   = stats.get("visits", {}).get("value", 0)
pviews   = stats.get("pageviews", {}).get("value", 0)
bounce   = stats.get("bounces", {}).get("value", 0)
duration = stats.get("totalTime", {}).get("value", 0)
avg_dur  = f"{int(duration // 60)}m{int(duration % 60)}s" if visits > 0 else "0s"
bounce_r = f"{round((bounce / visits) * 100)}%" if visits > 0 else "0%"

pages_r = get(f"/websites/{UMAMI_WEBSITE_ID}/metrics", {
    "startAt": start, "endAt": end, "type": "url", "limit": 5
})
top_pages = pages_r if isinstance(pages_r, list) else []

countries_r = get(f"/websites/{UMAMI_WEBSITE_ID}/metrics", {
    "startAt": start, "endAt": end, "type": "country", "limit": 3
})
top_countries = countries_r if isinstance(countries_r, list) else []

sources_r = get(f"/websites/{UMAMI_WEBSITE_ID}/metrics", {
    "startAt": start, "endAt": end, "type": "referrer", "limit": 3
})
top_sources = sources_r if isinstance(sources_r, list) else []

date_str = (now - timedelta(days=1)).strftime("%d/%m/%Y")
lines = [
    f"📊 Rapport Analytics — {date_str}",
    "",
    f"👥 Visiteurs : {visits}",
    f"📄 Pages vues : {pviews}",
    f"⏱️ Durée moyenne : {avg_dur}",
    f"↩️ Taux de rebond : {bounce_r}",
    "",
]

if top_pages:
    lines.append("🔗 Pages les plus vues :")
    for p in top_pages[:4]:
        lines.append(f"  {p.get('x', '/')} — {p.get('y', 0)} vues")
    lines.append("")

if top_countries:
    lines.append("🌍 Pays :")
    for c in top_countries:
        lines.append(f"  {c.get('x', '?')} — {c.get('y', 0)} visites")
    lines.append("")

if top_sources:
    lines.append("📨 Sources :")
    for s in top_sources:
        lines.append(f"  {s.get('x', 'Direct') or 'Direct'} — {s.get('y', 0)}")

message = "\n".join(lines)

requests.post(
    f"https://ntfy.sh/{NTFY_TOPIC}",
    data=message.encode("utf-8"),
    headers={
        "Title": f"Site analytics — {date_str}",
        "Priority": "default",
        "Tags": "chart_with_upwards_trend",
    }
)

print("Rapport envoyé.")
print(message)
