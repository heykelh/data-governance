"use client";
export function HeroSection() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "120px 24px 80px", position: "relative", overflow: "hidden",
    }}>
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Glow */}
      <div style={{
        position: "absolute", top: "20%", left: "10%",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(74,222,128,0.05) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 760 }}>

          {/* Badge */}
          <div className="animate-fade-up" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 14px", borderRadius: 99,
            background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
            marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: "var(--accent)", letterSpacing: "0.05em" }}>
              Disponible · Missions freelance & CDI
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100" style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, marginBottom: 24, lineHeight: 1.05 }}>
            Data Governance{" "}
            <span style={{ color: "var(--text-tertiary)" }}>&</span>
            <br />
            <span style={{ color: "var(--accent)" }}>AI Compliance</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up delay-200" style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--text-secondary)", maxWidth: 580, lineHeight: 1.65, marginBottom: 40 }}>
            De la donnée brute à la décision fiable. Cinq expertises démontrées sur des cas réels —
            RGPD, maturité data, EU AI Act, Solvency II et Data Mesh.
          </p>

          {/* CTA row */}
          <div className="animate-fade-up delay-300" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#projets" style={{
              padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 500,
              background: "var(--accent)", color: "#0e0f0e", textDecoration: "none",
              transition: "opacity 0.15s",
            }}>Voir les projets</a>
            <a href="/contact" style={{
              padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 500,
              background: "var(--bg-card)", border: "1px solid var(--border)",
              color: "var(--text-primary)", textDecoration: "none",
            }}>Me contacter</a>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up delay-400" style={{ display: "flex", gap: 32, marginTop: 64, flexWrap: "wrap" }}>
            {[
              { num: "5", label: "projets opérationnels" },
              { num: "10+", label: "ans expérience terrain" },
              { num: "3", label: "secteurs couverts" },
              { num: "1", label: "URL, tout dedans" },
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
