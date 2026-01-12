"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselSlide {
  id: number
  image: string
  headline: string
  subheading: string
}

const heroSlides: CarouselSlide[] = [
  {
    id: 1,
    image: "/moroccan-navy-rug.jpg",
    headline: "Handcrafted Rugs",
    subheading: "Authentic collections from global artisans",
  },
  {
    id: 2,
    image: "/persian-garden-rug.jpg",
    headline: "Timeless Heritage",
    subheading: "Traditional techniques passed through generations",
  },
  {
    id: 3,
    image: "/turkish-kilim-rug.jpg",
    headline: "Global Collections",
    subheading: "Curated pieces from the world's finest weavers",
  },
  {
    id: 4,
    image: "/modern-charcoal-rug.jpg",
    headline: "Modern Designs",
    subheading: "Contemporary aesthetics meet traditional craftsmanship",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [direction, setDirection] = useState(0)

  // Auto-play carousel every 6 seconds
  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  }

  const handlePrevious = () => {
    setAutoPlay(false)
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const handleNext = () => {
    setAutoPlay(false)
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const handleDotClick = (index: number) => {
    setAutoPlay(false)
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Carousel Images */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[currentSlide].image || "/placeholder.svg"}
            alt={heroSlides[currentSlide].headline}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Brown Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full min-h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={textVariants}
            className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center space-y-8"
          >
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-background font-bold tracking-tight leading-tight">
              {heroSlides[currentSlide].headline}
            </h1>

            <p className="text-xl md:text-2xl text-background/90 max-w-2xl mx-auto leading-relaxed font-light">
              {heroSlides[currentSlide].subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
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
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 hover:bg-background/40 text-background transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 hover:bg-background/40 text-background transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center gap-3">
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 transition-all ${index === currentSlide ? "bg-primary" : "bg-background/40"}`}
            animate={{
              width: index === currentSlide ? 32 : 8,
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
