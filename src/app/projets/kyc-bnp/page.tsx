"use client";
import Link from "next/link";
import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const userStories = [
  { id: "US-01", epic: "Onboarding", role: "Chargé de clientèle", action: "initier un dossier KYC depuis le CRM", benefit: "éviter les ressaisies entre systèmes", priority: "Must", points: 8, status: "done" },
  { id: "US-02", epic: "Onboarding", role: "Client", action: "soumettre mes documents d'identité via le portail", benefit: "ne pas me déplacer en agence", priority: "Must", points: 5, status: "done" },
  { id: "US-03", epic: "Onboarding", role: "Client", action: "suivre l'avancement de mon dossier en temps réel", benefit: "avoir de la visibilité sur le délai", priority: "Should", points: 3, status: "done" },
  { id: "US-04", epic: "Vérification", role: "Compliance Officer", action: "recevoir une alerte automatique sur les dossiers à risque élevé", benefit: "prioriser mon travail d'analyse", priority: "Must", points: 8, status: "done" },
  { id: "US-05", epic: "Vérification", role: "Système", action: "vérifier automatiquement les documents via OCR", benefit: "réduire le temps de traitement de 60%", priority: "Must", points: 13, status: "done" },
  { id: "US-06", epic: "Vérification", role: "Compliance Officer", action: "consulter le scoring de risque client calculé automatiquement", benefit: "objectiver ma décision", priority: "Must", points: 8, status: "done" },
  { id: "US-07", epic: "Vérification", role: "Compliance Officer", action: "accéder à l'historique complet des échanges d'un dossier", benefit: "tracer toutes les décisions pour l'audit", priority: "Must", points: 5, status: "done" },
  { id: "US-08", epic: "Vérification", role: "Risk Manager", action: "paramétrer les seuils de risque par segment client", benefit: "adapter le dispositif à notre appétit au risque", priority: "Should", points: 5, status: "in-progress" },
  { id: "US-09", epic: "Conformité", role: "Compliance Officer", action: "générer automatiquement le rapport LCB-FT mensuel", benefit: "respecter les délais réglementaires sans effort manuel", priority: "Must", points: 8, status: "done" },
  { id: "US-10", epic: "Conformité", role: "DSI", action: "consulter le data lineage de chaque donnée KYC", benefit: "garantir la traçabilité complète pour l'audit", priority: "Must", points: 5, status: "done" },
  { id: "US-11", epic: "Conformité", role: "DPO", action: "purger automatiquement les données après la durée de conservation légale", benefit: "être conforme RGPD sans action manuelle", priority: "Must", points: 8, status: "in-progress" },
  { id: "US-12", epic: "Conformité", role: "Audit interne", action: "exporter l'intégralité du journal d'audit sur une période donnée", benefit: "préparer les revues réglementaires en autonomie", priority: "Should", points: 3, status: "done" },
  { id: "US-13", epic: "Pilotage", role: "Manager agence", action: "visualiser le taux de complétion des dossiers KYC de mon équipe", benefit: "identifier les blocages et les former", priority: "Should", points: 5, status: "done" },
  { id: "US-14", epic: "Pilotage", role: "RCCI", action: "accéder au tableau de bord de conformité en temps réel", benefit: "piloter le dispositif sans extraction manuelle", priority: "Must", points: 8, status: "in-progress" },
  { id: "US-15", epic: "Pilotage", role: "CDO", action: "suivre la qualité des données KYC par indicateur", benefit: "garantir la fiabilité du dispositif", priority: "Should", points: 5, status: "done" },
  { id: "US-16", epic: "Intégration SI", role: "DSI", action: "synchroniser le dossier KYC validé vers le Core Banking", benefit: "éviter les doubles saisies et les erreurs de transfert", priority: "Must", points: 13, status: "done" },
  { id: "US-17", epic: "Intégration SI", role: "DSI", action: "gérer les erreurs d'API entre systèmes avec rejeu automatique", benefit: "assurer la fiabilité des échanges inter-systèmes", priority: "Should", points: 8, status: "in-progress" },
  { id: "US-18", epic: "Intégration SI", role: "Chargé de clientèle", action: "recevoir une notification quand un dossier est rejeté avec le motif détaillé", benefit: "corriger et relancer sans délai", priority: "Must", points: 3, status: "done" },
];

