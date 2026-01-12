"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function AnimatedTestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      quote:
        "ARYA Rugs transformed our hotel lobby with authentic pieces that guests comment on daily. The quality is unmatched.",
      author: "Sarah Chen",
      role: "Interior Designer",
      company: "Modern Spaces Studio",
    },
    {
      quote:
        "We've been sourcing from ARYA Rugs for three years. Their wholesale pricing and customer service are exceptional.",
      author: "Marcus Johnson",
      role: "Retail Owner",
      company: "Design District Boutique",
    },
    {
      quote:
        "The attention to detail and authenticity of these pieces elevates every project I work on. Highly recommended.",
      author: "Elena Rodriguez",
      role: "Creative Director",
      company: "Luxury Interiors Co.",
    },
    {
      quote: "As a corporate buyer, I appreciate the consistency in quality and the dedicated wholesale support.",
      author: "David Park",
      role: "Procurement Manager",
      company: "Global Hospitality Group",
    },
  ]

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoplay, testimonials.length])

  return (
    <section className="w-full py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary text-sm font-sans font-semibold tracking-widest uppercase">
            Trusted By Professionals
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">
            What Our Partners Say
          </h2>
        </div>

        {/* Testimonial Content with fade animation */}
        <div className="space-y-12" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-8 text-center"
            >
              <blockquote className="font-serif text-3xl md:text-4xl font-light text-foreground leading-relaxed italic">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="space-y-2">
                <p className="font-sans font-semibold text-foreground text-lg">{testimonials[activeIndex].author}</p>
                <p className="font-sans text-sm text-muted-foreground tracking-wider">
                  {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots with smooth animation */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setAutoplay(false)
                }}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary" : "bg-muted hover:bg-muted-foreground"
                }`}
                animate={{
                  width: index === activeIndex ? 32 : 12,
                  height: 12,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
