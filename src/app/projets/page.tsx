"use client";
import Link from "next/link";

const projects = [
  {
    num: "01",
    title: "REGARD ,  Copilote IA de conformité",
    subtitle: "Agent IA branchée sur la donnée régulée réelle",
    description: "Système IA agentique de conformité : pipeline RAG déterministe-first, orchestration LangGraph, multi-LLM (Groq Llama 3.3 70B + Gemini 2.0 Flash), autocontrôle LLM-juge, refus motivés avec journal d'audit, observabilité Langfuse. 28/28 cas de test validés. Architecture donnée brute vers gold vers réponse gouvernée.",
    tags: ["LangGraph", "RAG", "Groq", "Gemini", "LLMOps", "Langfuse", "Next.js", "DuckDB-WASM"],
    href: "https://regard-wine.vercel.app/",
    external: true,
    color: "var(--accent-rose)",
    year: "2026",
    metier: "IA & Agents",
  },
  {
    num: "02",
    title: "Audit & Gouvernance Data ,  Cadre BCBS239",
    subtitle: "Diagnostic du dispositif data orienté pilotage financier",
    description: "Diagnostic complet du dispositif data avec approche orientée pilotage financier et performance métier. Analyse des écarts de gouvernance et de conformité, structuration du cadre data : data lineage, définition des rôles (Data Owner / Steward) et mise en place de contrôles. 0% à 100% conformité BCBS239.",
    tags: ["BCBS239", "Data Governance", "Data Lineage", "Conformité"],
    href: "https://bcbs239-data-governance.vercel.app/",
    external: true,
    color: "var(--accent)",
    year: "2026",
    metier: "Data Governance",
  },
  {
    num: "03",
    title: "FrontierBank ,  Mission Consulting Data",
    subtitle: "Simulation complète d'une mission de conseil 12 mois",
    description: "Pilotage complet d'un programme de transformation data en contexte BCE / BCBS239 : diagnostic DAMA-DMBOK (8 domaines), cadre de gouvernance, data catalog avec glossaire certifié, data quality KPI, data lineage graphe, AI governance EU AI Act, rapport Comex avec budget et ROI.",
    tags: ["BCBS239", "DAMA-DMBOK", "Data Catalog", "EU AI Act", "Comex"],
    href: "https://frontierbank-data.vercel.app/",
    external: true,
    color: "var(--accent-purple)",
    year: "2026",
    metier: "Data Consulting",
  },
  {
    num: "04",
    title: "Finance Audit Dashboard ,  CAC40",
    subtitle: "Détection automatique d'anomalies financières par ML",
    description: "Analyse automatisée de 10 entreprises du CAC40 sur 5 ans de données réelles Yahoo Finance. Pipeline ETL Python, modèle ML Isolation Forest (scoring 0-100), API FastAPI 4 endpoints, dashboard Next.js avec graphiques Plotly interactifs. De plusieurs semaines d'analyse manuelle à 10 secondes.",
    tags: ["Python", "scikit-learn", "FastAPI", "Next.js", "Plotly", "yfinance"],
    href: "https://finance-audit-dashboard.vercel.app/",
    external: true,
    color: "var(--accent-coral)",
    year: "2026",
    metier: "Data Analyst",
  },
  {
    num: "05",
    title: "Customer Experience Intelligence",
    subtitle: "Analyse & Data Visualisation",
    description: "Analyse de données clients pour identifier insights, tendances et anomalies impactant la performance. Conception de dashboards interactifs Power BI et mise en place de KPI pour le pilotage métier. 5 KPI automatisés, 3 segments clients identifiés, délai de rapport réduit à moins d'une journée.",
    tags: ["Power BI", "Data Analysis", "KPI", "Dashboard"],
    href: "https://github.com/heykelh/customer-experience-intelligence",
    external: true,
    color: "var(--accent-amber)",
    year: "2026",
    metier: "Data Analyst",
  },
  {
    num: "06",
    title: "Programme de Gouvernance des Données Critiques",
    subtitle: "Framework complet sur un périmètre incidents & performance",
    description: "Conception et déploiement d'un cadre de gouvernance Data complet. Diagnostic de maturité Data & IA, modèle de gouvernance fédéré, formalisation des rôles Data avec matrice RACI, cadre Data Quality (KPI, SLA, contrôles), processus de gestion des incidents Data et feuille de route priorisée sur 18 mois.",
    tags: ["Data Governance", "RACI", "Data Quality", "Roadmap", "Maturité"],
    href: "https://www.canva.com/design/DAHBNgAQtnw/Ru9E56mpd2qyDSzXKGhMIw/view",
    external: true,
    color: "var(--accent)",
    year: "2026",
    metier: "Data Governance",
  },
  {
    num: "07",
    title: "Naomi Data Steward Lab",
    subtitle: "Simulation du rôle Data Steward sur l'écosystème SNCF",
    description: "Simulation pédagogique du rôle de Data Steward sur l'écosystème Naomi de SNCF Voyageurs. Données ouvertes réelles, catalogue de données avec fiches par dataset, glossaire métier, règles de qualité et processus de remédiation.",
    tags: ["Data Stewardship", "Data Catalog", "DAMA-DMBOK", "Open Data SNCF"],
    href: "https://naomi-data-steward.vercel.app/",
    external: true,
    color: "var(--accent-purple)",
    year: "2026",
    metier: "Data Steward",
  },
  {
    num: "08",
    title: "AI for Kuala Lumpur",
    subtitle: "Data & IA Decision Platform ,  cas d'usage urbain",
    description: "Plateforme data multi-sources permettant d'analyser des données urbaines complexes pour faciliter la prise de décision stratégique. Pipeline data automatisé, 3 cas d'usage IA implémentés, 100% données réelles, génération d'insights en moins de 5 minutes.",
    tags: ["IA", "Data Platform", "API", "Pipeline", "Décision"],
    href: "https://ai-for-kuala-lumpur.netlify.app/",
    external: true,
    color: "var(--accent-rose)",
    year: "2026",
    metier: "IA & Agents",
  },
  {
    num: "09",
    title: "PokéWatch — Surveillance marché Pokémon TCG",
    subtitle: "Pipeline data + détection d'anomalies + rapports LLM",
    description: "Surveillance automatisée du marché Pokémon TCG : ingestion Python depuis l'API officielle, stockage Supabase/Postgres, règles de détection PL/pgSQL, dashboard Next.js 15 et rapports narratifs générés par Groq LLM. CI GitHub Actions avec harness d'évaluation F1=1.00. Projet en cours.",
    tags: ["Python", "Supabase", "Postgres", "PL/pgSQL", "Next.js 15", "Groq LLM", "GitHub Actions"],
    href: "https://pokewatch-three.vercel.app/",
    external: true,
    color: "var(--accent-amber)",
    year: "2026",
    metier: "Data Engineering",
  },
  {
    num: "10",
    title: "CryptoBot ,  Data Engineering",
    subtitle: "Pipeline data temps réel & visualisation",
    description: "Pipeline data complet API vers ingestion vers stockage SQL vers visualisation. Délai d'ingestion inférieur à 60 secondes. 5 KPI de performance calculés automatiquement (prix, volume, volatilité, tendance, momentum) et mis à jour en continu.",
    tags: ["ETL", "SQL", "API", "Pipeline", "Data Engineering"],
    href: "https://www.canva.com/design/DAG1I0Dd_a4/p3QvJvqgTTjs9Dek5_j0Lw/edit",
    external: true,
    color: "var(--accent-amber)",
    year: "2025",
    metier: "Data Engineering",
  },
];

