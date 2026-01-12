"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AnimatedHeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
      },
    },
  }

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
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="font-serif text-6xl md:text-7xl lg:text-8xl text-background font-bold tracking-tight leading-tight"
        >
          Wei Rugs
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-background/90 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Curated collections of authentic handcrafted rugs for design professionals, luxury hotels, and discerning
          collectors worldwide
        </motion.p>

        {/* CTA Buttons with subtle effects */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href="/catalog">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg border-0 transition-all duration-300 hover:shadow-lg"
              >
                Explore Collections
              </Button>
            </motion.div>
          </Link>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a href="https://wa.me/1234567890?text=I%20am%20interested%20in%20your%20rugs">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-background text-background hover:bg-background/10 px-12 py-6 text-lg bg-transparent transition-all duration-300"
              >
                Contact via WhatsApp
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <svg className="w-6 h-6 text-background/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
