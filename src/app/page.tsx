"use client";
import Link from "next/link";
import { useState } from "react";

// SVG illustrations pour chaque métier
const illustrations = {
  "data-gouvernance": (color: string) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect x="8" y="20" width="20" height="28" rx="3" stroke={color} strokeWidth="1.5" fill={`${color}12`}/>
      <rect x="36" y="12" width="20" height="36" rx="3" stroke={color} strokeWidth="1.5" fill={`${color}12`}/>
      <line x1="28" y1="32" x2="36" y2="28" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="18" cy="18" r="4" stroke={color} strokeWidth="1.5" fill={`${color}20`}/>
      <circle cx="46" cy="10" r="4" stroke={color} strokeWidth="1.5" fill={`${color}20`}/>
      <path d="M14 52 L18 48 L22 50 L26 46" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="8" cy="44" r="2" fill={color} opacity="0.4"/>
      <circle cx="56" cy="44" r="2" fill={color} opacity="0.4"/>
      <line x1="10" y1="44" x2="18" y2="44" stroke={color} strokeWidth="1" opacity="0.3"/>
      <line x1="38" y1="44" x2="54" y2="44" stroke={color} strokeWidth="1" opacity="0.3"/>
    </svg>
  ),
  "data-consulting": (color: string) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect x="10" y="14" width="44" height="30" rx="4" stroke={color} strokeWidth="1.5" fill={`${color}08`}/>
      <line x1="10" y1="22" x2="54" y2="22" stroke={color} strokeWidth="1" opacity="0.4"/>
      <circle cx="16" cy="18" r="2" fill={color} opacity="0.5"/>
      <circle cx="22" cy="18" r="2" fill={color} opacity="0.3"/>
      <circle cx="28" cy="18" r="2" fill={color} opacity="0.2"/>
      <path d="M18 34 L24 28 L30 32 L40 24" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="40" cy="24" r="2.5" fill={color} opacity="0.7"/>
      <rect x="20" y="44" width="24" height="3" rx="1.5" fill={color} opacity="0.3"/>
      <rect x="28" y="47" width="8" height="5" rx="1" fill={color} opacity="0.2"/>
    </svg>
  ),
  "data-engineering": (color: string) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <circle cx="12" cy="32" r="6" stroke={color} strokeWidth="1.5" fill={`${color}15`}/>
      <circle cx="32" cy="16" r="6" stroke={color} strokeWidth="1.5" fill={`${color}15`}/>
      <circle cx="52" cy="32" r="6" stroke={color} strokeWidth="1.5" fill={`${color}15`}/>
      <circle cx="32" cy="48" r="6" stroke={color} strokeWidth="1.5" fill={`${color}15`}/>
      <line x1="18" y1="29" x2="26" y2="21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="38" y1="21" x2="46" y2="29" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="46" y1="35" x2="38" y2="43" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="26" y1="43" x2="18" y2="35" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="32" cy="32" r="4" fill={color} opacity="0.3"/>
      <circle cx="12" cy="32" r="2" fill={color} opacity="0.6"/>
      <circle cx="52" cy="32" r="2" fill={color} opacity="0.6"/>
    </svg>
  ),
  "data-analyst": (color: string) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect x="8" y="40" width="8" height="14" rx="2" fill={color} opacity="0.7"/>
      <rect x="20" y="30" width="8" height="24" rx="2" fill={color} opacity="0.5"/>
      <rect x="32" y="20" width="8" height="34" rx="2" fill={color} opacity="0.4"/>
      <rect x="44" y="26" width="8" height="28" rx="2" fill={color} opacity="0.3"/>
      <path d="M10 28 L24 20 L36 14 L48 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="10" cy="28" r="2.5" fill={color}/>
      <circle cx="24" cy="20" r="2.5" fill={color}/>
      <circle cx="36" cy="14" r="2.5" fill={color}/>
      <circle cx="48" cy="18" r="2.5" fill={color}/>
    </svg>
  ),
  "ia": (color: string) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="10" stroke={color} strokeWidth="1.5" fill={`${color}10`}/>
      <circle cx="32" cy="32" r="3" fill={color} opacity="0.8"/>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 32 + 12 * Math.cos(rad);
        const y1 = 32 + 12 * Math.sin(rad);
        const x2 = 32 + 22 * Math.cos(rad);
        const y2 = 32 + 22 * Math.sin(rad);
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity={0.3 + i * 0.08}/>
            <circle cx={x2} cy={y2} r="2.5" fill={color} opacity={0.2 + i * 0.05} stroke={color} strokeWidth="1"/>
          </g>
        );
      })}
      <circle cx="32" cy="8" r="3" stroke={color} strokeWidth="1" fill={`${color}20`}/>
      <circle cx="56" cy="32" r="3" stroke={color} strokeWidth="1" fill={`${color}20`}/>
      <circle cx="32" cy="56" r="3" stroke={color} strokeWidth="1" fill={`${color}20`}/>
      <circle cx="8" cy="32" r="3" stroke={color} strokeWidth="1" fill={`${color}20`}/>
    </svg>
  ),
};

