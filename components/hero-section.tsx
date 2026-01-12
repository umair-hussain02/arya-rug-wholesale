"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-foreground flex items-center justify-center overflow-hidden">
      {/* Background with subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="textile" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#textile)" />
        </svg>
      </div>

      {/* Gradient overlay (brown → transparent) */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/40 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center space-y-8">
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-background font-bold tracking-tight leading-tight">
          Wei Rugs
        </h1>
        <p className="text-xl md:text-2xl text-background/90 max-w-3xl mx-auto leading-relaxed font-light">
          Curated collections of authentic handcrafted rugs for design professionals, luxury hotels, and discerning
          collectors worldwide
        </p>

        {/* CTA Buttons with subtle effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href="/catalog">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg border-0 transition-all duration-300 hover:shadow-lg"
            >
              Explore Collections
            </Button>
          </Link>
          <a href="https://wa.me/1234567890?text=I%20am%20interested%20in%20your%20rugs">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-background text-background hover:bg-background/10 px-12 py-6 text-lg bg-transparent transition-all duration-300"
            >
              Contact via WhatsApp
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-background/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
