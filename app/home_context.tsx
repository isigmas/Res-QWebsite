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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleResize = () => {
      checkMobile()
    }

    // Add event listeners with passive option for better mobile performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <main className="overflow-hidden bg-background">
      <HeroSection scrollY={isMobile ? scrollY * 0.5 : scrollY} />
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