const metiers = [
  {
    id: "data-gouvernance",
    num: "01",
    title: "Data Governance",
    tagline: "Structurer, fiabiliser, piloter.",
    color: "var(--accent)",
    colorHex: "#4ade80",
    resume: "Conception et déploiement de cadres de gouvernance des données : rôles (Data Owner, Data Steward, CDO), politiques de qualité, référentiels, data lineage et feuilles de route. Diagnostic de maturité, conformité réglementaire (RGPD, BCBS239, Solvency II, EU AI Act) et pilotage de la donnée comme actif stratégique.",
    valeurBusiness: "Réduction des risques réglementaires · Fiabilité des reportings · Décisions fondées sur des données de confiance",
    skills: ["DAMA-DMBOK", "Data Quality (KPI/SLA)", "Data Lineage", "Data Catalog", "RACI et rôles data", "Diagnostic maturité", "Feuille de route data", "Master Data Management"],
    reglementaire: ["RGPD / CNIL", "BCBS239", "Solvency II", "EU AI Act"],
    projets: [
      { title: "Audit et Gouvernance BCBS239", desc: "Diagnostic complet, data lineage, rôles Data Owner/Steward, cadre de contrôle.", href: "https://bcbs239-data-governance.vercel.app/", tag: "Live" },
      { title: "Programme Gouvernance Données Critiques", desc: "Cadre de gouvernance fédéré, RACI, Data Quality KPI, gestion des incidents.", href: "https://www.canva.com/design/DAHBNgAQtnw/Ru9E56mpd2qyDSzXKGhMIw/view", tag: "Livrable" },
      { title: "5 modules d'expertise sur ce site", desc: "RGPD, EU AI Act, Solvency II, Maturité Data, Data Mesh ,  cas réels documentés.", href: "/rgpd", tag: "Portfolio", internal: true },
    ],
  },
  {
    id: "data-consulting",
    num: "02",
    title: "Data Consulting",
    tagline: "Piloter la transformation data d'une organisation de bout en bout.",
    color: "var(--accent-purple)",
    colorHex: "#a78bfa",
    resume: "Pilotage de programmes de transformation data en contexte réglementé : diagnostic de maturité, animation d'ateliers métiers et IT, production de livrables opérationnels (frameworks, politiques, roadmaps), alignement des parties prenantes et reporting Comex. Intervention de bout en bout comme consultant embarqué.",
    valeurBusiness: "Transformation data pilotée et mesurée · Parties prenantes alignées · Livrables prêts pour l'audit réglementaire",
    skills: ["Pilotage de programme data", "Animation ateliers métiers / IT / conformité", "Diagnostic DAMA-DMBOK", "Data Catalog et Glossaire", "Data Quality BCBS239", "Data Lineage", "Reporting Comex", "Gestion de projet Agile"],
    reglementaire: ["BCBS239", "EU AI Act", "DAMA-DMBOK", "Inspection BCE"],
    projets: [
      { title: "FrontierBank ,  Mission Consulting Data", desc: "Simulation complète d'une mission de conseil sur 12 mois : diagnostic DAMA-DMBOK, gouvernance, data catalog, data quality, data lineage, IA governance et rapport Comex.", href: "https://frontierbank-data.vercel.app/", tag: "Live" },
    ],
  },
  {
    id: "data-engineering",
    num: "03",
    title: "Data Engineering",
    tagline: "Concevoir les pipelines qui font circuler la donnée.",
    color: "var(--accent-amber)",
    colorHex: "#fbbf24",
    resume: "Conception et développement de pipelines de données : ingestion, transformation, stockage et exposition. Intégration de sources multi-formats (API, SQL, fichiers), structuration des flux pour garantir qualité, cohérence et exploitabilité. Architecture orientée fiabilité et performance.",
    valeurBusiness: "Données disponibles et fiables en temps voulu · Automatisation des flux · Infrastructure scalable",
    skills: ["Python", "SQL", "ETL / Pipelines", "APIs et ingestion", "Docker", "FastAPI", "Snowflake", "DBT", "Architecture Data"],
    reglementaire: [],
    projets: [
      { title: "Data Arcade — Mini-jeux data & gouvernance", desc: "Site de mini-jeux rétro (NES/8-bit) : Data Steward, SQL Fighter, Pipe Plumber, Data Odyssey. Vitrine interactive de l'expertise data sous forme de jeux jouables.", href: "https://datarcade.vercel.app/", tag: "Live" },
      { title: "AI for Kuala Lumpur", desc: "Plateforme data multi-sources (API, open data), pipeline automatisé, cas d'usage IA urbains pour la prise de décision stratégique.", href: "https://ai-for-kuala-lumpur.netlify.app/", tag: "Live" },
      { title: "PokéWatch — Market Surveillance", desc: "Pipeline d'ingestion Pokémon TCG, stockage Supabase/Postgres, règles de détection PL/pgSQL, dashboard Next.js et rapports narratifs Groq LLM.", href: "https://pokewatch-three.vercel.app/", tag: "En cours" },
      { title: "CryptoBot — Pipeline temps réel", desc: "Pipeline complet API vers ingestion vers stockage SQL vers visualisation. Données crypto en quasi temps réel, indicateurs de performance.", href: "https://www.canva.com/design/DAG1I0Dd_a4/p3QvJvqgTTjs9Dek5_j0Lw/edit", tag: "Livrable" },
    ],
  },
  {
    id: "data-analyst",
    num: "04",
    title: "Data Analyst/Business Analyst",
    tagline: "Transformer la donnée brute en insight actionnable et en aide à la décision.",
    color: "var(--accent-coral)",
    colorHex: "#fb923c",
    resume: "Analyse exploratoire, identification d'insights et d'anomalies, conception de dashboards interactifs et mise en place de KPI de pilotage métier. Restitution claire et pédagogique à destination des décideurs : du chiffre à la recommandation business.",
    valeurBusiness: "Décisions éclairées · Anomalies détectées rapidement · Pilotage métier par les données",
    skills: ["Power BI", "SQL", "Python (pandas, matplotlib)", "scikit-learn (ML)", "Analyse exploratoire", "KPI et dashboarding", "Visualisation de données", "Restitution stratégique"],
    reglementaire: [],
    projets: [
      { title: "INSPECTION DATA — Audit banque fictive NOVEO", desc: "Simulation d'inspection data sur une banque fictive : moteur de contrôles SQL, scoring de risque, architecture médaillon. Déterministe, auditable, F1=1.00.", href: "https://inspection-data.vercel.app/", tag: "Live" },
      { title: "Mission BA SI Crédit — CASDEN/BPCE", desc: "Simulation complète d'une mission Business Analyst sur un SI Crédit bancaire : recueil des besoins, spécifications fonctionnelles, cas d'usage, maquettes.", href: "https://mission-ba-credit.vercel.app/", tag: "Live" },
      { title: "PALIER — Revenue Management SNCF", desc: "Outil d'aide à la décision tarifaire sur 36 000 lignes de prix TGV réels. Exploration grille, analyse INOUI vs OUIGO, simulation élasticité-prix.", href: "https://palier-sncf.vercel.app/", tag: "Live" },
      { title: "ESCALE — Supervision opérations aériennes", desc: "Console de suivi des vols CDG/Orly avec scoring de risque de retard déterministe, registres RGPD et AI Act intégrés.", href: "https://escale-ops.vercel.app/", tag: "Live" },
      { title: "Finance Audit Dashboard — CAC40", desc: "Détection automatique d'anomalies financières sur 10 entreprises du CAC40 via ML (Isolation Forest). Pipeline Python, API FastAPI, dashboard Plotly interactif.", href: "https://finance-audit-dashboard.vercel.app/", tag: "Live" },
      { title: "Customer Experience Intelligence", desc: "Analyse de données clients, identification de tendances et anomalies, dashboards Power BI interactifs et KPI de pilotage de la performance.", href: "https://github.com/heykelh/customer-experience-intelligence", tag: "GitHub" },
    ],
  },
  {
    id: "ia",
    num: "05",
    title: "IA & Agents",
    tagline: "Concevoir des systèmes IA fiables, gouvernés et traçables.",
    color: "var(--accent-rose)",
    colorHex: "#f472b6",
    resume: "Conception et déploiement de systèmes IA agentiques : pipelines RAG, agents LangGraph, orchestration multi-LLM (Groq, Gemini), évaluation des sorties avec juge LLM, observabilité Langfuse et architecture déterministe-first. Gouvernance IA intégrée dès la conception.",
    valeurBusiness: "IA fiable et auditable · Refus motivés et tracés · Conformité EU AI Act by design",
    skills: ["LangGraph", "Groq (Llama 3.3 70B)", "Gemini 2.0 Flash", "RAG", "Agents IA", "LLMOps", "Langfuse (observabilité)", "Évaluation LLM-juge", "Next.js", "DuckDB-WASM"],
    reglementaire: ["EU AI Act", "AI Risk Register", "Motivated Refusals"],
    projets: [
      { title: "REGARD ,  Copilote IA de conformité", desc: "Agent IA de conformité branchée sur la donnée régulée réelle. Architecture déterministe-first, 28/28 cas de test validés, refus motivés, journal d'audit complet, observabilité Langfuse.", href: "https://regard-wine.vercel.app/", tag: "Live" },
      { title: "AI for Kuala Lumpur", desc: "Plateforme data avec 3 cas d'usage IA implémentés : analyse prédictive, détection de tendances, génération d'insights automatisée sur données urbaines réelles.", href: "https://ai-for-kuala-lumpur.netlify.app/", tag: "Live" },
    ],
  },
];

