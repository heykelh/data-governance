"use client";

const skills = [
  {
    category: "Data Governance & Conformité",
    color: "var(--accent)",
    items: ["DAMA-DMBOK", "Data Quality (KPI/SLA)", "Data Ownership & Stewardship", "Data Catalog & Metadata", "Master Data Management", "Data Lineage", "Diagnostic maturité Data & IA", "Feuille de route data", "RACI & modèles de rôles"],
  },
  {
    category: "Réglementaire",
    color: "var(--accent-purple)",
    items: ["RGPD / CNIL", "BCBS239", "Solvency II", "EU AI Act (Annex III)", "Data Risk & audit de conformité"],
  },
  {
    category: "Data Engineering",
    color: "var(--accent-amber)",
    items: ["Python", "SQL", "ETL / Pipelines", "APIs & ingestion", "Snowflake", "DBT", "Docker", "FastAPI", "Architecture Data"],
  },
  {
    category: "Analyse & Visualisation",
    color: "var(--accent-coral)",
    items: ["Power BI", "Analyse exploratoire", "KPI & dashboarding", "Restitution stratégique"],
  },
  {
    category: "Conseil & Coordination",
    color: "var(--accent-blue)",
    items: ["Animation ateliers & communautés", "Coordination métiers / IT", "Gestion de projets data", "Agile / SCRUM", "Restitution C-level"],
  },
];

const projets = [
  { title: "Audit & Gouvernance BCBS239", href: "https://bcbs239-data-governance.vercel.app/", tag: "Live", color: "var(--accent)" },
  { title: "Naomi Data Steward Lab", href: "https://naomi-data-steward.vercel.app/", tag: "Live", color: "var(--accent-purple)" },
  { title: "AI for Kuala Lumpur", href: "https://ai-for-kuala-lumpur.netlify.app/", tag: "Live", color: "var(--accent-amber)" },
  { title: "Customer Experience Intelligence", href: "https://github.com/heykelh/customer-experience-intelligence", tag: "GitHub", color: "var(--accent-coral)" },
  { title: "Programme Gouvernance Données Critiques", href: "https://www.canva.com/design/DAHBNgAQtnw/Ru9E56mpd2qyDSzXKGhMIw/view", tag: "Livrable", color: "var(--accent)" },
  { title: "CryptoBot ,  Pipeline temps réel", href: "https://www.canva.com/design/DAG1I0Dd_a4/p3QvJvqgTTjs9Dek5_j0Lw/edit", tag: "Livrable", color: "var(--accent-amber)" },
];

const formations = [
  {
    period: "Fév 2026",
    title: "Master Data Engineer / Data Product Manager (Bac+5)",
    org: "École des Mines ,  Datascientest / Liora",
    color: "var(--accent-purple)",
  },
  {
    period: "Jui 2012",
    title: "Licence Informatique (Bac+3)",
    org: "Université Montpellier 2",
    color: "var(--accent-purple)",
  },
];

