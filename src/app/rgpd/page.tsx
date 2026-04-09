"use client";
import { ModuleLayout } from "@/components/ui/ModuleLayout";

const themes = [
  {
    title: "Bases légales & licéité du traitement",
    questions: [
      "Avez-vous identifié et documenté la base légale de chaque traitement de données personnelles (consentement, contrat, obligation légale, intérêt légitime) ?",
      "Le consentement collecté est-il libre, spécifique, éclairé et univoque, avec une possibilité de retrait simple ?",
      "Avez-vous mis en place un mécanisme de preuve du consentement horodaté et auditable ?",
      "Les traitements reposant sur l'intérêt légitime font-ils l'objet d'un test de mise en balance documenté ?",
      "Les finalités de traitement sont-elles définies de manière explicite et limitées au strict nécessaire ?",
      "Les données sont-elles conservées uniquement le temps nécessaire à la finalité, avec des durées documentées ?",
    ],
    color: "var(--accent-coral)",
  },
  {
    title: "Droits des personnes concernées",
    questions: [
      "Avez-vous mis en place une procédure opérationnelle pour répondre aux demandes d'accès (Art. 15) dans le délai d'un mois ?",
      "Le droit à l'effacement (Art. 17) est-il techniquement implémenté dans vos systèmes, y compris chez vos sous-traitants ?",
      "Le droit à la portabilité (Art. 20) est-il supporté avec un export dans un format structuré et lisible par machine ?",
      "Les demandes de rectification (Art. 16) déclenchent-elles une mise à jour propagée dans tous les systèmes concernés ?",
      "Avez-vous désigné un point de contact unique (DPO ou référent) pour centraliser les demandes des personnes concernées ?",
      "Votre politique de confidentialité est-elle rédigée en langage clair, complète et facilement accessible ?",
    ],
    color: "var(--accent-amber)",
  },
  {
    title: "Registre des traitements & documentation",
    questions: [
      "Tenez-vous un registre des activités de traitement (Art. 30) mis à jour, avec les informations requises pour chaque traitement ?",
      "Le registre distingue-t-il les traitements en tant que responsable et en tant que sous-traitant ?",
      "Avez-vous réalisé une Analyse d'Impact (DPIA/PIA) pour les traitements à risque élevé (profilage, données sensibles, surveillance systématique) ?",
      "Les traitements impliquant des données sensibles (Art. 9) font-ils l'objet de mesures de protection renforcées et documentées ?",
      "Les durées de conservation sont-elles documentées dans le registre et techniquement appliquées via des politiques d'archivage ou de suppression automatique ?",
      "Les transferts de données hors UE sont-ils identifiés et encadrés par des garanties appropriées (clauses contractuelles types, décisions d'adéquation) ?",
    ],
    color: "var(--accent)",
  },
  {
    title: "Sécurité des données & gestion des incidents",
    questions: [
      "Avez-vous réalisé une cartographie des risques de sécurité liés aux traitements de données personnelles ?",
      "Les mesures techniques et organisationnelles (chiffrement, contrôle d'accès, pseudonymisation) sont-elles proportionnées aux risques identifiés ?",
      "Disposez-vous d'une procédure de gestion des violations de données permettant la notification à la CNIL sous 72h (Art. 33) ?",
      "Les violations de données font-elles l'objet d'une documentation interne systématique, même en cas de non-notification à la CNIL ?",
      "Les accès aux données personnelles sont-ils tracés, audités régulièrement et limités au principe du moindre privilège ?",
      "Réalisez-vous des tests de sécurité (pentests, audits) sur vos systèmes traitant des données personnelles ?",
    ],
    color: "var(--accent-purple)",
  },
  {
    title: "Sous-traitants & transferts de données",
    questions: [
      "Avez-vous signé des contrats de sous-traitance conformes à l'Art. 28 RGPD avec l'ensemble de vos prestataires traitant des données personnelles ?",
      "Procédez-vous à une due diligence de vos sous-traitants (audit, questionnaire) avant engagement et périodiquement ?",
      "Avez-vous identifié tous les sous-traitants ultérieurs et obtenu l'autorisation préalable pour leur utilisation ?",
      "Les sous-traitants sont-ils contractuellement tenus de notifier immédiatement toute violation de données les concernant ?",
      "Disposez-vous d'une liste à jour de tous vos prestataires ayant accès à des données personnelles, avec leur rôle et localisation géographique ?",
      "Les outils SaaS et services cloud utilisés ont-ils fait l'objet d'une évaluation de conformité RGPD (Data Processing Agreement, localisation des serveurs) ?",
    ],
    color: "var(--accent-blue)",
  },
];

const raci = [
  { role: "DPO / Responsable RGPD", resp: "Piloter la conformité, former les équipes, être l'interlocuteur CNIL, valider les DPIA", color: "var(--accent-coral)" },
  { role: "Data Owner (Métier)", resp: "Définir les finalités, valider les durées de conservation, approuver les traitements dans son périmètre", color: "var(--accent-amber)" },
  { role: "Data Steward (IT)", resp: "Implémenter les mesures techniques, gérer les accès, appliquer les suppressions et la pseudonymisation", color: "var(--accent)" },
  { role: "Juriste / Direction", resp: "Valider les bases légales, signer les contrats sous-traitants, arbitrer les risques juridiques", color: "var(--accent-purple)" },
  { role: "RSSI", resp: "Garantir la sécurité des traitements, piloter les audits de sécurité, gérer les incidents", color: "var(--accent-blue)" },
];

