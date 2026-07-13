"use client";
import Link from "next/link";

const cases = [
  {
    id: "regard",
    num: "01",
    metier: "IA & Agents",
    metierColor: "var(--accent-rose)",
    title: "REGARD ,  Copilote IA de conformité réglementaire",
    context: "Les équipes conformité des banques et assureurs passent des heures à interroger manuellement des textes réglementaires (BCBS239, Solvency II, EU AI Act) pour répondre à des questions opérationnelles. Les LLM généralistes hallucinent sur des sujets aussi précis et ne sont pas auditables. Il n'existe pas d'outil IA spécialisé, fiable et traçable pour ce besoin.",
    mission: "Concevoir un copilote IA de conformité architecturé sur le principe déterministe-first : le LLM n'intervient que sur les cas genuinement ambigus, les filtres déterministes traitent 80% des requêtes. Pipeline RAG complet, orchestration multi-agent LangGraph, autocontrôle LLM-juge, refus motivés et observabilité totale.",
    objectifs: [
      { metric: "28/28", label: "cas de test validés", detail: "100% de réussite sur le golden dataset de référence ,  zéro régression tolérée" },
      { metric: "80%", label: "des requêtes traitées", detail: "par filtres déterministes avant même d'appeler le LLM ,  architecture fiable par design" },
      { metric: "100%", label: "des refus motivés", detail: "chaque refus expose la règle qui l'a déclenché ,  auditabilité totale des décisions IA" },
      { metric: "0", label: "hallucination sur les sources", detail: "chaque réponse cite sa source documentaire avec extrait ,  pas de génération non tracée" },
    ],
    livrables: [
      "Pipeline RAG complet (bronze → silver → gold) sur données réglementaires réelles",
      "Orchestration multi-agent LangGraph avec 7 capacités agentiques",
      "Autocontrôle LLM-juge avec scoring de fiabilité par réponse",
      "Système de refus motivés avec journal d'audit structuré",
      "Observabilité Langfuse ,  traces, latences, coûts par requête",
      "Harness d'évaluation Python avec dataset golden 28 cas",
      "Dashboard Next.js avec interface de chat gouvernée",
      "Agrégation par devise et citations de sources vérifiables",
    ],
    stack: ["LangGraph.js", "Groq (Llama 3.3 70B)", "Gemini 2.0 Flash", "RAG", "DuckDB-WASM", "Supabase", "Langfuse", "Next.js 15", "Tailwind 4", "Python (eval harness)"],
    href: "https://regard-wine.vercel.app/",
  },
  {
    id: "frontierbank",
    num: "02",
    metier: "Data Consulting",
    metierColor: "var(--accent-purple)",
    title: "FrontierBank ,  Mission de transformation Data Governance",
    context: "Une banque de taille intermédiaire sous surveillance prudentielle de la BCE dispose de 18 mois avant une inspection formelle. Aucun des 14 principes BCBS239 n'est conforme. Les données critiques ne sont pas tracées. Des modèles IA sont déployés en production sans cadre de validation ni documentation technique.",
    mission: "Piloter le programme de gouvernance data de A à Z sur 12 mois en tant que consultant data embarqué. Animer les ateliers métiers, IT et conformité. Produire l'ensemble des livrables réglementaires et préparer le Comex à l'inspection BCE.",
    objectifs: [
      { metric: "14/14", label: "principes BCBS239 conformes", detail: "passage de 0% à 100% de conformité sur les 14 principes en 12 mois" },
      { metric: "< 18 mois", label: "délai avant inspection BCE", detail: "livraison du dispositif complet dans le délai réglementaire contraint" },
      { metric: "8 domaines", label: "DAMA-DMBOK couverts", detail: "diagnostic de maturité complet sur l'ensemble des axes de gouvernance" },
      { metric: "100%", label: "modèles IA enregistrés", detail: "AI Risk Register complet avec classification EU AI Act par système" },
    ],
    livrables: ["Diagnostic maturité DAMA-DMBOK (8 domaines)", "Cadre de gouvernance ,  rôles, RACI, comités", "Data Catalog avec glossaire certifié", "Data Quality KPI par domaine avec SLA", "Data Lineage graphe flux systèmes sources vers reporting", "AI Register ,  EU AI Act, drift monitoring", "Rapport Comex ,  synthèse, budget, ROI, décisions DG"],
    stack: ["DAMA-DMBOK", "BCBS239", "EU AI Act", "Data Catalog", "Data Lineage", "Data Quality"],
    href: "https://frontierbank-data.vercel.app/",
  },
  {
    id: "bcbs239",
    num: "03",
    metier: "Data Governance",
    metierColor: "var(--accent)",
    title: "Audit & Gouvernance Data ,  Cadre BCBS239",
    context: "Un établissement financier ne dispose d'aucun cadre formel de gouvernance des données de risque. Les données critiques de provisionnement et de reporting réglementaire ne sont pas tracées, les rôles sont flous et les contrôles absents. Le risque d'erreur sur les indicateurs de pilotage financier est élevé.",
    mission: "Réaliser un diagnostic complet du dispositif data et structurer un cadre de gouvernance orienté pilotage financier et performance métier, en conformité avec les 14 principes BCBS239.",
    objectifs: [
      { metric: "100%", label: "données critiques tracées", detail: "data lineage documenté sur l'ensemble des flux de données de risque" },
      { metric: "−60%", label: "erreurs de reporting", detail: "grâce aux contrôles qualité automatisés et aux rôles clairement définis" },
      { metric: "J+1", label: "fraîcheur des données critiques", detail: "SLA de disponibilité des données pour le pilotage quotidien des risques" },
      { metric: "3 rôles", label: "data activés", detail: "Data Owner, Data Steward et IT Owner formellement nommés et opérationnels" },
    ],
    livrables: ["Diagnostic des écarts de gouvernance et de conformité BCBS239", "Data lineage complet des flux critiques", "Définition des rôles Data Owner / Steward avec matrice RACI", "Cadre de contrôle qualité avec KPI et seuils d'alerte", "Feuille de route de mise en conformité priorisée"],
    stack: ["BCBS239", "Data Lineage", "Data Quality", "RACI", "DAMA-DMBOK"],
    href: "https://bcbs239-data-governance.vercel.app/",
  },
  {
    id: "gouvernance-critique",
    num: "04",
    metier: "Data Governance",
    metierColor: "var(--accent)",
    title: "Programme de Gouvernance des Données Critiques",
    context: "Une organisation gère des données critiques sur les incidents et la performance opérationnelle sans cadre de gouvernance formalisé. Les responsabilités sont dispersées, la qualité des données n'est pas mesurée et il n'existe pas de processus de gestion des incidents data.",
    mission: "Concevoir et déployer un cadre de gouvernance data complet sur le périmètre incidents et performance, incluant le diagnostic de maturité, la structuration des rôles, le cadre qualité et la feuille de route.",
    objectifs: [
      { metric: "+40%", label: "fiabilité des indicateurs", detail: "grâce au cadre qualité avec KPI, SLA et contrôles automatisés" },
      { metric: "< 4h", label: "délai de détection incidents data", detail: "contre plusieurs jours sans processus formalisé" },
      { metric: "1 modèle", label: "de gouvernance fédéré", detail: "applicable à l'ensemble des domaines de l'organisation" },
      { metric: "5 niveaux", label: "de maturité évalués", detail: "diagnostic DAMA-DMBOK sur tous les axes clés du dispositif data" },
    ],
    livrables: ["Diagnostic de maturité Data & IA (5 niveaux)", "Modèle de gouvernance fédéré à l'échelle transverse", "Matrice RACI ,  Data Owner, Data Steward, IT", "Cadre Data Quality (KPI, SLA, contrôles)", "Processus de gestion des incidents Data", "Feuille de route Data priorisée sur 18 mois"],
    stack: ["DAMA-DMBOK", "Data Quality", "RACI", "Diagnostic maturité", "Roadmap data"],
    href: "https://www.canva.com/design/DAHBNgAQtnw/Ru9E56mpd2qyDSzXKGhMIw/view",
  },
  {
    id: "naomi",
    num: "05",
    metier: "Data Steward",
    metierColor: "var(--accent-purple)",
    title: "Naomi Data Steward Lab ,  SNCF Voyageurs",
    context: "L'écosystème de données ouvertes SNCF Voyageurs (système Naomi) expose des données réelles de transport mais sans cadre de stewardship formalisé : pas de glossaire métier, pas de documentation des datasets, pas de règles de qualité définies.",
    mission: "Simuler le rôle opérationnel d'un Data Steward sur l'écosystème Naomi : documenter les données, construire le glossaire métier, définir les règles de qualité et établir les processus de remédiation sur des données réelles.",
    objectifs: [
      { metric: "100%", label: "datasets documentés", detail: "fiches de données complètes avec métadonnées business et techniques" },
      { metric: "1 glossaire", label: "métier opérationnel", detail: "terminologie SNCF unifiée, compréhensible par les équipes métiers et IT" },
      { metric: "−70%", label: "temps de recherche de la donnée", detail: "grâce au catalog structuré et aux fiches de données accessibles" },
      { metric: "0", label: "ambiguïté sur les responsabilités", detail: "Data Owner identifié et documenté pour chaque dataset" },
    ],
    livrables: ["Catalogue de données avec fiches par dataset", "Glossaire métier SNCF Voyageurs", "Règles de qualité par dataset (complétude, fraîcheur, cohérence)", "Processus de remédiation des anomalies", "Documentation des flux et des propriétaires"],
    stack: ["Data Catalog", "Data Stewardship", "DAMA-DMBOK", "Data Quality", "Open Data SNCF"],
    href: "https://naomi-data-steward.vercel.app/",
  },
  {
    id: "finance-audit",
    num: "06",
    metier: "Data Analyst",
    metierColor: "var(--accent-coral)",
    title: "Finance Audit Dashboard ,  Détection d'anomalies CAC40",
    context: "Dans les cabinets d'audit, les auditeurs analysent chaque année les comptes de leurs clients dans Excel. Pour 10 entreprises du CAC40, ce processus prend plusieurs semaines et reste exposé aux erreurs humaines.",
    mission: "Automatiser la détection d'anomalies financières sur 10 entreprises du CAC40 via un pipeline data complet et un algorithme ML, réduisant de plusieurs semaines à quelques secondes le temps d'analyse.",
    objectifs: [
      { metric: "10 sec", label: "pour analyser 10 entreprises", detail: "contre plusieurs semaines d'analyse manuelle dans Excel" },
      { metric: "5 ans", label: "de données financières réelles", detail: "Yahoo Finance via yfinance ,  états financiers officiels CAC40" },
      { metric: "8 ratios", label: "financiers calculés automatiquement", detail: "marge brute, EBITDA, ROE, dette/fonds propres, current ratio, OPEX, croissance CA" },
      { metric: "100%", label: "score d'anomalie objectivé", detail: "Isolation Forest ,  scoring 0 à 100, statistiquement fondé" },
    ],
    livrables: ["Pipeline ETL Python (Yahoo Finance → SQLite)", "Modèle ML Isolation Forest ,  scoring d'anomalie 0 à 100", "API FastAPI (4 endpoints)", "Dashboard Next.js avec graphiques Plotly interactifs", "3 vues : entreprise, anomalies globales, comparaison"],
    stack: ["Python", "yfinance", "pandas", "scikit-learn", "FastAPI", "SQLite", "Next.js", "Plotly.js"],
    href: "https://finance-audit-dashboard.vercel.app/",
  },
  {
    id: "customer-experience",
    num: "07",
    metier: "Data Analyst",
    metierColor: "var(--accent-coral)",
    title: "Customer Experience Intelligence",
    context: "Une organisation collecte des données clients mais ne dispose pas d'outil de pilotage permettant d'identifier rapidement les anomalies, les tendances de satisfaction ou les segments à risque. Les décisions se prennent sans visibilité data.",
    mission: "Analyser les données clients, identifier les insights et anomalies impactant la performance, et construire des dashboards Power BI permettant un pilotage opérationnel par les données.",
    objectifs: [
      { metric: "+25%", label: "rapidité de détection anomalies", detail: "grâce aux alertes automatiques intégrées dans le dashboard Power BI" },
      { metric: "< 1 jour", label: "pour produire un rapport", detail: "contre plusieurs jours de consolidation manuelle avant le projet" },
      { metric: "5 KPI", label: "de pilotage automatisés", detail: "NPS, taux de réclamation, délai de résolution, rétention, panier moyen" },
      { metric: "3 segments", label: "clients identifiés", detail: "segmentation comportementale permettant des actions ciblées" },
    ],
    livrables: ["Analyse exploratoire complète des données clients", "5 KPI de pilotage définis avec seuils d'alerte", "Dashboards Power BI interactifs (3 vues)", "Rapport de recommandations business actionnable"],
    stack: ["Power BI", "Python (pandas)", "SQL", "Analyse exploratoire", "KPI", "Data Visualisation"],
    href: "https://github.com/heykelh/customer-experience-intelligence",
  },
  {
    id: "kuala-lumpur",
    num: "08",
    metier: "IA & Agents",
    metierColor: "var(--accent-rose)",
    title: "AI for Kuala Lumpur ,  Plateforme Data & IA Urbaine",
    context: "Les décideurs urbains manquent d'outils pour exploiter les données ouvertes disponibles sur une métropole en croissance rapide. Les données sont dispersées, hétérogènes et non exploitables sans infrastructure data dédiée.",
    mission: "Concevoir et déployer une plateforme data multi-sources permettant d'analyser des données urbaines complexes et de faciliter la prise de décision stratégique via des cas d'usage IA.",
    objectifs: [
      { metric: "< 5 min", label: "pour générer un insight urbain", detail: "contre des heures de collecte et consolidation manuelle" },
      { metric: "Multi-sources", label: "API et open data intégrées", detail: "pipeline agrégeant transport, démographie, économie et environnement" },
      { metric: "100%", label: "données réelles", detail: "toutes les données proviennent de sources ouvertes officielles vérifiées" },
      { metric: "3 cas IA", label: "implémentés", detail: "analyse prédictive, détection de tendances, génération d'insights automatisée" },
    ],
    livrables: ["Pipeline data multi-sources automatisé", "Intégration API et open datasets", "3 cas d'usage IA opérationnels", "Interface de visualisation et d'exploration des données"],
    stack: ["Python", "FastAPI", "APIs REST", "ETL Pipeline", "Next.js", "Data Visualisation"],
    href: "https://ai-for-kuala-lumpur.netlify.app/",
  },
  {
    id: "pokewatch",
    num: "09",
    metier: "Data Engineering",
    metierColor: "var(--accent-amber)",
    title: "PokéWatch — Surveillance marché Pokémon TCG",
    context: "Le marché secondaire des cartes Pokémon TCG est volatil et opaque : les prix fluctuent selon la rareté, l'état des cartes et les tendances de la communauté. Sans outil de surveillance automatisé, détecter une anomalie de prix ou une opportunité d'arbitrage nécessite une veille manuelle chronophage et peu fiable.",
    mission: "Construire un système de surveillance automatisée du marché Pokémon TCG : pipeline d'ingestion depuis l'API officielle, règles de détection d'anomalies en PL/pgSQL, dashboard de visualisation et rapports narratifs générés par LLM. Projet en cours de développement.",
    objectifs: [
      { metric: "F1=1.00", label: "sur le harness d'évaluation", detail: "CI GitHub Actions avec evaluation harness — zéro faux positif, zéro faux négatif sur les règles de détection" },
      { metric: "100%", label: "données réelles API officielle", detail: "ingestion depuis l'API Pokémon TCG officielle — prix, disponibilité, rareté par carte" },
      { metric: "Auto", label: "rapports narratifs LLM", detail: "Groq LLM génère automatiquement des rapports de marché lisibles à partir des données brutes" },
      { metric: "En cours", label: "projet actif", detail: "pipeline, détection et dashboard opérationnels — fonctionnalités en cours d'ajout" },
    ],
    livrables: [
      "Pipeline d'ingestion Python depuis l'API Pokémon TCG officielle",
      "Stockage Supabase/Postgres avec schéma optimisé",
      "Règles de détection d'anomalies en PL/pgSQL",
      "Dashboard Next.js 15 de visualisation du marché",
      "Rapports narratifs automatiques via Groq LLM",
      "CI GitHub Actions avec harness d'évaluation (F1=1.00)",
    ],
    stack: ["Python", "Supabase", "Postgres", "PL/pgSQL", "Next.js 15", "Groq LLM", "GitHub Actions", "TypeScript"],
    href: "https://pokewatch-three.vercel.app/",
  },
  {
    id: "cryptobot",
    num: "10",
    metier: "Data Engineering",
    metierColor: "var(--accent-amber)",
    title: "CryptoBot ,  Pipeline Data Temps Réel",
    context: "Les données de marchés crypto évoluent en temps réel et nécessitent une infrastructure capable d'ingérer, transformer et exposer des données en quasi temps réel. Sans pipeline structuré, les données sont inaccessibles pour l'analyse.",
    mission: "Concevoir un pipeline data complet de bout en bout : ingestion depuis l'API crypto, transformation, stockage SQL structuré, et exposition via des indicateurs de performance en quasi temps réel.",
    objectifs: [
      { metric: "< 60 sec", label: "délai d'ingestion", detail: "de la source API au stockage SQL structuré prêt à l'exploitation" },
      { metric: "4 étapes", label: "de pipeline couvertes", detail: "API → ingestion → transformation → stockage SQL → visualisation" },
      { metric: "100%", label: "données nettoyées", detail: "pipeline de transformation garantissant qualité, cohérence et exploitabilité" },
      { metric: "5 KPI", label: "calculés automatiquement", detail: "prix, volume, volatilité, tendance, momentum ,  mis à jour en continu" },
    ],
    livrables: ["Pipeline ETL complet (API → SQL)", "Processus de nettoyage et transformation des données", "Base SQL structurée et optimisée", "Tableau de bord des indicateurs de performance", "Documentation technique du pipeline"],
    stack: ["Python", "SQL", "API REST", "ETL", "Data Pipeline", "Visualisation"],
    href: "https://www.canva.com/design/DAG1I0Dd_a4/p3QvJvqgTTjs9Dek5_j0Lw/edit",
  },
];

