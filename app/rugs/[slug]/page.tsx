"use client"

import type React from "react"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { rugsData } from "@/lib/rug-data"
import { ArrowLeft, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react"

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [mainImage, setMainImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [showFullscreen, setShowFullscreen] = useState(false)

  const rug = rugsData.find((r) => r.slug === slug)

  if (!rug) {
    return (
      <div className="w-full">
        <Header />
        <main className="w-full min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Rug not found</h1>
            <p className="text-muted-foreground mb-8">The rug you're looking for doesn't exist.</p>
            <Link href="/catalog" className="text-primary hover:text-primary/80 font-semibold">
              Back to Catalog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Get related rugs (same collection, different rug)
  const relatedRugs = rugsData.filter((r) => r.collection === rug.collection && r.id !== rug.id).slice(0, 3)

  const handlePrevImage = () => {
    setMainImage((prev) => (prev - 1 + rug.images.length) % rug.images.length)
  }

  const handleNextImage = () => {
    setMainImage((prev) => (prev + 1) % rug.images.length)
  }

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevImage()
    if (e.key === "ArrowRight") handleNextImage()
  }

  return (
    <div className="w-full">
      <Header />

      <main className="w-full">
        {/* Back Navigation */}
        <div className="w-full py-6 px-4 md:px-6 lg:px-8 bg-background border-b border-border sticky top-16 z-40">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Catalog
            </Link>
          </div>
        </div>

        {/* Product Section */}
        <section className="w-full py-12 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
              <div className="lg:col-span-2 space-y-6">
                {/* Main Image with Navigation */}
                <div
                  className="relative bg-muted overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: "4/5" }}
                  onClick={() => setShowFullscreen(true)}
                  onKeyDown={handleKeyDown}
                  role="region"
                  aria-label="Product image gallery"
                  tabIndex={0}
                >
                  {/* Main Image */}
                  <motion.img
                    key={mainImage}
                    src={rug.images[mainImage] || "/placeholder.svg"}
                    alt={`${rug.title} view ${mainImage + 1}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Overlay */}
                  {rug.images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-foreground/40 via-transparent to-foreground/40">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePrevImage()
                        }}
                        className="p-3 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleNextImage()
                        }}
                        className="p-3 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}

                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 bg-foreground/70 text-background px-3 py-1 text-sm font-semibold rounded-full">
                    {mainImage + 1} / {rug.images.length}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                {rug.images.length > 1 && (
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Select image</p>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {rug.images.map((image, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setMainImage(index)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative flex-shrink-0 transition-all ${
                            mainImage === index ? "ring-2 ring-primary" : "ring-1 ring-border"
                          }`}
                          style={{ width: "100px", height: "100px" }}
                          aria-label={`View image ${index + 1}`}
                          aria-pressed={mainImage === index}
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${rug.title} thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {mainImage === index && <div className="absolute inset-0 bg-primary/10" />}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Click to Fullscreen Hint */}
                <p className="text-xs text-muted-foreground text-center font-sans">
                  Click main image to view fullscreen
                </p>
              </div>

              {/* Product Info Sticky Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">
                  {/* Header */}
                  <div className="space-y-4">
                    <p className="text-primary text-xs font-sans font-semibold tracking-widest uppercase">
                      {rug.collection}
                    </p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-4xl font-bold text-foreground leading-tight">
                      {rug.title}
                    </h1>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">{rug.description}</p>
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <p className="text-muted-foreground font-sans text-xs uppercase tracking-widest">Price</p>
                    <p className="font-sans text-3xl font-bold text-foreground">${rug.price.toLocaleString()}</p>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-4 pt-6 border-t border-border">
                    <p className="font-sans text-xs font-semibold text-foreground uppercase tracking-widest">
                      Specifications
                    </p>
                    <div className="space-y-3 font-sans text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Dimensions</span>
                        <span className="text-foreground font-medium">{rug.dimensions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Weave Type</span>
                        <span className="text-foreground font-medium capitalize">{rug.weaveType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Material</span>
                        <span className="text-foreground font-medium">{rug.material}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Style</span>
                        <span className="text-foreground font-medium capitalize">{rug.style}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Primary Color</span>
                        <span className="text-foreground font-medium">{rug.primaryColor}</span>
                      </div>
                      {rug.origin && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Origin</span>
                          <span className="text-foreground font-medium">{rug.origin}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    <p className="font-sans text-xs font-semibold text-foreground uppercase tracking-widest">
                      Interested in this piece?
                    </p>
                    <a
                      href={`https://wa.me/1234567890?text=I%20am%20interested%20in%20${rug.title}%20(${rug.price})`}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold transition-colors w-full"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.289-3.847 6.645-1.518 10.189 1.310 1.895 3.466 3.181 5.897 3.435.503.046 1.006.051 1.509 0 4.719-.423 8.297-4.85 7.874-9.569-.423-4.719-4.85-8.297-9.569-7.874z" />
                      </svg>
                      Get Quote via WhatsApp
                    </a>

                    {/* Wishlist & Share */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-foreground hover:bg-foreground/5 text-foreground font-sans font-semibold transition-colors"
                      >
                        <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current text-primary" : ""}`} />
                        Wishlist
                      </button>
                      <button
                        onClick={() => {
                          navigator.share?.({
                            title: rug.title,
                            text: rug.description,
                            url: window.location.href,
                          })
                        }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-foreground hover:bg-foreground/5 text-foreground font-sans font-semibold transition-colors"
                      >
                        <Share2 className="w-5 h-5" />
                        Share
                      </button>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-4 pt-6 border-t border-border text-sm font-sans text-muted-foreground">
                    <p>• Authentic handcrafted piece</p>
                    <p>• Premium natural materials</p>
                    <p>• Custom sizes available upon request</p>
                    <p>• Wholesale pricing for bulk orders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Rugs Section */}
        {relatedRugs.length > 0 && (
          <section className="w-full py-16 md:py-24 bg-secondary border-t border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="space-y-12">
                <div className="space-y-4">
                  <p className="text-primary text-xs font-sans font-semibold tracking-widest uppercase">
                    From {rug.collection}
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">You May Also Like</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                  {relatedRugs.map((relatedRug) => (
                    <Link key={relatedRug.id} href={`/rugs/${relatedRug.slug}`} className="group">
                      <div className="space-y-4">
                        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                          <img
                            src={relatedRug.images[0] || "/placeholder.svg"}
                            alt={relatedRug.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                            <p className="text-background text-sm font-sans font-light tracking-wider">View Details</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {relatedRug.title}
                          </h3>
                          <p className="text-foreground font-sans font-semibold">
                            ${relatedRug.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
