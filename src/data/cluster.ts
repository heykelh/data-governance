export type ClusterProject = {
  title: string;
  desc: string;
  href: string;
  tag: string;
  internal?: boolean;
};

export type ClusterCategory = {
  id: string;
  label: string;
  short: string;
  tagline: string;
  hex: string;
  skills: string[];
  projects: ClusterProject[];
};

const kualaLumpur: ClusterProject = {
  title: "AI for Kuala Lumpur",
  desc: "Plateforme data et IA sur données urbaines multi-sources : prédiction, tendances, insights.",
  href: "https://ai-for-kuala-lumpur.netlify.app/",
  tag: "Live",
};

export const CATEGORIES: ClusterCategory[] = [
  {
    id: "gouvernance",
    label: "Data Governance",
    short: "Data Governance",
    tagline: "Structurer, fiabiliser, piloter la donnée.",
    hex: "#4ade80",
    skills: ["DAMA-DMBOK", "Data Quality", "Data Lineage", "Data Catalog", "RACI", "BCBS239", "RGPD", "EU AI Act"],
    projects: [
      {
        title: "Audit et Gouvernance BCBS239",
        desc: "Diagnostic complet, data lineage, rôles Data Owner et Steward, cadre de contrôle qualité.",
        href: "https://bcbs239-data-governance.vercel.app/",
        tag: "Live",
      },
      {
        title: "Gouvernance des Données Critiques",
        desc: "Cadre fédéré, RACI, KPI et SLA qualité, gestion des incidents, feuille de route 18 mois.",
        href: "https://www.canva.com/design/DAHBNgAQtnw/Ru9E56mpd2qyDSzXKGhMIw/view",
        tag: "Livrable",
      },
      {
        title: "Naomi Data Steward Lab",
        desc: "Rôle de Data Steward sur l'écosystème SNCF Voyageurs : catalogue, glossaire, règles de qualité.",
        href: "https://naomi-data-steward.vercel.app/",
        tag: "Live",
      },
      {
        title: "Modules RGPD, EU AI Act, Solvency II",
        desc: "Diagnostic RGPD, registre des risques IA, gouvernance assurance et Data Mesh.",
        href: "/rgpd",
        tag: "Portfolio",
        internal: true,
      },
    ],
  },
  {
    id: "consulting",
    label: "Data Consulting",
    short: "Data Consulting",
    tagline: "Piloter une transformation data de bout en bout.",
    hex: "#a78bfa",
    skills: ["Pilotage de programme", "Ateliers métiers et IT", "Diagnostic de maturité", "Reporting Comex", "Roadmap data"],
    projects: [
      {
        title: "FrontierBank",
        desc: "Mission de transformation data sur 12 mois en contexte BCE : DAMA-DMBOK, catalogue, lineage, rapport Comex.",
        href: "https://frontierbank-data.vercel.app/",
        tag: "Live",
      },
      {
        title: "Case studies chiffrés",
        desc: "Chaque projet avec son contexte, sa mission, ses objectifs chiffrés et ses livrables.",
        href: "/case-studies",
        tag: "Site",
        internal: true,
      },
    ],
  },
  {
    id: "analyst",
    label: "Data Analyst / Business Analyst",
    short: "Analyst / BA",
    tagline: "Transformer la donnée en aide à la décision.",
    hex: "#fb923c",
    skills: ["Power BI", "SQL", "Python", "Spécifications fonctionnelles", "KPI et dashboarding", "Cas d'usage"],
    projects: [
      {
        title: "INSPECTION DATA",
        desc: "Inspection data d'une banque fictive : contrôles SQL, scoring de risque, évaluation précision et rappel.",
        href: "https://inspection-data.vercel.app/",
        tag: "Live",
      },
      {
        title: "Mission BA SI Crédit",
        desc: "Mission Business Analyst sur un SI Crédit bancaire : besoins, spécifications, cas d'usage, recette.",
        href: "https://mission-ba-credit.vercel.app/",
        tag: "Live",
      },
      {
        title: "PALIER",
        desc: "Aide à la décision tarifaire sur 36 000 lignes de prix TGV : concurrence INOUI et OUIGO, élasticité-prix.",
        href: "https://palier-sncf.vercel.app/",
        tag: "Live",
      },
      {
        title: "ESCALE",
        desc: "Suivi de ponctualité CDG et Orly : score de risque de retard déterministe, registres RGPD et AI Act.",
        href: "https://escale-ops.vercel.app/",
        tag: "Live",
      },
      {
        title: "Finance Audit Dashboard",
        desc: "Détection d'anomalies sur 10 entreprises du CAC40 par Isolation Forest, dashboard interactif.",
        href: "https://finance-audit-dashboard.vercel.app/",
        tag: "Live",
      },
      {
        title: "Customer Experience Intelligence",
        desc: "Analyse clients, KPI de pilotage et dashboards Power BI.",
        href: "https://github.com/heykelh/customer-experience-intelligence",
        tag: "GitHub",
      },
    ],
  },
  {
    id: "ia",
    label: "IA et Agents",
    short: "IA & Agents",
    tagline: "Des systèmes IA fiables, gouvernés et traçables.",
    hex: "#f472b6",
    skills: ["LangGraph", "RAG", "Groq", "Gemini", "Langfuse", "Évaluation LLM"],
    projects: [
      {
        title: "REGARD",
        desc: "Copilote IA de conformité bancaire : LangGraph, RAG, refus motivés, 28 cas de test validés.",
        href: "https://regard-wine.vercel.app/",
        tag: "Live",
      },
      kualaLumpur,
    ],
  },
  {
    id: "engineering",
    label: "Data Engineering",
    short: "Data Engineering",
    tagline: "Les pipelines qui font circuler la donnée.",
    hex: "#fbbf24",
    skills: ["Python", "SQL", "PostgreSQL", "ETL", "GitHub Actions", "dbt", "Docker", "FastAPI"],
    projects: [
      {
        title: "PokéWatch",
        desc: "Surveillance du marché Pokémon TCG : pipeline Postgres, règles de détection SQL, alertes ntfy, dashboard.",
        href: "https://pokewatch-three.vercel.app/",
        tag: "Live",
      },
            {
        title: "CryptoBot",
        desc: "Pipeline API, ingestion, SQL et visualisation sur données crypto en quasi temps réel.",
        href: "https://www.canva.com/design/DAG1I0Dd_a4/p3QvJvqgTTjs9Dek5_j0Lw/edit",
        tag: "Livrable",
      },
      {
        title: "DOCKZ",
        desc: "Plateforme data du marché de l'entrepôt logistique, construite sur données publiques.",
        href: "https://dockz.vercel.app/",
        tag: "Live",
      },
      kualaLumpur,
    ],
  },
  {
    id: "apps",
    label: "Applications et autres projets",
    short: "Applications",
    tagline: "Produits, jeux et outils construits de bout en bout.",
    hex: "#60a5fa",
    skills: ["Next.js", "TypeScript", "Tailwind", "Vercel", "Game loop"],
    projects: [
      {
        title: "Data Arcade",
        desc: "Mini-jeux rétro (Data Steward, SQL Fighter, Pipe Plumber, Data Odyssey) comme vitrine interactive.",
        href: "https://datarcade.vercel.app/",
        tag: "Live",
      },
      {
        title: "Ce portfolio",
        desc: "Next.js, TypeScript et analytics Vercel : le site que vous parcourez.",
        href: "https://github.com/heykelh/data-governance",
        tag: "GitHub",
      },
    ],
  },
];

export const PROJECT_COUNT = new Set(
  CATEGORIES.flatMap((c) => c.projects.filter((p) => !p.internal).map((p) => p.title))
).size;
