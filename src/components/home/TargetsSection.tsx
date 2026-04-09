"use client";
const targets = [
  { name: "AXA", sector: "Assurance", module: "Solvency II", color: "var(--accent-purple)" },
  { name: "BNP Paribas", sector: "Banque", module: "EU AI Act", color: "var(--accent)" },
  { name: "PwC", sector: "Audit & Conseil", module: "Maturité Data", color: "var(--accent-amber)" },
  { name: "Capgemini", sector: "Conseil IT", module: "Data Mesh", color: "var(--accent-blue)" },
  { name: "Accenture", sector: "Conseil IT", module: "Gouvernance", color: "var(--accent-coral)" },
  { name: "Société Générale", sector: "Banque", module: "EU AI Act", color: "var(--accent)" },
  { name: "KPMG", sector: "Audit", module: "RGPD", color: "var(--accent-amber)" },
  { name: "EDF", sector: "Infrastructure", module: "Data Mesh", color: "var(--accent-blue)" },
];

export function TargetsSection() {
  return (
    <section style={{ padding: "80px 24px", background: "var(--bg-surface)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
            Secteurs & entreprises visés
          </p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700 }}>
            Des projets pensés pour{" "}
            <span style={{ color: "var(--text-secondary)" }}>leurs enjeux réels</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
          {targets.map(t => (
            <div key={t.name} style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: 12, padding: "16px 20px",
              display: "flex", flexDirection: "column", gap: 4,
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--text-primary)" }}>{t.name}</div>
              <div style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{t.sector}</div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 5, marginTop: 6,
                fontSize: 11, color: t.color, fontWeight: 500,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: t.color }} />
                {t.module}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
