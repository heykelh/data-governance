"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const modules = [
  { href: "/rgpd", label: "RGPD", color: "var(--accent-coral)", tag: "01" },
  { href: "/audit-maturite", label: "Audit Maturité", color: "var(--accent-amber)", tag: "02" },
  { href: "/eu-ai-act", label: "EU AI Act", color: "var(--accent)", tag: "03" },
  { href: "/solvency-ii", label: "Solvency II", color: "var(--accent-purple)", tag: "04" },
  { href: "/data-mesh", label: "Data Mesh", color: "var(--accent-blue)", tag: "05" },
];

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/projets", label: "Autres projets" },
  { href: "/ressources", label: "Ressources" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modulesOpen, setModulesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(14,15,14,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, color: "var(--accent)"
            }}>HH</div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--text-primary)" }}>
              Heykel Hachiche
            </span>
          </div>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: "6px 14px", borderRadius: 8, fontSize: 14, textDecoration: "none",
              color: pathname === l.href ? "var(--text-primary)" : "var(--text-secondary)",
              background: pathname === l.href ? "var(--bg-card)" : "transparent",
              transition: "all 0.15s",
            }}>{l.label}</Link>
          ))}

          <div style={{ position: "relative" }}
            onMouseEnter={() => setModulesOpen(true)}
            onMouseLeave={() => setModulesOpen(false)}>
            <button style={{
              padding: "6px 14px", borderRadius: 8, fontSize: 14, cursor: "pointer",
              color: "var(--text-secondary)", background: "transparent", border: "none",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              Projets Gov.
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {modulesOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", right: 0,
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: 12, padding: 8, minWidth: 220,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}>
                {modules.map(m => (
                  <Link key={m.href} href={m.href} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "8px 10px", borderRadius: 8, textDecoration: "none",
                  }}>
                    <span style={{
                      width: 24, height: 24, borderRadius: 6,
                      background: `color-mix(in srgb, ${m.color} 15%, transparent)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 700, color: m.color,
                      fontFamily: "var(--font-display)",
                    }}>{m.tag}</span>
                    <span style={{ fontSize: 13, color: "var(--text-primary)" }}>{m.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <Link href="/contact" className="hidden-mobile" style={{
          padding: "8px 18px", borderRadius: 8, fontSize: 13, fontWeight: 500,
          background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
          color: "var(--accent)", textDecoration: "none",
        }}>Me contacter</Link>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: "none", border: "none", cursor: "pointer", padding: 8,
          color: "var(--text-primary)",
        }} className="show-mobile">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen
              ? <><path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
              : <><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: "var(--bg-surface)", borderTop: "1px solid var(--border)",
          padding: "16px 24px 24px",
        }}>
          {[...navLinks, ...modules.map(m => ({ href: m.href, label: m.label }))].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", padding: "10px 0", fontSize: 15,
              color: pathname === l.href ? "var(--accent)" : "var(--text-secondary)",
              textDecoration: "none", borderBottom: "1px solid var(--border)",
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
