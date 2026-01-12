"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Users, Globe, Award, Zap } from "lucide-react"

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
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

interface TimelineEvent {
  year: string
  title: string
  description: string
}

interface ValueCard {
  icon: React.ReactNode
  title: string
  description: string
}

interface Capability {
  title: string
  description: string
}

interface Statistic {
  number: string
  label: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2010",
    title: "Founded with Vision",
    description: "Arya Rugs started as a vision to bring authentic handcrafted rugs to the global market.",
  },
  {
    year: "2015",
    title: "Global Expansion",
    description: "Expanded operations to include partnerships with artisans across 12 countries.",
  },
  {
    year: "2020",
    title: "Premium Collections",
    description: "Launched exclusive collections partnering with world-renowned designers.",
  },
  {
    year: "2024",
    title: "Industry Leaders",
    description: "Recognized as trusted suppliers to luxury brands and design professionals worldwide.",
  },
]

const values: ValueCard[] = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Authentic Craftsmanship",
    description: "Every rug is handcrafted using traditional techniques passed through generations.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Sourcing",
    description: "Direct partnerships with artisans and cooperatives across the world.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Fair Trade",
    description: "Ensuring ethical practices and fair compensation for all artisans.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Innovation",
    description: "Blending traditional techniques with contemporary design aesthetics.",
  },
]

const capabilities: Capability[] = [
  { title: "Custom Rugs", description: "Bespoke designs tailored to your exact specifications and vision." },
  { title: "Bulk Production", description: "Large-scale manufacturing for hotels, resorts, and commercial spaces." },
  { title: "Global Export", description: "Reliable shipping to 50+ countries with full logistics support." },
  { title: "Quality Assurance", description: "Rigorous inspection and QC at every stage of production." },
  { title: "Expert Consultation", description: "Design guidance and technical advice from our specialists." },
  { title: "Sustainable Practices", description: "Eco-friendly materials and ethical production methods." },
]

const statistics: Statistic[] = [
  { number: "50+", label: "Countries Served" },
  { number: "1000+", label: "Collections Available" },
  { number: "500+", label: "Artisan Partners" },
  { number: "98%", label: "Client Satisfaction" },
]

export default function AboutPage() {
  return (
    <div className="w-full">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/aboutcover.jpg" alt="About ARYA RUGS" className="w-full h-full object-cover" />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/50 to-foreground/80" />

          {/* Content */}
          <motion.div
            className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-serif text-6xl md:text-7xl lg:text-7xl text-background font-bold tracking-tight leading-tight">
              Crafting Rugs for Global Spaces
            </h1>
            <p className="text-xl md:text-2xl text-background/70 max-w-2xl mx-auto leading-relaxed font-light">
              Over a decade of excellence in handcrafted rug design and production
            </p>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-20 md:py-32 bg-background">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Image */}
              <motion.div variants={itemVariants}>
                <div className="relative">
                  <img
                    src="/about1.jpg"
                    alt="Our Heritage"
                    className="w-full h-auto rounded-sm shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-sm -z-10" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="space-y-4">
                  <p className="text-primary text-xs font-sans font-semibold tracking-widest uppercase">Our Heritage</p>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    Preserving Tradition, Embracing Innovation
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Arya Rugs was founded on the belief that authentic handcrafted rugs deserve a place in every modern
                  space. We work directly with master artisans and weaving cooperatives across the globe, ensuring that
                  every rug in our collection tells a story of heritage, craftsmanship, and cultural pride.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our commitment goes beyond beautiful products. We're dedicated to fair trade practices, sustainable
                  production methods, and supporting artisan communities. When you choose a Arya Rug, you're investing in
                  both artistry and ethical commerce.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="w-full py-20 md:py-32 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="text-center space-y-4">
                <p className="text-primary text-xs font-sans font-semibold tracking-widest uppercase">Our Journey</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Milestones of Excellence</h2>
              </motion.div>

              {/* Timeline */}
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <motion.div key={event.year} variants={itemVariants} className="flex gap-6 md:gap-12 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-secondary" />
                      {index < timelineEvents.length - 1 && <div className="w-1 h-24 bg-primary/30 mt-4" />}
                    </div>
                    <div className="pt-1 flex-1">
                      <p className="font-semibold text-primary text-lg">{event.year}</p>
                      <h3 className="font-serif text-2xl font-bold text-foreground mt-2">{event.title}</h3>
                      <p className="text-muted-foreground mt-2 leading-relaxed">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-20 md:py-32 bg-background">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="text-center space-y-4">
                <p className="text-primary text-xs font-sans font-semibold tracking-widest uppercase">Core Values</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">What Drives Us Forward</h2>
              </motion.div>

              {/* Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="p-8 bg-secondary rounded-sm space-y-4 transition-all"
                  >
                    <div className="text-primary">{value.icon}</div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="w-full py-20 md:py-32 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="text-center space-y-4">
                <p className="text-primary text-xs font-sans font-semibold tracking-widest uppercase">
                  Our Capabilities
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">What We Offer</h2>
              </motion.div>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {capabilities.map((capability) => (
                  <motion.div key={capability.title} variants={itemVariants} className="p-6 space-y-3">
                    <div className="w-2 h-8 bg-primary" />
                    <h3 className="font-serif text-xl font-bold text-foreground">{capability.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{capability.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="w-full py-20 md:py-32 bg-foreground text-background">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-5xl font-bold text-center">
                By the Numbers
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {statistics.map((stat) => (
                  <motion.div key={stat.label} variants={itemVariants} className="text-center space-y-2">
                    <div className="text-5xl md:text-6xl font-serif font-bold text-primary">{stat.number}</div>
                    <p className="text-background/80 uppercase tracking-wider text-sm font-semibold">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                  Ready to Explore Our Collections?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover handcrafted rugs that transform spaces and tell stories.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/catalog">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors"
                  >
                    Browse Catalog
                  </motion.button>
                </Link>
                <a href="https://wa.me/12314634971?text=I%20am%20interested%20in%20your%20rugs">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-foreground hover:bg-foreground/5 text-foreground font-semibold transition-colors"
                  >
                    Contact Us
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
