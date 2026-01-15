"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Globe, Clock, PackageCheck } from "lucide-react";
import { collectionsData } from "@/lib/collections-data";
import {
  MapPin,
  CheckCircle2,
  Home,
  Calendar,
  Sparkles,
  Search,
  Palette,
  Truck,
  Smile,
} from "lucide-react";

export default function InHomeTrialPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const timelineSteps = [
    {
      number: "1",
      title: "Share Your Preferences",
      description: "Tell us your style, size, and space requirements",
      icon: Sparkles,
    },
    {
      number: "2",
      title: "Schedule Delivery",
      description: "Pick a date convenient for you within your area",
      icon: Calendar,
    },
    {
      number: "3",
      title: "Expert Placement",
      description: "Our team delivers and professionally styles each rug",
      icon: Home,
    },
    {
      number: "4",
      title: "Decide With Confidence",
      description: "Live with your selections and make your final choice",
      icon: CheckCircle2,
    },
  ];

  const benefits = [
    {
      title: "See True Colors",
      description:
        "Experience the exact colors under your lighting conditions.",
    },
    {
      title: "Feel the Texture",
      description:
        "Walk on the rug and feel the quality and comfort firsthand.",
    },
    {
      title: "Match Your Space",
      description: "See how the rug works with your furniture and decor.",
    },
    {
      title: "No Guesswork",
      description: "Make informed decisions with confidence before purchasing.",
    },
  ];

  const serviceAreas = [
    {
      title: "Coast to Coast",
      description:
        "From major cities to private residences, we serve clients nationwide.",
      icon: Globe,
    },
    {
      title: "Flexible Trial Period",
      description:
        "Enjoy a 5–7 day in-home trial depending on delivery location.",
      icon: Clock,
    },
    {
      title: "White-Glove Delivery",
      description:
        "Professional delivery, placement, and styling—always included.",
      icon: PackageCheck,
    },
  ];

  return (
    <div className="w-full">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[500px] overflow-hidden bg-muted">
          <img
            src="/inhometrial.jpg"
            alt="About ARYA RUGS"
            className="w-full h-full object-cover"
          />

          {/* Dark brown bottom overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a0f]/90 via-[#2a1a0f]/50 to-transparent" />

          {/* Existing soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/40" />

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
        <section className="w-full py-20 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple, seamless process designed entirely around your comfort
                and confidence.
              </p>
            </motion.div>

            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Progress Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 origin-left"
                />

                <div className="grid grid-cols-4 gap-8">
                  {timelineSteps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        {/* Icon Circle */}
                        <div className="relative z-10 mb-8">
                          <div className="w-16 h-16 bg-background border-4 border-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4 text-center">
                          <div className="font-serif text-5xl font-bold text-primary/50">
                            {step.number}
                          </div>
                          <h3 className="font-serif text-2xl font-bold text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-8">
              {timelineSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-background border-4 border-primary rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      {idx < timelineSteps.length - 1 && (
                        <div className="w-1 h-16 bg-primary/20 mt-4" />
                      )}
                    </div>

                    <div className="pt-2 space-y-2">
                      <p className="font-serif text-3xl font-bold text-primary/30">
                        {step.number}
                      </p>
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why In-Home Trial */}
        <section className="w-full py-20 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why In-Home Trial
              </h2>
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
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
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
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Who Is It For
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Homeowners",
                  description: "Make the perfect choice for your living space.",
                },
                {
                  title: "Interior Designers",
                  description:
                    "Present curated options to your clients with confidence.",
                },
                {
                  title: "High-Value Projects",
                  description:
                    "Ensure selections work perfectly in luxury installations.",
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
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
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
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Nationwide Service
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our in-home rug trial experience is available across the United
                States, thoughtfully delivered wherever your space may be.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceAreas.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    className="p-8 bg-background border border-border rounded-sm text-center"
                  >
                    <Icon className="w-6 h-6 text-primary mx-auto mb-4" />

                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground mb-4">
                Have a unique location or special request?
              </p>
              <a
                href="/contact"
                className="inline-block font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Speak with our team →
              </a>
            </motion.div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="w-full py-20 md:py-20 bg-foreground text-background">
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
                    <h2 className="font-serif text-4xl md:text-5xl font-bold">
                      Schedule Your Trial
                    </h2>
                    <p className="text-background/80 text-lg">
                      Fill out the form below and we'll get in touch to confirm
                      your trial date.
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-background/10 border border-background/30 text-background placeholder-background/60 focus:outline-none focus:border-primary"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Phone
                        </label>
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
                        <label className="block text-sm font-semibold mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 bg-background/10 border border-background/30 text-background placeholder-background/60 focus:outline-none focus:border-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-background/10 border border-background/30 text-background placeholder-background/60 focus:outline-none focus:border-primary"
                          placeholder="Your city"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Preferred Trial Date
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-3 bg-background/10 border border-background/30 text-background placeholder-background/60 focus:outline-none focus:border-primary"
                      />
                    </div>


                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Additional Notes
                      </label>
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
                  <h3 className="font-serif text-3xl font-bold">
                    Trial Request Received
                  </h3>
                  <p className="text-background/80 text-lg leading-relaxed">
                    Thank you for your interest in our in-home trial service.
                    Our team will contact you within 24 hours to confirm your
                    trial date and discuss your collection preferences.
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
  );
}
