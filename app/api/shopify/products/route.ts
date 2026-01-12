import { NextResponse } from "next/server"

interface ShopifyProduct {
  id: string
  title: string
  handle: string
  featuredImage?: {
    url: string
  }
  priceRange?: {
    minVariantPrice: {
      amount: string
    }
  }
}

interface ShopifyProductEdge {
  node: ShopifyProduct
}

interface ShopifyGraphQLResponse {
  data: {
    products: {
      edges: ShopifyProductEdge[]
    }
  }
}

export async function GET() {
  try {
    const storeUrl = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
    const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

    if (!storeUrl || !accessToken) {
      console.warn("Shopify credentials not configured. Using mock data.")
      return NextResponse.json({
        products: getMockProducts(),
      })
    }

    const query = `
      query {
        products(first: 12) {
          edges {
            node {
              id
              title
              handle
              featuredImage {
                url
              }
              priceRange {
                minVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }
    `

    const response = await fetch(`https://${storeUrl}/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": accessToken,
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`)
    }

    const data: ShopifyGraphQLResponse = await response.json()

    const products = data.data.products.edges.map((edge: ShopifyProductEdge) => ({
      id: edge.node.id,
      title: edge.node.title,
      handle: edge.node.handle,
      price: `$${edge.node.priceRange?.minVariantPrice?.amount || "0.00"}`,
      image: edge.node.featuredImage?.url || "/rug.jpg",
    }))

    return NextResponse.json({ products })
  } catch (error) {
    console.error("Error fetching Shopify products:", error)
    // Return mock data on error for development
    return NextResponse.json({
      products: getMockProducts(),
    })
  }
}

function getMockProducts() {
  return [
    {
      id: "1",
      title: "Moroccan Wool Rug - Navy Blue",
      handle: "moroccan-wool-rug-navy",
      price: "$1,250",
      image: "/moroccan-navy-rug.jpg",
    },
    {
      id: "2",
      title: "Persian Silk Blend - Cream",
      handle: "persian-silk-cream",
      price: "$1,800",
      image: "/persian-cream-rug.jpg",
    },
    {
      id: "3",
      title: "Turkish Kilim - Geometric",
      handle: "turkish-kilim-geometric",
      price: "$950",
      image: "/turkish-kilim-rug.jpg",
    },
    {
      id: "4",
      title: "Contemporary Modern - Charcoal",
      handle: "contemporary-charcoal",
      price: "$1,100",
      image: "/modern-charcoal-rug.jpg",
    },
    {
      id: "5",
      title: "Vintage Tabriz - Earth Tones",
      handle: "vintage-tabriz",
      price: "$2,200",
      image: "/vintage-tabriz-rug.jpg",
    },
    {
      id: "6",
      title: "Boho Jute - Natural",
      handle: "boho-jute-natural",
      price: "$650",
      image: "/boho-jute-rug.jpg",
    },
  ]
}
