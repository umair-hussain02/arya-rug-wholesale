"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { collectionsData } from "@/lib/collections-data"
import { MapPin, CheckCircle2, Home, Calendar, Sparkles } from "lucide-react"

export default function InHomeTrialPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const steps = [
    {
      number: 1,
      title: "Select Designs",
      description: "Browse our collections and choose 2-3 rugs you'd like to experience at home.",
      icon: Sparkles,
    },
    {
      number: 2,
      title: "Schedule Trial",
      description: "Pick a convenient date and time for delivery to your space.",
      icon: Calendar,
    },
    {
      number: 3,
      title: "In-Home Placement",
      description: "Our team carefully places and styles each rug in your chosen area.",
      icon: Home,
    },
    {
      number: 4,
      title: "Final Selection",
      description: "Live with the rugs, see how they feel, and decide with confidence.",
      icon: CheckCircle2,
    },
  ]

  const benefits = [
    {
      title: "See True Colors",
      description: "Experience the exact colors under your lighting conditions.",
    },
    {
      title: "Feel the Texture",
      description: "Walk on the rug and feel the quality and comfort firsthand.",
    },
    {
      title: "Match Your Space",
      description: "See how the rug works with your furniture and decor.",
    },
    {
      title: "No Guesswork",
      description: "Make informed decisions with confidence before purchasing.",
    },
  ]

  const serviceAreas = [
    { city: "Los Angeles", trialduration: "7 days" },
    { city: "New York", trialduration: "7 days" },
    { city: "San Francisco", trialduration: "7 days" },
    { city: "Miami", trialduration: "5 days" },
    { city: "Chicago", trialduration: "5 days" },
    { city: "Seattle", trialduration: "5 days" },
  ]

  return (
    <div className="w-full">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-screen overflow-hidden bg-muted">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
            src="https://placeholder.co/1920x1080/3a2418/f6efe7?text=Luxury+Rug+Home"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/60"></div>

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl space-y-4"
            >
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-background leading-tight">
                Experience the Rug in Your Space
              </h1>
              <p className="text-background/90 text-lg md:text-xl">
                Choose. Try. Decide — from the comfort of your home.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A seamless process designed for your convenience and peace of mind.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-serif text-3xl font-bold text-primary">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why In-Home Trial */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Why In-Home Trial</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Rugs are investments. Live with yours before you commit.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Is It For */}
        <section className="w-full py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Who Is It For</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Homeowners", description: "Make the perfect choice for your living space." },
                {
                  title: "Interior Designers",
                  description: "Present curated options to your clients with confidence.",
                },
                {
                  title: "High-Value Projects",
                  description: "Ensure selections work perfectly in luxury installations.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 border border-border bg-muted/50 hover:border-primary transition-colors duration-300 space-y-4"
                >
                  <h3 className="font-serif text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Service Areas</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Currently available in major metropolitan areas. Contact us for availability in your region.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 bg-background border border-border rounded-sm"
                >
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{area.city}</p>
                    <p className="text-sm text-muted-foreground">{area.trialduration} trial</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-muted-foreground mb-4">Not in a service area?</p>
              <a href="/contact" className="text-primary hover:text-primary/80 font-semibold">
                Contact us for custom arrangements
              </a>
            </motion.div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="w-full py-20 md:py-32 bg-foreground text-background">
          <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              {!formSubmitted ? (
                <>
                  <div className="text-center space-y-4">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold">Schedule Your Trial</h2>
                    <p className="text-background/80 text-lg">
                      Fill out the form below and we'll get in touch to confirm your trial date.
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setFormSubmitted(true)
                    }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-background/10 border border-background/30 text-background placeholder-background/60 focus:outline-none focus:border-primary"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Phone</label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 bg-background/10 border border-background/30 text-background placeholder-background/60 focus:outline-none focus:border-primary"
                          placeholder="Your phone"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 bg-background/10 border border-background/30 text-background placeholder-background/60 focus:outline-none focus:border-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">City</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-background/10 border border-background/30 text-background placeholder-background/60 focus:outline-none focus:border-primary"
                          placeholder="Your city"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Preferred Trial Date</label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-3 bg-background/10 border border-background/30 text-background placeholder-background/60 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Collections of Interest</label>
                      <select
                        multiple
                        className="w-full px-4 py-3 bg-background/10 border border-background/30 text-background focus:outline-none focus:border-primary"
                      >
                        {collectionsData.map((collection) => (
                          <option key={collection.id} value={collection.id} className="text-foreground">
                            {collection.title}
                          </option>
                        ))}
                      </select>
                      <p className="text-xs text-background/70 mt-2">Hold Ctrl/Cmd to select multiple</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Additional Notes</label>
                      <textarea
                        className="w-full px-4 py-3 bg-background/10 border border-background/30 text-background placeholder-background/60 focus:outline-none focus:border-primary h-24 resize-none"
                        placeholder="Tell us about your space, style preferences, or any questions..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg transition-colors duration-300"
                    >
                      Schedule Trial
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold">Trial Request Received</h3>
                  <p className="text-background/80 text-lg leading-relaxed">
                    Thank you for your interest in our in-home trial service. Our team will contact you within 24 hours
                    to confirm your trial date and discuss your collection preferences.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors"
                  >
                    Back Home
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
