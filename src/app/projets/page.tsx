"use client";
import { useState } from "react";

const categories = [
  { id: "all", label: "Tous", color: "var(--text-primary)" },
  { id: "Data Governance", label: "Data Governance", color: "var(--accent)" },
  { id: "Data Consulting", label: "Data Consulting", color: "var(--accent-purple)" },
  { id: "Data Analyst / BA", label: "Data Analyst / BA", color: "var(--accent-coral)" },
  { id: "Data Engineering", label: "Data Engineering", color: "var(--accent-amber)" },
  { id: "IA & Agents", label: "IA & Agents", color: "var(--accent-rose)" },
];

const projects = [
  {
    title: "REGARD",
    subtitle: "Copilote IA de conformité réglementaire",
    desc: "Agent IA de conformité sur données régulées réelles. Architecture déterministe-first, 28/28 cas validés, refus motivés, journal d'audit, observabilité Langfuse.",
    tags: ["LangGraph", "RAG", "Groq", "Gemini", "Langfuse"],
    href: "https://regard-wine.vercel.app/",
    color: "var(--accent-rose)",
    metier: "IA & Agents",
    year: "2026",
  },
  {
    title: "FrontierBank",
    subtitle: "Mission Consulting Data Governance",
    desc: "Pilotage complet d'un programme de transformation data sur 12 mois en contexte BCE/BCBS239. Diagnostic DAMA-DMBOK, data catalog, data quality, data lineage, AI Register, rapport Comex.",
    tags: ["BCBS239", "DAMA-DMBOK", "Data Catalog", "EU AI Act"],
    href: "https://frontierbank-data.vercel.app/",
    color: "var(--accent-purple)",
    metier: "Data Consulting",
    year: "2026",
  },
  {
    title: "BCBS239 Audit",
    subtitle: "Audit et Gouvernance Data",
    desc: "Diagnostic complet du dispositif data BCBS239 : 0% à 100% de conformité sur les 14 principes, data lineage, rôles Data Owner/Steward, cadre de contrôle qualité.",
    tags: ["BCBS239", "Data Lineage", "Data Quality", "RACI"],
    href: "https://bcbs239-data-governance.vercel.app/",
    color: "var(--accent)",
    metier: "Data Governance",
    year: "2026",
  },
  {
    title: "Gouvernance Données Critiques",
    subtitle: "Programme de Gouvernance",
    desc: "Cadre de gouvernance data complet sur périmètre critique : diagnostic maturité, RACI, Data Quality KPI/SLA, gestion des incidents, feuille de route 18 mois.",
    tags: ["DAMA-DMBOK", "Data Quality", "RACI", "Roadmap"],
    href: "https://www.canva.com/design/DAHBNgAQtnw/Ru9E56mpd2qyDSzXKGhMIw/view",
    color: "var(--accent)",
    metier: "Data Governance",
    year: "2026",
  },
  {
    title: "INSPECTION DATA",
    subtitle: "Audit données banque fictive NOVEO",
    desc: "Moteur d'inspection data déterministe sur la banque fictive NOVEO : contrôles SQL, scoring risque par domaine, architecture médaillon, harnais de tests F1=1.00.",
    tags: ["SQL", "PostgreSQL", "Architecture médaillon", "Scoring risque"],
    href: "https://inspection-data.vercel.app/",
    color: "var(--accent-coral)",
    metier: "Data Analyst / BA",
    year: "2026",
  },
  {
    title: "Mission BA SI Crédit",
    subtitle: "CASDEN / Groupe BPCE",
    desc: "Simulation complète d'une mission Business Analyst sur un SI Crédit bancaire : recueil besoins, spécifications fonctionnelles, cas d'usage, maquettes, plan de recette.",
    tags: ["Business Analysis", "Spécifications fonctionnelles", "SI Crédit", "Bancaire"],
    href: "https://mission-ba-credit.vercel.app/",
    color: "var(--accent-blue)",
    metier: "Data Analyst / BA",
    year: "2026",
  },
  {
    title: "PALIER",
    subtitle: "Revenue Management & Pricing SNCF",
    desc: "Outil d'aide à la décision tarifaire sur 36 000 lignes de prix TGV réels. Exploration grille, analyse INOUI vs OUIGO, simulation prix optimal par élasticité.",
    tags: ["Python", "DuckDB", "Next.js 15", "Power BI", "GitHub Actions"],
    href: "https://palier-sncf.vercel.app/",
    color: "var(--accent-coral)",
    metier: "Data Analyst / BA",
    year: "2026",
  },
  {
    title: "ESCALE",
    subtitle: "Supervision opérations aériennes CDG/Orly",
    desc: "Console de suivi des vols avec scoring de risque de retard déterministe, architecture médaillon Supabase, alertes ntfy.sh, registres RGPD et AI Act intégrés.",
    tags: ["Python", "Supabase", "PostgreSQL", "Next.js 15", "RGPD", "AI Act"],
    href: "https://escale-ops.vercel.app/",
    color: "var(--accent-blue)",
    metier: "Data Analyst / BA",
    year: "2026",
  },
  {
    title: "Finance Audit Dashboard",
    subtitle: "Détection d'anomalies financières CAC40",
    desc: "Détection automatique d'anomalies sur 10 entreprises du CAC40 via ML (Isolation Forest). Pipeline Python, API FastAPI, dashboard Plotly. De plusieurs semaines à 10 secondes.",
    tags: ["Python", "scikit-learn", "FastAPI", "Next.js", "Plotly"],
    href: "https://finance-audit-dashboard.vercel.app/",
    color: "var(--accent-coral)",
    metier: "Data Analyst / BA",
    year: "2026",
  },
  {
    title: "Customer Experience Intelligence",
    subtitle: "Analyse et Data Visualisation",
    desc: "Analyse de données clients, identification de tendances et anomalies. 5 KPI automatisés, 3 segments clients identifiés, délai de rapport réduit à moins d'une journée.",
    tags: ["Power BI", "Python", "SQL", "KPI"],
    href: "https://github.com/heykelh/customer-experience-intelligence",
    color: "var(--accent-coral)",
    metier: "Data Analyst / BA",
    year: "2026",
  },
  {
    title: "Naomi Data Steward Lab",
    subtitle: "SNCF Voyageurs",
    desc: "Simulation du rôle Data Steward sur l'écosystème Naomi SNCF : catalogue de données, glossaire métier, règles de qualité, processus de remédiation sur données ouvertes réelles.",
    tags: ["Data Catalog", "Data Stewardship", "DAMA-DMBOK", "Open Data SNCF"],
    href: "https://naomi-data-steward.vercel.app/",
    color: "var(--accent-purple)",
    metier: "Data Governance",
    year: "2026",
  },
  {
    title: "AI for Kuala Lumpur",
    subtitle: "Data et IA Decision Platform",
    desc: "Plateforme data multi-sources pour l'analyse de données urbaines complexes. Pipeline automatisé, 3 cas d'usage IA implémentés, 100% données réelles, insights en moins de 5 min.",
    tags: ["Python", "FastAPI", "APIs REST", "Next.js", "IA"],
    href: "https://ai-for-kuala-lumpur.netlify.app/",
    color: "var(--accent-rose)",
    metier: "IA & Agents",
    year: "2026",
  },
  {
    title: "Data Arcade",
    subtitle: "Mini-jeux rétro data et gouvernance",
    desc: "Vitrine interactive NES/8-bit : Data Steward, SQL Fighter, Pipe Plumber, Data Odyssey. Chaque jeu illustre un concept data ou gouvernance. Bilingue FR/EN.",
    tags: ["Next.js 15", "TypeScript", "Tailwind", "Game Loop"],
    href: "https://datarcade.vercel.app/",
    color: "var(--accent-amber)",
    metier: "Data Engineering",
    year: "2026",
  },
  {
    title: "PokéWatch",
    subtitle: "Market Surveillance Pokémon TCG",
    desc: "Pipeline d'ingestion Pokémon TCG, stockage Supabase/Postgres, règles de détection PL/pgSQL, dashboard Next.js et rapports narratifs Groq LLM. CI GitHub Actions F1=1.00.",
    tags: ["Python", "Supabase", "PL/pgSQL", "Groq LLM", "GitHub Actions"],
    href: "https://pokewatch-three.vercel.app/",
    color: "var(--accent-amber)",
    metier: "Data Engineering",
    year: "2026",
  },
  {
    title: "CryptoBot",
    subtitle: "Pipeline Data Temps Réel",
    desc: "Pipeline data bout-en-bout API vers ingestion vers SQL vers visualisation. Délai d'ingestion inférieur à 60 secondes. 5 KPI calculés automatiquement en continu.",
    tags: ["Python", "SQL", "API REST", "ETL", "Visualisation"],
    href: "https://www.canva.com/design/DAG1I0Dd_a4/p3QvJvqgTTjs9Dek5_j0Lw/edit",
    color: "var(--accent-amber)",
    metier: "Data Engineering",
    year: "2025",
  },
];

