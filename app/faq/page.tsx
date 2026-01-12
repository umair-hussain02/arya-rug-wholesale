"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQCategory {
  category: string
  items: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    category: "Wholesale Orders",
    items: [
      {
        id: "wholesale-1",
        question: "What is the minimum order quantity?",
        answer:
          "Our minimum order quantity is 5 pieces per design. For bulk orders of 50+ pieces, we offer volume discounts and customization options. Contact our wholesale team for special pricing.",
      },
      {
        id: "wholesale-2",
        question: "Do you offer trade discounts?",
        answer:
          "Yes, we provide competitive trade discounts for interior designers, architects, and hospitality businesses. Pricing varies based on order volume. Please contact our sales team for a custom quote.",
      },
      {
        id: "wholesale-3",
        question: "Can we use our own branding on invoices?",
        answer:
          "We support white-label options for qualified wholesale partners. Custom packaging and branding can be arranged for larger orders.",
      },
      {
        id: "wholesale-4",
        question: "What payment terms do you offer?",
        answer:
          "We accept 30-60 day net terms for established wholesale accounts with proper credit verification. For first-time orders, we typically require 50% deposit with balance due before shipment.",
      },
    ],
  },
  {
    category: "Custom Rugs",
    items: [
      {
        id: "custom-1",
        question: "Can you create a rug with custom dimensions?",
        answer:
          "Yes! We specialize in custom sizes and dimensions. Our artisans can create rugs ranging from 2x3 feet to 12x18 feet or larger. Custom requests typically require 8-12 weeks production time.",
      },
      {
        id: "custom-2",
        question: "Is custom color matching available?",
        answer:
          "We can match custom colors and create unique color combinations. Provide color samples, pantone codes, or images and our design team will create a mockup for your approval.",
      },
      {
        id: "custom-3",
        question: "What is the lead time for custom rugs?",
        answer:
          "Custom rug orders typically take 8-14 weeks from design approval to completion, depending on complexity and size. Rush production is available at an additional cost.",
      },
      {
        id: "custom-4",
        question: "Can we add logos or patterns to rugs?",
        answer:
          "Yes, we can integrate logos, crests, and custom patterns into your rug design. Our design team will work with you to ensure the pattern works well with the traditional weaving process.",
      },
    ],
  },
  {
    category: "Production & Lead Time",
    items: [
      {
        id: "production-1",
        question: "What is the standard lead time for catalog items?",
        answer:
          "Stock items ship within 5-7 business days. For semi-custom orders, expect 6-10 weeks depending on the design and customization level.",
      },
      {
        id: "production-2",
        question: "Do you have emergency rush options?",
        answer:
          "Yes, we offer rush production for select designs. A 40% rush fee applies for 2-3 week expedited delivery. Availability depends on current production schedule.",
      },
      {
        id: "production-3",
        question: "Are your rugs made in-house or outsourced?",
        answer:
          "We partner with master artisans and cooperative weaving facilities across India, Turkey, Morocco, and Afghanistan. All production is carefully managed with regular quality inspections.",
      },
      {
        id: "production-4",
        question: "How do you ensure quality control?",
        answer:
          "Every rug undergoes multi-stage inspection including weave quality check, color verification, dimension measurement, and final packaging inspection before shipping.",
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    items: [
      {
        id: "shipping-1",
        question: "What shipping methods do you offer?",
        answer:
          "We offer both air and sea freight. Air shipping typically takes 5-10 days (higher cost), while sea freight takes 20-35 days (more economical for large orders).",
      },
      {
        id: "shipping-2",
        question: "What are the Incoterms available?",
        answer:
          "We work with FOB, CIF, and DDP terms. FOB allows you to arrange shipping; CIF includes freight; DDP includes all costs and duties. Pricing varies by term.",
      },
      {
        id: "shipping-3",
        question: "Do you ship internationally?",
        answer:
          "Yes! We ship to 50+ countries worldwide. We handle all customs documentation and can work with your preferred freight forwarder if needed.",
      },
      {
        id: "shipping-4",
        question: "What is the typical shipping cost?",
        answer:
          "Shipping costs depend on destination, weight, and method. Typically, domestic shipping is $50-150, international starts at $300-800. Exact quotes provided with order.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    const newOpen = new Set(openItems)
    if (newOpen.has(id)) {
      newOpen.delete(id)
    } else {
      newOpen.add(id)
    }
    setOpenItems(newOpen)
  }

  const displayItems = selectedCategory
    ? faqData.find((cat) => cat.category === selectedCategory)?.items || []
    : faqData.flatMap((cat) => cat.items)

  const displayCategories = selectedCategory ? [selectedCategory] : faqData.map((cat) => cat.category)

  return (
    <div className="w-full">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-secondary border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center space-y-4">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our products, services, and ordering process.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Category Buttons */}
            <div className="mb-12 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Filter by topic</p>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 text-sm font-semibold transition-all ${
                    selectedCategory === null
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                  }`}
                >
                  All Topics
                </motion.button>
                {faqData.map((cat) => (
                  <motion.button
                    key={cat.category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(cat.category)}
                    className={`px-4 py-2 text-sm font-semibold transition-all ${
                      selectedCategory === cat.category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                    }`}
                  >
                    {cat.category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* FAQ Accordions */}
            <div className="space-y-3">
              {displayCategories.map((category) => {
                const categoryData = faqData.find((c) => c.category === category)
                return (
                  <div key={category}>
                    {!selectedCategory && (
                      <div className="mb-8 pt-8 first:pt-0">
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{category}</h2>
                      </div>
                    )}

                    <div className="space-y-3">
                      {categoryData?.items.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="border border-border rounded-sm overflow-hidden bg-background"
                        >
                          <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full px-6 py-5 flex items-center justify-between hover:bg-secondary transition-colors"
                            aria-expanded={openItems.has(item.id)}
                          >
                            <span className="font-semibold text-foreground text-left">{item.question}</span>
                            <motion.div
                              animate={{ rotate: openItems.has(item.id) ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 flex-shrink-0"
                            >
                              <ChevronDown className="w-5 h-5 text-primary" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {openItems.has(item.id) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-border bg-secondary/50"
                              >
                                <div className="px-6 py-5 text-muted-foreground leading-relaxed">{item.answer}</div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 p-8 bg-secondary rounded-sm text-center space-y-4">
              <h3 className="font-serif text-2xl font-bold text-foreground">Didn't find your answer?</h3>
              <p className="text-muted-foreground">
                Our team is ready to help. Reach out via WhatsApp or email for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="https://wa.me/12314634971?text=I%20have%20a%20question%20about%20your%20rugs"
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors rounded-sm"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:contact@aryarugs.com"
                  className="px-6 py-3 border-2 border-foreground hover:bg-foreground/5 text-foreground font-semibold transition-colors rounded-sm"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
