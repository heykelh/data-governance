"use client";
import { HeroSection } from "@/components/home/HeroSection";
import { ModulesGrid } from "@/components/home/ModulesGrid";
import { WhyMeSection } from "@/components/home/WhyMeSection";
import { TargetsSection } from "@/components/home/TargetsSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ModulesGrid />
      <WhyMeSection />
      <TargetsSection />
      <CtaSection />
    </>
  );
}