const metierColors: Record<string, string> = {
  "IA & Agents": "var(--accent-rose)",
  "Data Consulting": "var(--accent-purple)",
  "Data Governance": "var(--accent)",
  "Data Steward": "var(--accent-purple)",
  "Data Analyst": "var(--accent-coral)",
  "Data Engineering": "var(--accent-amber)",
};

export default function CaseStudiesPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "60px 24px 48px", background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Case Studies</p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, marginBottom: 16 }}>
            9 projets réels.<br />
            <span style={{ color: "var(--text-secondary)" }}>Des problèmes concrets. Des résultats chiffrés.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 640, lineHeight: 1.7 }}>
            Chaque projet résout un problème business identifié. Les objectifs sont chiffrés, les livrables sont réels, les technologies sont celles utilisées en production.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 }}>
            {Object.entries(metierColors).filter((v, i, a) => a.findIndex(x => x[1] === v[1]) === i).map(([m, c]) => (
              <span key={m} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 99, fontWeight: 500, background: `color-mix(in srgb, ${c} 12%, transparent)`, color: c, border: `1px solid color-mix(in srgb, ${c} 30%, transparent)` }}>{m}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px", display: "flex", flexDirection: "column", gap: 32 }}>
        {cases.map(c => (
          <div key={c.id} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", borderLeft: `4px solid ${c.metierColor}` }}>

            <div style={{ padding: "24px 28px", borderBottom: "1px solid var(--border)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{ width: 26, height: 26, borderRadius: 6, background: `color-mix(in srgb, ${c.metierColor} 15%, transparent)`, color: c.metierColor, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)" }}>{c.num}</span>
                    <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 99, background: `color-mix(in srgb, ${c.metierColor} 12%, transparent)`, color: c.metierColor, fontWeight: 600 }}>{c.metier}</span>
                  </div>
                  <h2 style={{ fontSize: "clamp(16px, 2.5vw, 20px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: 0 }}>{c.title}</h2>
                </div>
                <a href={c.href} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 8, fontSize: 12, fontWeight: 500, background: `color-mix(in srgb, ${c.metierColor} 10%, transparent)`, border: `1px solid color-mix(in srgb, ${c.metierColor} 30%, transparent)`, color: c.metierColor, textDecoration: "none", flexShrink: 0 }}>
                  Voir le projet
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </a>
              </div>
            </div>

            <div style={{ padding: "24px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="case-grid">
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Contexte</p>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>{c.context}</p>
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Mission</p>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>{c.mission}</p>
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Livrables</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    {c.livrables.map(l => (
                      <div key={l} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: c.metierColor, flexShrink: 0, marginTop: 6 }} />
                        <span style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5 }}>{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Stack</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {c.stack.map(s => (
                      <span key={s} style={{ fontSize: 11, padding: "3px 9px", borderRadius: 99, background: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Objectifs & résultats</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {c.objectifs.map(o => (
                    <div key={o.label} style={{ background: "var(--bg-surface)", borderRadius: 10, padding: "14px 16px", border: "1px solid var(--border)" }}>
                      <div style={{ fontSize: 22, fontWeight: 800, fontFamily: "var(--font-display)", color: c.metierColor, marginBottom: 4, lineHeight: 1 }}>{o.metric}</div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>{o.label}</div>
                      <div style={{ fontSize: 11, color: "var(--text-tertiary)", lineHeight: 1.4 }}>{o.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`.case-grid{grid-template-columns:1fr 1fr}@media(max-width:900px){.case-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}