export default function ProjetsPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? projects
    : projects.filter(p => p.metier === active);

  const activeCat = categories.find(c => c.id === active);

  return (
    <div style={{ paddingTop: 80 }}>

      {/* Header */}
      <section style={{ padding: "60px 24px 48px", background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Portfolio</p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, marginBottom: 12 }}>
            {projects.length} projets réalisés
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 15, maxWidth: 580, lineHeight: 1.7 }}>
            Data Governance, Consulting, Analyse, Engineering, IA. Chaque projet répond à un enjeu business réel avec des livrables opérationnels et des résultats chiffrés.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section style={{ padding: "24px 24px 0", background: "var(--bg-surface)", position: "sticky", top: 64, zIndex: 10, borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 6, flexWrap: "wrap", paddingBottom: 0 }}>
          {categories.map(cat => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 99,
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  border: isActive
                    ? `1px solid color-mix(in srgb, ${cat.color} 40%, transparent)`
                    : "1px solid var(--border)",
                  background: isActive
                    ? `color-mix(in srgb, ${cat.color} 12%, transparent)`
                    : "transparent",
                  color: isActive ? cat.color : "var(--text-secondary)",
                  fontFamily: "var(--font-body)",
                  transition: "all 0.15s",
                  marginBottom: 24,
                }}
              >
                {cat.label}
                <span style={{
                  marginLeft: 7,
                  fontSize: 11,
                  padding: "1px 6px",
                  borderRadius: 99,
                  background: isActive
                    ? `color-mix(in srgb, ${cat.color} 20%, transparent)`
                    : "var(--bg-card)",
                  color: isActive ? cat.color : "var(--text-tertiary)",
                }}>
                  {cat.id === "all" ? projects.length : projects.filter(p => p.metier === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Grille */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>

        {/* Compteur */}
        <p style={{ fontSize: 13, color: "var(--text-tertiary)", marginBottom: 24 }}>
          {filtered.length} projet{filtered.length > 1 ? "s" : ""}
          {active !== "all" && (
            <span style={{ color: activeCat?.color, fontWeight: 500 }}> · {active}</span>
          )}
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 14,
        }}>
          {filtered.map(p => (
          <a  
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: "22px 24px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                borderTop: `2px solid color-mix(in srgb, ${p.color} 50%, transparent)`,
                transition: "border-color 0.15s, transform 0.15s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = p.color;
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateY(0)";
              }}>

                {/* Top row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
                  <div>
                    <span style={{
                      fontSize: 10,
                      padding: "2px 8px",
                      borderRadius: 99,
                      background: `color-mix(in srgb, ${p.color} 12%, transparent)`,
                      color: p.color,
                      fontWeight: 600,
                      display: "inline-block",
                      marginBottom: 8,
                    }}>{p.metier}</span>
                    <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>{p.title}</h2>
                    <p style={{ fontSize: 12, color: p.color, fontWeight: 500 }}>{p.subtitle}</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "var(--text-tertiary)", flexShrink: 0, marginTop: 2 }}>
                    <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>

                {/* Desc */}
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0, flex: 1 }}>{p.desc}</p>

                {/* Tags + year */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {p.tags.slice(0, 3).map(t => (
                      <span key={t} style={{
                        fontSize: 10,
                        padding: "2px 7px",
                        borderRadius: 99,
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border)",
                        color: "var(--text-tertiary)",
                      }}>{t}</span>
                    ))}
                    {p.tags.length > 3 && (
                      <span style={{ fontSize: 10, color: "var(--text-tertiary)", padding: "2px 4px" }}>+{p.tags.length - 3}</span>
                    )}
                  </div>
                  <span style={{ fontSize: 11, color: "var(--text-tertiary)", flexShrink: 0 }}>{p.year}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
