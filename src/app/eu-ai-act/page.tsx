"use client";
import { ModuleLayout } from "@/components/ui/ModuleLayout";

const riskLevels = [
  { level: "Risque inacceptable", color: "#ef4444", bg: "#ef444420", desc: "Systèmes interdits par l'EU AI Act. Manipulation subliminale, scoring social gouvernemental, surveillance biométrique en temps réel dans les espaces publics.", examples: ["Scoring social des citoyens", "Manipulation comportementale", "Exploitation des vulnérabilités"] },
  { level: "Risque élevé", color: "#f97316", bg: "#f9731620", desc: "Systèmes soumis aux obligations strictes de l'EU AI Act : évaluation de conformité, enregistrement, transparence, supervision humaine, robustesse.", examples: ["Scoring crédit (banque)", "Détection de fraude (assurance)", "Recrutement automatisé (RH)", "Scoring médical (santé)", "Contrôle aux frontières", "Notation étudiants"] },
  { level: "Risque limité", color: "#eab308", bg: "#eab30820", desc: "Obligations de transparence. L'utilisateur doit être informé qu'il interagit avec un système d'IA (chatbot, deepfake).", examples: ["Chatbots service client", "Génération de contenu", "Synthèse vocale"] },
  { level: "Risque minimal", color: "#22c55e", bg: "#22c55e20", desc: "Aucune obligation spécifique. La grande majorité des systèmes IA actuels (filtres spam, recommandations, jeux vidéo).", examples: ["Filtres spam email", "Recommandations produits", "IA dans les jeux vidéo"] },
];

const aiRegister = [
  { id: "AI-001", name: "Scoring crédit retail", dept: "Risk Management", risk: "Élevé", status: "Non conforme", owner: "CDO Finance", lastReview: "Jan 2026", obligations: ["Évaluation conformité", "Enregistrement EU AI Act", "Supervision humaine obligatoire", "Documentation technique complète"] },
  { id: "AI-002", name: "Détection fraude carte", dept: "Sécurité financière", risk: "Élevé", status: "En cours", owner: "CDO Ops", lastReview: "Fév 2026", obligations: ["Évaluation conformité", "Tests robustesse & fiabilité", "Gestion des biais algorithmiques", "Log et traçabilité des décisions"] },
  { id: "AI-003", name: "KYC — Vérification identité", dept: "Conformité", risk: "Élevé", status: "Conforme", owner: "CCO", lastReview: "Mar 2026", obligations: ["Enregistrement validé", "Supervision humaine active", "Rapport d'évaluation déposé"] },
  { id: "AI-004", name: "Chatbot service client", dept: "Digital", risk: "Limité", status: "Conforme", owner: "CDO Digital", lastReview: "Jan 2026", obligations: ["Mention IA visible obligatoire"] },
  { id: "AI-005", name: "Recommandations produits", dept: "Marketing", risk: "Minimal", status: "Conforme", owner: "CMO", lastReview: "Déc 2025", obligations: ["Aucune obligation spécifique"] },
  { id: "AI-006", name: "Scoring comportemental", dept: "Crédit consommation", risk: "Élevé", status: "Non conforme", owner: "CDO Finance", lastReview: "Nov 2025", obligations: ["Évaluation conformité urgente", "Droit d'explication client", "Supervision humaine à implémenter"] },
];

const governance = [
  { role: "Chief AI Officer (CAIO)", resp: "Piloter la stratégie IA, présider le comité de gouvernance IA, porter la conformité EU AI Act au COMEX.", color: "var(--accent)" },
  { role: "AI Owner (Métier)", resp: "Responsable d'un système IA dans son domaine. Valide les cas d'usage, les données d'entrée, les critères de performance et assume la responsabilité business.", color: "var(--accent-amber)" },
  { role: "AI Steward (Technique)", resp: "Gère le cycle de vie du modèle : entraînement, validation, déploiement, monitoring, retraite. Maintient la documentation technique requise par l'EU AI Act.", color: "var(--accent-blue)" },
  { role: "AI Ethics Committee", resp: "Évalue les risques éthiques, les biais, les impacts sociaux. Valide les systèmes IA à risque élevé avant déploiement.", color: "var(--accent-purple)" },
  { role: "DPO / Juriste conformité", resp: "Vérifie l'articulation EU AI Act / RGPD, conseille sur les obligations légales, coordonne les enregistrements réglementaires.", color: "var(--accent-coral)" },
];