const roadmap = [
  { phase: "Phase 1 — J0 à J+30", title: "Diagnostic & cartographie", actions: ["Inventaire exhaustif des traitements", "Constitution du registre Art. 30", "Identification des traitements à risque élevé", "Audit des contrats sous-traitants existants"], color: "var(--accent-coral)" },
  { phase: "Phase 2 — J+30 à J+60", title: "Mise en conformité prioritaire", actions: ["DPIA sur les traitements critiques identifiés", "Mise à jour des politiques de confidentialité", "Implémentation des procédures droits des personnes", "Revue et signature des DPA sous-traitants"], color: "var(--accent-amber)" },
  { phase: "Phase 3 — J+60 à J+90", title: "Consolidation & outillage", actions: ["Déploiement d'un outil de gestion du consentement (CMP)", "Automatisation des suppressions selon durées de conservation", "Formation de l'ensemble des collaborateurs", "Mise en place d'une procédure violation de données"], color: "var(--accent)" },
  { phase: "Phase 4 — J+90 à J+180", title: "Pilotage continu", actions: ["Tableau de bord de conformité RGPD", "Audits périodiques sous-traitants", "Veille réglementaire (délibérations CNIL)", "Revue annuelle du registre et des DPIA"], color: "var(--accent-purple)" },
];

export default function RGPDPage() {
  return (
    <ModuleLayout moduleId="rgpd">
      <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>

        {/* Context */}
        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Contexte & enjeux</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="two-col">
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px" }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--accent-coral)", marginBottom: 10 }}>Contexte réglementaire</h3>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Le RGPD (Règlement Général sur la Protection des Données), en vigueur depuis mai 2018, impose aux organisations
                traitant des données personnelles de citoyens européens un cadre strict de responsabilisation. La CNIL a prononcé
                plus de 400M€ d'amendes cumulées en France depuis 2018. Google (150M€), Facebook (60M€), Amazon (35M€) :
                aucune organisation n'est exemptée. Les PME et ETI sont aujourd'hui les cibles prioritaires des contrôles.
              </p>
            </div>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px" }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--accent-coral)", marginBottom: 10 }}>Enjeux pour l'organisation</h3>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Au-delà du risque d'amende (jusqu'à 4% du CA mondial ou 20M€), la non-conformité RGPD expose l'organisation
                à un risque réputationnel majeur, à des violations de données non maîtrisées, et à une incapacité à travailler
                avec des partenaires exigeant des garanties contractuelles de conformité. La gouvernance des données personnelles
                est devenue un critère d'évaluation dans les due diligences M&A et les appels d'offres publics.
              </p>
            </div>
          </div>
        </section>

        {/* Diagnostic */}
        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Outil de diagnostic — 30 questions</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 24 }}>
            Évaluation structurée en 5 thèmes. Chaque question permet d'identifier précisément les gaps de conformité
            et de prioriser les actions correctives. Réponse : Oui (2pts) / Partiel (1pt) / Non (0pt).
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {themes.map((theme, ti) => (
              <div key={ti} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: `color-mix(in srgb, ${theme.color} 15%, transparent)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: theme.color }}>
                    {String(ti + 1).padStart(2, "0")}
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>{theme.title}</h3>
                  <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--text-tertiary)" }}>6 questions · 12 pts max</span>
                </div>
                <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {theme.questions.map((q, qi) => (
                    <div key={qi} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 11, color: theme.color, fontWeight: 600, minWidth: 22, marginTop: 2 }}>Q{ti * 6 + qi + 1}</span>
                      <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RACI */}
        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Modèle de gouvernance RGPD — Rôles & responsabilités</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>
            La conformité RGPD n'est pas un projet IT — c'est une responsabilité partagée entre le métier, le juridique, la DSI et la direction.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {raci.map((r, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 140, flexShrink: 0 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: r.color }}>{r.role}</span>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>{r.resp}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Roadmap de mise en conformité — 6 mois</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>
            Plan opérationnel priorisé pour une organisation partant de zéro ou d'une conformité partielle.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
            {roadmap.map((r, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px", borderTop: `3px solid ${r.color}` }}>
                <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginBottom: 4 }}>{r.phase}</div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>{r.title}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {r.actions.map((a, ai) => (
                    <div key={ai} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: r.color, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5 }}>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KPI */}
        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>KPI de pilotage de la conformité RGPD</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
            {[
              { kpi: "Taux de couverture du registre", target: "100%", desc: "Part des traitements documentés dans le registre Art. 30" },
              { kpi: "Délai de réponse aux droits", target: "< 30 jours", desc: "Délai moyen de traitement des demandes d'exercice des droits" },
              { kpi: "Taux de DPA signés", target: "100%", desc: "Part des sous-traitants avec Data Processing Agreement en vigueur" },
              { kpi: "DPIA réalisées / requises", target: "100%", desc: "Couverture des traitements à risque élevé par une analyse d'impact" },
              { kpi: "Délai de notification violation", target: "< 72h", desc: "Respect du délai réglementaire de notification CNIL (Art. 33)" },
              { kpi: "Taux de formation des équipes", target: "> 80%", desc: "Part du personnel exposé aux données personnelles formé au RGPD" },
            ].map((k, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "16px" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "var(--accent-coral)", fontFamily: "var(--font-display)", marginBottom: 4 }}>{k.target}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>{k.kpi}</div>
                <div style={{ fontSize: 12, color: "var(--text-tertiary)", lineHeight: 1.5 }}>{k.desc}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
      <style>{`.two-col{grid-template-columns:1fr 1fr}@media(max-width:768px){.two-col{grid-template-columns:1fr!important}}`}</style>
    </ModuleLayout>
  );
}
