// src/app/case-studies/page.tsx
"use client";
import Link from "next/link";

const cases = [
  {
    id: "frontierbank",
    num: "01",
    metier: "Data Consulting",
    metierColor: "var(--accent-purple)",
    title: "FrontierBank — Mission de transformation Data Governance",
    context: "Une banque de taille intermédiaire sous surveillance prudentielle de la BCE dispose de 18 mois avant une inspection formelle. Aucun des 14 principes BCBS239 n'est conforme. Les données critiques ne sont pas tracées. Des modèles IA sont déployés en production sans cadre de validation ni documentation technique.",
    mission: "Piloter le programme de gouvernance data de A à Z sur 12 mois en tant que consultant data embarqué. Animer les ateliers métiers, IT et conformité. Produire l'ensemble des livrables réglementaires et préparer le Comex à l'inspection BCE.",
    objectifs: [
      { metric: "14/14", label: "principes BCBS239 conformes", detail: "passage de 0% à 100% de conformité sur les 14 principes en 12 mois" },
      { metric: "< 18 mois", label: "délai avant inspection BCE", detail: "livraison du dispositif complet dans le délai réglementaire contraint" },
      { metric: "8 domaines", label: "DAMA-DMBOK couverts", detail: "diagnostic de maturité complet sur l'ensemble des axes de gouvernance" },
      { metric: "100%", label: "modèles IA enregistrés", detail: "AI Risk Register complet avec classification EU AI Act par système" },
    ],
    livrables: ["Diagnostic maturité DAMA-DMBOK (8 domaines)", "Cadre de gouvernance — rôles, RACI, comités", "Data Catalog avec glossaire certifié", "Data Quality KPI par domaine avec SLA", "Data Lineage graphe flux systèmes sources vers reporting", "AI Register — EU AI Act, drift monitoring", "Rapport Comex — synthèse, budget, ROI, décisions DG"],
    stack: ["DAMA-DMBOK", "BCBS239", "EU AI Act", "Data Catalog", "Data Lineage", "Data Quality"],
    href: "https://frontierbank-data.vercel.app/",
  },
  {
    id: "bcbs239",
    num: "02",
    metier: "Data Governance",
    metierColor: "var(--accent)",
    title: "Audit & Gouvernance Data — Cadre BCBS239",
    context: "Un établissement financier ne dispose d'aucun cadre formel de gouvernance des données de risque. Les données critiques de provisionnement et de reporting réglementaire ne sont pas tracées, les rôles sont flous et les contrôles absents. Le risque d'erreur sur les indicateurs de pilotage financier est élevé.",
    mission: "Réaliser un diagnostic complet du dispositif data et structurer un cadre de gouvernance orienté pilotage financier et performance métier, en conformité avec les 14 principes BCBS239.",
    objectifs: [
      { metric: "100%", label: "données critiques tracées", detail: "data lineage documenté sur l'ensemble des flux de données de risque" },
      { metric: "−60%", label: "réduction des erreurs de reporting", detail: "grâce aux contrôles qualité automatisés et aux rôles clairement définis" },
      { metric: "J+1", label: "fraîcheur des données critiques", detail: "SLA de disponibilité des données pour le pilotage quotidien des risques" },
      { metric: "3 rôles", label: "data activés", detail: "Data Owner, Data Steward et IT Owner formellement nommés et opérationnels" },
    ],
    livrables: ["Diagnostic des écarts de gouvernance et de conformité BCBS239", "Data lineage complet des flux critiques", "Définition des rôles Data Owner / Steward avec matrice RACI", "Cadre de contrôle qualité avec KPI et seuils d'alerte", "Feuille de route de mise en conformité priorisée"],
    stack: ["BCBS239", "Data Lineage", "Data Quality", "RACI", "DAMA-DMBOK"],
    href: "https://bcbs239-data-governance.vercel.app/",
  },
  {
    id: "gouvernance-critique",
    num: "03",
    metier: "Data Governance",
    metierColor: "var(--accent)",
    title: "Programme de Gouvernance des Données Critiques",
    context: "Une organisation gère des données critiques sur les incidents et la performance opérationnelle sans cadre de gouvernance formalisé. Les responsabilités sont dispersées, la qualité des données n'est pas mesurée et il n'existe pas de processus de gestion des incidents data. La prise de décision s'appuie sur des données dont la fiabilité n'est pas garantie.",
    mission: "Concevoir et déployer un cadre de gouvernance data complet sur le périmètre incidents et performance, incluant le diagnostic de maturité, la structuration des rôles, le cadre qualité et la feuille de route.",
    objectifs: [
      { metric: "+40%", label: "fiabilité des indicateurs de performance", detail: "grâce au cadre qualité avec KPI, SLA et contrôles automatisés" },
      { metric: "< 4h", label: "délai de détection des incidents data", detail: "contre plusieurs jours sans processus formalisé" },
      { metric: "1 modèle", label: "de gouvernance fédéré", detail: "applicable à l'ensemble des domaines de l'organisation" },
      { metric: "5 niveaux", label: "de maturité évalués", detail: "diagnostic DAMA-DMBOK sur tous les axes clés du dispositif data" },
    ],
    livrables: ["Diagnostic de maturité Data & IA (5 niveaux)", "Modèle de gouvernance fédéré à l'échelle transverse", "Matrice RACI — Data Owner, Data Steward, IT", "Cadre Data Quality (KPI, SLA, contrôles)", "Processus de gestion des incidents Data", "Feuille de route Data priorisée sur 18 mois"],
    stack: ["DAMA-DMBOK", "Data Quality", "RACI", "Diagnostic maturité", "Roadmap data"],
    href: "https://www.canva.com/design/DAHBNgAQtnw/Ru9E56mpd2qyDSzXKGhMIw/view",
  },
  {
    id: "naomi",
    num: "04",
    metier: "Data Steward",
    metierColor: "var(--accent-purple)",
    title: "Naomi Data Steward Lab — SNCF Voyageurs",
    context: "L'écosystème de données ouvertes SNCF Voyageurs (système Naomi) expose des données réelles de transport mais sans cadre de stewardship formalisé : pas de glossaire métier, pas de documentation des datasets, pas de règles de qualité définies. Les utilisateurs des données ne savent pas qui contacter en cas d'anomalie ni quelles règles s'appliquent.",
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
    num: "05",
    metier: "Data Analyst",
    metierColor: "var(--accent-coral)",
    title: "Finance Audit Dashboard — Détection d'anomalies CAC40",
    context: "Dans les cabinets d'audit (EY, Deloitte, PwC), les auditeurs analysent chaque année les comptes de leurs clients dans Excel : calcul de ratios, comparaison annuelle, recherche d'outliers. C'est un travail long, fastidieux et exposé aux erreurs humaines. Pour 10 entreprises du CAC40, ce processus prend plusieurs semaines.",
    mission: "Automatiser la détection d'anomalies financières sur 10 entreprises du CAC40 via un pipeline data complet et un algorithme ML, réduisant de plusieurs semaines à quelques secondes le temps d'analyse.",
    objectifs: [
      { metric: "10 sec", label: "pour analyser 10 entreprises", detail: "contre plusieurs semaines d'analyse manuelle dans Excel pour un auditeur" },
      { metric: "5 ans", label: "de données financières réelles", detail: "Yahoo Finance via yfinance — états financiers officiels CAC40" },
      { metric: "8 ratios", label: "financiers calculés automatiquement", detail: "marge brute, EBITDA, ROE, dette/fonds propres, current ratio, OPEX, croissance CA" },
      { metric: "100%", label: "objectif sur le score d'anomalie", detail: "Kering 2025 : ratio de liquidité statistiquement hors-norme vs le secteur CAC40" },
    ],
    livrables: ["Pipeline ETL Python (Yahoo Finance → SQLite)", "Modèle ML Isolation Forest — scoring d'anomalie 0 à 100", "API FastAPI (4 endpoints)", "Dashboard Next.js avec graphiques Plotly interactifs", "3 vues : entreprise, anomalies globales, comparaison"],
    stack: ["Python", "yfinance", "pandas", "scikit-learn", "FastAPI", "SQLite", "Next.js", "Plotly.js"],
    href: "https://finance-audit-dashboard.vercel.app/",
  },
  {
    id: "customer-experience",
    num: "06",
    metier: "Data Analyst",
    metierColor: "var(--accent-coral)",
    title: "Customer Experience Intelligence",
    context: "Une organisation collecte des données clients (transactions, comportements, réclamations) mais ne dispose pas d'outil de pilotage permettant d'identifier rapidement les anomalies, les tendances de satisfaction ou les segments à risque. Les décisions marketing et opérationnelles se prennent sans visibilité data.",
    mission: "Analyser les données clients, identifier les insights et anomalies impactant la performance, et construire des dashboards Power BI permettant un pilotage opérationnel par les données.",
    objectifs: [
      { metric: "+25%", label: "rapidité de détection des anomalies", detail: "grâce aux alertes automatiques intégrées dans le dashboard Power BI" },
      { metric: "< 1 jour", label: "pour produire un rapport de performance", detail: "contre plusieurs jours de consolidation manuelle avant le projet" },
      { metric: "5 KPI", label: "de pilotage définis et automatisés", detail: "NPS, taux de réclamation, délai de résolution, taux de rétention, panier moyen" },
      { metric: "3 segments", label: "clients identifiés et actionnables", detail: "segmentation comportementale permettant des actions ciblées" },
    ],
    livrables: ["Analyse exploratoire complète des données clients", "5 KPI de pilotage définis avec seuils d'alerte", "Dashboards Power BI interactifs (3 vues)", "Rapport de recommandations business actionnable"],
    stack: ["Power BI", "Python (pandas)", "SQL", "Analyse exploratoire", "KPI", "Data Visualisation"],
    href: "https://github.com/heykelh/customer-experience-intelligence",
  },
  {
    id: "kuala-lumpur",
    num: "07",
    metier: "Data Engineering",
    metierColor: "var(--accent-amber)",
    title: "AI for Kuala Lumpur — Plateforme Data Urbaine",
    context: "Les décideurs urbains (urbanistes, collectivités, investisseurs) manquent d'outils pour exploiter les données ouvertes disponibles sur une métropole en croissance rapide comme Kuala Lumpur. Les données sont dispersées, hétérogènes et non exploitables sans infrastructure data dédiée.",
    mission: "Concevoir et déployer une plateforme data multi-sources permettant d'analyser des données urbaines complexes et de faciliter la prise de décision stratégique via des cas d'usage IA.",
    objectifs: [
      { metric: "Multi-sources", label: "API et open data intégrées", detail: "pipeline automatisé agrégeant des données de transport, démographie, économie et environnement" },
      { metric: "< 5 min", label: "pour générer un insight urbain", detail: "contre des heures de collecte et consolidation manuelle de données dispersées" },
      { metric: "100%", label: "données réelles, zéro simulation", detail: "toutes les données proviennent de sources ouvertes officielles vérifiées" },
      { metric: "3 cas IA", label: "d'aide à la décision implémentés", detail: "analyse prédictive, détection de tendances, génération d'insights automatisée" },
    ],
    livrables: ["Pipeline data multi-sources automatisé", "Intégration API et open datasets", "3 cas d'usage IA opérationnels", "Interface de visualisation et d'exploration des données"],
    stack: ["Python", "FastAPI", "APIs REST", "ETL Pipeline", "Next.js", "Data Visualisation"],
    href: "https://ai-for-kuala-lumpur.netlify.app/",
  },
  {
    id: "cryptobot",
    num: "08",
    metier: "Data Engineering",
    metierColor: "var(--accent-amber)",
    title: "CryptoBot — Pipeline Data Temps Réel",
    context: "Les données de marchés crypto évoluent en temps réel et nécessitent une infrastructure capable d'ingérer, transformer et exposer des données en quasi temps réel. Sans pipeline structuré, les données sont inaccessibles pour l'analyse ou la prise de décision rapide.",
    mission: "Concevoir un pipeline data complet de bout en bout : ingestion depuis l'API crypto, transformation, stockage SQL structuré, et exposition via des indicateurs de performance visualisés en quasi temps réel.",
    objectifs: [
      { metric: "< 60 sec", label: "délai d'ingestion des données", detail: "de la source API au stockage SQL structuré prêt à l'exploitation" },
      { metric: "4 étapes", label: "de pipeline couvertes", detail: "API → ingestion → transformation → stockage SQL → visualisation" },
      { metric: "100%", label: "données nettoyées et structurées", detail: "pipeline de transformation garantissant qualité, cohérence et exploitabilité" },
      { metric: "5 KPI", label: "de performance calculés automatiquement", detail: "prix, volume, volatilité, tendance, momentum — mis à jour en continu" },
    ],
    livrables: ["Pipeline ETL complet (API → SQL)", "Processus de nettoyage et transformation des données", "Base SQL structurée et optimisée", "Tableau de bord des indicateurs de performance", "Documentation technique du pipeline"],
    stack: ["Python", "SQL", "API REST", "ETL", "Data Pipeline", "Visualisation"],
    href: "https://www.canva.com/design/DAG1I0Dd_a4/p3QvJvqgTTjs9Dek5_j0Lw/edit",
  },
];

const metierColors: Record<string, string> = {
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
            8 projets réels.<br />
            <span style={{ color: "var(--text-secondary)" }}>Des problèmes concrets. Des résultats chiffrés.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 640, lineHeight: 1.7 }}>
            Chaque projet résout un problème business identifié. Les objectifs sont chiffrés, les livrables sont réels, les technologies sont celles utilisées en production.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 }}>
            {Object.entries(metierColors).map(([m, c]) => (
              <span key={m} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 99, fontWeight: 500, background: `color-mix(in srgb, ${c} 12%, transparent)`, color: c, border: `1px solid color-mix(in srgb, ${c} 30%, transparent)` }}>{m}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px", display: "flex", flexDirection: "column", gap: 32 }}>
        {cases.map(c => (
          <div key={c.id} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", borderLeft: `4px solid ${c.metierColor}` }}>

            {/* Header */}
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

              {/* Left */}
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

              {/* Right — objectifs chiffrés */}
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