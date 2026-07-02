"use client";
import Link from "next/link";
import { useState } from "react";

const metiers = [
  {
    id: "data-gouvernance",
    num: "01",
    title: "Data Governance",
    tagline: "Structurer, fiabiliser, piloter.",
    color: "var(--accent)",
    resume: "Conception et déploiement de cadres de gouvernance des données : rôles (Data Owner, Data Steward, CDO), politiques de qualité, référentiels, data lineage et feuilles de route. Diagnostic de maturité, conformité réglementaire (RGPD, BCBS239, Solvency II, EU AI Act) et pilotage de la donnée comme actif stratégique.",
    valeurBusiness: "Réduction des risques réglementaires · Fiabilité des reportings · Décisions fondées sur des données de confiance",
    skills: ["DAMA-DMBOK", "Data Quality (KPI/SLA)", "Data Lineage", "Data Catalog", "RACI et rôles data", "Diagnostic maturité", "Feuille de route data", "Master Data Management"],
    reglementaire: ["RGPD / CNIL", "BCBS239", "Solvency II", "EU AI Act"],
    projets: [
      { title: "Audit et Gouvernance BCBS239", desc: "Diagnostic complet, data lineage, rôles Data Owner/Steward, cadre de contrôle.", href: "https://bcbs239-data-governance.vercel.app/", tag: "Live" },
      { title: "Programme Gouvernance Données Critiques", desc: "Cadre de gouvernance fédéré, RACI, Data Quality KPI, gestion des incidents.", href: "https://www.canva.com/design/DAHBNgAQtnw/Ru9E56mpd2qyDSzXKGhMIw/view", tag: "Livrable" },
      { title: "5 modules d'expertise sur ce site", desc: "RGPD, EU AI Act, Solvency II, Maturité Data, Data Mesh — cas réels documentés.", href: "/rgpd", tag: "Portfolio", internal: true },
    ],
  },
  {
    id: "data-consulting",
    num: "02",
    title: "Data Consulting",
    tagline: "Piloter la transformation data d'une organisation de bout en bout.",
    color: "var(--accent-purple)",
    resume: "Pilotage de programmes de transformation data en contexte réglementé : diagnostic de maturité, animation d'ateliers métiers et IT, production de livrables opérationnels (frameworks, politiques, roadmaps), alignement des parties prenantes et reporting Comex. Intervention de bout en bout comme consultant embarqué.",
    valeurBusiness: "Transformation data pilotée et mesurée · Parties prenantes alignées · Livrables prêts pour l'audit réglementaire",
    skills: ["Pilotage de programme data", "Animation ateliers métiers / IT / conformité", "Diagnostic DAMA-DMBOK", "Data Catalog et Glossaire", "Data Quality BCBS239", "Data Lineage", "IA Governance et EU AI Act", "Reporting Comex", "Gestion de projet Agile"],
    reglementaire: ["BCBS239", "EU AI Act", "DAMA-DMBOK", "Inspection BCE"],
    projets: [
      { title: "FrontierBank — Mission Consulting Data", desc: "Simulation complète d'une mission de conseil sur 12 mois : diagnostic DAMA-DMBOK, gouvernance, data catalog, data quality, data lineage, IA governance et rapport Comex. Contexte inspection BCE / BCBS239.", href: "https://frontierbank-data.vercel.app/", tag: "Live" },
    ],
  },
  {
    id: "data-engineering",
    num: "03",
    title: "Data Engineering",
    tagline: "Concevoir les pipelines qui font circuler la donnée.",
    color: "var(--accent-amber)",
    resume: "Conception et développement de pipelines de données : ingestion, transformation, stockage et exposition. Intégration de sources multi-formats (API, SQL, fichiers), structuration des flux pour garantir qualité, cohérence et exploitabilité. Architecture orientée fiabilité et performance.",
    valeurBusiness: "Données disponibles et fiables en temps voulu · Automatisation des flux · Infrastructure scalable",
    skills: ["Python", "SQL", "ETL / Pipelines", "APIs et ingestion", "Docker", "FastAPI", "Snowflake", "DBT", "Architecture Data"],
    reglementaire: [],
    projets: [
      { title: "AI for Kuala Lumpur", desc: "Plateforme data multi-sources (API, open data), pipeline automatisé, cas d'usage IA urbains pour la prise de décision stratégique.", href: "https://ai-for-kuala-lumpur.netlify.app/", tag: "Live" },
      { title: "CryptoBot — Pipeline temps réel", desc: "Pipeline complet API vers ingestion vers stockage SQL vers visualisation. Données crypto en quasi temps réel, indicateurs de performance.", href: "https://www.canva.com/design/DAG1I0Dd_a4/p3QvJvqgTTjs9Dek5_j0Lw/edit", tag: "Livrable" },
    ],
  },
  {
    id: "data-analyst",
    num: "04",
    title: "Data Analyst",
    tagline: "Transformer la donnée brute en insight actionnable.",
    color: "var(--accent-coral)",
    resume: "Analyse exploratoire, identification d'insights et d'anomalies, conception de dashboards interactifs et mise en place de KPI de pilotage métier. Restitution claire et pédagogique à destination des décideurs : du chiffre à la recommandation business.",
    valeurBusiness: "Décisions éclairées · Anomalies détectées rapidement · Pilotage métier par les données",
    skills: ["Power BI", "SQL", "Python (pandas, matplotlib)", "Analyse exploratoire", "KPI et dashboarding", "Visualisation de données", "Restitution stratégique"],
    reglementaire: [],
    projets: [
      { title: "Customer Experience Intelligence", desc: "Analyse de données clients, identification de tendances et anomalies, dashboards Power BI interactifs et KPI de pilotage de la performance.", href: "https://github.com/heykelh/customer-experience-intelligence", tag: "GitHub" },
    ],
  },
];

