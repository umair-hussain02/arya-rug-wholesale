"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="w-full border-b border-border bg-secondary py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Get in Touch</h1>
            <p className="text-muted-foreground text-lg">
              Have questions about our rugs? We are here to help. Contact us for quotes, custom orders, or general
              inquiries.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <Mail className="text-primary flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <a
                            href="mailto:aryarugs1@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            contact@aryarugs.com
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Phone className="text-primary flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-medium text-foreground">Phone</p>
                          <a
                            href="tel:+12314634971"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            +1 (231) 463-4971
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-medium text-foreground">Address</p>
                          <p className="text-muted-foreground">
                            San Francisco, California
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Response Time</h3>
                    <p className="text-muted-foreground">
                      We typically respond to inquiries within 24 business hours. For urgent matters, please call us
                      directly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-secondary rounded-lg p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitted && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-green-800 font-medium">
                          Thank you! Your message has been sent successfully. We will get back to you soon.
                        </p>
                      </div>
                    )}

                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-800 font-medium">{error}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (234) 567-890"
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-foreground">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a subject</option>
                        <option value="bulk_order">Bulk Order Inquiry</option>
                        <option value="custom_order">Custom Order</option>
                        <option value="wholesale">Wholesale Partnership</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements and we will get back to you with options..."
                        required
                        rows={6}
                        className="bg-background border-border resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We respect your privacy. Your information will be used only to respond to your inquiry.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="w-full py-16 md:py-24 bg-secondary border-t border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  q: "What is the minimum order for wholesale pricing?",
                  a: "We offer competitive pricing on orders of 5+ rugs. Contact us for custom quotes based on your needs.",
                },
                {
                  q: "Do you offer custom sizes?",
                  a: "Yes, custom sizes are available. Please contact us with your specifications for a quote.",
                },
                {
                  q: "What is the typical delivery timeframe?",
                  a: "Standard delivery is 2-3 weeks. Custom orders may take longer. We will confirm timelines upon order.",
                },
                {
                  q: "Do you offer bulk discounts?",
                  a: "Volume discounts apply for orders of 10+ rugs. Contact us for detailed pricing.",
                },
              ].map((faq, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-semibold text-foreground">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}
