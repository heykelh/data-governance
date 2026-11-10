"use client";
import Link from "next/link";
import { ProjectCluster } from "@/components/home/ProjectCluster";
import { CATEGORIES } from "@/data/cluster";

const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

export default function HomePage() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* Cluster avec le texte d'accueil au centre : tout tient dans l'écran */}
      <section style={{ padding: "16px 24px 36px", position: "relative", overflowX: "clip" }}>
        <ProjectCluster />

        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 18 }}>
          <Link
            href="/case-studies"
            style={{ padding: "11px 22px", borderRadius: 9, fontSize: 14, fontWeight: 500, background: "var(--accent)", color: "#0e0f0e", textDecoration: "none" }}
          >
            Voir les case studies
          </Link>
          <Link
            href="/contact"
            style={{
              padding: "11px 22px",
              borderRadius: 9,
              fontSize: 14,
              fontWeight: 500,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              textDecoration: "none",
            }}
          >
            Me contacter
          </Link>
        </div>
      </section>

      {/* Compétences par domaine */}
      <section style={{ padding: "64px 24px", background: "var(--bg-surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: MONO, fontSize: 12, color: "var(--text-tertiary)", marginBottom: 8 }}>~/competences</p>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 700, marginBottom: 28 }}>
            Six domaines, <span style={{ color: "var(--text-secondary)" }}>une seule exigence : une donnée fiable.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))", gap: 14 }}>
            {CATEGORIES.map((c) => (
              <div
                key={c.id}
                className="hh-card"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderTop: `2px solid ${c.hex}`,
                  borderRadius: 14,
                  padding: "20px 22px",
                }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>{c.label}</h3>
                <p style={{ fontSize: 13, color: c.hex, fontWeight: 500, marginBottom: 14 }}>{c.tagline}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: 11,
                        padding: "2px 9px",
                        borderRadius: 99,
                        background: `color-mix(in srgb, ${c.hex} 9%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${c.hex} 22%, transparent)`,
                        color: c.hex,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p style={{ fontFamily: MONO, fontSize: 12, color: "var(--text-tertiary)", margin: 0 }}>
                  {c.projects.length} projet{c.projects.length > 1 ? "s" : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 18,
              padding: "48px 24px",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, marginBottom: 10 }}>Un projet data qui vous ressemble ?</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 15, maxWidth: 460, margin: "0 auto 26px", lineHeight: 1.65 }}>
              Gouvernance, pipeline, dashboard, conformité, IA agentique : prenons le temps d'échanger.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{ padding: "11px 26px", borderRadius: 9, fontSize: 14, fontWeight: 500, background: "var(--accent)", color: "#0e0f0e", textDecoration: "none" }}
              >
                Me contacter
              </Link>
              <Link
                href="/projets"
                style={{
                  padding: "11px 26px",
                  borderRadius: 9,
                  fontSize: 14,
                  fontWeight: 500,
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                }}
              >
                Tous les projets
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hh-card { transition: border-color .15s, transform .15s; }
        .hh-card:hover { border-color: var(--border-hover); transform: translateY(-2px); }
      `}</style>
    </div>
  );
}
