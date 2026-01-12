"use client"

import { useRef } from "react"
import Link from "next/link"
import { rugsData } from "@/lib/rug-data"
import { Button } from "@/components/ui/button"

export function FeaturedCarousel() {
  const scrollContainer = useRef<HTMLDivElement>(null)

  const featuredRugs = rugsData.filter((rug) => rug.isFeatured).slice(0, 6)

  return (
    <section className="w-full py-24 md:py-32 bg-background">
      <div className="max-w-full px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="space-y-4 mb-8">
            <p className="text-primary text-sm font-sans font-semibold tracking-widest uppercase">Featured</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Our Most Coveted Collections
            </h2>
          </div>
          <div className="w-12 h-px bg-primary" />
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainer}
          className="overflow-x-auto scrollbar-hide scroll-smooth flex gap-6 pb-8"
          style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
        >
          {featuredRugs.map((rug, index) => (
            <div
              key={rug.id}
              className="flex-shrink-0 w-screen sm:w-96 scroll-snap-align-start"
              style={{ scrollSnapAlign: "start" }}
            >
              <Link href={`/rugs/${rug.slug}`} className="group block h-full">
                <div className="space-y-6">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src={rug.images[0] || "/placeholder.svg"}
                      alt={rug.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
                      <p className="text-background text-sm font-sans font-light tracking-wider">View Details</p>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3 px-2">
                    <div className="space-y-1">
                      <p className="text-primary text-xs font-sans font-semibold tracking-widest uppercase">
                        {rug.collection}
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight">
                        {rug.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">{rug.description}</p>
                    <div className="flex items-center justify-between pt-4">
                      <p className="text-foreground font-sans text-sm font-semibold">${rug.price.toLocaleString()}</p>
                      <p className="text-muted-foreground font-sans text-xs uppercase tracking-wider">
                        {rug.dimensions}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Browse All CTA */}
        <div className="max-w-6xl mx-auto mt-16 text-center">
          <Link href="/catalog">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-foreground text-foreground hover:bg-foreground/5 px-12 py-6 text-base bg-transparent"
            >
              Browse All Collections →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
