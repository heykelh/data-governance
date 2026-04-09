"use client";
import { ModuleLayout } from "@/components/ui/ModuleLayout";

const principles = [
  { num: "01", title: "Domain Ownership", color: "var(--accent-blue)", desc: "Les domaines métiers sont responsables de leurs données en tant que propriétaires. La gouvernance est décentralisée : chaque domaine gère ses données comme un produit." },
  { num: "02", title: "Data as a Product", color: "var(--accent)", desc: "Les données sont traitées comme des produits : elles ont un propriétaire, une documentation, des SLA, un versionning et sont conçues pour être consommées par d'autres." },
  { num: "03", title: "Self-Serve Platform", color: "var(--accent-purple)", desc: "Une plateforme data commune fournit les capacités d'infrastructure (stockage, compute, catalogage, accès) sans que chaque domaine ait à les reconstruire." },
  { num: "04", title: "Federated Governance", color: "var(--accent-coral)", desc: "La gouvernance est fédérée : des standards globaux (Data Contracts, qualité, sécurité) sont définis centralement et appliqués localement par chaque domaine." },
];

const domains = [
  {
    name: "Infrastructure voie ferrée",
    owner: "Direction Infrastructure",
    color: "var(--accent-blue)",
    products: [
      { name: "État des voies", freq: "Quotidien", consumers: ["Maintenance", "Exploitation"], sla: "99.5%" },
      { name: "Incidents infrastructure", freq: "Temps réel", consumers: ["Exploitation", "Sécurité"], sla: "99.9%" },
      { name: "Cartographie réseau", freq: "Mensuel", consumers: ["Travaux", "Commercial"], sla: "98%" },
    ],
  },
  {
    name: "Exploitation trains",
    owner: "Direction Exploitation",
    color: "var(--accent)",
    products: [
      { name: "Circulation temps réel", freq: "Temps réel", consumers: ["Voyageurs", "Maintenance"], sla: "99.9%" },
      { name: "Performance ponctualité", freq: "Quotidien", consumers: ["Stratégie", "Commercial"], sla: "99%" },
      { name: "Capacité & sillons", freq: "Hebdomadaire", consumers: ["Commercial", "Infrastructure"], sla: "98%" },
    ],
  },
  {
    name: "Voyageurs & billetterie",
    owner: "Direction Commerciale",
    color: "var(--accent-coral)",
    products: [
      { name: "Flux voyageurs OD", freq: "Quotidien", consumers: ["Stratégie", "Exploitation"], sla: "99%" },
      { name: "Revenus & yield", freq: "Quotidien", consumers: ["Finance", "Stratégie"], sla: "99.5%" },
      { name: "Satisfaction client", freq: "Hebdomadaire", consumers: ["Qualité", "Commercial"], sla: "97%" },
    ],
  },
  {
    name: "Maintenance",
    owner: "Direction Technique",
    color: "var(--accent-amber)",
    products: [
      { name: "Historique interventions", freq: "Quotidien", consumers: ["Infrastructure", "Finance"], sla: "99%" },
      { name: "Prédiction pannes", freq: "Quotidien", consumers: ["Exploitation", "Infrastructure"], sla: "98%" },
      { name: "Stock pièces détachées", freq: "Temps réel", consumers: ["Maintenance", "Finance"], sla: "99.5%" },
    ],
  },
];

