"use client";
import Link from "next/link";
import { MODULES } from "@/data/modules";

interface Props {
  moduleId: string;
  children: React.ReactNode;
}

export function ModuleLayout({ moduleId, children }: Props) {
  const mod = MODULES.find(m => m.id === moduleId)!;
  const idx = MODULES.indexOf(mod);
  const next = MODULES[idx + 1];
  const prev = MODULES[idx - 1];

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Module hero banner */}
      <div style={{
        padding: "60px 24px 40px",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-surface)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-100px", right: "5%",
          width: 400, height: 400,
          background: `radial-gradient(circle, color-mix(in srgb, ${mod.color} 8%, transparent) 0%, transparent 65%)`,
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, fontSize: 13, color: "var(--text-tertiary)" }}>
            <Link href="/" style={{ color: "var(--text-tertiary)", textDecoration: "none" }}>Accueil</Link>
            <span>/</span>
            <span style={{ color: mod.color }}>{mod.title}</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12, flexShrink: 0,
              background: `color-mix(in srgb, ${mod.color} 15%, transparent)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: mod.color,
            }}>{mod.num}</div>
            <div>
              <h1 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 700, marginBottom: 6 }}>{mod.title}</h1>
              <p style={{ fontSize: 16, color: mod.color, fontWeight: 500 }}>{mod.subtitle}</p>
            </div>
          </div>

          <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 700, lineHeight: 1.7, marginBottom: 24 }}>
            {mod.description}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {mod.tags.map(t => (
              <span key={t} style={{
                fontSize: 11, padding: "4px 12px", borderRadius: 99,
                background: `color-mix(in srgb, ${mod.color} 12%, transparent)`,
                color: mod.color, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
        {children}
      </div>

      {/* Navigation between modules */}
      <div style={{ borderTop: "1px solid var(--border)", background: "var(--bg-surface)", padding: "32px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 16 }}>
          {prev ? (
            <Link href={prev.href} style={{
              display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
              padding: "12px 20px", borderRadius: 10, border: "1px solid var(--border)",
              background: "var(--bg-card)", transition: "border-color 0.2s",
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <div>
                <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>Projet précédent</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>{prev.title}</div>
              </div>
            </Link>
          ) : <div />}
          {next && (
            <Link href={next.href} style={{
              display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
              padding: "12px 20px", borderRadius: 10, border: "1px solid var(--border)",
              background: "var(--bg-card)", transition: "border-color 0.2s",
              textAlign: "right",
            }}>
              <div>
                <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>Projet suivant</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>{next.title}</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
