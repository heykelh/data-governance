"use client";
const strengths = [
  {
    icon: "⬡",
    title: "Double expertise technique & métier",
    text: "Rare combinaison : Data Engineering (Python, SQL, pipelines) ET gouvernance opérationnelle (DAMA-DMBOK, RACI, Data Quality). Pas un théoricien — un praticien.",
    color: "var(--accent)",
  },
  {
    icon: "⬡",
    title: "Terrain SNCF, enjeux réels",
    text: "10 ans dans des environnements critiques à haute exigence de sécurité et fiabilité. La gouvernance des données, je la comprends depuis les contraintes opérationnelles, pas depuis un slide.",
    color: "var(--accent-amber)",
  },
  {
    icon: "⬡",
    title: "Opérationnel dès J+1",
    text: "Chaque projet de ce site est un livrable réel — pas un exercice académique. BCBS239, EU AI Act, Solvency II, Data Mesh : les frameworks sont construits, documentés et démontrables.",
    color: "var(--accent-purple)",
  },
  {
    icon: "⬡",
    title: "Transversalité métier / IT",
    text: "Animation d'ateliers, coordination métiers / IT / fonctions support, restitution stratégique. La gouvernance c'est 30% technique et 70% humain — je gère les deux.",
    color: "var(--accent-coral)",
  },
];

export function WhyMeSection() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="why-grid">

          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              Pourquoi moi
            </p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 24 }}>
              Pas un candidat de plus.{" "}
              <span style={{ color: "var(--text-secondary)" }}>Une évidence.</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              Je ne postule pas à des offres. Je démontre mon niveau avant même l'entretien.
              Ce site est ma preuve de compétence — chaque module est un projet réel,
              déployé, documenté, prêt à être mis en production.
            </p>
            <a href="/a-propos" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 14, fontWeight: 500, color: "var(--accent)", textDecoration: "none",
            }}>
              Mon parcours complet
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {strengths.map(s => (
              <div key={s.title} style={{
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: 12, padding: "20px 24px",
                borderLeft: `3px solid ${s.color}`,
              }}>
                <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, color: "var(--text-primary)" }}>{s.title}</h4>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
