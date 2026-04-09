"use client";
import { ModuleLayout } from "@/components/ui/ModuleLayout";

const axes = [
  { num: "01", title: "Stratégie & Vision Data", color: "var(--accent-amber)", desc: "Existence d'une stratégie data formalisée, alignée avec la stratégie d'entreprise, portée par le COMEX et dotée d'un budget dédié.", questions: ["La direction générale a-t-elle formalisé une vision et une stratégie data documentée ?", "Existe-t-il un CDO ou un sponsor exécutif dédié à la transformation data ?", "Le budget alloué à la data est-il défini, trackable et en croissance ?", "Les cas d'usage data sont-ils priorisés selon leur valeur business mesurable ?", "La stratégie data est-elle révisée et communiquée au moins une fois par an ?"] },
  { num: "02", title: "Gouvernance & Organisation", color: "var(--accent-coral)", desc: "Existence de rôles data formalisés (Data Owner, Data Steward, CDO), de processus de gouvernance et d'un cadre RACI opérationnel.", questions: ["Les rôles Data Owner et Data Steward sont-ils formellement définis et assignés par domaine ?", "Un Data Office ou une fonction de gouvernance centrale existe-t-elle ?", "Les décisions relatives aux données font-elles l'objet d'un processus de validation structuré ?", "Les politiques de données (qualité, sécurité, accès) sont-elles documentées et appliquées ?", "Un comité de gouvernance data se réunit-il régulièrement avec un ordre du jour formalisé ?"] },
  { num: "03", title: "Qualité des données", color: "var(--accent)", desc: "Mesure, surveillance et amélioration continue de la qualité des données selon les dimensions DAMA : complétude, exactitude, cohérence, actualité, unicité.", questions: ["Des KPI de qualité des données sont-ils définis et mesurés de façon régulière ?", "Existe-t-il un processus de détection et de correction automatique des anomalies ?", "Les règles de qualité sont-elles documentées dans un référentiel partagé ?", "Des SLA de qualité sont-ils définis et contractualisés avec les équipes productrices ?", "La qualité des données est-elle intégrée dans les critères de performance des équipes ?"] },
  { num: "04", title: "Architecture & Infrastructure", color: "var(--accent-purple)", desc: "Maturité de l'architecture data (Modern Data Stack, lakehouse, API-first), documentation des flux, gestion du data lineage et des métadonnées.", questions: ["L'architecture data est-elle documentée avec des schémas à jour des flux et des systèmes ?", "Le data lineage (traçabilité bout-en-bout des données) est-il implémenté et consultable ?", "Un Data Catalog est-il en place avec les métadonnées business et techniques documentées ?", "Les pipelines data sont-ils versionnés, testés et déployés via des processus CI/CD ?", "La plateforme data supporte-t-elle l'évolutivité et la montée en charge sans refonte majeure ?"] },
  { num: "05", title: "Culture & Compétences Data", color: "var(--accent-blue)", desc: "Niveau d'adoption de la culture data dans l'organisation, compétences des équipes, programmes de formation et communication interne.", questions: ["Les équipes métiers utilisent-elles activement les données pour leurs décisions quotidiennes ?", "Un programme de formation data literacy est-il déployé pour les profils non-techniques ?", "Les décisions stratégiques s'appuient-elles systématiquement sur des données et des analyses ?", "La direction valorise-t-elle et communique-t-elle régulièrement sur les succès data ?", "Les talents data sont-ils retenus grâce à des parcours de carrière attractifs ?"] },
  { num: "06", title: "IA & Innovation", color: "var(--accent-coral)", desc: "Existence de cas d'usage IA en production, cadre de gouvernance des modèles, gestion du risque algorithmique et conformité EU AI Act.", questions: ["Des modèles d'IA ou de machine learning sont-ils déployés en production avec un suivi de performance ?", "Un registre des modèles IA (AI Model Registry) est-il en place avec versioning et documentation ?", "Le risque algorithmique (biais, dérive, opacité) est-il évalué et mitigé de façon structurée ?", "L'organisation a-t-elle réalisé un inventaire de ses systèmes IA au regard de l'EU AI Act ?", "Une gouvernance IA (AI Owner, AI Steward, comité éthique) est-elle formalisée ?"] },
];

const levels = [
  { level: 1, name: "Initial", desc: "Aucun processus formel. Les pratiques sont ad hoc et réactives. La donnée est gérée de façon individuelle sans coordination.", color: "#ef4444" },
  { level: 2, name: "Émergent", desc: "Des initiatives locales existent mais restent isolées. Absence de standardisation. La gouvernance est informelle.", color: "#f97316" },
  { level: 3, name: "Défini", desc: "Des processus sont documentés et appliqués de façon cohérente. Les rôles sont identifiés. La gouvernance est structurée.", color: "#eab308" },
  { level: 4, name: "Mesuré", desc: "Les processus sont mesurés et pilotés via des KPI. Les décisions sont basées sur des données fiables et traçables.", color: "#22c55e" },
  { level: 5, name: "Optimisé", desc: "Amélioration continue pilotée par les données. L'organisation anticipe les évolutions et innove de façon systématique.", color: "var(--accent)" },
];

