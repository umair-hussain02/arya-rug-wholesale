import { NextResponse } from "next/server"

interface ShopifyProductDetail {
  id: string
  title: string
  handle: string
  description: string
  images: Array<{ url: string }>
  priceRange: {
    minVariantPrice: {
      amount: string
    }
  }
}

interface ShopifyGraphQLResponse {
  data: {
    productByHandle: ShopifyProductDetail
  }
}

export async function GET(request: Request, { params }: { params: { handle: string } }) {
  const { handle } = params

  try {
    const storeUrl = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
    const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

    if (!storeUrl || !accessToken) {
      return NextResponse.json({
        product: {
          id: "mock",
          title: "Mock Product",
          handle,
          description: "Mock product for development",
          price: "$0",
          images: ["/rug.jpg"],
          specs: {
            size: "8x10",
            material: "Wool",
            origin: "Morocco",
            weight: "12 lbs",
          },
          inStock: true,
        },
      })
    }

    const query = `
      query {
        productByHandle(handle: "${handle}") {
          id
          title
          handle
          description
          images(first: 5) {
            edges {
              node {
                url
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
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
    const shopifyProduct = data.data.productByHandle

    const product = {
      id: shopifyProduct.id,
      title: shopifyProduct.title,
      handle: shopifyProduct.handle,
      description: shopifyProduct.description,
      price: `$${shopifyProduct.priceRange.minVariantPrice.amount}`,
      images: shopifyProduct.images.map((img: any) => img.url),
      specs: {
        size: "8x10 feet",
        material: "100% Wool",
        origin: "Artisan Made",
        weight: "12 lbs",
      },
      inStock: true,
    }

    return NextResponse.json({ product })
  } catch (error) {
    console.error("Error fetching Shopify product:", error)
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}
