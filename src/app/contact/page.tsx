"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            Réponse sous 24h.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 40 }} className="contact-grid">

          <div>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "24px" }}>
              <p style={{ fontSize: 12, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 16 }}>Coordonnées</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginBottom: 3 }}>Email</div>
                  <a href="mailto:heykelhachiche@gmail.com" style={{ fontSize: 14, color: "var(--accent)", textDecoration: "none" }}>heykelhachiche@gmail.com</a>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginBottom: 3 }}>LinkedIn</div>
                  <a href="https://linkedin.com/in/heykelhachiche" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "var(--accent-blue)", textDecoration: "none" }}>linkedin.com/in/heykelhachiche</a>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginBottom: 3 }}>GitHub</div>
                  <a href="https://github.com/heykelh" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}>github.com/heykelh</a>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginBottom: 3 }}>Localisation</div>
                  <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>Paris, Île-de-France</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "28px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 20, color: "var(--accent)" }}>✓</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--accent)", marginBottom: 8 }}>Message envoyé !</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>Réponse sous 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[
                    { id: "name", label: "Nom complet", placeholder: "Prénom Nom", type: "text" },
                    { id: "email", label: "Email", placeholder: "email@entreprise.fr", type: "email" },
                  ].map(f => (
                    <div key={f.id}>
                      <label style={{ fontSize: 12, color: "var(--text-secondary)", display: "block", marginBottom: 5 }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} required
                        value={form[f.id as keyof typeof form]}
                        onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                        style={{ width: "100%", padding: "9px 12px", borderRadius: 7, background: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-primary)", fontSize: 13, outline: "none" }} />
                    </div>
                  ))}
                </div>
                {[
                  { id: "company", label: "Entreprise", placeholder: "Nom de l'organisation", type: "text" },
                  { id: "subject", label: "Objet", placeholder: "Data Governance, Audit RGPD, EU AI Act…", type: "text" },
                ].map(f => (
                  <div key={f.id}>
                    <label style={{ fontSize: 12, color: "var(--text-secondary)", display: "block", marginBottom: 5 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder}
                      value={form[f.id as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                      style={{ width: "100%", padding: "9px 12px", borderRadius: 7, background: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-primary)", fontSize: 13, outline: "none" }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 12, color: "var(--text-secondary)", display: "block", marginBottom: 5 }}>Message</label>
                  <textarea placeholder="Décrivez votre projet ou votre contexte…" rows={5} required
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    style={{ width: "100%", padding: "9px 12px", borderRadius: 7, background: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-primary)", fontSize: 13, resize: "vertical", outline: "none", fontFamily: "var(--font-body)" }} />
                </div>
                <button type="submit" style={{
                  padding: "11px 24px", borderRadius: 8, fontSize: 14, fontWeight: 500,
                  background: "var(--accent)", color: "#0e0f0e", border: "none", cursor: "pointer",
                  fontFamily: "var(--font-body)",
                }}>Envoyer</button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
