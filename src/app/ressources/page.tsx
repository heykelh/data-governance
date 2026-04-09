"use client";

const resources = [
  {
    category: "RGPD & Privacy",
    color: "var(--accent-coral)",
    items: [
      { title: "Registre des traitements Art. 30", format: "Excel", desc: "Template pré-rempli pour le secteur retail — 20 lignes réalistes prêtes à adapter.", size: "24 Ko" },
      { title: "Template DPIA / PIA", format: "Word", desc: "Analyse d'impact sur la vie privée — structure complète conforme CNIL.", size: "18 Ko" },
      { title: "Procédure violation de données", format: "Word", desc: "Modèle de procédure de notification CNIL en 72h.", size: "12 Ko" },
      { title: "Questionnaire diagnostic RGPD", format: "PDF", desc: "30 questions pour auto-évaluer sa conformité — version imprimable.", size: "8 Ko" },
    ],
  },
  {
    category: "Gouvernance Data",
    color: "var(--accent-amber)",
    items: [
      { title: "Matrice RACI Data Governance", format: "Excel", desc: "Modèle complet de répartition des rôles : Data Owner, Data Steward, CDO, IT.", size: "16 Ko" },
      { title: "Framework maturité Data — 6 axes", format: "PDF", desc: "Grille d'évaluation sur 5 niveaux, 6 axes DAMA, benchmark sectoriel intégré.", size: "20 Ko" },
      { title: "Data Quality KPI catalog", format: "Excel", desc: "Catalogue de 30 KPI de qualité des données (complétude, exactitude, fraîcheur…).", size: "22 Ko" },
      { title: "Feuille de route Data — template", format: "PowerPoint", desc: "Template de roadmap data sur 18 mois avec niveaux de priorité.", size: "450 Ko" },
    ],
  },
  {
    category: "AI Governance & EU AI Act",
    color: "var(--accent)",
    items: [
      { title: "AI Risk Register", format: "Excel", desc: "Registre complet des risques IA : classification EU AI Act, mesures d'atténuation, responsable.", size: "28 Ko" },
      { title: "Charte IA éthique — template", format: "Word", desc: "Modèle de charte d'utilisation responsable de l'IA pour grande organisation.", size: "14 Ko" },
      { title: "EU AI Act — guide opérationnel", format: "PDF", desc: "Synthèse des obligations par niveau de risque avec checklist de conformité.", size: "32 Ko" },
    ],
  },
  {
    category: "Data Mesh & Architecture",
    color: "var(--accent-blue)",
    items: [
      { title: "Data Contract — template YAML", format: "YAML", desc: "Template de contrat de données inter-domaines avec schéma, SLA et owner.", size: "4 Ko" },
      { title: "Modèle gouvernance fédérée", format: "PDF", desc: "Framework de gouvernance décentralisée — principes, rôles et processus.", size: "18 Ko" },
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
            Templates & livrables<br />
            <span style={{ color: "var(--text-secondary)" }}>à télécharger gratuitement</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 600, lineHeight: 1.7 }}>
            Tous les modèles construits dans le cadre de ces projets. Directement opérationnels —
            à adapter à votre contexte. Partagez, utilisez, améliorez.
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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
              {cat.items.map(item => (
                <div key={item.title} style={{
                  background: "var(--bg-card)", border: "1px solid var(--border)",
                  borderRadius: 12, padding: "20px",
                  display: "flex", flexDirection: "column", gap: 10,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", flex: 1, paddingRight: 10 }}>{item.title}</h3>
                    <span style={{
                      fontSize: 10, padding: "3px 8px", borderRadius: 4, fontWeight: 600,
                      background: `color-mix(in srgb, ${cat.color} 15%, transparent)`,
                      color: cat.color, flexShrink: 0,
                    }}>{item.format}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
                    <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{item.size}</span>
                    <button style={{
                      padding: "6px 14px", borderRadius: 7, fontSize: 12, fontWeight: 500, cursor: "pointer",
                      background: `color-mix(in srgb, ${cat.color} 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${cat.color} 30%, transparent)`,
                      color: cat.color,
                    }}
                    onClick={() => alert("Les fichiers seront disponibles au lancement du site complet.")}>
                      Télécharger
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* LinkedIn CTA */}
        <div style={{
          background: "var(--bg-card)", border: "1px solid var(--border)",
          borderRadius: 16, padding: "32px 36px", textAlign: "center",
        }}>
          <p style={{ fontSize: 13, color: "var(--text-tertiary)", marginBottom: 8 }}>Vous en voulez plus ?</p>
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Suivez les publications LinkedIn</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, maxWidth: 460, margin: "0 auto 20px", lineHeight: 1.65 }}>
            Chaque template est accompagné d'un post explicatif. Cas d'usage réels, erreurs à éviter, bonnes pratiques.
          </p>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "10px 22px", borderRadius: 8, fontSize: 13, fontWeight: 500,
            background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
            color: "var(--accent)", textDecoration: "none",
          }}>Suivre sur LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
