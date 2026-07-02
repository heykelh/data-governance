"use client";

const resources = [
  {
    category: "RGPD & Privacy",
    color: "var(--accent-coral)",
    items: [
      {
        title: "Registre des traitements Art. 30 — modèle officiel CNIL",
        format: "ODS / Excel",
        desc: "Template officiel de la CNIL, compatible Excel, LibreOffice et OpenOffice. Inclut les onglets responsable de traitement et sous-traitant, avec exemples pré-remplis.",
        source: "CNIL — cnil.fr",
        href: "https://www.cnil.fr/sites/cnil/files/atoms/files/registre-traitement-simplifie.ods",
      },
      {
        title: "Registre des traitements Art. 30 — modèle Word basique",
        format: "PDF / Word",
        desc: "Version Word de la CNIL pour les petites structures. Fiche par activité à dupliquer, avec champs obligatoires pré-structurés et exemples concrets (gestion paie, prospects, fournisseurs).",
        source: "CNIL — cnil.fr",
        href: "https://www.cnil.fr/sites/cnil/files/atoms/files/registre_rgpd_basique.pdf",
      },
      {
        title: "Logiciel PIA / DPIA — outil officiel CNIL",
        format: "Logiciel (Windows / Mac / Linux)",
        desc: "Outil open source de la CNIL pour réaliser les analyses d'impact (AIPD/DPIA). Disponible en 20 langues, interface guidée étape par étape, base de connaissance RGPD intégrée.",
        source: "CNIL — cnil.fr",
        href: "https://www.cnil.fr/fr/outil-pia-telechargez-et-installez-le-logiciel-de-la-cnil",
      },
      {
        title: "Guidelines CEPD — lignes directrices officielles",
        format: "PDF (multi-documents)",
        desc: "Ensemble des lignes directrices du Comité Européen de Protection des Données : transferts de données, cookies, DPO, bases légales, droits des personnes. La référence réglementaire que tout DPO cite.",
        source: "CEPD — edpb.europa.eu",
        href: "https://edpb.europa.eu/our-work-tools/our-documents/guidelines_fr",
      },
    ],
  },
  {
    category: "Gouvernance Data & DAMA-DMBOK",
    color: "var(--accent-amber)",
    items: [
      {
        title: "DAMA-DMBOK — diagrammes et infographies officiels",
        format: "Images (Creative Commons)",
        desc: "Images officielles du DAMA-DMBOK v2 Revised publiées sous licence Creative Commons par DAMA International. La roue DAMA, les context diagrams des 11 domaines, téléchargeables librement.",
        source: "DAMA International — dama.org",
        href: "https://dama.org/dmbok2r-infographics/",
      },
      {
        title: "Overview DAMA-DMBOK2 — guide d'introduction",
        format: "PDF",
        desc: "Présentation complète des 11 domaines de connaissance du DAMA-DMBOK2 : gouvernance, architecture, modélisation, qualité, sécurité, métadonnées. Document de référence DAMA Denmark.",
        source: "DAMA Denmark — dama-dk.org",
        href: "https://www.dama-dk.org/onewebmedia/DAMA%20DMBOK2_PDF.pdf",
      },
      {
        title: "Data Contract Specification — standard open source v3.0",
        format: "YAML / GitHub",
        desc: "Standard open source pour les Data Contracts : schéma, SLA, quality rules, ownership. Utilisé par Paypal, Mercedes-Benz, JPMC. Compatible dbt, Snowflake, Databricks.",
        source: "datacontract.com — GitHub",
        href: "https://datacontract.com/",
      },
    ],
  },
  {
    category: "AI Governance & EU AI Act",
    color: "var(--accent)",
    items: [
      {
        title: "Checker de conformité EU AI Act — outil officiel Commission Européenne",
        format: "Outil web interactif",
        desc: "Outil officiel de la Commission Européenne pour déterminer si votre système IA est soumis à l'AI Act et quelles obligations s'appliquent selon votre rôle (provider, deployer, importeur).",
        source: "Commission Européenne — ai-act-service-desk.ec.europa.eu",
        href: "https://ai-act-service-desk.ec.europa.eu/en/eu-ai-act-compliance-checker",
      },
      {
        title: "AI Agent Governance Toolkit — checklist EU AI Act (Microsoft)",
        format: "Markdown / GitHub",
        desc: "Checklist complète de conformité EU AI Act article par article publiée par Microsoft sur GitHub. Couvre Art. 5 (interdictions), Art. 9-17 (haut risque), GPAI. Vérifiée contre le Journal Officiel.",
        source: "Microsoft — github.com/microsoft",
        href: "https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/compliance/eu-ai-act-checklist.md",
      },
      {
        title: "Templates EU AI Act — 20+ documents éditables",
        format: "Documents éditables",
        desc: "Plus de 20 templates EU AI Act : AI Policy, AI Register, FRIA (Art. 27), AI Governance Framework, Incident Response Plan, Transparency Notice. Inclut un registre pré-rempli Banque/Finance.",
        source: "AI Act Blog — aiactblog.nl",
        href: "https://www.aiactblog.nl/en/templates",
      },
      {
        title: "EU AI Act Compliance Matrix (IAPP)",
        format: "PDF",
        desc: "Matrice de conformité EU AI Act publiée par l'IAPP. Vue d'ensemble des articles applicables par type d'opérateur sur systèmes à haut risque, systèmes IA et modèles GPAI.",
        source: "IAPP — iapp.org",
        href: "https://iapp.org/resources/article/eu-ai-act-compliance-matrix",
      },
    ],
  },
  {
    category: "Réglementation & Textes officiels",
    color: "var(--accent-purple)",
    items: [
      {
        title: "BCBS239 — texte officiel en français (BRI)",
        format: "PDF",
        desc: "Texte source officiel des 14 principes BCBS239 publié par la Banque des Règlements Internationaux. La référence absolue pour tout profil Data Governance en contexte bancaire et prudentiel.",
        source: "BRI — bis.org",
        href: "https://www.bis.org/publ/bcbs239_fr.pdf",
      },
      {
        title: "BCBS239 — texte officiel en anglais (BRI)",
        format: "PDF",
        desc: "Version anglaise des Principles for effective risk data aggregation and risk reporting. Utilisée dans les audits BCE et les missions de conseil en gouvernance des données de risque.",
        source: "BRI — bis.org",
        href: "https://www.bis.org/publ/bcbs239.pdf",
      },
      {
        title: "EU AI Act — texte officiel (EUR-Lex, version française)",
        format: "PDF / HTML",
        desc: "Règlement (UE) 2024/1689 du 13 juin 2024, publié au Journal Officiel de l'Union Européenne. Texte de référence complet avec tous les annexes, articles et considérants.",
        source: "EUR-Lex — eur-lex.europa.eu",
        href: "https://eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=OJ%3AL_202401689",
      },
      {
        title: "EBA — implications de l'EU AI Act pour le secteur bancaire",
        format: "PDF",
        desc: "Document officiel de l'EBA (novembre 2025) sur la cartographie de l'EU AI Act par rapport aux exigences prudentielles bancaires existantes. Essentiel pour comprendre l'articulation AI Act / BCBS / CRR.",
        source: "EBA — eba.europa.eu",
        href: "https://www.eba.europa.eu/sites/default/files/2025-11/d8b999ce-a1d9-4964-9606-971bbc2aaf89/AI%20Act%20implications%20for%20the%20EU%20banking%20sector.pdf",
      },
    ],
  },
  {
    category: "Data Engineering & Qualité",
    color: "var(--accent-blue)",
    items: [
      {
        title: "dbt documentation — référence complète",
        format: "Documentation web",
        desc: "Documentation officielle de dbt (data build tool) : modèles, tests, sources, seeds, snapshots, macros. La référence technique pour tout Data Engineer travaillant avec des entrepôts de données modernes.",
        source: "dbt Labs — docs.getdbt.com",
        href: "https://docs.getdbt.com/",
      },
      {
        title: "Great Expectations — framework open source data quality",
        format: "Documentation / GitHub",
        desc: "Framework Python open source de référence pour la data quality : définition d'expectations, validation automatique des données, data docs générés automatiquement. Utilisé en production par des centaines d'équipes data.",
        source: "Great Expectations — greatexpectations.io",
        href: "https://docs.greatexpectations.io/",
      },
      {
        title: "Data Mesh Architecture — guide Confluent",
        format: "Web / PDF",
        desc: "Guide complet sur l'architecture Data Mesh : 4 principes, domain ownership, data as a product, self-serve platform, federated governance. Cas d'usage réels et patterns d'implémentation.",
        source: "Confluent — confluent.io",
        href: "https://www.confluent.io/learn/data-mesh/",
      },
    ],
  },
];

