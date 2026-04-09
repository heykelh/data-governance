"use client";
import { ModuleLayout } from "@/components/ui/ModuleLayout";

const pillars = [
  { num: "I", title: "Exigences quantitatives", color: "var(--accent-purple)", items: ["Capital de Solvabilité Requis (SCR)", "Minimum de Capital Requis (MCR)", "Valorisation des actifs et passifs", "Provisions techniques"] },
  { num: "II", title: "Gouvernance & gestion des risques", color: "var(--accent-coral)", items: ["Système de gouvernance", "ORSA (évaluation interne des risques)", "Fonction de gestion des risques", "Fonction actuarielle & audit interne"] },
  { num: "III", title: "Reporting & transparence", color: "var(--accent-amber)", items: ["SFCR (rapport public)", "RSR (rapport régulateur ACPR)", "QRT (tableaux de bord quantitatifs)", "Qualité et fiabilité des données"] },
];

const kpis = [
  { name: "Taux de complétude des données sinistres", target: "≥ 99%", axe: "Complétude", color: "var(--accent-purple)", desc: "Part des dossiers sinistres avec l'ensemble des champs obligatoires renseignés" },
  { name: "Délai de mise à jour des données actifs", target: "≤ J+1", axe: "Actualité", color: "var(--accent-coral)", desc: "Fraîcheur maximale des données de valorisation du portefeuille d'actifs" },
  { name: "Taux de cohérence inter-systèmes", target: "≥ 98%", axe: "Cohérence", color: "var(--accent-amber)", desc: "Concordance des données entre le système de gestion, la compta et le datawarehouse" },
  { name: "Taux d'unicité des contrats", target: "100%", axe: "Unicité", color: "var(--accent)", desc: "Absence de doublons dans le référentiel contrats — critique pour le calcul des provisions" },
  { name: "Exactitude du calcul SCR", target: "< 0.1% d'écart", axe: "Exactitude", color: "var(--accent-blue)", desc: "Écart maximum toléré entre calcul automatique et validation actuarielle" },
  { name: "Couverture du data lineage", target: "100% données SCR", axe: "Traçabilité", color: "var(--accent-purple)", desc: "Traçabilité documentée de toutes les données entrant dans le calcul du SCR" },
  { name: "Délai de production des QRT", target: "≤ 20 semaines", axe: "Disponibilité", color: "var(--accent-coral)", desc: "Délai de production des tableaux quantitatifs réglementaires après clôture" },
  { name: "Incidents qualité données / trimestre", target: "< 5", axe: "Fiabilité", color: "var(--accent-amber)", desc: "Nombre d'anomalies bloquantes détectées dans le processus de reporting réglementaire" },
];

const roles = [
  { role: "Chief Data Officer (CDO)", resp: "Pilote la stratégie data pour la conformité Solvency II. Responsable devant le COMEX de la qualité et de la disponibilité des données réglementaires.", scope: "Groupe" },
  { role: "Data Owner — Actuariat", resp: "Responsable de la qualité des données de provisions techniques, sinistres et hypothèses actuarielles. Valide les règles de gestion et les données d'entrée des modèles.", scope: "Direction technique" },
  { role: "Data Owner — Finance", resp: "Responsable des données de valorisation des actifs, de la comptabilité et des fonds propres. Garant de la cohérence entre IFRS et Solvency II.", scope: "Direction financière" },
  { role: "Data Steward — IT", resp: "Implémente les contrôles de qualité, gère le data lineage, maintient les pipelines de données réglementaires et documente les flux.", scope: "DSI" },
  { role: "Fonction actuarielle", resp: "Valide les modèles et les données d'entrée. Émet un avis formel sur la fiabilité des provisions. Interlocuteur privilégié de l'ACPR.", scope: "Direction technique" },
  { role: "Audit interne", resp: "Évalue l'efficacité du dispositif de gouvernance des données. Contrôle la conformité aux politiques internes et aux exigences Solvency II Pilier II.", scope: "Groupe" },
];