export default function AProposPage() {
  return (
    <div style={{ paddingTop: 80 }}>

      {/* Hero */}
      <section style={{ padding: "60px 24px 48px", background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="about-grid">

            <div>
              <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>À propos</p>
              <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 14 }}>
                Heykel<br /><span style={{ color: "var(--accent)" }}>Hachiche</span>
              </h1>
              <p style={{ fontSize: 17, color: "var(--accent-purple)", fontWeight: 500, marginBottom: 20 }}>
                Data Engineer & Data Governance Consultant
              </p>

              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16 }}>
                Je conçois et structure les dispositifs de gouvernance des données ,  des rôles aux référentiels, du diagnostic aux feuilles de route. Je construis aussi les pipelines et les outils qui rendent la donnée exploitable au quotidien.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 28 }}>
                Mon ancrage : 10 ans dans des environnements ferroviaires critiques où la fiabilité de l'information n'est pas optionnelle. Ce contexte forge une approche de la donnée orientée rigueur, responsabilité et impact opérationnel concret ,  exactement ce dont les organisations réglementées ont besoin.
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="/contact" style={{ padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500, background: "var(--accent)", color: "#0e0f0e", textDecoration: "none" }}>Me contacter</a>
                <a href="https://github.com/heykelh" target="_blank" rel="noreferrer" style={{ padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500, background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)", textDecoration: "none" }}>GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500, background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)", textDecoration: "none" }}>LinkedIn</a>
              </div>
            </div>

            {/* Infos */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, padding: "22px 24px" }}>
                <p style={{ fontSize: 11, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>Informations</p>
                {[
                  { label: "Localisation", value: "Paris, Île-de-France" },
                  { label: "Formation", value: "Master Data Engineer ,  École des Mines" },
                  { label: "Spécialités", value: "Data Governance · AI Compliance · Engineering" },
                  { label: "Secteurs cibles", value: "Banque · Assurance · Infrastructure · Conseil" },
                  { label: "Email", value: "heykelhachiche@gmail.com" },
                ].map(r => (
                  <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid var(--border)", gap: 12 }}>
                    <span style={{ fontSize: 13, color: "var(--text-tertiary)", flexShrink: 0 }}>{r.label}</span>
                    <span style={{ fontSize: 13, color: "var(--text-primary)", fontWeight: 500, textAlign: "right" }}>{r.value}</span>
                  </div>
                ))}
              </div>

              {/* Ce que je sais faire concrètement */}
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, padding: "22px 24px" }}>
                <p style={{ fontSize: 11, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>Ce que j'apporte concrètement</p>
                {[
                  "Structurer un cadre de gouvernance data opérationnel",
                  "Réaliser un diagnostic de maturité Data & IA sectorisé",
                  "Définir les rôles data et activer les Data Owners",
                  "Piloter la qualité des données avec des KPI actionnables",
                  "Accompagner la conformité RGPD, BCBS239, EU AI Act",
                  "Concevoir et déployer des pipelines de données fiables",
                  "Restituer des analyses complexes à des décideurs non-techniques",
                ].map(item => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "6px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", flexShrink: 0, marginTop: 7 }} />
                    <span style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px", display: "flex", flexDirection: "column", gap: 56 }}>

        {/* Compétences */}
        <section>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Compétences</h2>
          <div style={{ width: 36, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 28 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {skills.map(s => (
              <div key={s.category} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "18px 22px" }}>
                <h3 style={{ fontSize: 12, fontWeight: 600, color: s.color, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.category}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {s.items.map(i => (
                    <span key={i} style={{ fontSize: 12, padding: "4px 10px", borderRadius: 6, background: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projets */}
        <section>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Projets</h2>
          <div style={{ width: 36, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 28 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
            {projets.map(p => (
              <a key={p.title} href={p.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <div style={{
                  background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10,
                  padding: "14px 18px", display: "flex", justifyContent: "space-between",
                  alignItems: "center", gap: 12, borderLeft: `2px solid ${p.color}`,
                  transition: "border-color 0.15s",
                }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>{p.title}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 10, padding: "2px 7px", borderRadius: 4, background: `color-mix(in srgb, ${p.color} 15%, transparent)`, color: p.color, fontWeight: 600, flexShrink: 0 }}>{p.tag}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 10.5L10.5 1.5M10.5 1.5H4.5M10.5 1.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Formation */}
        <section>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Formation</h2>
          <div style={{ width: 36, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 28 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {formations.map(f => (
              <div key={f.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "16px 20px", display: "flex", gap: 16 }}>
                <div style={{ width: 3, borderRadius: 2, background: f.color, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginBottom: 4 }}>{f.period}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 2 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: f.color }}>{f.org}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      <style>{`.about-grid{grid-template-columns:1fr 1fr}@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:36px!important}}`}</style>
    </div>
  );
}