const testScenarios = [
  { id: "TS-01", module: "Onboarding", cas: "Création dossier nominal", donnees: "Client particulier, CNI valide, domicile France", attendu: "Dossier créé en < 30s, statut 'En cours'", priorite: "P1", statut: "OK" },
  { id: "TS-02", module: "Onboarding", cas: "Document expiré", donnees: "CNI avec date expiration dépassée", attendu: "Message d'erreur explicite, dossier bloqué", priorite: "P1", statut: "OK" },
  { id: "TS-03", module: "Onboarding", cas: "Client déjà KYC", donnees: "Client existant avec KYC valide < 2 ans", attendu: "Alerte 'KYC existant', proposition de mise à jour", priorite: "P2", statut: "OK" },
  { id: "TS-04", module: "Vérification OCR", cas: "Lecture document nominal", donnees: "PDF lisible, données cohérentes", attendu: "Pré-remplissage formulaire à 95%+, score confiance > 0.9", priorite: "P1", statut: "OK" },
  { id: "TS-05", module: "Vérification OCR", cas: "Document illisible", donnees: "Photo floue ou trop sombre", attendu: "Score confiance < 0.5, demande de rescan automatique", priorite: "P1", statut: "OK" },
  { id: "TS-06", module: "Vérification OCR", cas: "Document falsifié (simulation)", donnees: "Document avec métadonnées modifiées", attendu: "Flag 'Document suspect', escalade Compliance", priorite: "P1", statut: "KO — à corriger" },
  { id: "TS-07", module: "Scoring risque", cas: "Client faible risque", donnees: "Particulier, revenus stables, pas de PPE", attendu: "Score < 30, validation automatique", priorite: "P1", statut: "OK" },
  { id: "TS-08", module: "Scoring risque", cas: "Client PPE (Personne Politiquement Exposée)", donnees: "Flag PPE actif dans référentiel", attendu: "Score > 80, escalade obligatoire RCCI", priorite: "P1", statut: "OK" },
  { id: "TS-09", module: "Scoring risque", cas: "Pays à risque élevé", donnees: "Adresse fiscale dans pays GAFI liste noire", attendu: "Blocage automatique, alerte Compliance", priorite: "P1", statut: "OK" },
  { id: "TS-10", module: "Conformité RGPD", cas: "Droit d'accès client", donnees: "Demande DSAR soumise via portail", attendu: "Export données complet en < 24h", priorite: "P2", statut: "OK" },
  { id: "TS-11", module: "Conformité RGPD", cas: "Purge après délai légal", donnees: "Dossier avec date clôture > 5 ans", attendu: "Purge automatique à J+1825, log d'audit conservé", priorite: "P2", statut: "En cours" },
  { id: "TS-12", module: "Intégration Core Banking", cas: "Synchro nominal", donnees: "Dossier KYC validé Compliance", attendu: "Statut 'KYC_VALID' propagé dans CBS en < 5 min", priorite: "P1", statut: "OK" },
  { id: "TS-13", module: "Intégration Core Banking", cas: "Échec API CBS", donnees: "CBS indisponible (simulation timeout)", attendu: "Mécanisme de rejeu x3, alerte DSI, aucune perte de données", priorite: "P1", statut: "OK" },
  { id: "TS-14", module: "Reporting", cas: "Génération rapport LCB-FT", donnees: "Périmètre mensuel, données complètes", attendu: "PDF généré en < 2 min, données cohérentes avec source", priorite: "P2", statut: "OK" },
  { id: "TS-15", module: "Reporting", cas: "Dashboard temps réel", donnees: "50 dossiers en cours simultanément", attendu: "Rafraîchissement < 10s, aucune perte de données", priorite: "P2", statut: "OK" },
  { id: "TS-16", module: "Performance", cas: "Charge nominale", donnees: "100 utilisateurs simultanés", attendu: "Temps réponse < 2s pour 95% des requêtes", priorite: "P1", statut: "OK" },
  { id: "TS-17", module: "Performance", cas: "Pic de charge", donnees: "500 utilisateurs simultanés (simulation lundi matin)", attendu: "Pas de coupure, dégradation gracieuse si besoin", priorite: "P2", statut: "En cours" },
  { id: "TS-18", module: "Accessibilité", cas: "Navigation clavier", donnees: "Parcours complet sans souris", attendu: "100% des actions réalisables au clavier", priorite: "P3", statut: "OK" },
  { id: "TS-19", module: "Sécurité", cas: "Tentative d'accès non autorisé", donnees: "Token JWT expiré", attendu: "Rejet 401, redirection login, log sécurité", priorite: "P1", statut: "OK" },
  { id: "TS-20", module: "Sécurité", cas: "Injection SQL (simulation)", donnees: "Champ formulaire avec payload SQL", attendu: "Requête rejetée, aucune donnée exposée, alerte sécurité", priorite: "P1", statut: "OK" },
  { id: "TS-21", module: "Data Quality", cas: "Champ obligatoire manquant", donnees: "Soumission sans SIRET pour personne morale", attendu: "Erreur de validation explicite avant soumission", priorite: "P1", statut: "OK" },
  { id: "TS-22", module: "Data Quality", cas: "Doublon détecté", donnees: "Même NIF déjà présent dans le SI", attendu: "Alerte doublon, proposition fusion ou mise à jour", priorite: "P2", statut: "OK" },
  { id: "TS-23", module: "Conduite du changement", cas: "Première connexion chargé de clientèle", donnees: "Compte nouveau créé", attendu: "Parcours onboarding guidé déclenché automatiquement", priorite: "P3", statut: "OK" },
  { id: "TS-24", module: "Conduite du changement", cas: "Aide contextuelle", donnees: "Clic sur icône '?' dans formulaire", attendu: "Tooltip pertinent affiché < 300ms", priorite: "P3", statut: "OK" },
];

