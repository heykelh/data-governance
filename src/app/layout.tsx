import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Heykel Hachiche ,  Data Governance & AI Compliance",
  description: "Expert Data Governance, IA Gouvernance, RGPD et Audit. 5 projets opérationnels démontrés sur des cas réels.",
  keywords: ["Data Governance", "AI Act", "RGPD", "DPO", "Data Steward", "BCBS239", "Solvency II"],
  authors: [{ name: "Heykel Hachiche" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Heykel Hachiche ,  Data Governance & AI Compliance",
    description: "De la donnée brute à la décision fiable. 5 expertises démontrées.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="0fdb958a-6b07-4991-9949-cd535e6b44a1"
        />
      </body>
    </html>
  );
}
