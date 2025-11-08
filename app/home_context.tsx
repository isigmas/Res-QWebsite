"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import HowItWorksSection from "@/components/how-it-works-section"
import FeaturesSection from "@/components/features-section"
import ImpactSection from "@/components/impact-section"
import GalileoVsGpsSection from "@/components/tableComparasion"
import ResTagHeroSection from "@/components/restag"
import FooterSection from "@/components/footer"

export default function HomeContent() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="overflow-hidden bg-background">
      <HeroSection scrollY={scrollY} />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ImpactSection />
      <ResTagHeroSection />
      <FooterSection />
    </main>
  )
}