const dataLineage = [
  { step: 1, label: "Source Client", detail: "Portail web / Agence", type: "source", icon: "👤", owner: "Digital Factory", quality: 92 },
  { step: 2, label: "Ingestion & Validation", detail: "API Gateway + OCR Engine", type: "process", icon: "⚙️", owner: "DSI Middleware", quality: 95 },
  { step: 3, label: "Référentiel Tiers", detail: "MDM Client — données canoniques", type: "store", icon: "🗄️", owner: "Data Owner : CDO", quality: 98 },
  { step: 4, label: "Moteur de Scoring", detail: "Règles LCB-FT + ML Risk Score", type: "process", icon: "🧮", owner: "Risk & Compliance", quality: 96 },
  { step: 5, label: "Dossier KYC validé", detail: "GED + Base Conformité", type: "store", icon: "✅", owner: "Data Owner : RCCI", quality: 99 },
  { step: 6, label: "Core Banking System", detail: "Propagation statut KYC_VALID", type: "target", icon: "🏦", owner: "DSI Core", quality: 99 },
  { step: 7, label: "Reporting & Audit", detail: "DataMart Conformité + DWH", type: "target", icon: "📊", owner: "Data Steward : Compliance", quality: 97 },
];

const kpiDashboard = [
  { label: "Délai moyen traitement KYC", before: "45 min", after: "12 min", unit: "", trend: "down", impact: "−73%" },
  { label: "Taux de complétion dossiers", before: "68%", after: "94%", unit: "", trend: "up", impact: "+38%" },
  { label: "Taux d'erreurs de saisie", before: "12%", after: "1.8%", unit: "", trend: "down", impact: "−85%" },
  { label: "Coût par dossier traité", before: "87 €", after: "23 €", unit: "", trend: "down", impact: "−74%" },
  { label: "Satisfaction chargés (NPS interne)", before: "22", after: "61", unit: "", trend: "up", impact: "+178%" },
  { label: "Conformité LCB-FT (taux)", before: "81%", after: "99.2%", unit: "", trend: "up", impact: "+22%" },
];