const benchmarks = [
  { sector: "Banque & Finance", scores: [3.8, 3.5, 3.7, 3.9, 3.2, 3.4], color: "var(--accent-blue)" },
  { sector: "Assurance", scores: [3.2, 2.9, 3.1, 3.0, 2.8, 2.5], color: "var(--accent-purple)" },
  { sector: "Infrastructure publique", scores: [2.4, 2.1, 2.3, 2.0, 2.2, 1.8], color: "var(--accent-amber)" },
];

export default function AuditMaturitePage() {
  return (
    <ModuleLayout moduleId="audit-maturite">
      <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Contexte & méthodologie</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="two-col">
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px" }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--accent-amber)", marginBottom: 10 }}>Pourquoi évaluer la maturité data ?</h3>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Les cabinets PwC, Deloitte et McKinsey évaluent la maturité data de leurs clients avant toute transformation.
                Sans diagnostic objectif, les investissements data manquent de priorisation, les projets échouent faute de
                fondations (gouvernance, qualité, culture) et les directions perdent confiance dans leurs données. Ce framework
                s'inspire de DAMA-DMBOK, du CMMI et des grilles d'évaluation Gartner.
              </p>
            </div>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px" }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--accent-amber)", marginBottom: 10 }}>Méthodologie d'évaluation</h3>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                30 questions réparties sur 6 axes. Chaque axe est noté de 1 (Initial) à 5 (Optimisé). Le score global
                permet un positionnement sur le modèle de maturité et une comparaison avec le benchmark sectoriel.
                Les écarts identifiés alimentent directement la roadmap data priorisée.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Modèle de maturité — 5 niveaux</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>Inspiré du CMMI (Capability Maturity Model Integration) et adapté aux enjeux Data & IA.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {levels.map(l => (
              <div key={l.level} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: `${l.color}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: l.color, fontFamily: "var(--font-display)" }}>{l.level}</span>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 3 }}>{l.name}</div>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Framework d'évaluation — 6 axes, 30 questions</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>Chaque axe comporte 5 questions évaluées sur une échelle de 1 à 5. Score maximum par axe : 25 points.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {axes.map((axe, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 7, background: `color-mix(in srgb, ${axe.color} 15%, transparent)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: axe.color }}>{axe.num}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>{axe.title}</h3>
                    <p style={{ fontSize: 12, color: "var(--text-tertiary)", margin: 0 }}>{axe.desc}</p>
                  </div>
                </div>
                <div style={{ padding: "14px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {axe.questions.map((q, qi) => (
                    <div key={qi} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 11, color: axe.color, fontWeight: 600, minWidth: 22, marginTop: 2 }}>Q{qi + 1}</span>
                      <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Benchmark sectoriel</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>Scores moyens observés par secteur sur les 6 axes — base de comparaison pour positionner votre organisation.</p>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <th style={{ padding: "12px 16px", textAlign: "left", color: "var(--text-tertiary)", fontWeight: 500, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em" }}>Secteur</th>
                    {axes.map(a => <th key={a.num} style={{ padding: "12px 12px", textAlign: "center", color: a.color, fontWeight: 500, fontSize: 11, whiteSpace: "nowrap" }}>{a.title.split(" ")[0]}</th>)}
                    <th style={{ padding: "12px 16px", textAlign: "center", color: "var(--text-tertiary)", fontWeight: 500, fontSize: 11 }}>Moy.</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarks.map((b, i) => {
                    const avg = (b.scores.reduce((s, v) => s + v, 0) / b.scores.length).toFixed(1);
                    return (
                      <tr key={i} style={{ borderBottom: i < benchmarks.length - 1 ? "1px solid var(--border)" : "none" }}>
                        <td style={{ padding: "12px 16px", fontWeight: 500, color: "var(--text-primary)" }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                            <span style={{ width: 8, height: 8, borderRadius: "50%", background: b.color, display: "inline-block" }} />
                            {b.sector}
                          </span>
                        </td>
                        {b.scores.map((s, si) => (
                          <td key={si} style={{ padding: "12px 12px", textAlign: "center", color: "var(--text-secondary)" }}>
                            <span style={{ padding: "3px 8px", borderRadius: 5, background: `${s >= 3.5 ? "#22c55e" : s >= 2.5 ? "#eab308" : "#ef4444"}20`, color: s >= 3.5 ? "#22c55e" : s >= 2.5 ? "#eab308" : "#ef4444", fontWeight: 600 }}>{s}</span>
                          </td>
                        ))}
                        <td style={{ padding: "12px 16px", textAlign: "center", fontWeight: 700, color: b.color }}>{avg}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>
      <style>{`.two-col{grid-template-columns:1fr 1fr}@media(max-width:768px){.two-col{grid-template-columns:1fr!important}}`}</style>
    </ModuleLayout>
  );
}
