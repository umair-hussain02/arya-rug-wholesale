"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Share2 } from "lucide-react"

interface ProductDetail {
  id: string
  title: string
  handle: string
  description: string
  price: string
  images: string[]
  specs: {
    size: string
    material: string
    origin: string
    weight: string
  }
  inStock: boolean
}

export default function ProductPage() {
  const params = useParams()
  const handle = params.handle as string
  const [product, setProduct] = useState<ProductDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    fetchProduct()
  }, [handle])

  const fetchProduct = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/shopify/product/${handle}`)
      const data = await response.json()
      setProduct(data.product)
    } catch (error) {
      console.error("Failed to fetch product:", error)
      setProduct(getMockProduct())
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Loading product...</p>
        </main>
        <Footer />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Product not found</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-secondary">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-4">
            <div className="flex gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/catalog" className="text-muted-foreground hover:text-foreground">
                Catalog
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{product.title}</span>
            </div>
          </div>
        </div>

        {/* Product Detail */}
        <section className="w-full py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img
                    src={product.images[selectedImage] || "/rug.jpg"}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-3">
                    {product.images.map((image, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImage === idx ? "border-primary" : "border-border hover:border-muted-foreground"
                        }`}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`View ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{product.title}</h1>
                  <p className="text-2xl text-primary font-semibold">{product.price}</p>
                </div>

                {product.inStock ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium">In Stock</p>
                  </div>
                ) : (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 font-medium">Currently Out of Stock</p>
                  </div>
                )}

                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                {/* Specifications */}
                <Card className="p-6 bg-secondary border-0">
                  <h3 className="font-semibold text-foreground mb-4">Product Specifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Size</span>
                      <span className="font-medium text-foreground">{product.specs.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material</span>
                      <span className="font-medium text-foreground">{product.specs.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Origin</span>
                      <span className="font-medium text-foreground">{product.specs.origin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weight</span>
                      <span className="font-medium text-foreground">{product.specs.weight}</span>
                    </div>
                  </div>
                </Card>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link href="/contact" className="block">
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Request Quote
                    </Button>
                  </Link>
                  <div className="flex gap-3">
                    <Button
                      size="lg"
                      variant="outline"
                      className={`flex-1 border-primary ${
                        liked ? "bg-primary/10 text-primary" : "text-primary"
                      } hover:bg-primary/5 bg-transparent`}
                      onClick={() => setLiked(!liked)}
                    >
                      <Heart size={20} className={liked ? "fill-current" : ""} />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary/5 bg-transparent"
                    >
                      <Share2 size={20} />
                    </Button>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="border-t border-border pt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Authentic Quality</p>
                      <p className="text-sm text-muted-foreground">Hand-selected and verified</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Wholesale Pricing</p>
                      <p className="text-sm text-muted-foreground">Competitive bulk rates available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="w-full py-12 border-t border-border bg-secondary">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-square bg-muted">
                    <img
                      src={`/rug.jpg?height=300&width=300&query=related+rug+${i}`}
                      alt={`Related Rug ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Related Rug {i}</h3>
                    <p className="text-primary font-semibold">$1,200</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function getMockProduct(): ProductDetail {
  return {
    id: "mock-1",
    title: "Premium Moroccan Wool Rug - Navy Blue",
    handle: "premium-moroccan-wool-navy",
    description:
      "Handwoven with authentic Moroccan craftsmanship, this stunning wool rug features traditional patterns and rich navy tones. Perfect for adding warmth and character to any space. Each rug is unique and made with sustainable practices.",
    price: "$1,250",
    images: ["/moroccan-navy-rug.jpg", "/premium-rug-collection-.jpg"],
    specs: {
      size: "8x10 feet",
      material: "100% Pure Wool",
      origin: "Morocco",
      weight: "12 lbs",
    },
    inStock: true,
  }
}
