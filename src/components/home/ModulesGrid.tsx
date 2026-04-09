"use client";
import Link from "next/link";
import { MODULES } from "@/data/modules";

export function ModulesGrid() {
  return (
    <section id="projets" style={{ padding: "80px 24px", background: "var(--bg-surface)" }}>
      <style>{`
        .module-card { transition: border-color 0.2s, transform 0.2s; }
        .module-card:hover { transform: translateY(-2px); }
        .module-card[data-color="coral"]:hover { border-color: var(--accent-coral) !important; }
        .module-card[data-color="amber"]:hover { border-color: var(--accent-amber) !important; }
        .module-card[data-color="green"]:hover { border-color: var(--accent) !important; }
        .module-card[data-color="purple"]:hover { border-color: var(--accent-purple) !important; }
        .module-card[data-color="blue"]:hover { border-color: var(--accent-blue) !important; }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
            Projets démontrés
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, maxWidth: 600 }}>
            Cinq expertises,{" "}
            <span style={{ color: "var(--text-secondary)" }}>chacune avec une démo live</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16 }}>
          {MODULES.map((m) => {
            const colorKey = m.id === "rgpd" ? "coral" : m.id === "audit-maturite" ? "amber" : m.id === "eu-ai-act" ? "green" : m.id === "solvency-ii" ? "purple" : "blue";
            return (
              <Link key={m.id} href={m.href} style={{ textDecoration: "none" }}>
                <div
                  className="module-card"
                  data-color={colorKey}
                  style={{
                    background: "var(--bg-card)", border: "1px solid var(--border)",
                    borderRadius: 16, padding: "28px", height: "100%", cursor: "pointer",
                  }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: `color-mix(in srgb, ${m.color} 15%, transparent)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: m.color,
                    }}>{m.num}</div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: "var(--text-tertiary)", marginTop: 4 }}>
                      <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 6, color: "var(--text-primary)" }}>{m.title}</h3>
                  <p style={{ fontSize: 13, color: m.color, marginBottom: 14, fontWeight: 500 }}>{m.subtitle}</p>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 20 }}>{m.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                    {m.tags.map(t => (
                      <span key={t} style={{
                        fontSize: 11, padding: "3px 9px", borderRadius: 99,
                        background: `color-mix(in srgb, ${m.color} 10%, transparent)`,
                        color: m.color, fontWeight: 500,
                      }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }}>
                    <p style={{ fontSize: 11, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Livrables</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                      {m.deliverables.map(d => (
                        <div key={d} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text-secondary)" }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: m.color, flexShrink: 0 }} />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