const contractExample = `# Data Contract — Circulation trains temps réel
# Domaine : Exploitation | Version : 2.1.0 | Statut : Actif

metadata:
  id: "dc-exploitation-circulation-v2"
  name: "Circulation trains — Temps réel"
  domain: "exploitation"
  owner: "data-owner-exploitation@sncf.fr"
  steward: "data-steward-it@sncf.fr"
  version: "2.1.0"
  created: "2025-01-15"
  updated: "2026-03-01"

schema:
  fields:
    - name: train_id
      type: string
      description: "Identifiant unique du train (format: TGV-XXXXX)"
      nullable: false
    - name: timestamp_utc
      type: timestamp
      description: "Horodatage UTC de la position"
      nullable: false
    - name: position_lat
      type: float
      description: "Latitude GPS du train"
      nullable: false
    - name: position_lon
      type: float
      description: "Longitude GPS du train"
      nullable: false
    - name: retard_minutes
      type: integer
      description: "Retard en minutes (négatif = avance)"
      nullable: true
    - name: statut
      type: enum
      values: [EN_MARCHE, EN_GARE, SUPPRIME, RETARDE]
      nullable: false

quality:
  completeness: ">= 99.5%"
  freshness: "<= 30 secondes"
  accuracy: ">= 99.9%"
  uniqueness: "train_id + timestamp doit être unique"

sla:
  availability: "99.9% (max 8.7h downtime/an)"
  latency_p99: "<= 500ms"
  support: "24/7 pour incidents P1"

consumers:
  - domain: "voyageurs"
    use_case: "Information voyageurs temps réel"
  - domain: "maintenance"
    use_case: "Déclenchement alertes préventives"`;

const catalogItems = [
  { domain: "Exploitation", product: "Circulation temps réel", owner: "Dir. Exploitation", freshness: "< 30s", sla: "99.9%", consumers: 3, status: "Actif", color: "var(--accent)" },
  { domain: "Infrastructure", product: "État des voies", owner: "Dir. Infrastructure", freshness: "Quotidien", sla: "99.5%", consumers: 4, status: "Actif", color: "var(--accent-blue)" },
  { domain: "Voyageurs", product: "Flux voyageurs OD", owner: "Dir. Commerciale", freshness: "Quotidien", sla: "99%", consumers: 2, status: "Actif", color: "var(--accent-coral)" },
  { domain: "Maintenance", product: "Prédiction pannes", owner: "Dir. Technique", freshness: "Quotidien", sla: "98%", consumers: 2, status: "Bêta", color: "var(--accent-amber)" },
  { domain: "Voyageurs", product: "Revenus & yield", owner: "Dir. Commerciale", freshness: "Quotidien", sla: "99.5%", consumers: 3, status: "Actif", color: "var(--accent-coral)" },
  { domain: "Exploitation", product: "Performance ponctualité", owner: "Dir. Exploitation", freshness: "Quotidien", sla: "99%", consumers: 4, status: "Actif", color: "var(--accent)" },
];