const metierColors: Record<string, string> = {
  "IA & Agents": "var(--accent-rose)",
  "Data Governance": "var(--accent)",
  "Data Consulting": "var(--accent-purple)",
  "Data Analyst": "var(--accent-coral)",
  "Data Engineering": "var(--accent-amber)",
  "Data Steward": "var(--accent-purple)",
};

export default function ProjetsPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "60px 24px 48px", background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Portfolio</p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, marginBottom: 16 }}>
            9 projets réalisés
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 600, lineHeight: 1.7 }}>
            Data Governance, Data Consulting, Data Engineering, Data Analyst, IA & Agents. Chaque projet répond à un enjeu business réel avec des livrables opérationnels.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
            {Object.entries(metierColors).map(([m, c]) => (
              <span key={m} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 99, fontWeight: 500, background: `color-mix(in srgb, ${c} 12%, transparent)`, color: c, border: `1px solid color-mix(in srgb, ${c} 25%, transparent)` }}>{m}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
        {projects.map((p) => {
          const mc = metierColors[p.metier] || "var(--accent)";
          return (
            <div key={p.num} style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: 14, padding: "24px 28px",
              borderLeft: `3px solid ${mc}`,
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 260 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{ width: 26, height: 26, borderRadius: 6, fontSize: 11, fontWeight: 700, background: `color-mix(in srgb, ${mc} 15%, transparent)`, color: mc, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)" }}>{p.num}</span>
                    <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 99, background: `color-mix(in srgb, ${mc} 10%, transparent)`, color: mc, fontWeight: 500 }}>{p.metier}</span>
                    <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{p.year}</span>
                  </div>
                  <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>{p.title}</h2>
                  <p style={{ fontSize: 13, color: mc, fontWeight: 500, marginBottom: 10 }}>{p.subtitle}</p>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 14, maxWidth: 680 }}>{p.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize: 11, padding: "2px 8px", borderRadius: 99, background: `color-mix(in srgb, ${mc} 8%, transparent)`, color: mc, fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>
                </div>
                <a href={p.href} target="_blank" rel="noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 6, flexShrink: 0,
                  padding: "9px 16px", borderRadius: 8, fontSize: 12, fontWeight: 500,
                  background: `color-mix(in srgb, ${mc} 10%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${mc} 25%, transparent)`,
                  color: mc, textDecoration: "none",
                }}>
                  Voir le projet
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}