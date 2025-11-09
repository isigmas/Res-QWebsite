"use client"

import { useEffect, useRef } from "react"

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = containerRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 mb-4">How It Works</h2>
          <p className="text-lg sm:text-xl text-slate-500">Triple-constellation satellite precision</p>
        </div>

        <div ref={containerRef} className="space-y-6 sm:space-y-8">
          {[
            {
              step: 1,
              title: "Galileo Satellites",
              description: "European satellite network provides primary positioning signals with high accuracy",
              icon: "🛰️",
            },
            {
              step: 2,
              title: "Copernicus Data",
              description: "Real-time terrain mapping and environmental data for contextual navigation",
              icon: "🗺️",
            },
            {
              step: 3,
              title: "EGNOS Enhancement",
              description: "Ground correction systems fine-tune signals to meter-level precision",
              icon: "📡",
            },
            {
              step: 4,
              title: "Point-to-Target Navigation",
              description: "Direct visual guidance through any condition—fog, night, or rough terrain",
              icon: "🎯",
            },
          ].map((item) => (
            <div
              key={item.step}
              data-animate
              className="opacity-0 translate-y-4 transition-all duration-500 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-4 sm:p-6 rounded-lg border border-slate-400 bg-slate-200 hover:bg-slate-300 duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-xl sm:text-2xl">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                  <span className="text-blue-500 font-bold text-base sm:text-lg">Step {item.step}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-700">{item.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