export default function DataMeshPage() {
  return (
    <ModuleLayout moduleId="data-mesh">
      <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Les 4 principes du Data Mesh</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>
            Conceptualisé par Zhamak Dehghani (ThoughtWorks, 2019), le Data Mesh répond aux limites
            des architectures data centralisées : goulots d'étranglement, silos, scaling difficile.
            Il propose une décentralisation architecturale et organisationnelle des données.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="two-col">
            {principles.map(p => (
              <div key={p.num} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px", borderLeft: `3px solid ${p.color}` }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: p.color, background: `color-mix(in srgb, ${p.color} 12%, transparent)`, padding: "3px 8px", borderRadius: 4 }}>{p.num}</span>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0, lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Modélisation — 4 domaines SNCF fictifs</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>
            Application concrète du Data Mesh à une organisation ferroviaire complexe.
            Chaque domaine est propriétaire de ses data products et responsable de leur qualité.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {domains.map((d, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 10, background: `color-mix(in srgb, ${d.color} 6%, transparent)` }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: d.color }} />
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", margin: 0, flex: 1 }}>{d.name}</h3>
                  <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>Owner : {d.owner}</span>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        {["Data Product", "Fréquence", "Consommateurs", "SLA dispo."].map(h => (
                          <th key={h} style={{ padding: "8px 16px", textAlign: "left", color: "var(--text-tertiary)", fontWeight: 500, fontSize: 11, textTransform: "uppercase" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {d.products.map((p, pi) => (
                        <tr key={pi} style={{ borderBottom: pi < d.products.length - 1 ? "1px solid var(--border)" : "none" }}>
                          <td style={{ padding: "10px 16px", fontWeight: 500, color: "var(--text-primary)" }}>{p.name}</td>
                          <td style={{ padding: "10px 16px", color: "var(--text-secondary)" }}>{p.freq}</td>
                          <td style={{ padding: "10px 16px" }}>
                            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                              {p.consumers.map(c => <span key={c} style={{ fontSize: 11, padding: "2px 7px", borderRadius: 4, background: `color-mix(in srgb, ${d.color} 10%, transparent)`, color: d.color }}>{c}</span>)}
                            </div>
                          </td>
                          <td style={{ padding: "10px 16px" }}><span style={{ fontSize: 12, fontWeight: 600, color: "var(--accent)" }}>{p.sla}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Data Contract — Exemple complet</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>
            Un Data Contract formalise le contrat entre un producteur de données et ses consommateurs.
            Il définit le schéma, les SLA, les règles de qualité et les responsabilités.
            Format YAML — versionné dans Git comme du code.
          </p>
          <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "24px", fontFamily: "var(--font-mono)", fontSize: 12, lineHeight: 1.8, color: "var(--text-secondary)", overflowX: "auto", whiteSpace: "pre" }}>
            {contractExample.split('\n').map((line, i) => {
              let color = "var(--text-secondary)";
              if (line.startsWith('#')) color = "var(--text-tertiary)";
              else if (line.includes(':') && !line.startsWith(' ') && !line.startsWith('-')) color = "var(--accent-blue)";
              else if (line.includes('"') || line.includes("'")) color = "var(--accent)";
              else if (line.trim().startsWith('-')) color = "var(--accent-coral)";
              return <div key={i} style={{ color }}>{line || ' '}</div>;
            })}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Data Catalog — Inventaire des data products</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>
            Référentiel centralisé de tous les data products disponibles dans l'organisation.
            Point d'entrée unique pour découvrir, comprendre et consommer les données.
          </p>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-surface)" }}>
                    {["Domaine", "Data Product", "Owner", "Fraîcheur", "SLA", "Consommateurs", "Statut"].map(h => (
                      <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "var(--text-tertiary)", fontWeight: 500, fontSize: 11, textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {catalogItems.map((item, i) => (
                    <tr key={i} style={{ borderBottom: i < catalogItems.length - 1 ? "1px solid var(--border)" : "none" }}>
                      <td style={{ padding: "10px 14px" }}><span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 4, background: `color-mix(in srgb, ${item.color} 12%, transparent)`, color: item.color, fontWeight: 600 }}>{item.domain}</span></td>
                      <td style={{ padding: "10px 14px", fontWeight: 500, color: "var(--text-primary)" }}>{item.product}</td>
                      <td style={{ padding: "10px 14px", color: "var(--text-secondary)", fontSize: 12 }}>{item.owner}</td>
                      <td style={{ padding: "10px 14px", color: "var(--text-secondary)", fontSize: 12 }}>{item.freshness}</td>
                      <td style={{ padding: "10px 14px", fontWeight: 600, color: "var(--accent)" }}>{item.sla}</td>
                      <td style={{ padding: "10px 14px", textAlign: "center", color: "var(--text-secondary)" }}>{item.consumers}</td>
                      <td style={{ padding: "10px 14px" }}>
                        <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 4, background: item.status === "Actif" ? "#22c55e20" : "#eab30820", color: item.status === "Actif" ? "#22c55e" : "#eab308", fontWeight: 600 }}>{item.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>
      <style>{`.two-col{grid-template-columns:1fr 1fr}@media(max-width:768px){.two-col{grid-template-columns:1fr!important}}`}</style>
    </ModuleLayout>
  );
}
