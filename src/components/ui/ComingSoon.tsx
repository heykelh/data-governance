"use client";
import { MODULES } from "@/data/modules";

export function ComingSoon({ moduleId }: { moduleId: string }) {
  const mod = MODULES.find(m => m.id === moduleId)!;
  return (
    <div style={{ textAlign: "center", padding: "80px 24px" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "6px 16px", borderRadius: 99,
        background: `color-mix(in srgb, ${mod.color} 12%, transparent)`,
        marginBottom: 24,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: mod.color, display: "inline-block",
          animation: "pulse 2s infinite" }} />
        <span style={{ fontSize: 12, fontWeight: 500, color: mod.color }}>En construction</span>
      </div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Contenu en cours de développement</h2>
      <p style={{ color: "var(--text-secondary)", maxWidth: 480, margin: "0 auto 32px" }}>
        Ce module est en cours de construction. Le squelette du site est opérationnel —
        le contenu interactif arrive bientôt.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        {mod.deliverables.map(d => (
          <span key={d} style={{
            padding: "8px 16px", borderRadius: 8, fontSize: 13,
            background: "var(--bg-card)", border: "1px solid var(--border)",
            color: "var(--text-secondary)",
          }}>→ {d}</span>
        ))}
      </div>
      <style>{`@keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:.3; } }`}</style>
    </div>
  );
}
