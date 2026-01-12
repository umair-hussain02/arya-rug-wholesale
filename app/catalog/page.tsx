"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { rugsData, COLLECTIONS } from "@/lib/rug-data"
import { Button } from "@/components/ui/button"
import { X, ChevronDown } from "lucide-react"

export default function CatalogPage() {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null)
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
  const [selectedWeave, setSelectedWeave] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Get unique filter options
  const styles = Array.from(new Set(rugsData.map((r) => r.style)))
  const weaves = Array.from(new Set(rugsData.map((r) => r.weaveType)))
  const colors = Array.from(new Set(rugsData.map((r) => r.primaryColor)))

  // Apply all filters
  const filteredRugs = useMemo(() => {
    return rugsData.filter((rug) => {
      if (selectedCollection && rug.collection !== selectedCollection) return false
      if (selectedStyle && rug.style !== selectedStyle) return false
      if (selectedWeave && rug.weaveType !== selectedWeave) return false
      if (selectedColor && rug.primaryColor !== selectedColor) return false
      return true
    })
  }, [selectedCollection, selectedStyle, selectedWeave, selectedColor])

  // Check if any filters are active
  const hasActiveFilters = selectedCollection || selectedStyle || selectedWeave || selectedColor

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedCollection(null)
    setSelectedStyle(null)
    setSelectedWeave(null)
    setSelectedColor(null)
  }

  return (
    <div className="w-full">
      <Header />

      <main className="w-full">
        {/* Page Header */}
        <section className="w-full py-16 md:py-20 bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="space-y-4">
              <p className="text-primary text-sm font-sans font-semibold tracking-widest uppercase">Catalog</p>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Our Complete Collection
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Explore {rugsData.length} hand-selected rugs across {COLLECTIONS.length} distinct collections
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="w-full py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Sidebar Filters - Desktop */}
              <div className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Filter Header */}
                  <div className="space-y-4">
                    <h2 className="font-serif text-2xl font-bold text-foreground">Filters</h2>
                    {hasActiveFilters && (
                      <Button
                        onClick={handleClearFilters}
                        variant="link"
                        className="p-0 h-auto text-primary hover:text-primary/80 justify-start"
                      >
                        Clear all filters
                      </Button>
                    )}
                  </div>

                  {/* Collections Filter */}
                  <div className="space-y-3">
                    <h3 className="font-sans font-semibold text-foreground text-sm uppercase tracking-wider">
                      Collection
                    </h3>
                    <div className="space-y-2">
                      {COLLECTIONS.map((collection) => (
                        <label key={collection} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selectedCollection === collection}
                            onChange={(e) => setSelectedCollection(e.target.checked ? collection : null)}
                            className="w-4 h-4 rounded border-border bg-background cursor-pointer"
                          />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {collection}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Style Filter */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <h3 className="font-sans font-semibold text-foreground text-sm uppercase tracking-wider">Style</h3>
                    <div className="space-y-2">
                      {styles.map((style) => (
                        <label key={style} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selectedStyle === style}
                            onChange={(e) => setSelectedStyle(e.target.checked ? style : null)}
                            className="w-4 h-4 rounded border-border bg-background cursor-pointer"
                          />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors capitalize">
                            {style}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Weave Type Filter */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <h3 className="font-sans font-semibold text-foreground text-sm uppercase tracking-wider">
                      Weave Type
                    </h3>
                    <div className="space-y-2">
                      {weaves.map((weave) => (
                        <label key={weave} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selectedWeave === weave}
                            onChange={(e) => setSelectedWeave(e.target.checked ? weave : null)}
                            className="w-4 h-4 rounded border-border bg-background cursor-pointer"
                          />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors capitalize">
                            {weave.replace("-", " ")}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Color Filter */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <h3 className="font-sans font-semibold text-foreground text-sm uppercase tracking-wider">Color</h3>
                    <div className="space-y-2">
                      {colors.map((color) => (
                        <label key={color} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selectedColor === color}
                            onChange={(e) => setSelectedColor(e.target.checked ? color : null)}
                            className="w-4 h-4 rounded border-border bg-background cursor-pointer"
                          />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {color}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Filter Toggle */}
              <div className="lg:hidden col-span-1 md:col-span-5">
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-secondary border border-border rounded hover:bg-secondary/80 transition-colors"
                >
                  <span className="font-semibold text-foreground flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                      />
                    </svg>
                    Filters
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${showMobileFilters ? "rotate-180" : ""}`} />
                </button>

                {showMobileFilters && (
                  <div className="mt-4 space-y-6 p-4 bg-secondary border border-border rounded">
                    {hasActiveFilters && (
                      <Button
                        onClick={handleClearFilters}
                        variant="link"
                        className="p-0 h-auto text-primary hover:text-primary/80 justify-start w-full"
                      >
                        Clear all filters
                      </Button>
                    )}

                    {/* Collection */}
                    <div className="space-y-3">
                      <h3 className="font-sans font-semibold text-foreground text-sm uppercase tracking-wider">
                        Collection
                      </h3>
                      <div className="space-y-2">
                        {COLLECTIONS.map((collection) => (
                          <label key={collection} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={selectedCollection === collection}
                              onChange={(e) => {
                                setSelectedCollection(e.target.checked ? collection : null)
                                setShowMobileFilters(false)
                              }}
                              className="w-4 h-4 rounded border-border bg-background cursor-pointer"
                            />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                              {collection}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Style */}
                    <div className="space-y-3">
                      <h3 className="font-sans font-semibold text-foreground text-sm uppercase tracking-wider">
                        Style
                      </h3>
                      <div className="space-y-2">
                        {styles.map((style) => (
                          <label key={style} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={selectedStyle === style}
                              onChange={(e) => setSelectedStyle(e.target.checked ? style : null)}
                              className="w-4 h-4 rounded border-border bg-background cursor-pointer"
                            />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors capitalize">
                              {style}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Products Grid */}
              <div className="lg:col-span-4 col-span-1 md:col-span-5">
                {/* Active Filter Tags */}
                {hasActiveFilters && (
                  <div className="mb-8 flex flex-wrap gap-2">
                    {selectedCollection && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary text-primary rounded">
                        <span className="text-sm font-medium">{selectedCollection}</span>
                        <button
                          onClick={() => setSelectedCollection(null)}
                          className="hover:opacity-60 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                    {selectedStyle && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary text-primary rounded capitalize">
                        <span className="text-sm font-medium">{selectedStyle}</span>
                        <button onClick={() => setSelectedStyle(null)} className="hover:opacity-60 transition-opacity">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                    {selectedWeave && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary text-primary rounded capitalize">
                        <span className="text-sm font-medium">{selectedWeave.replace("-", " ")}</span>
                        <button onClick={() => setSelectedWeave(null)} className="hover:opacity-60 transition-opacity">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                    {selectedColor && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary text-primary rounded">
                        <span className="text-sm font-medium">{selectedColor}</span>
                        <button onClick={() => setSelectedColor(null)} className="hover:opacity-60 transition-opacity">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Results Count */}
                <p className="text-muted-foreground text-sm mb-8">
                  Showing {filteredRugs.length} of {rugsData.length} rugs
                </p>

                {/* Products Grid with smooth reflow animation */}
                {filteredRugs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-in fade-in duration-300">
                    {filteredRugs.map((rug) => (
                      <Link key={rug.id} href={`/rugs/${rug.slug}`} className="group">
                        <div className="space-y-4">
                          {/* Image Container */}
                          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                            <img
                              src={rug.images[0] || "/placeholder.svg"}
                              alt={rug.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                              <p className="text-background text-sm font-sans font-light tracking-wider">
                                View Details
                              </p>
                            </div>
                          </div>

                          {/* Product Info */}
                          <div className="space-y-3">
                            <div className="space-y-1">
                              <p className="text-primary text-xs font-sans font-semibold tracking-widest uppercase">
                                {rug.collection}
                              </p>
                              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {rug.title}
                              </h3>
                            </div>
                            <div className="flex items-center justify-between pt-2">
                              <p className="text-foreground font-sans font-semibold">${rug.price.toLocaleString()}</p>
                              <p className="text-muted-foreground font-sans text-xs uppercase tracking-wider">
                                {rug.dimensions}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 px-6 bg-secondary rounded-lg">
                    <svg
                      className="w-16 h-16 text-muted-foreground mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z"
                      />
                    </svg>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">No rugs found</h3>
                    <p className="text-muted-foreground text-center max-w-md mb-6">
                      We couldn't find any rugs matching your filters. Try adjusting your selections.
                    </p>
                    <Button
                      onClick={handleClearFilters}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2"
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