function ProjetItem({ p, color }: { p: { title: string; desc: string; href: string; tag: string; internal?: boolean }; color: string }) {
  return (
    <div style={{
      background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10,
      padding: "14px 16px", display: "flex", gap: 14, alignItems: "flex-start",
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{p.title}</span>
          <span style={{
            fontSize: 10, padding: "2px 7px", borderRadius: 4, fontWeight: 600,
            background: `color-mix(in srgb, ${color} 15%, transparent)`, color,
          }}>{p.tag}</span>
        </div>
        <p style={{ fontSize: 12, color: "var(--text-secondary)", margin: 0, lineHeight: 1.55 }}>{p.desc}</p>
      </div>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "var(--text-tertiary)", flexShrink: 0, marginTop: 2 }}>
        <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function MetierCard({ m }: { m: typeof metiers[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div id={m.id} style={{
      background: "var(--bg-card)", border: "1px solid var(--border)",
      borderRadius: 16, overflow: "hidden", borderTop: `3px solid ${m.color}`,
      scrollMarginTop: 100,
    }}>
      <div style={{ padding: "24px 28px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{
                width: 28, height: 28, borderRadius: 7, fontSize: 11, fontWeight: 700,
                background: `color-mix(in srgb, ${m.color} 15%, transparent)`,
                color: m.color, display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)",
              }}>{m.num}</span>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>{m.title}</h2>
            </div>
            <p style={{ fontSize: 14, color: m.color, fontWeight: 500, fontStyle: "italic" }}>{m.tagline}</p>
          </div>
          <button onClick={() => setOpen(!open)} style={{
            background: `color-mix(in srgb, ${m.color} 12%, transparent)`,
            border: `1px solid color-mix(in srgb, ${m.color} 30%, transparent)`,
            color: m.color, borderRadius: 8, padding: "6px 14px", fontSize: 12,
            fontWeight: 500, cursor: "pointer", flexShrink: 0, fontFamily: "var(--font-body)",
            display: "flex", alignItems: "center", gap: 6,
          }}>
            {open ? "Réduire" : "Voir le détail"}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>{m.resume}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: m.reglementaire.length > 0 ? 10 : 0 }}>
          {m.skills.map(s => (
            <span key={s} style={{
              fontSize: 11, padding: "3px 10px", borderRadius: 99, fontWeight: 500,
              background: `color-mix(in srgb, ${m.color} 10%, transparent)`,
              color: m.color, border: `1px solid color-mix(in srgb, ${m.color} 25%, transparent)`,
            }}>{s}</span>
          ))}
        </div>

        {m.reglementaire.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {m.reglementaire.map(r => (
              <span key={r} style={{
                fontSize: 11, padding: "3px 10px", borderRadius: 99,
                background: "var(--bg-surface)", border: "1px solid var(--border)",
                color: "var(--text-tertiary)",
              }}>{r}</span>
            ))}
          </div>
        )}
      </div>

      {open && (
        <div style={{ borderTop: "1px solid var(--border)", padding: "24px 28px", background: "var(--bg-surface)", display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{
            background: `color-mix(in srgb, ${m.color} 6%, transparent)`,
            borderRadius: 10, padding: "14px 18px", borderLeft: `2px solid ${m.color}`,
          }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: m.color, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Valeur business</p>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>{m.valeurBusiness}</p>
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Projets associés</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {m.projets.map(p =>
                p.internal
                  ? <Link key={p.title} href={p.href} style={{ textDecoration: "none" }}><ProjetItem p={p} color={m.color} /></Link>
                  : <a key={p.title} href={p.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><ProjetItem p={p} color={m.color} /></a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={{ paddingTop: 80 }}>

      <section style={{ padding: "72px 24px 64px", position: "relative", overflow: "hidden", borderBottom: "1px solid var(--border)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", zIndex: 0 }} />
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 500, height: 400, background: "radial-gradient(circle, rgba(74,222,128,0.05) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "0%", right: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 99, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: "var(--accent)", letterSpacing: "0.05em" }}>Data Engineering · Data Consulting</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid">
            <div>
              <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.05, marginBottom: 16 }}>
                Heykel<br /><span style={{ color: "var(--accent)" }}>Hachiche</span>
              </h1>
              <p style={{ fontSize: 18, color: "var(--accent-purple)", fontWeight: 500, marginBottom: 20 }}>
                Data Engineer & Data Consultant
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
                Double expertise technique et métier : pipelines data, qualité des données, gouvernance réglementaire et IA Compliance. Ce site regroupe l'ensemble de mes projets et démontre concrètement ce que je sais faire.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="#expertises" style={{ padding: "11px 22px", borderRadius: 9, fontSize: 14, fontWeight: 500, background: "var(--accent)", color: "#0e0f0e", textDecoration: "none" }}>Explorer mes expertises</a>
                <Link href="/projets" style={{ padding: "11px 22px", borderRadius: 9, fontSize: 14, fontWeight: 500, background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)", textDecoration: "none" }}>Tous mes projets</Link>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {metiers.map(m => (
                <a key={m.id} href={`#${m.id}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "var(--bg-card)", border: "1px solid var(--border)",
                    borderRadius: 12, padding: "18px 20px",
                    borderTop: `3px solid ${m.color}`,
                    transition: "transform 0.2s",
                    cursor: "pointer", height: "100%",
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: m.color, fontFamily: "var(--font-display)", marginBottom: 6 }}>{m.num}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{m.title}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 3, marginBottom: 12 }}>
                      {m.skills.slice(0, 3).map(s => (
                        <span key={s} style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{s}</span>
                      ))}
                      <span style={{ fontSize: 11, color: m.color }}>+{m.skills.length - 3} skills</span>
                    </div>
                    <div style={{ fontSize: 11, color: m.color, display: "flex", alignItems: "center", gap: 4 }}>
                      Voir le détail
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 8l6-6M8 2H3M8 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="expertises" style={{ padding: "64px 24px", background: "var(--bg-surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Ce que je sais faire</p>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 700, marginBottom: 12 }}>
              4 expertises, une seule conviction :<br />
              <span style={{ color: "var(--text-secondary)" }}>la donnée doit être un actif fiable.</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", maxWidth: 600, lineHeight: 1.65 }}>
              Cliquez sur chaque expertise pour voir les compétences, la valeur business apportée et les projets associés.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {metiers.map(m => <MetierCard key={m.id} m={m} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 20, padding: "52px 40px", position: "relative", overflow: "hidden", textAlign: "center" }}>
            <div style={{ position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)", width: 400, height: 400, background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, marginBottom: 12 }}>Un projet data qui vous ressemble ?</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 15, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.65 }}>
              Data Governance, pipeline, dashboard, conformité réglementaire : prenons le temps d'échanger sur vos enjeux.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ padding: "11px 26px", borderRadius: 9, fontSize: 14, fontWeight: 500, background: "var(--accent)", color: "#0e0f0e", textDecoration: "none" }}>Me contacter</Link>
              <Link href="/projets" style={{ padding: "11px 26px", borderRadius: 9, fontSize: 14, fontWeight: 500, background: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-primary)", textDecoration: "none" }}>Voir tous les projets</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`.hero-grid{grid-template-columns:1fr 1fr}@media(max-width:768px){.hero-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}