const phases = [
  { num: "01", label: "Étude préalable & cadrage", desc: "Analyse stakeholders, MoSCoW, périmètre SI, contraintes réglementaires (LCB-FT, RGPD)", duration: "2j", color: "#6366f1" },
  { num: "02", label: "Analyse AS-IS", desc: "Process map BPMN, 12 pain points identifiés, indicateurs actuels, interviews personas", duration: "2j", color: "#8b5cf6" },
  { num: "03", label: "Conception TO-BE & Exigences", desc: "18 User Stories (BDD), SFD 3 modules, Matrice de traçabilité RTM, règles de gestion", duration: "3j", color: "#0ea5e9" },
  { num: "04", label: "Plan de tests & UAT", desc: "24 scénarios, grille Go/No-Go, gestion anomalies P1→P4, tableau de bord recette", duration: "2j", color: "#10b981" },
  { num: "05", label: "Data Gouvernance KYC", desc: "Data lineage, cartographie PII, Data Owners/Stewards, KPI qualité, conformité RGPD×LCB-FT×BCBS239", duration: "1j", color: "#f59e0b" },
  { num: "06", label: "Change Management & Déploiement", desc: "Plan de déploiement phasé, documentation utilisateur, KPIs adoption post go-live", duration: "2j", color: "#ef4444" },
];

const epicColors: Record<string, string> = {
  "Onboarding": "#6366f1",
  "Vérification": "#0ea5e9",
  "Conformité": "#10b981",
  "Pilotage": "#f59e0b",
  "Intégration SI": "#ef4444",
};

const statusColors: Record<string, { bg: string; color: string; label: string }> = {
  "done": { bg: "#d1fae5", color: "#065f46", label: "✓ Livré" },
  "in-progress": { bg: "#fef3c7", color: "#92400e", label: "⏳ En cours" },
  "todo": { bg: "#f3f4f6", color: "#6b7280", label: "À faire" },
};

const testStatusColors: Record<string, { bg: string; color: string }> = {
  "OK": { bg: "#d1fae5", color: "#065f46" },
  "KO — à corriger": { bg: "#fee2e2", color: "#991b1b" },
  "En cours": { bg: "#fef3c7", color: "#92400e" },
};

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>{children}</h2>
      {sub && <p style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 6 }}>{sub}</p>}
    </div>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: "var(--bg-card)",
      border: "1px solid var(--border)",
      borderRadius: 12,
      padding: 24,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── TABS ────────────────────────────────────────────────────────────────────

