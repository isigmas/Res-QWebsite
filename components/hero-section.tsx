"use client"

import { useEffect, useRef } from "react"

interface HeroSectionProps {
  scrollY: number
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []

    class Particle {
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 2 + 0.5
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.3
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        ctx.fillStyle = `rgba(65, 105, 225, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.fillStyle = "rgba(255, 247, 237, 0.05)" // Longer trails (was 0.1) //kolor tla gridu
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-700 via-slate-700 to-slate-700">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Parallax circles */}
      <div
        className="absolute top-20 right-10 w-64 h-64 rounded-full border border-blue-500/20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div
        className="absolute bottom-32 left-20 w-48 h-48 rounded-full border border-blue-500/20"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
          <span className="-translate-y-3 text-9xl font-medium text-blue-500">Res-Q</span>
      

        <h1 className="text-6xl md:text-7xl font-bold text-slate-700 mb-6 leading-tight">Precision When It Matters Most</h1>

        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto">
          Res-Q guides mountain rescuers with meter-level accuracy using European space technologies—cutting through
          fog, darkness, and terrain.
        </p>

        {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-500 text-slate-900 font-semibold rounded-lg hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            Join the Mission
          </button>
          <button className="px-8 py-4 border border-size-md border-slate-600 text-slate-900 font-semibold rounded-lg hover:bg-slate-600/50 transition-all duration-300">
            Learn More
          </button>
        </div>*/}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="text-slate-700 text-sm mb-2">Scroll to explore</div>
        <svg className="w-5 h-5 text-blue-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
