import Link from "next/link";
export default function NotFound() {
  return (
    <div style={{ paddingTop: 80, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
      <div>
        <div style={{ fontSize: 80, fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--text-tertiary)", lineHeight: 1 }}>404</div>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginTop: 16, marginBottom: 8 }}>Page introuvable</h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: 28 }}>Cette page n'existe pas ou a été déplacée.</p>
        <Link href="/" style={{ padding: "10px 24px", borderRadius: 8, background: "var(--accent)", color: "#0e0f0e", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