const TABS = [
  { id: "overview", label: "Vue d'ensemble" },
  { id: "user-stories", label: "User Stories" },
  { id: "tests", label: "Plan de tests UAT" },
  { id: "data-lineage", label: "Data Lineage" },
  { id: "kpi", label: "KPIs & Impact" },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function KycBnpPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [epicFilter, setEpicFilter] = useState<string>("Tous");
  const [moduleFilter, setModuleFilter] = useState<string>("Tous");

  const epics = ["Tous", ...Array.from(new Set(userStories.map(u => u.epic)))];
  const modules = ["Tous", ...Array.from(new Set(testScenarios.map(t => t.module)))];

  const filteredStories = epicFilter === "Tous" ? userStories : userStories.filter(u => u.epic === epicFilter);
  const filteredTests = moduleFilter === "Tous" ? testScenarios : testScenarios.filter(t => t.module === moduleFilter);

  const doneCount = testScenarios.filter(t => t.statut === "OK").length;
  const koCount = testScenarios.filter(t => t.statut.startsWith("KO")).length;
  const inProgressCount = testScenarios.filter(t => t.statut === "En cours").length;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-base)", color: "var(--text-primary)", paddingTop: 80 }}>
      {/* HEADER */}
      <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)", borderBottom: "1px solid rgba(99,102,241,0.2)", padding: "48px 0 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <Link href="/projets" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "#a5b4fc", textDecoration: "none", marginBottom: 20 }}>
            ← Retour aux projets
          </Link>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 99, background: "rgba(99,102,241,0.2)", color: "#a5b4fc", fontWeight: 600 }}>Business Analysis</span>
                <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 99, background: "rgba(16,185,129,0.2)", color: "#6ee7b7", fontWeight: 600 }}>KYC / LCB-FT</span>
                <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 99, background: "rgba(245,158,11,0.2)", color: "#fcd34d", fontWeight: 600 }}>Data Gouvernance</span>
                <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 99, background: "rgba(239,68,68,0.2)", color: "#fca5a5", fontWeight: 600 }}>Banque de détail</span>
              </div>
              <h1 style={{ fontSize: 32, fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 12 }}>
                KYC Digital Transformation
              </h1>
              <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.65, maxWidth: 620, margin: 0 }}>
                Mission BA complète simulée pour BNP Paribas Banque de Détail — modernisation du parcours KYC retail de bout en bout : de l'analyse des besoins métier au déploiement, avec cadre de Data Gouvernance intégré.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { val: "14j", label: "Durée projet" },
                { val: "18", label: "User Stories" },
                { val: "24", label: "Scénarios UAT" },
                { val: "−73%", label: "Délai traitement" },
              ].map(s => (
                <div key={s.label} style={{ textAlign: "center", padding: "16px 20px", background: "rgba(255,255,255,0.06)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#a5b4fc" }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TABS NAV */}
      <div style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-base)", position: "sticky", top: 72, zIndex: 10 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", gap: 0, overflowX: "auto" }}>
          {TABS.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              padding: "14px 20px", border: "none", background: "none", cursor: "pointer",
              fontSize: 14, fontWeight: activeTab === tab.id ? 600 : 400,
              color: activeTab === tab.id ? "#6366f1" : "var(--text-secondary)",
              borderBottom: activeTab === tab.id ? "2px solid #6366f1" : "2px solid transparent",
              whiteSpace: "nowrap", transition: "all 0.15s",
            }}>{tab.label}</button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* ── OVERVIEW ── */}
        {activeTab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <SectionTitle sub="Contexte, enjeux et déroulement de la mission BA complète">Contexte de la mission</SectionTitle>
              <Card>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                  {[
                    { label: "Entité", val: "BNP Paribas — Banque de Détail France" },
                    { label: "Périmètre SI", val: "CRM, Core Banking, GED, Portail Client, MDM Tiers" },
                    { label: "Enjeu réglementaire", val: "LCB-FT 5e directive, RGPD Art. 25, BCBS239" },
                    { label: "Problème initial", val: "80% du processus manuel — 45 min/dossier en moyenne" },
                    { label: "Objectif", val: "KYC digital automatisé < 15 min, 0 ressaisie, traçabilité totale" },
                    { label: "Rôle BA", val: "Point de contact unique Métier ↔ IT sur le périmètre fonctionnel" },
                  ].map(item => (
                    <div key={item.label}>
                      <div style={{ fontSize: 11, color: "var(--text-tertiary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 14, color: "var(--text-primary)" }}>{item.val}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div>
              <SectionTitle sub="6 phases couvrant le cycle complet d'une mission Business Analyst">Plan de mission — 14 jours</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {phases.map((p, i) => (
                  <div key={p.num} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 20, background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, borderLeft: `4px solid ${p.color}` }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: p.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{p.num}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                        <span style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>{p.label}</span>
                        <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 99, background: `${p.color}22`, color: p.color, fontWeight: 600 }}>{p.duration}</span>
                      </div>
                      <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle sub="Les 11 livrables produits sur cette mission">Livrables de la mission</SectionTitle>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                {[
                  { label: "Dossier de cadrage", icon: "📋" },
                  { label: "Process map AS-IS (BPMN)", icon: "🗺️" },
                  { label: "Process map TO-BE", icon: "🎯" },
                  { label: "18 User Stories BDD", icon: "📝" },
                  { label: "SFD — 3 modules fonctionnels", icon: "📐" },
                  { label: "Matrice RTM", icon: "🔗" },
                  { label: "24 scénarios UAT", icon: "🧪" },
                  { label: "Data Lineage KYC", icon: "🔄" },
                  { label: "Framework Data Gouvernance", icon: "🏛️" },
                  { label: "Plan de déploiement phasé", icon: "🚀" },
                  { label: "Dashboard KPIs post go-live", icon: "📊" },
                ].map(l => (
                  <div key={l.label} style={{ padding: "14px 16px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 20 }}>{l.icon}</span>
                    <span style={{ fontSize: 13, color: "var(--text-primary)", fontWeight: 500 }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── USER STORIES ── */}
        {activeTab === "user-stories" && (
          <div>
            <SectionTitle sub="18 user stories structurées en format BDD (Given/When/Then) avec critères d'acceptance">Backlog produit — User Stories</SectionTitle>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {epics.map(e => (
                <button key={e} onClick={() => setEpicFilter(e)} style={{
                  padding: "6px 14px", borderRadius: 99, fontSize: 12, fontWeight: 500, cursor: "pointer", border: "1px solid var(--border)",
                  background: epicFilter === e ? (epicColors[e] ?? "#6366f1") : "var(--bg-card)",
                  color: epicFilter === e ? "#fff" : "var(--text-secondary)",
                  transition: "all 0.15s",
                }}>{e}</button>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filteredStories.map(us => (
                <div key={us.id} style={{ padding: 20, background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, borderLeft: `3px solid ${epicColors[us.epic] ?? "#6366f1"}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "var(--text-tertiary)", fontFamily: "monospace" }}>{us.id}</span>
                    <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 99, background: `${epicColors[us.epic]}22`, color: epicColors[us.epic], fontWeight: 600 }}>{us.epic}</span>
                    <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 99, background: us.priority === "Must" ? "#fee2e2" : "#fef3c7", color: us.priority === "Must" ? "#991b1b" : "#92400e", fontWeight: 600 }}>{us.priority} Have</span>
                    <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 99, background: "var(--bg-base)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}>{us.points} pts</span>
                    <span style={{ marginLeft: "auto", fontSize: 11, padding: "2px 8px", borderRadius: 99, background: statusColors[us.status].bg, color: statusColors[us.status].color, fontWeight: 600 }}>{statusColors[us.status].label}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--text-primary)", margin: "0 0 8px", lineHeight: 1.6 }}>
                    <strong>En tant que</strong> {us.role}, <strong>je veux</strong> {us.action}, <strong>afin de</strong> {us.benefit}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TESTS ── */}
        {activeTab === "tests" && (
          <div>
            <SectionTitle sub="24 scénarios de test fonctionnel et UAT avec critères Go/No-Go">Plan de recette — Scénarios UAT</SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
              {[
                { val: doneCount, label: "Scénarios OK", color: "#10b981" },
                { val: koCount, label: "KO — À corriger", color: "#ef4444" },
                { val: inProgressCount, label: "En cours", color: "#f59e0b" },
              ].map(s => (
                <div key={s.label} style={{ padding: 20, background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, textAlign: "center" }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: s.color }}>{s.val}</div>
                  <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
              {modules.map(m => (
                <button key={m} onClick={() => setModuleFilter(m)} style={{
                  padding: "6px 14px", borderRadius: 99, fontSize: 12, fontWeight: 500, cursor: "pointer", border: "1px solid var(--border)",
                  background: moduleFilter === m ? "#6366f1" : "var(--bg-card)",
                  color: moduleFilter === m ? "#fff" : "var(--text-secondary)",
                  transition: "all 0.15s",
                }}>{m}</button>
              ))}
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: "var(--bg-card)", borderBottom: "2px solid var(--border)" }}>
                    {["ID", "Module", "Cas de test", "Données d'entrée", "Résultat attendu", "Priorité", "Statut"].map(h => (
                      <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredTests.map((t, i) => (
                    <tr key={t.id} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--bg-card)" }}>
                      <td style={{ padding: "12px 14px", fontFamily: "monospace", fontSize: 11, color: "var(--text-tertiary)" }}>{t.id}</td>
                      <td style={{ padding: "12px 14px", fontWeight: 500, color: "var(--text-primary)", whiteSpace: "nowrap" }}>{t.module}</td>
                      <td style={{ padding: "12px 14px", color: "var(--text-primary)" }}>{t.cas}</td>
                      <td style={{ padding: "12px 14px", color: "var(--text-secondary)", fontSize: 12 }}>{t.donnees}</td>
                      <td style={{ padding: "12px 14px", color: "var(--text-secondary)", fontSize: 12 }}>{t.attendu}</td>
                      <td style={{ padding: "12px 14px" }}>
                        <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 99, background: t.priorite === "P1" ? "#fee2e2" : t.priorite === "P2" ? "#fef3c7" : "#f3f4f6", color: t.priorite === "P1" ? "#991b1b" : t.priorite === "P2" ? "#92400e" : "#6b7280", fontWeight: 600 }}>{t.priorite}</span>
                      </td>
                      <td style={{ padding: "12px 14px" }}>
                        <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 99, background: (testStatusColors[t.statut] ?? testStatusColors["En cours"]).bg, color: (testStatusColors[t.statut] ?? testStatusColors["En cours"]).color, fontWeight: 600 }}>{t.statut}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── DATA LINEAGE ── */}
        {activeTab === "data-lineage" && (
          <div>
            <SectionTitle sub="Traçabilité complète des données KYC de la source au reporting — Data Owners identifiés">Data Lineage & Gouvernance KYC</SectionTitle>
            <Card style={{ marginBottom: 24 }}>
              <div style={{ overflowX: "auto", paddingBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 0, minWidth: 800 }}>
                  {dataLineage.map((node, i) => (
                    <div key={node.step} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                      <div style={{ flex: 1, textAlign: "center" }}>
                        <div style={{
                          width: 56, height: 56, borderRadius: 12, margin: "0 auto 8px",
                          background: node.type === "source" ? "#ede9fe" : node.type === "process" ? "#dbeafe" : node.type === "store" ? "#d1fae5" : "#fef3c7",
                          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
                          border: `2px solid ${node.type === "source" ? "#8b5cf6" : node.type === "process" ? "#3b82f6" : node.type === "store" ? "#10b981" : "#f59e0b"}`,
                        }}>{node.icon}</div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>{node.label}</div>
                        <div style={{ fontSize: 10, color: "var(--text-tertiary)", marginBottom: 4 }}>{node.detail}</div>
                        <div style={{ fontSize: 10, color: "var(--text-secondary)" }}>👤 {node.owner}</div>
                        <div style={{ marginTop: 6, fontSize: 10, fontWeight: 700, color: node.quality >= 97 ? "#10b981" : node.quality >= 93 ? "#f59e0b" : "#ef4444" }}>Qualité : {node.quality}%</div>
                      </div>
                      {i < dataLineage.length - 1 && (
                        <div style={{ fontSize: 18, color: "var(--text-tertiary)", padding: "0 4px", flexShrink: 0 }}>→</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Card>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>🏛️ Matrice Conformité Data</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { ref: "RGPD Art. 25", label: "Privacy by design", statut: "Conforme" },
                    { ref: "RGPD Art. 30", label: "Registre traitements PII", statut: "Conforme" },
                    { ref: "LCB-FT 5e dir.", label: "Conservation 5 ans", statut: "Conforme" },
                    { ref: "LCB-FT Art. 12", label: "Gel d'avoirs, PPE", statut: "Conforme" },
                    { ref: "BCBS239", label: "Agrégation & reporting risque", statut: "Conforme" },
                    { ref: "DSP2 Art. 97", label: "Authentification forte", statut: "Conforme" },
                  ].map(r => (
                    <div key={r.ref} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid var(--border)" }}>
                      <div>
                        <span style={{ fontSize: 11, fontFamily: "monospace", color: "#6366f1" }}>{r.ref}</span>
                        <span style={{ fontSize: 13, color: "var(--text-secondary)", marginLeft: 8 }}>{r.label}</span>
                      </div>
                      <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 99, background: "#d1fae5", color: "#065f46", fontWeight: 600 }}>✓ {r.statut}</span>
                    </div>
                  ))}
                </div>
              </Card>
              <Card>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>📊 KPI Data Quality KYC</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { label: "Complétude des champs obligatoires", val: 98.7 },
                    { label: "Exactitude (OCR vs saisie manuelle)", val: 97.2 },
                    { label: "Fraîcheur (données < 2 ans)", val: 94.1 },
                    { label: "Unicité (pas de doublons)", val: 99.4 },
                    { label: "Cohérence inter-systèmes", val: 96.8 },
                  ].map(k => (
                    <div key={k.label}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                        <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{k.label}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: k.val >= 97 ? "#10b981" : "#f59e0b" }}>{k.val}%</span>
                      </div>
                      <div style={{ height: 6, background: "var(--border)", borderRadius: 99 }}>
                        <div style={{ height: "100%", width: `${k.val}%`, background: k.val >= 97 ? "#10b981" : "#f59e0b", borderRadius: 99 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* ── KPI ── */}
        {activeTab === "kpi" && (
          <div>
            <SectionTitle sub="Mesure de l'impact business — comparaison avant / après déploiement sur 90 jours">Dashboard KPIs & Impact métier</SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {kpiDashboard.map(k => (
                <div key={k.label} style={{ padding: "20px 24px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                  <div style={{ flex: 2, minWidth: 200 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 2 }}>{k.label}</div>
                  </div>
                  <div style={{ textAlign: "center", minWidth: 80 }}>
                    <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginBottom: 4 }}>AVANT</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "#ef4444" }}>{k.before}</div>
                  </div>
                  <div style={{ fontSize: 20, color: "var(--text-tertiary)" }}>→</div>
                  <div style={{ textAlign: "center", minWidth: 80 }}>
                    <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginBottom: 4 }}>APRÈS</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "#10b981" }}>{k.after}</div>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <span style={{ fontSize: 15, fontWeight: 800, padding: "6px 14px", borderRadius: 99, background: k.trend === "up" ? "#d1fae5" : "#d1fae5", color: "#065f46" }}>{k.impact}</span>
                  </div>
                </div>
              ))}
            </div>
            <Card>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>🚀 Plan de déploiement phasé</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {[
                  { phase: "Pilote", scope: "3 agences Île-de-France", duration: "J+0 → J+30", go: "Go/No-Go : taux adoption > 80%", color: "#6366f1" },
                  { phase: "Régional", scope: "50 agences Grand-Ouest + PACA", duration: "J+31 → J+60", go: "Go/No-Go : NPS > 45 + 0 anomalie P1", color: "#0ea5e9" },
                  { phase: "National", scope: "2 000 agences France entière", duration: "J+61 → J+90", go: "Stabilité 30 jours + reporting RCCI validé", color: "#10b981" },
                ].map(p => (
                  <div key={p.phase} style={{ padding: 16, borderRadius: 10, border: `2px solid ${p.color}`, background: `${p.color}08` }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: p.color, marginBottom: 6, textTransform: "uppercase" }}>{p.phase}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>{p.scope}</div>
                    <div style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 8 }}>{p.duration}</div>
                    <div style={{ fontSize: 11, color: "var(--text-tertiary)", fontStyle: "italic" }}>{p.go}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
