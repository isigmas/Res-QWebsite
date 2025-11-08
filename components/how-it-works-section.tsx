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
    <section className="py-20 px-6 bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-slate-700 mb-4">How It Works</h2>
          <p className="text-xl text-slate-700">Triple-constellation satellite precision</p>
        </div>

        <div ref={containerRef} className="space-y-8">
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
              className="opacity-0 translate-y-4 transition-all duration-500 flex gap-6 items-start p-6 rounded-lg border border-slate-400 bg-slate-200 hover:bg-slate-400 hover:border-blue-500/50"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-500 font-bold text-lg">Step {item.step}</span>
                  <h3 className="text-xl font-bold text-slate-700">{item.title}</h3>
                </div>
                <p className="text-slate-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
