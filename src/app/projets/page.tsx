"use client";

const projects = [
  {
    title: "BCBS239 Data Governance — Cadre réglementaire bancaire",
    period: "Fév 2026",
    tags: ["BCBS239", "Data Governance", "Finance", "Reporting"],
    color: "var(--accent-purple)",
    url: "https://bcbs239-data-governance.vercel.app/",
    desc: "Réalisation d'un diagnostic complet du dispositif data avec une approche orientée pilotage financier et performance métier. Analyse des écarts de gouvernance et de conformité, structuration du cadre data : data lineage, définition des rôles (Data Owner / Steward) et mise en place de contrôles.",
    deliverables: ["Diagnostic data complet", "Data lineage documenté", "Rôles Data Owner/Steward", "Contrôles de conformité"],
  },
  {
    title: "Customer Experience Intelligence — Analyse & Data Visualisation",
    period: "Fév 2026",
    tags: ["Power BI", "KPI", "Data Viz", "Analyse clients"],
    color: "var(--accent-coral)",
    url: "https://github.com/heykelh/customer-experience-intelligence",
    desc: "Analyse de données clients pour identifier insights, tendances et anomalies impactant la performance. Conception de dashboards interactifs Power BI et mise en place de KPI pour le pilotage métier. Restitution de visualisations claires et exploitables afin d'aider à la prise de décision.",
    deliverables: ["Dashboards Power BI", "KPI métier", "Analyse des tendances", "Rapport d'insights"],
  },
  {
    title: "Programme de Gouvernance des Données Critiques",
    period: "Fév 2026",
    tags: ["Data Governance", "RACI", "Data Quality", "Feuille de route"],
    color: "var(--accent-amber)",
    url: "https://www.canva.com/design/DAHBNgAQtnw/view",
    desc: "Conception et déploiement d'un cadre de gouvernance Data sur un périmètre critique (incidents & performance). Diagnostic de maturité Data & IA, modèle de gouvernance fédéré à l'échelle transverse, formalisation des rôles avec matrice RACI, cadre Data Quality avec KPI et SLA, feuille de route Data priorisée.",
    deliverables: ["Diagnostic maturité Data & IA", "Matrice RACI complète", "Cadre Data Quality (KPI/SLA)", "Feuille de route priorisée"],
  },
  {
    title: "AI for Kuala Lumpur — Data & IA Decision Platform",
    period: "Mar 2026",
    tags: ["IA", "Data urbaine", "Pipeline", "Prédictif"],
    color: "var(--accent)",
    url: "https://ai-for-kuala-lumpur.netlify.app/",
    desc: "Conception d'une plateforme data permettant d'analyser des données urbaines complexes afin de faciliter la prise de décision stratégique. Collecte, structuration et exploitation de données multi-sources (API, datasets ouverts) avec une logique de pipeline data automatisé. Implémentation de cas d'usage IA (analyse prédictive, génération d'insights).",
    deliverables: ["Plateforme data urbaine", "Pipeline multi-sources", "Analyse prédictive", "Dashboard décisionnel"],
  },
  {
    title: "CryptoBot — Data Engineering Pipeline",
    period: "Oct 2025",
    tags: ["Python", "SQL", "ETL", "API", "Temps réel"],
    color: "var(--accent-blue)",
    url: "https://www.canva.com/design/DAG1I0Dd_a4/view",
    desc: "Conception d'un pipeline data complet (API → ingestion → stockage SQL → visualisation) permettant l'exploitation de données en quasi temps réel. Nettoyage, transformation et structuration des données pour garantir leur qualité, cohérence et exploitabilité. Développement d'indicateurs exploitables pour le suivi de performance.",
    deliverables: ["Pipeline API → SQL", "Ingestion temps réel", "Nettoyage & transformation", "Indicateurs de performance"],
  },
];

export default function ProjetsPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "60px 24px 48px", background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Portfolio</p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, marginBottom: 16 }}>
            Autres projets
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 600, lineHeight: 1.7 }}>
            Projets réalisés en parallèle du Master Data Engineer — pipelines data, visualisation,
            gouvernance appliquée et intelligence artificielle.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
        {projects.map((p, i) => (
          <div key={i} style={{
            background: "var(--bg-card)", border: "1px solid var(--border)",
            borderRadius: 16, padding: "28px 32px",
            borderLeft: `3px solid ${p.color}`,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", marginBottom: 14 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                  <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>{p.title}</h2>
                  <span style={{ fontSize: 11, color: "var(--text-tertiary)", whiteSpace: "nowrap" }}>{p.period}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      fontSize: 11, padding: "3px 9px", borderRadius: 99,
                      background: `color-mix(in srgb, ${p.color} 12%, transparent)`,
                      color: p.color, fontWeight: 500,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
              {p.url && (
                <a href={p.url} target="_blank" rel="noreferrer" style={{
                  display: "flex", alignItems: "center", gap: 6, flexShrink: 0,
                  padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 500,
                  background: "var(--bg-surface)", border: "1px solid var(--border)",
                  color: "var(--text-secondary)", textDecoration: "none",
                }}>
                  Voir le projet
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
              )}
            </div>

            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 14 }}>
              <p style={{ fontSize: 11, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Livrables clés</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.deliverables.map(d => (
                  <span key={d} style={{
                    display: "flex", alignItems: "center", gap: 5,
                    fontSize: 12, padding: "4px 10px", borderRadius: 6,
                    background: "var(--bg-surface)", border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