function ProjetItem({ p, color }: { p: { title: string; desc: string; href: string; tag: string; internal?: boolean }; color: string }) {
  return (
    <div style={{
      background: "var(--bg-base)", border: "1px solid var(--border)", borderRadius: 10,
      padding: "14px 16px", display: "flex", gap: 14, alignItems: "flex-start",
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{p.title}</span>
          <span style={{ fontSize: 10, padding: "2px 7px", borderRadius: 4, fontWeight: 600, background: `color-mix(in srgb, ${color} 15%, transparent)`, color }}>{p.tag}</span>
        </div>
        <p style={{ fontSize: 12, color: "var(--text-secondary)", margin: 0, lineHeight: 1.55 }}>{p.desc}</p>
      </div>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "var(--text-tertiary)", flexShrink: 0, marginTop: 2 }}>
        <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function MetierCard({ m }: { m: typeof metiers[0] }) {
  const [open, setOpen] = useState(false);
  const Illus = illustrations[m.id as keyof typeof illustrations];

  return (
    <div id={m.id} style={{
      background: "var(--bg-card)", border: "1px solid var(--border)",
      borderRadius: 16, overflow: "hidden", scrollMarginTop: 100,
      transition: "border-color 0.2s",
    }}>
      <div style={{ padding: "24px 28px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 16 }}>
          {/* Illustration */}
          <div style={{
            width: 80, height: 80, borderRadius: 14, flexShrink: 0,
            background: `color-mix(in srgb, ${m.color} 6%, var(--bg-surface))`,
            border: `1px solid color-mix(in srgb, ${m.color} 15%, transparent)`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {illustrations[m.id as keyof typeof illustrations]?.(m.colorHex)}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: m.color, fontFamily: "var(--font-display)" }}>{m.num}</span>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>{m.title}</h2>
              </div>
              <button onClick={() => setOpen(!open)} style={{
                background: `color-mix(in srgb, ${m.color} 10%, transparent)`,
                border: `1px solid color-mix(in srgb, ${m.color} 25%, transparent)`,
                color: m.color, borderRadius: 8, padding: "5px 12px", fontSize: 12,
                fontWeight: 500, cursor: "pointer", flexShrink: 0, fontFamily: "var(--font-body)",
                display: "flex", alignItems: "center", gap: 5,
              }}>
                {open ? "Réduire" : "Voir le détail"}
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <p style={{ fontSize: 13, color: m.color, fontWeight: 500, fontStyle: "italic", marginBottom: 10 }}>{m.tagline}</p>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65, margin: 0 }}>{m.resume}</p>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: m.reglementaire.length > 0 ? 8 : 0, paddingLeft: 100 }}>
          {m.skills.map(s => (
            <span key={s} style={{
              fontSize: 11, padding: "2px 9px", borderRadius: 99, fontWeight: 500,
              background: `color-mix(in srgb, ${m.color} 8%, transparent)`,
              color: m.color, border: `1px solid color-mix(in srgb, ${m.color} 20%, transparent)`,
            }}>{s}</span>
          ))}
        </div>

        {m.reglementaire.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, paddingLeft: 100 }}>
            {m.reglementaire.map(r => (
              <span key={r} style={{ fontSize: 11, padding: "2px 9px", borderRadius: 99, background: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-tertiary)" }}>{r}</span>
            ))}
          </div>
        )}
      </div>

      {open && (
        <div style={{ borderTop: "1px solid var(--border)", padding: "20px 28px", background: "var(--bg-surface)", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: `color-mix(in srgb, ${m.color} 5%, transparent)`, borderRadius: 8, padding: "12px 16px", borderLeft: `2px solid ${m.color}` }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: m.color, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Valeur business</p>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>{m.valeurBusiness}</p>
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Projets associés</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {m.projets.map(p =>
                p.internal
                  ? <Link key={p.title} href={p.href} style={{ textDecoration: "none" }}><ProjetItem p={p} color={m.color} /></Link>
                  : <a key={p.title} href={p.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><ProjetItem p={p} color={m.color} /></a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={{ paddingTop: 80 }}>

      {/* Hero */}
      <section style={{ padding: "80px 24px 72px", position: "relative", overflow: "hidden", borderBottom: "1px solid var(--border)" }}>
        <div style={{ position: "absolute", top: "20%", left: "5%", width: 480, height: 480, background: "radial-gradient(circle, rgba(74,222,128,0.04) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "0%", right: "8%", width: 360, height: 360, background: "radial-gradient(circle, rgba(244,114,182,0.04) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 99, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", marginBottom: 28 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: "var(--accent)", letterSpacing: "0.04em" }}>Data Engineering · Data Consulting</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="hero-grid">
            <div>
              <h1 style={{ fontSize: "clamp(38px, 5vw, 66px)", fontWeight: 800, lineHeight: 1.04, marginBottom: 18 }}>
                Heykel<br /><span style={{ color: "var(--accent)" }}>Hachiche</span>
              </h1>
              <p style={{ fontSize: 17, color: "var(--accent-purple)", fontWeight: 500, marginBottom: 18 }}>
                Data Engineer & Data Consultant
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 32, maxWidth: 500 }}>
                Double expertise technique et métier : pipelines data, qualité des données, gouvernance réglementaire, IA agentique et compliance. Ce site regroupe l'ensemble de mes projets et démontre concrètement ce que je sais faire.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="#expertises" style={{ padding: "11px 22px", borderRadius: 9, fontSize: 14, fontWeight: 500, background: "var(--accent)", color: "#0e0f0e", textDecoration: "none" }}>Explorer mes expertises</a>
                <Link href="/projets" style={{ padding: "11px 22px", borderRadius: 9, fontSize: 14, fontWeight: 500, background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)", textDecoration: "none" }}>Tous mes projets</Link>
              </div>
            </div>

            {/* 5 blocs cliquables */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {metiers.slice(0, 4).map(m => (
                <a key={m.id} href={`#${m.id}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "var(--bg-card)", border: "1px solid var(--border)",
                    borderRadius: 12, padding: "16px 18px", cursor: "pointer", height: "100%",
                    borderTop: `2px solid color-mix(in srgb, ${m.color} 40%, transparent)`,
                    transition: "border-color 0.15s, background 0.15s",
                  }}>
                    <div style={{ marginBottom: 10 }}>
                      {illustrations[m.id as keyof typeof illustrations] &&
                        illustrations[m.id as keyof typeof illustrations](m.colorHex)}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>{m.title}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 8 }}>
                      {m.skills.slice(0, 3).map(s => (
                        <span key={s} style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{s}</span>
                      ))}
                    </div>
                    <div style={{ fontSize: 11, color: m.color, display: "flex", alignItems: "center", gap: 3 }}>
                      Voir le détail
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 8l6-6M8 2H3M8 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
              {/* 5e bloc IA ,  pleine largeur */}
              <a href="#ia" style={{ textDecoration: "none", gridColumn: "1 / -1" }}>
                <div style={{
                  background: "var(--bg-card)", border: "1px solid var(--border)",
                  borderRadius: 12, padding: "16px 20px", cursor: "pointer",
                  borderTop: "2px solid color-mix(in srgb, var(--accent-rose) 40%, transparent)",
                  display: "flex", alignItems: "center", gap: 20,
                  transition: "border-color 0.15s, background 0.15s",
                }}>
                  <div style={{ flexShrink: 0 }}>
                    {illustrations["ia"]("#f472b6")}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>IA & Agents</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {metiers[4].skills.slice(0, 5).map(s => (
                        <span key={s} style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ fontSize: 11, color: "var(--accent-rose)", display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }}>
                    Voir le détail
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 8l6-6M8 2H3M8 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section id="expertises" style={{ padding: "64px 24px", background: "var(--bg-surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 36 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Ce que je sais faire</p>
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 700, marginBottom: 10 }}>
              5 expertises, une seule conviction :<br />
              <span style={{ color: "var(--text-secondary)" }}>la donnée doit être un actif fiable.</span>
            </h2>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", maxWidth: 580, lineHeight: 1.65 }}>
              Cliquez sur chaque expertise pour voir les compétences, la valeur business apportée et les projets associés.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {metiers.map(m => <MetierCard key={m.id} m={m} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 18, padding: "48px 40px", position: "relative", overflow: "hidden", textAlign: "center" }}>
            <div style={{ position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)", width: 360, height: 360, background: "radial-gradient(circle, rgba(74,222,128,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, marginBottom: 10 }}>Un projet data qui vous ressemble ?</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 15, maxWidth: 460, margin: "0 auto 28px", lineHeight: 1.65 }}>
              Data Governance, pipeline, dashboard, conformité réglementaire, IA agentique : prenons le temps d'échanger.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ padding: "11px 26px", borderRadius: 9, fontSize: 14, fontWeight: 500, background: "var(--accent)", color: "#0e0f0e", textDecoration: "none" }}>Me contacter</Link>
              <Link href="/projets" style={{ padding: "11px 26px", borderRadius: 9, fontSize: 14, fontWeight: 500, background: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-primary)", textDecoration: "none" }}>Voir tous les projets</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`.hero-grid{grid-template-columns:1fr 1fr}@media(max-width:768px){.hero-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
