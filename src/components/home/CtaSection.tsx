"use client";
export function CtaSection() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          background: "var(--bg-card)", border: "1px solid var(--border)",
          borderRadius: 24, padding: "64px 48px",
          position: "relative", overflow: "hidden", textAlign: "center",
        }}>
          <div style={{
            position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
            width: 400, height: 400,
            background: "radial-gradient(circle, rgba(74,222,128,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginBottom: 16, maxWidth: 600, margin: "0 auto 16px" }}>
            Un projet de gouvernance ?<br />
            <span style={{ color: "var(--text-secondary)" }}>Parlons-en.</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.65 }}>
            Data Governance, AI Compliance, RGPD, Audit Data — cinq expertises
            démontrées sur des cas réels, prêtes à être mises en production.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" style={{
              padding: "12px 28px", borderRadius: 10, fontSize: 14, fontWeight: 500,
              background: "var(--accent)", color: "#0e0f0e", textDecoration: "none",
            }}>Me contacter</a>
            <a href="/ressources" style={{
              padding: "12px 28px", borderRadius: 10, fontSize: 14, fontWeight: 500,
              background: "var(--bg-surface)", border: "1px solid var(--border)",
              color: "var(--text-primary)", textDecoration: "none",
            }}>Télécharger les templates</a>
          </div>
        </div>
      </div>
    </section>
  );
}
