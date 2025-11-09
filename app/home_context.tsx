"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import HowItWorksSection from "@/components/how-it-works-section"
import FeaturesSection from "@/components/features-section"
import ImpactSection from "@/components/impact-section"
import ResTagHeroSection from "@/components/restag"
import FooterSection from "@/components/footer"
import VideoSection from "@/components/videoSection"

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
      {/*}        <div className="border-t border-slate-400" />
      <VideoSection/>*/}
              <div className="border-t border-slate-400" />
      <ProblemSection />
              <div className="border-t border-slate-400" />

      <HowItWorksSection />
              <div className="border-t border-slate-400" />

      <FeaturesSection />
              <div className="border-t border-slate-400" />

      <ImpactSection />
              <div className="border-t border-slate-400" />

      <ResTagHeroSection />
      <FooterSection />
    </main>
  )
}