const obligations = [
  { title: "Enregistrement dans la base EU AI Act", desc: "Les systèmes IA à risque élevé doivent être enregistrés dans la base de données EU gérée par la Commission européenne avant mise sur le marché.", deadline: "2026" },
  { title: "Évaluation de conformité", desc: "Réalisation d'une évaluation de conformité (auto-évaluation ou tierce partie selon le secteur) documentée selon les exigences techniques de l'annexe IV.", deadline: "2026" },
  { title: "Documentation technique complète", desc: "Maintenir une documentation couvrant : description du système, données d'entraînement, métriques de performance, mesures de robustesse, logs de tests.", deadline: "En continu" },
  { title: "Supervision humaine", desc: "Les systèmes à risque élevé doivent permettre une supervision humaine effective. Les décisions automatiques sur des droits significatifs doivent pouvoir être contestées.", deadline: "2026" },
  { title: "Transparence & explainabilité", desc: "Les personnes concernées par une décision prise par un système IA à risque élevé ont le droit d'obtenir une explication compréhensible.", deadline: "2026" },
  { title: "Monitoring post-déploiement", desc: "Surveillance continue des performances, détection des dérives (data drift, concept drift), alertes automatiques en cas de dégradation significative.", deadline: "En continu" },
];

export default function EUAIActPage() {
  return (
    <ModuleLayout moduleId="eu-ai-act">
      <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Contexte réglementaire</h2>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px", borderLeft: "3px solid var(--accent)" }}>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.75 }}>
              L'EU AI Act (Règlement (UE) 2024/1689) est entré en vigueur le 1er août 2024. C'est le premier cadre réglementaire
              mondial dédié à l'intelligence artificielle. Il adopte une approche basée sur le risque : plus le risque potentiel
              d'un système IA est élevé, plus les obligations sont strictes. Les amendes peuvent atteindre <strong style={{ color: "var(--accent)" }}>35M€ ou 7% du CA mondial</strong> pour
              les violations les plus graves. Les systèmes à risque élevé dans le secteur financier (scoring crédit, détection fraude,
              KYC) sont soumis aux obligations les plus contraignantes dès 2026.
            </p>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Classification des risques — 4 niveaux</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>Tout système IA doit être classifié selon cette hiérarchie avant déploiement.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {riskLevels.map((r, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "18px 22px", borderLeft: `3px solid ${r.color}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 99, background: r.bg, color: r.color }}>{r.level}</span>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 10 }}>{r.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {r.examples.map(e => (
                    <span key={e} style={{ fontSize: 11, padding: "3px 8px", borderRadius: 5, background: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-tertiary)" }}>{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>AI Risk Register — Cas fictif BNP Paribas</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>
            Inventaire structuré des systèmes IA par niveau de risque EU AI Act. Template opérationnel applicable
            à tout établissement financier.
          </p>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-surface)" }}>
                    {["ID", "Système IA", "Département", "Risque EU AI Act", "Statut", "AI Owner", "Dernière revue"].map(h => (
                      <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "var(--text-tertiary)", fontWeight: 500, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {aiRegister.map((row, i) => {
                    const riskColor = row.risk === "Élevé" ? "#f97316" : row.risk === "Limité" ? "#eab308" : "#22c55e";
                    const statusColor = row.status === "Conforme" ? "#22c55e" : row.status === "En cours" ? "#eab308" : "#ef4444";
                    return (
                      <tr key={i} style={{ borderBottom: i < aiRegister.length - 1 ? "1px solid var(--border)" : "none" }}>
                        <td style={{ padding: "10px 14px", color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", fontSize: 11 }}>{row.id}</td>
                        <td style={{ padding: "10px 14px", fontWeight: 500, color: "var(--text-primary)" }}>{row.name}</td>
                        <td style={{ padding: "10px 14px", color: "var(--text-secondary)" }}>{row.dept}</td>
                        <td style={{ padding: "10px 14px" }}><span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 5, background: `${riskColor}20`, color: riskColor, fontWeight: 600 }}>{row.risk}</span></td>
                        <td style={{ padding: "10px 14px" }}><span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 5, background: `${statusColor}20`, color: statusColor, fontWeight: 600 }}>{row.status}</span></td>
                        <td style={{ padding: "10px 14px", color: "var(--text-secondary)", fontSize: 12 }}>{row.owner}</td>
                        <td style={{ padding: "10px 14px", color: "var(--text-tertiary)", fontSize: 12 }}>{row.lastReview}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Obligations clés pour les systèmes à risque élevé</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
            {obligations.map((o, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", flex: 1, paddingRight: 8 }}>{o.title}</h3>
                  <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: "var(--accent-dim)", color: "var(--accent)", fontWeight: 600, flexShrink: 0 }}>{o.deadline}</span>
                </div>
                <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Modèle de gouvernance IA</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>
            L'EU AI Act ne prescrit pas d'organisation type, mais la mise en conformité requiert une gouvernance
            claire avec des rôles définis et une chaîne de responsabilité traçable.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {governance.map((g, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: g.color, width: 180, flexShrink: 0 }}>{g.role}</span>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>{g.resp}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </ModuleLayout>
  );
}
