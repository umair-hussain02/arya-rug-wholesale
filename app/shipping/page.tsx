"use client"

import type React from "react"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Truck, Ship, CheckCircle, Clock, Globe } from "lucide-react"

interface ShippingMethod {
  icon: React.ReactNode
  title: string
  transit: string
  cost: string
  ideal: string
}

interface Incoterm {
  term: string
  full: string
  description: string
}

interface ServiceArea {
  region: string
  countries: number
  leadTime: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const shippingMethods: ShippingMethod[] = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Air Freight",
    transit: "5-10 business days",
    cost: "Higher cost",
    ideal: "Urgent orders, small shipments",
  },
  {
    icon: <Ship className="w-8 h-8" />,
    title: "Sea Freight (FCL)",
    transit: "20-35 days",
    cost: "Economical",
    ideal: "Large orders, cost-conscious",
  },
  {
    icon: <Ship className="w-8 h-8" />,
    title: "Sea Freight (LCL)",
    transit: "25-40 days",
    cost: "Mid-range",
    ideal: "Medium orders, flexible timing",
  },
]

const incoterms: Incoterm[] = [
  {
    term: "FOB",
    full: "Free on Board",
    description:
      "You arrange and pay for freight from our warehouse. You handle all customs and import duties. Best for experienced importers.",
  },
  {
    term: "CIF",
    full: "Cost, Insurance & Freight",
    description:
      "We arrange freight and insurance. You handle customs clearance and import duties at destination. Middle option for flexibility.",
  },
  {
    term: "DDP",
    full: "Delivered Duty Paid",
    description:
      "We handle all freight, customs, and duties. Product delivered to your door, fully paid. Most convenient option.",
  },
]

const serviceAreas: ServiceArea[] = [
  { region: "North America", countries: 3, leadTime: "10-15 days (air), 25-40 days (sea)" },
  { region: "Europe", countries: 28, leadTime: "8-12 days (air), 20-30 days (sea)" },
  { region: "Asia-Pacific", countries: 15, leadTime: "5-10 days (air), 15-25 days (sea)" },
  { region: "Middle East", countries: 8, leadTime: "7-12 days (air), 18-28 days (sea)" },
  { region: "South America", countries: 12, leadTime: "15-20 days (air), 30-45 days (sea)" },
  { region: "Africa", countries: 5, leadTime: "12-18 days (air), 25-40 days (sea)" },
]

export default function ShippingPage() {
  return (
    <div className="w-full">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-secondary border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center space-y-4">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">Shipping Information</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable, and flexible shipping solutions to over 50 countries worldwide.
            </p>
          </div>
        </section>

        {/* Shipping Methods Section */}
        <section className="w-full py-20 md:py-32 bg-background">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="text-center space-y-4">
                <p className="text-primary text-xs font-semibold uppercase tracking-widest">Shipping Methods</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                  Choose Your Delivery Option
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {shippingMethods.map((method) => (
                  <motion.div
                    key={method.title}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="p-8 bg-secondary rounded-sm space-y-4 border border-border transition-all"
                  >
                    <div className="text-primary">{method.icon}</div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{method.title}</h3>
                    <div className="space-y-3 pt-4 border-t border-border">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                          Transit Time
                        </p>
                        <p className="text-foreground font-medium mt-1">{method.transit}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Cost</p>
                        <p className="text-foreground font-medium mt-1">{method.cost}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                          Ideal For
                        </p>
                        <p className="text-foreground font-medium mt-1">{method.ideal}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Incoterms Section */}
        <section className="w-full py-20 md:py-32 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="text-center space-y-4">
                <p className="text-primary text-xs font-semibold uppercase tracking-widest">International Trade</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Incoterms</h2>
              </motion.div>

              <div className="space-y-6">
                {incoterms.map((incoterm) => (
                  <motion.div
                    key={incoterm.term}
                    variants={itemVariants}
                    className="p-8 bg-background rounded-sm border border-border space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-foreground">{incoterm.term}</h3>
                        <p className="text-primary text-sm font-semibold mt-1">{incoterm.full}</p>
                      </div>
                      <div className="text-primary">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{incoterm.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="w-full py-20 md:py-32 bg-background">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="text-center space-y-4">
                <p className="text-primary text-xs font-semibold uppercase tracking-widest">Global Reach</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Service Areas</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceAreas.map((area) => (
                  <motion.div
                    key={area.region}
                    variants={itemVariants}
                    className="p-6 bg-secondary rounded-sm border border-border space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-primary" />
                      <h3 className="font-serif text-xl font-bold text-foreground">{area.region}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Countries</span>
                        <span className="text-foreground font-medium">{area.countries}</span>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Transit Time</p>
                        <p className="text-foreground font-medium text-xs">{area.leadTime}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Packaging & Standards Section */}
        <section className="w-full py-20 md:py-32 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="text-center space-y-4">
                <p className="text-primary text-xs font-semibold uppercase tracking-widest">Quality Standards</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Packaging & Handling</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground">Protective Packaging</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Professional cardboard boxes with foam insulation</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Moisture-resistant wrapping for protection during transit</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Wooden pallets for large shipments to prevent damage</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Fragile labels and handling instructions on all boxes</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground">Transit Insurance</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>All shipments include standard transit insurance</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Additional coverage available upon request</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Full documentation for insurance claims if needed</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Real-time shipment tracking for all orders</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="w-full py-20 md:py-32 bg-background">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="text-center space-y-4">
                <p className="text-primary text-xs font-semibold uppercase tracking-widest">Order Process</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Timeline</h2>
              </motion.div>

              <div className="space-y-6">
                {[
                  { step: "1", title: "Order Confirmation", time: "Same day" },
                  { step: "2", title: "Production", time: "5-14 weeks" },
                  { step: "3", title: "Quality Inspection", time: "2-3 days" },
                  { step: "4", title: "Packaging & Shipping", time: "2-3 days" },
                  { step: "5", title: "In Transit", time: "5-40 days" },
                  { step: "6", title: "Delivery", time: "Same day" },
                ].map((item, index) => (
                  <motion.div key={item.step} variants={itemVariants} className="flex gap-6 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      {index < 5 && <div className="w-1 h-16 bg-primary/30 mt-2" />}
                    </div>
                    <div className="pt-2 flex-1">
                      <h4 className="font-semibold text-foreground text-lg">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {item.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ CTA Section */}
        <section className="w-full py-16 md:py-24 bg-secondary border-t border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center space-y-8">
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={itemVariants} className="font-serif text-4xl font-bold text-foreground">
                Questions About Shipping?
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
                Check our FAQ or contact our logistics team for detailed assistance.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                variants={itemVariants}
                href="/faq"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors rounded-sm"
              >
                View FAQ
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="https://wa.me/1234567890?text=I%20have%20a%20shipping%20question"
                className="px-8 py-4 border-2 border-foreground hover:bg-foreground/5 text-foreground font-semibold transition-colors rounded-sm"
              >
                Chat with Us
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
