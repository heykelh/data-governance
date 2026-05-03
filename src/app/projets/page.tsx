"use client";
import Link from "next/link";

const projects = [
  /*{
    title: "KYC Digital Transformation — Business Analysis",
    period: "Avr 2026",
    tags: ["Business Analysis", "KYC / LCB-FT", "User Stories", "SFD", "UAT", "Data Gouvernance", "Banque"],
    color: "#6366f1",
    url: "/projets/kyc-bnp",
    external: false,
    desc: "Mission Business Analyst complète simulée pour BNP Paribas Banque de Détail : analyse AS-IS/TO-BE, 18 User Stories BDD, Spécifications Fonctionnelles Détaillées, 24 scénarios UAT, data lineage et framework de gouvernance data intégré. Résultat simulé : −73% sur le délai de traitement KYC.",
    deliverables: ["18 User Stories BDD", "SFD — 3 modules fonctionnels", "24 scénarios UAT", "Data Lineage KYC", "Dashboard KPIs post go-live"],
  },*/
  {
  title: "SNCF Data Observatory — Data Quality Monitor (en cours...)",
  period: "Avr 2026",
  tags: ["Data Engineering", "Data Governance", "FastAPI", "Next.js", "Python", "LangChain", "DuckDB"],
  color: "#8b5cf6",
  url: "https://sncf-data-observatory.vercel.app/",
  desc: "Pipeline temps réel d'ingestion de données ferroviaires SNCF (GTFS-RT Protobuf) traitant 1 400+ trains toutes les 2 minutes. Architecture Medallion Bronze/Silver/Gold sur DuckDB, cadre de gouvernance DAMA-DMBOK complet (Data Catalog, Data Contracts, Data Lineage, Quality Score), et agent IA conversationnel permettant d'interroger 10 ans de données en langage naturel.",
  deliverables: [
    "Pipeline GTFS-RT temps réel — 1 400+ trains · cycle 2 min",
    "Architecture Medallion DuckDB — Bronze / Silver / Gold",
    "Cadre Gouvernance DAMA-DMBOK — Data Catalog · Lineage · SLA",
    "API REST FastAPI — 14 endpoints + WebSocket",
    "Dashboard Next.js 4 pages — Live · Historique · Gouvernance · Carte",
    "Agent IA SQL — LangChain · Llama 3.3 70B · 10 801 enregistrements",
  ],
},
  {
  title: "FinanceDataHub — Plateforme de Gouvernance Data & IA",
  period: "Avr 2026",
  tags: ["Data Governance", "BCBS 239", "DAMA-DMBOK", "EU AI Act", "Next.js", "TypeScript", "Zustand", "Recharts"],
  color: "#1e40af",
  url: "https://frontierbank-data.vercel.app/",
  desc: "Simulation complète d'une mission de conseil en gouvernance Data & IA pour FrontierBank (banque fictive sous surveillance BCE). Le site couvre l'intégralité du périmètre d'un consultant data senior : diagnostic de maturité DAMA-DMBOK, framework de gouvernance & RACI, Data Catalog, Data Quality KPIs, Data Lineage bout en bout, IA Governance EU AI Act et rapport Comex. Programme interactif en 6 phases — les métriques, la conformité BCBS 239 et les modèles IA évoluent dynamiquement à chaque phase.",
  deliverables: [
    "Diagnostic maturité DAMA-DMBOK — 8 domaines · Score 1.0 → 4.0/5",
    "Framework Gouvernance — RACI · Politiques · Comité DG · 6 rôles data",
    "Data Catalog — Glossaire 30 termes · 21 datasets Snowflake certifiés",
    "Data Quality — 4 KPIs · BCBS 239 14 principes · Plans de remédiation",
    "Data Lineage SVG — 20 systèmes · 21 flux · Coverage 0% → 100%",
    "IA Governance — Registre 5 modèles · EU AI Act · Drift monitoring",
    "Rapport Comex — Budget 2.4M€ · ROI 3.2x · Synthèse exécutive",
    "Sélecteur 6 phases — évolution dynamique de toutes les métriques"],
  },
  {
    title: "Finance Digital Audit Dashboard — CAC40",
    period: "Avr 2026",
    tags: ["Data Engineering", "Machine Learning", "FastAPI", "Next.js", "Python", "Plotly", "CI/CD"],
    color: "#6366f1",
    url: "https://finance-audit-dashboard.vercel.app/",
    desc: "Pipeline data end-to-end sur 10 entreprises du CAC40 : ingestion automatisée via API financière (yfinance), ETL Python, détection d'anomalies financières par Isolation Forest (scikit-learn), dashboard interactif Next.js/Plotly et génération automatique de rapports PDF d'audit. Déployé en production avec CI/CD GitHub Actions.",
    deliverables: ["Pipeline ETL Python — 10 entreprises CAC40", "Modèle ML Isolation Forest — 8 ratios financiers", "Dashboard 3 vues : P&L, Anomalies, Comparaison", "API REST FastAPI — 5 endpoints", "Export PDF automatique", "CI/CD GitHub Actions + Render + Vercel"],
  },
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
            Projets réalisés en solo. Ils contiennent principalement pipelines data, data visualisation,
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