const lineage = [
  { step: "01", source: "Systèmes de gestion contrats", systems: "Guidewire, SAP FS-CD", arrow: true },
  { step: "02", source: "Intégration & normalisation", systems: "ETL Informatica / DBT", arrow: true },
  { step: "03", source: "Data Warehouse réglementaire", systems: "Snowflake / Oracle DWH", arrow: true },
  { step: "04", source: "Moteur de calcul SCR/MCR", systems: "Prophet / MoSes / Python", arrow: true },
  { step: "05", source: "Validation & contrôle qualité", systems: "Règles métier + actuariat", arrow: true },
  { step: "06", source: "Production QRT / SFCR / RSR", systems: "Reporting réglementaire ACPR", arrow: false },
];

export default function SolvencyIIPage() {
  return (
    <ModuleLayout moduleId="solvency-ii">
      <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Contexte réglementaire — Solvency II</h2>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px", borderLeft: "3px solid var(--accent-purple)", marginBottom: 16 }}>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.75 }}>
              Solvency II (Directive 2009/138/CE, révisée par Omnibus II) est le cadre prudentiel européen applicable aux
              organismes d'assurance et de réassurance depuis le 1er janvier 2016. Il vise à harmoniser la réglementation
              européenne en matière de capital, de gouvernance et de reporting. L'ACPR (Autorité de Contrôle Prudentiel et de
              Résolution) est l'autorité de supervision en France. Une donnée erronée dans le calcul du SCR peut conduire à
              une sous-évaluation du capital requis, exposant l'assureur à un risque de non-conformité réglementaire.
              <strong style={{ color: "var(--accent-purple)" }}> La qualité des données n'est pas un sujet IT — c'est une obligation réglementaire.</strong>
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="three-col">
            {pillars.map(p => (
              <div key={p.num} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "18px", borderTop: `3px solid ${p.color}` }}>
                <div style={{ fontSize: 11, color: p.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Pilier {p.num}</div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>{p.title}</h3>
                {p.items.map(i => (
                  <div key={i} style={{ display: "flex", gap: 7, alignItems: "flex-start", marginBottom: 6 }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: p.color, flexShrink: 0, marginTop: 7 }} />
                    <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{i}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Data Lineage — Flux de données réglementaires</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>
            Traçabilité bout-en-bout des données entrant dans le calcul du SCR. Exigence explicite du Pilier II
            et de la politique de données ACPR.
          </p>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {lineage.map((l, i) => (
                <div key={i}>
                  <div style={{ display: "flex", gap: 14, alignItems: "center", padding: "12px 0" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: "color-mix(in srgb, var(--accent-purple) 15%, transparent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "var(--accent-purple)", flexShrink: 0 }}>{l.step}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{l.source}</div>
                      <div style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{l.systems}</div>
                    </div>
                  </div>
                  {l.arrow && (
                    <div style={{ paddingLeft: 48, paddingBottom: 4 }}>
                      <div style={{ width: 1, height: 16, background: "var(--border)", marginLeft: 15 }} />
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 11 }}>
                        <path d="M1 1l4 4 4-4" stroke="var(--accent-purple)" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>15 KPI de qualité des données — Données critiques Solvency II</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>
            Indicateurs de qualité définis selon les 7 dimensions DAMA, appliqués aux données entrant dans
            le calcul du SCR, des provisions techniques et du reporting réglementaire.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
            {kpis.map((k, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: `color-mix(in srgb, ${k.color} 15%, transparent)`, color: k.color, fontWeight: 600 }}>{k.axe}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: k.color, fontFamily: "var(--font-display)" }}>{k.target}</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>{k.name}</div>
                <div style={{ fontSize: 12, color: "var(--text-tertiary)", lineHeight: 1.5 }}>{k.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Modèle de gouvernance — Rôles & responsabilités</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>
            Organisation type pour un assureur de taille intermédiaire (1-5 Mds€ de primes), conforme aux
            exigences du Pilier II de Solvency II.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {roles.map((r, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 20px", display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
                <div style={{ minWidth: 200 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-purple)", marginBottom: 2 }}>{r.role}</div>
                  <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{r.scope}</div>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0, lineHeight: 1.6, flex: 1 }}>{r.resp}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <style>{`.three-col{grid-template-columns:repeat(3,1fr)}@media(max-width:900px){.three-col{grid-template-columns:1fr!important}}`}</style>
    </ModuleLayout>
  );
}
