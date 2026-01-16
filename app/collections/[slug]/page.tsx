"use client"

import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { collectionsData } from "@/lib/collections-data"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function CollectionDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const collection = collectionsData.find((c) => c.slug === slug)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [catalogModalOpen, setCatalogModalOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  if (!collection) {
    return (
      <div className="w-full">
        <Header />
        <main className="w-full min-h-screen bg-background flex items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="font-serif text-4xl font-bold text-foreground">Collection Not Found</h1>
            <p className="text-muted-foreground">The collection you're looking for doesn't exist.</p>
            <Link href="/collections" className="inline-block text-primary hover:text-primary/80 font-semibold">
              Back to Collections
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % collection.galleryImages.length)
  }

  const handleLightboxPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + collection.galleryImages.length) % collection.galleryImages.length)
  }

  return (
    <div className="w-full">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-96 md:h-120 overflow-hidden bg-muted">
          <motion.img
            src={collection.heroImage}
            alt={collection.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/40"></div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl space-y-4"
            >
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 text-background hover:text-background/80 text-sm font-semibold transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Collections
              </Link>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-background leading-tight">
                {collection.title}
              </h1>
              <p className="text-background/90 text-lg md:text-xl max-w-xl">{collection.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl space-y-6"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">The Story</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{collection.story}</p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12"
            >
              Gallery
            </motion.h2>

            {/* Masonry Gallery Grid */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {collection.galleryImages.map((image, idx) => (
                <motion.button
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  onClick={() => {
                    setLightboxIndex(idx)
                    setLightboxOpen(true)
                  }}
                  className="relative group overflow-hidden bg-muted aspect-[3/4] cursor-pointer"
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="w-12 h-12 bg-background/80 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-background text-sm font-semibold">{image.caption}</p>
                    </div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Collection Overview Panel */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {/* Materials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="font-serif text-2xl font-bold text-foreground">Materials</h3>
                <div className="space-y-2">
                  {collection.materials.map((material, idx) => (
                    <p key={idx} className="text-muted-foreground font-sans">
                      {material}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Weave Types */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="font-serif text-2xl font-bold text-foreground">Weave Types</h3>
                <div className="space-y-2">
                  {collection.weaveTypes.map((weave, idx) => (
                    <p key={idx} className="text-muted-foreground font-sans">
                      {weave}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Available Sizes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="font-serif text-2xl font-bold text-foreground">Available Sizes</h3>
                <div className="space-y-2">
                  {collection.availableSizes.map((size, idx) => (
                    <p key={idx} className="text-muted-foreground font-sans">
                      {size}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Ideal For */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="font-serif text-2xl font-bold text-foreground">Ideal For</h3>
                <div className="space-y-2">
                  {collection.idealFor.map((ideal, idx) => (
                    <p key={idx} className="text-muted-foreground font-sans">
                      {ideal}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Customization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="font-serif text-2xl font-bold text-foreground">Customization</h3>
                <div className="space-y-2">
                  {collection.customizationOptions.map((option, idx) => (
                    <p key={idx} className="text-muted-foreground font-sans">
                      {option}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Request Catalog CTA Section */}
        <section className="w-full py-20 md:py-32 bg-foreground text-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-16 h-px bg-primary mx-auto"></div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">Request Full Catalog</h2>
              <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Interested in this collection? Request our full catalog with detailed specifications, pricing, and bulk
                options.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={() => setCatalogModalOpen(true)}
              className="px-10 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg transition-colors duration-300 inline-block"
            >
              Request Catalog
            </motion.button>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightboxOpen(false)
            }}
            className="absolute top-4 right-4 z-50 text-background hover:text-background/80 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              handleLightboxPrev()
            }}
            className="absolute left-4 text-background hover:text-background/80 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <motion.div
            key={lightboxIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full aspect-[3/4] flex flex-col items-center justify-center"
          >
            <img
              src={collection.galleryImages[lightboxIndex].src || "/placeholder.svg"}
              alt={collection.galleryImages[lightboxIndex].alt}
              className="w-full h-full object-contain"
            />
            {collection.galleryImages[lightboxIndex].caption && (
              <p className="text-background text-sm mt-4 text-center">
                {collection.galleryImages[lightboxIndex].caption}
              </p>
            )}
          </motion.div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              handleLightboxNext()
            }}
            className="absolute right-4 text-background hover:text-background/80 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-background text-sm">
            {lightboxIndex + 1} / {collection.galleryImages.length}
          </div>
        </motion.div>
      )}

      {/* Catalog Request Modal */}
      {catalogModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => !formSubmitted && setCatalogModalOpen(false)}
          className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background rounded-sm max-w-md w-full p-8 md:p-10"
          >
            {formSubmitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Thank You</h3>
                <p className="text-muted-foreground">
                  We've received your request. Our team will contact you shortly with catalog details.
                </p>
                <button
                  onClick={() => {
                    setCatalogModalOpen(false)
                    setFormSubmitted(false)
                  }}
                  className="w-full px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={(e) => {
                  e.preventDefault()
                  setFormSubmitted(true)
                }}
                className="space-y-6"
              >
                <div>
                  <button
                    type="button"
                    onClick={() => setCatalogModalOpen(false)}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Request Catalog</h3>
                  <p className="text-muted-foreground text-sm">{collection.title}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Company</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Country</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your country"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Purpose</label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select purpose</option>
                      <option value="retail">Retail</option>
                      <option value="project">Project / Installation</option>
                      <option value="import">Import / Distribution</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors"
                >
                  Request Catalog
                </button>
              </motion.form>
            )}
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  )
}
