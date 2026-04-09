"use client";
export function HeroSection() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "120px 24px 80px", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div style={{
        position: "absolute", top: "20%", left: "10%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(74,222,128,0.05) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%", width: 400, height: 400,
        background: "radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 760 }}>

          <div className="animate-fade-up" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 12px", borderRadius: 99,
            background: "var(--bg-card)", border: "1px solid var(--border)",
            marginBottom: 28,
          }}>
            <span style={{ fontSize: 11, fontWeight: 500, color: "var(--text-tertiary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Data Governance · AI Compliance · RGPD · Audit
            </span>
          </div>

          <h1 className="animate-fade-up delay-100" style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, marginBottom: 24, lineHeight: 1.05 }}>
            Heykel{" "}
            <span style={{ color: "var(--accent)" }}>Hachiche</span>
          </h1>

          <p className="animate-fade-up delay-200" style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--text-secondary)", maxWidth: 580, lineHeight: 1.65, marginBottom: 16 }}>
            Data Engineer & Responsable Data Gouvernance.
          </p>
          <p className="animate-fade-up delay-200" style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "var(--text-tertiary)", maxWidth: 580, lineHeight: 1.65, marginBottom: 40 }}>
            Projets opérationnels sur des cas réels — RGPD, maturité data, EU AI Act, Solvency II et Data Mesh.
            De la donnée brute à la décision fiable.
          </p>

          <div className="animate-fade-up delay-300" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#projets" style={{
              padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 500,
              background: "var(--accent)", color: "#0e0f0e", textDecoration: "none",
            }}>Voir les projets</a>
            <a href="/a-propos" style={{
              padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 500,
              background: "var(--bg-card)", border: "1px solid var(--border)",
              color: "var(--text-primary)", textDecoration: "none",
            }}>À propos</a>
          </div>

          <div className="animate-fade-up delay-400" style={{ display: "flex", gap: 32, marginTop: 64, flexWrap: "wrap" }}>
            {[
              { num: "5", label: "projets Data Gouvernance" },
              { num: "12+", label: "ans terrain SNCF" },
              { num: "5+", label: "projets Data Engineering" },
              { num: "1", label: "site, tout dedans" },
            ].map(s => (
              <div key={s.num}>
                <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "var(--text-tertiary)", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
