"use client";
import { useState } from "react";

const opportunities = [
  { icon: "◆", label: "Mission freelance Data Governance", color: "var(--accent)" },
  { icon: "◆", label: "CDI — Grand groupe / Cabinet de conseil", color: "var(--accent-purple)" },
  { icon: "◆", label: "Audit Data & IA (RGPD, EU AI Act, Solvency II)", color: "var(--accent-coral)" },
  { icon: "◆", label: "Programme de transformation Data", color: "var(--accent-amber)" },
  { icon: "◆", label: "DPO externalisé", color: "var(--accent-blue)" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to Resend / Formspree on deployment
    setSent(true);
  };

  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "60px 24px 48px", background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Contact</p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, marginBottom: 12 }}>
            Un projet en tête ?
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 520, lineHeight: 1.7 }}>
            Disponible pour des missions freelance ou un CDI. Réponse sous 24h.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48 }} className="contact-grid">

          {/* Left */}
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Je suis disponible pour</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
              {opportunities.map(o => (
                <div key={o.label} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 16px", borderRadius: 10,
                  background: "var(--bg-card)", border: "1px solid var(--border)",
                }}>
                  <span style={{ color: o.color, fontSize: 10 }}>◆</span>
                  <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{o.label}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px" }}>
              <p style={{ fontSize: 12, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Coordonnées directes</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="mailto:micheldupont@gmail.com" style={{ fontSize: 14, color: "var(--accent)", textDecoration: "none" }}>micheldupont@gmail.com</a>
                <a href="tel:+33612345678" style={{ fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>+33 6 12 34 56 78</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "var(--accent-blue)", textDecoration: "none" }}>LinkedIn → Michel Dupont</a>
                <a href="https://github.com/heykelh" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>GitHub → heykelh</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "32px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--accent)", marginBottom: 8 }}>Message envoyé !</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>Je vous répondrai sous 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {[
                    { id: "name", label: "Nom complet", placeholder: "Marie Dupont", type: "text" },
                    { id: "email", label: "Email professionnel", placeholder: "m.dupont@entreprise.fr", type: "email" },
                  ].map(f => (
                    <div key={f.id}>
                      <label style={{ fontSize: 12, color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>{f.label}</label>
                      <input
                        type={f.type} placeholder={f.placeholder} required
                        value={form[f.id as keyof typeof form]}
                        onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                        style={{
                          width: "100%", padding: "10px 14px", borderRadius: 8,
                          background: "var(--bg-surface)", border: "1px solid var(--border)",
                          color: "var(--text-primary)", fontSize: 14, outline: "none",
                        }} />
                    </div>
                  ))}
                </div>
                {[
                  { id: "company", label: "Entreprise / Organisation", placeholder: "AXA, PwC, BNP Paribas…", type: "text" },
                  { id: "subject", label: "Objet de la demande", placeholder: "Mission Data Governance, CDO externalisé, Audit RGPD…", type: "text" },
                ].map(f => (
                  <div key={f.id}>
                    <label style={{ fontSize: 12, color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>{f.label}</label>
                    <input
                      type={f.type} placeholder={f.placeholder}
                      value={form[f.id as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                      style={{
                        width: "100%", padding: "10px 14px", borderRadius: 8,
                        background: "var(--bg-surface)", border: "1px solid var(--border)",
                        color: "var(--text-primary)", fontSize: 14, outline: "none",
                      }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 12, color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>Message</label>
                  <textarea
                    placeholder="Décrivez votre projet, votre besoin, votre contexte…"
                    rows={5} required
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    style={{
                      width: "100%", padding: "10px 14px", borderRadius: 8,
                      background: "var(--bg-surface)", border: "1px solid var(--border)",
                      color: "var(--text-primary)", fontSize: 14, resize: "vertical", outline: "none",
                      fontFamily: "var(--font-body)",
                    }} />
                </div>
                <button type="submit" style={{
                  padding: "12px 24px", borderRadius: 8, fontSize: 14, fontWeight: 500,
                  background: "var(--accent)", color: "#0e0f0e", border: "none", cursor: "pointer",
                  fontFamily: "var(--font-body)",
                }}>Envoyer le message</button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