export default function RessourcesPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "60px 24px 48px", background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Ressources</p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, marginBottom: 16 }}>
            Ressources & outils<br />
            <span style={{ color: "var(--text-secondary)" }}>sélectionnés et vérifiés</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 640, lineHeight: 1.7 }}>
            Une sélection de ressources officielles et open source — CNIL, Commission Européenne, BRI, EBA, Microsoft, DAMA International. Chaque lien pointe vers la source réelle, directement accessible.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px", display: "flex", flexDirection: "column", gap: 48 }}>
        {resources.map(cat => (
          <div key={cat.category}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 3, height: 20, borderRadius: 2, background: cat.color }} />
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>{cat.category}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 14 }}>
              {cat.items.map(item => (
                <a key={item.title} href={item.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "var(--bg-card)", border: "1px solid var(--border)",
                    borderRadius: 12, padding: "20px", display: "flex", flexDirection: "column", gap: 10,
                    height: "100%", borderLeft: `3px solid ${cat.color}`,
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
                      <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", flex: 1 }}>{item.title}</h3>
                      <span style={{
                        fontSize: 10, padding: "3px 8px", borderRadius: 4, fontWeight: 600, flexShrink: 0,
                        background: `color-mix(in srgb, ${cat.color} 15%, transparent)`,
                        color: cat.color,
                      }}>{item.format}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0, flex: 1 }}>{item.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4, paddingTop: 10, borderTop: "1px solid var(--border)" }}>
                      <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{item.source}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: cat.color, fontWeight: 500 }}>
                        Accéder
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M1.5 10.5L10.5 1.5M10.5 1.5H4.5M10.5 1.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div style={{
          background: "var(--bg-card)", border: "1px solid var(--border)",
          borderRadius: 16, padding: "32px 36px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap",
        }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Suivre sur LinkedIn</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: 14, margin: 0 }}>
              Analyses, retours d'expérience et publications autour de la Data Governance.
            </p>
          </div>
          <a href="https://linkedin.com/in/heykelhachiche" target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "10px 22px", borderRadius: 8, fontSize: 13, fontWeight: 500,
            background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
            color: "var(--accent)", textDecoration: "none", flexShrink: 0,
          }}>Suivre sur LinkedIn</a>
        </div>
      </div>
    </div>
  );
}