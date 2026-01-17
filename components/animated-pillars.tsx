"use client"

import { motion, useInView } from "framer-motion"
import { Gem, Handshake, Layers, ShieldCheck } from "lucide-react"
import { useRef } from "react"

export function AnimatedPillarsSection() {
  const pillars = [
    {
      icon: Gem,
      title: "Authentic Craftsmanship",
      description:
        "Hand-selected from master weavers across the globe, each rug carries centuries of tradition and technique.",
    },
    {
      icon: ShieldCheck,
      title: "Premium Quality",
      description:
        "Only the finest natural materials—100% wool, silk, and jute—ensuring durability and timeless beauty.",
    },
    {
      icon: Handshake,
      title: "Wholesale Expertise",
      description:
        "Dedicated support for designers, retailers, and hospitality partners with competitive bulk pricing and custom orders.",
    },
    {
      icon: Layers,
      title: "Curated Collections",
      description:
        "Thoughtfully selected styles from traditional to contemporary, ensuring something for every aesthetic.",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      ref={ref}
      className="relative w-full py-16 md:py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/pillar-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-2 lg:px-2">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">
            Why ARYA RUGS
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-background">
            The ARYA Difference
          </h2>
        </div>

        {/* Pillars Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="
                  group
                  flex flex-col items-center text-center
                  gap-6
                  p-8
                  rounded-xl
                  bg-white/3 backdrop-blur-sm
                  border border-white/10
                  transition-all duration-500
                  hover:bg-white/10 hover:-translate-y-2
                "
              >
                {/* Icon */}
                <div className="flex items-center justify-center">
                  <Icon className="h-12 w-12 text-primary/60 transition-colors duration-500 group-hover:text-primary" />
                </div>

                {/* Text */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-background">
                    {pillar.title}
                  </h3>
                  <p className="text-background/80 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
