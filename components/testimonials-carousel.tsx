"use client"

import { useState } from "react"

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "Wei Rugs transformed our hotel lobby with authentic pieces that guests comment on daily. The quality is unmatched.",
      author: "Sarah Chen",
      role: "Interior Designer",
      company: "Modern Spaces Studio",
    },
    {
      quote:
        "We've been sourcing from Wei for three years. Their wholesale pricing and customer service are exceptional.",
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

        {/* Testimonial Content */}
        <div className="space-y-12">
          <div className="space-y-8 text-center">
            <blockquote className="font-serif text-3xl md:text-4xl font-light text-foreground leading-relaxed italic">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            <div className="space-y-2">
              <p className="font-sans font-semibold text-foreground text-lg">{testimonials[activeIndex].author}</p>
              <p className="font-sans text-sm text-muted-foreground tracking-wider">
                {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary w-8" : "bg-muted hover:bg-muted-foreground"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
