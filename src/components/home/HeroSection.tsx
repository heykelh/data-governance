"use client";
export function HeroSection() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "120px 24px 80px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div style={{ maxWidth: 760 }}>

          <div className="animate-fade-up" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 14px", borderRadius: 99,
            background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
            marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: "var(--accent)", letterSpacing: "0.05em" }}>
              Data Engineering · Data Consulting
            </span>
          </div>

          <h1 className="animate-fade-up delay-100" style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, marginBottom: 24, lineHeight: 1.05 }}>
            Heykel{" "}
            <span style={{ color: "var(--accent)" }}>Hachiche</span>
          </h1>

          <p className="animate-fade-up delay-200" style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--accent-purple)", fontWeight: 500, marginBottom: 12 }}>
            Data Engineer & Data Consultant
          </p>

          <p className="animate-fade-up delay-200" style={{ fontSize: "clamp(14px, 1.5vw, 17px)", color: "var(--text-secondary)", maxWidth: 580, lineHeight: 1.65, marginBottom: 40 }}>
            Double expertise technique et métier : pipelines data, qualité des données, gouvernance réglementaire et IA Compliance. Ce site regroupe l'ensemble de mes projets et démontre concrètement ce que je sais faire.
          </p>

          <div className="animate-fade-up delay-300" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#expertises" style={{
              padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 500,
              background: "var(--accent)", color: "#ffffff", textDecoration: "none",
            }}>Voir mes expertises</a>
            <a href="/a-propos" style={{
              padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 500,
              background: "var(--bg-card)", border: "1px solid var(--border)",
              color: "var(--text-primary)", textDecoration: "none",
            }}>Mon parcours</a>
          </div>

        </div>
      </div>
    </section>
  );
}