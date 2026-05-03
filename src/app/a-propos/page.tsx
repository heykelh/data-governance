"use client";

const skills = [
  { category: "Gouvernance Data", items: ["DAMA-DMBOK", "Data Quality (KPI/SLA)", "Data Ownership", "Data Catalog", "Master Data Management", "Data Risk & Conformité", "Diagnostic maturité", "Feuille de route Data"] },
  { category: "Environnement Technique", items: ["SQL", "Python", "ETL / Pipelines", "Snowflake", "DBT", "Docker", "FastAPI", "APIs & ingestion"] },
  { category: "Conseil & Coordination", items: ["Animation ateliers", "Coordination métiers/IT", "Restitution stratégique", "Agile / SCRUM", "Gestion de projets Data", "RACI & gouvernance"] },
];

const timeline = [
  {
    period: "Fév 2026",
    title: "Master Data Engineer / Data Product Manager (Bac+5)",
    org: "École des Mines — Datascientest / Liora",
    type: "formation",
  },
  {
    period: "Oct 2022 → Aujourd'hui",
    title: "Technicien Supérieur de la Voie Ferrée",
    org: "SNCF Réseau",
    type: "work",
    details: "Pilotage d'équipes opérationnelles sur des environnements critiques à haute exigence de sécurité et de performance. Analyse terrain, coordination multi-acteurs, gestion des incidents et mise en place d'actions correctives visant à optimiser les process et réduire les risques opérationnels.",
  },
  {
    period: "Déc 2013 → Oct 2022",
    title: "Opérateur de Voie",
    org: "Sferis (Groupe SNCF)",
    type: "work",
    details: "Mise en œuvre et supervision de dispositifs de sécurité sur chantiers ferroviaires à forts enjeux. Application stricte de procédures et protocoles, garantissant la conformité aux normes réglementaires et opérationnelles.",
  },
  {
    period: "Jui 2012",
    title: "Licence Informatique (Bac+3)",
    org: "Université Montpellier 2",
    type: "formation",
  },
];

const certifs = [
  { name: "DAMA-DMBOK", status: "Maîtrisé", color: "var(--accent)" },
  { name: "RGPD / CNIL", status: "Opérationnel", color: "var(--accent-coral)" },
  { name: "EU AI Act", status: "Opérationnel", color: "var(--accent)" },
  { name: "BCBS239", status: "Projet démontré", color: "var(--accent-purple)" },
  { name: "Solvency II", status: "Projet démontré", color: "var(--accent-purple)" },
  { name: "Agile / SCRUM", status: "Pratiqué", color: "var(--accent-amber)" },
];

export default function AProposPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "60px 24px 48px", background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-hero-grid">
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>À propos</p>
              <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 12 }}>
                Heykel<br /><span style={{ color: "var(--accent)" }}>Hachiche</span>
              </h1>
              <p style={{ fontSize: 17, color: "var(--accent-purple)", fontWeight: 500, marginBottom: 20 }}>
                Data Engineer · Responsable Data Gouvernance
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>
                Data Engineer spécialisé en gouvernance des données, avec une double expertise
                technique et opérationnelle acquise au sein de la SNCF. Expérience dans
                la structuration de cadres de gouvernance, la réalisation de diagnostics de maturité Data & IA
                et le pilotage de feuilles de route Data. Capacité à fédérer des acteurs métiers, IT et fonctions
                support dans des environnements complexes et à forts enjeux.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="/contact" style={{
                  padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500,
                  background: "var(--accent)", color: "#0e0f0e", textDecoration: "none",
                }}>Me contacter</a>
                <a href="https://github.com/heykelh" target="_blank" rel="noreferrer" style={{
                  padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500,
                  background: "var(--bg-card)", border: "1px solid var(--border)",
                  color: "var(--text-primary)", textDecoration: "none",
                }}>GitHub</a>
              </div>
            </div>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
              {[
                { label: "Localisation", value: "Paris, Île-de-France" },
                { label: "Formation", value: "Master Data Engineer (Bac+5)" },
                { label: "Spécialité", value: "Data Governance & AI Compliance" },
                { label: "Email", value: "heykelhachiche@gmail.com" },
                { label: "GitHub", value: "github.com/heykelh" },
              ].map(r => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border)" }}>
                  <span style={{ fontSize: 13, color: "var(--text-tertiary)" }}>{r.label}</span>
                  <span style={{ fontSize: 13, color: "var(--text-primary)", fontWeight: 500, textAlign: "right", maxWidth: "60%" }}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 32 }}>Compétences</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {skills.map(s => (
              <div key={s.category} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px" }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.category}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.items.map(i => (
                    <span key={i} style={{
                      fontSize: 12, padding: "4px 10px", borderRadius: 6,
                      background: "var(--bg-surface)", border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}>{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 32 }}>Frameworks & référentiels</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {certifs.map(c => (
              <div key={c.name} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 16px" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>{c.name}</div>
                <div style={{ fontSize: 11, color: c.color, fontWeight: 500 }}>{c.status}</div>
              </div>
            ))}
          </div>
        </section>

        
      </div>
      <style>{`@media(max-width:768px){.about-hero-grid{grid-template-columns:1fr!important;gap:32px!important}}`}</style>
    </div>
  );
}
