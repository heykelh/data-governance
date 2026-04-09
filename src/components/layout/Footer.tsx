"use client";
import Link from "next/link";

const modules = [
  { href: "/rgpd", label: "RGPD & Privacy", tag: "01" },
  { href: "/audit-maturite", label: "Audit Maturité", tag: "02" },
  { href: "/eu-ai-act", label: "EU AI Act", tag: "03" },
  { href: "/solvency-ii", label: "Solvency II", tag: "04" },
  { href: "/data-mesh", label: "Data Mesh", tag: "05" },
];

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-surface)", padding: "60px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, color: "var(--accent)"
              }}>HH</div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15 }}>Heykel Hachiche</span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, maxWidth: 320 }}>
              Expert Data Governance & AI Compliance. De la donnée brute à la décision fiable.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{
                padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 500,
                background: "var(--bg-card)", border: "1px solid var(--border)",
                color: "var(--text-secondary)", textDecoration: "none",
              }}>LinkedIn</a>
              <a href="https://github.com/heykelh" target="_blank" rel="noreferrer" style={{
                padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 500,
                background: "var(--bg-card)", border: "1px solid var(--border)",
                color: "var(--text-secondary)", textDecoration: "none",
              }}>GitHub</a>
            </div>
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Projets Gov.</p>
            {modules.map(m => (
              <Link key={m.href} href={m.href} style={{
                display: "block", fontSize: 13, color: "var(--text-secondary)",
                textDecoration: "none", marginBottom: 10,
              }}>
                <span style={{ color: "var(--text-tertiary)", marginRight: 8 }}>{m.tag}</span>{m.label}
              </Link>
            ))}
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Navigation</p>
            {[
              { href: "/a-propos", label: "À propos" },
              { href: "/projets", label: "Autres projets" },
              { href: "/ressources", label: "Ressources" },
              { href: "/contact", label: "Contact" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                display: "block", fontSize: 13, color: "var(--text-secondary)",
                textDecoration: "none", marginBottom: 10,
              }}>{l.label}</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "var(--text-tertiary)" }}>
            © {new Date().getFullYear()} Heykel Hachiche — Data Governance & AI Compliance
          </p>
          <p style={{ fontSize: 12, color: "var(--text-tertiary)" }}>
            Paris, Île-de-France
          </p>
        </div>
      </div>
      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr!important;gap:32px!important}}`}</style>
    </footer>
  );
}
