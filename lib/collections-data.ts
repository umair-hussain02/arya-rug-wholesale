export interface CollectionImage {
  src: string
  alt: string
  caption?: string
}

export interface Collection {
  id: string
  slug: string
  title: string
  description: string
  story: string
  heroImage: string
  galleryImages: CollectionImage[]
  materials: string[]
  weaveTypes: string[]
  availableSizes: string[]
  idealFor: string[]
  customizationOptions: string[]
  teaser_pdf_url?: string
}

export const collectionsData: Collection[] = [
  {
    id: "mamluk",
    slug: "mamluk",
    title: "Mamluk Rug",
    description:
      "Powerful geometric symmetry and regal motifs inspired by the legendary Mamluk era.",
    story:
      "The Mamluk Collection revives the grandeur of medieval Islamic art, characterized by bold geometry, radial medallions, and architectural symmetry. These rugs echo the power and sophistication of historic palaces, crafted with precision to command attention in luxurious interiors.",
    heroImage: "/collections/mamluk.webp",
    galleryImages: Array.from({ length: 12 }, (_, i) => ({
      src: `/collections/mamluk${i + 1}.webp`,
      alt: `Mamluk rug design ${i + 1}`,
    })),
    materials: ["100% Wool"],
    weaveTypes: ["Hand-knotted"],
    availableSizes: ["3' x 4'", "4' x 6'", "5' x 7'", "5' x 8'", "6' x 9'", "7' x 9'", "8' x 10'", "9' x 12'", "10' x 13'"],
    idealFor: ["Luxury Homes", "Palaces", "Hotels", "Statement Interiors"],
    customizationOptions: [
      "Custom color palettes",
      "Size customization",
      "Museum-grade weaving",
      "Premium finishing",
    ],
  },

  {
    id: "persian",
    slug: "persian",
    title: "Persian Rug",
    description:
      "Timeless Persian artistry with intricate florals, medallions, and royal color palettes.",
    story:
      "Rooted in centuries of Persian craftsmanship, this collection showcases delicate floral vines, balanced medallions, and harmonious color stories. Each rug is a masterpiece that reflects elegance, culture, and the soul of traditional Persian weaving.",
    heroImage: "/collections/persian.webp",
    galleryImages: Array.from({ length: 12 }, (_, i) => ({
      src: `/collections/persian${i + 1}.webp`,
      alt: `Persian rug design ${i + 1}`,
    })),
    materials: ["100% Wool", "Wool with Silk Highlights"],
    weaveTypes: ["Hand-knotted"],
    availableSizes: ["3' x 5'", "4' x 6'", "5' x 7'", "5' x 8'", "6' x 9'", "7' x 10'", "8' x 10'", "9' x 12'", "10' x 14'"],
    idealFor: ["Luxury Residences", "Collectors", "Boutique Hotels"],
    customizationOptions: [
      "Custom designs",
      "Silk enhancement",
      "Color refinements",
      "Heirloom quality upgrades",
    ],
  },

  {
    id: "turkish-ousak",
    slug: "turkish-ousak",
    title: "Turkish Oushak Rug",
    description:
      "Soft palettes and grand-scale motifs inspired by historic Anatolian weaving.",
    story:
      "The Turkish Oushak Collection is known for its large floral patterns, subdued elegance, and timeless appeal. Originally woven for royal courts, these rugs bring warmth, balance, and sophistication to modern and classic interiors alike.",
    heroImage: "/collections/turkishoushak.webp",
    galleryImages: Array.from({ length: 12 }, (_, i) => ({
      src: `/collections/turkishoushak${i + 1}.webp`,
      alt: `Turkish Oushak rug design ${i + 1}`,
    })),
    materials: ["100% Wool"],
    weaveTypes: ["Hand-knotted"],
    availableSizes: ["2' x 3'", "3' x 5'", "4' x 6'", "5' x 7'", "5' x 8'", "6' x 9'", "8' x 10'", "9' x 12'", "10' x 13'"],
    idealFor: ["Luxury Villas", "Interior Designers", "Elegant Living Spaces"],
    customizationOptions: [
      "Muted color customization",
      "Oversized rugs",
      "Antique wash option",
      "Soft pile finishing",
    ],
  },

  {
    id: "modern",
    slug: "modern",
    title: "Modern Rug",
    description:
      "Clean lines, abstract forms, and contemporary aesthetics for modern living.",
    story:
      "Designed for contemporary spaces, the Modern Collection blends minimalism with artistic expression. Subtle textures, bold abstractions, and refined neutrals create rugs that enhance interiors without overpowering them.",
    heroImage: "/collections/modern1.webp",
    galleryImages: Array.from({ length: 12 }, (_, i) => ({
      src: `/collections/modern${i + 2}.webp`,
      alt: `Modern rug design ${i + 2}`,
    })),
    materials: ["Wool", "Wool-Viscose Blend"],
    weaveTypes: ["Handwoven", "Hand-knotted"],
    availableSizes: ["2' x 4'", "3' x 5'", "4' x 6'", "5' x 7'", "5' x 8'", "6' x 9'", "8' x 12'"],
    idealFor: ["Modern Homes", "Offices", "Apartments", "Creative Studios"],
    customizationOptions: [
      "Abstract pattern tweaks",
      "Custom dimensions",
      "Color matching",
      "Fast production",
    ],
  },

  {
    id: "silk",
    slug: "silk",
    title: "Silk Rug",
    description:
      "Pure luxury rugs with luminous silk sheen and refined craftsmanship.",
    story:
      "The Silk Collection represents the pinnacle of luxury. Woven with pure silk or silk blends, these rugs shimmer with elegance, showcasing intricate detailing and unparalleled softness—crafted for elite spaces and discerning tastes.",
    heroImage: "/collections/silk.webp",
    galleryImages: Array.from({ length: 12 }, (_, i) => ({
      src: `/collections/silk${i + 1}.webp`,
      alt: `Silk rug design ${i + 1}`,
    })),
    materials: ["100% Silk", "Silk-Wool Blend"],
    weaveTypes: ["Hand-knotted"],
    availableSizes: ["2' x 3'", "2' x 4'", "3' x 5'", "4' x 6'", "5' x 7'", "6' x 8'"],
    idealFor: ["Luxury Interiors", "Penthouse Suites", "Exclusive Displays"],
    customizationOptions: [
      "High knot density",
      "Custom silk colors",
      "Collector-grade finishing",
      "Limited editions",
    ],
  },

  {
    id: "kilims",
    slug: "kilims",
    title: "Kilims Rug",
    description:
      "Flatwoven kilims with bold tribal patterns and cultural authenticity.",
    story:
      "The Kilims Collection celebrates nomadic traditions through vibrant colors and symbolic geometry. Lightweight yet durable, these flatweaves are perfect for layering, casual living spaces, and artistic interiors.",
    heroImage: "/collections/kilims.webp",
    galleryImages: Array.from({ length: 3 }, (_, i) => ({
      src: `/collections/kilim${i + 1}.webp`,
      alt: `Kilim rug design ${i + 1}`,
    })),
    materials: ["100% Wool"],
    weaveTypes: ["Flatweave (Kilim)"],
    availableSizes: ["5' x 6'", "6' x 8'", "8' x 11'"],
    idealFor: ["Bohemian Homes", "Creative Spaces", "Retail Displays"],
    customizationOptions: [
      "Custom motifs",
      "Color variations",
      "Bulk orders",
      "Quick production",
    ],
  },
  {
  id: "runner",
  slug: "runner",
  title: "Runner Rug",
  description:
    "Elegant long-format rugs designed to enhance corridors, hallways, and transitional spaces.",
  story:
    "The Runner Collection is crafted to bring beauty and balance to narrow spaces. Featuring refined patterns, durable construction, and flowing designs, these runners transform hallways and staircases into sophisticated design statements.",
  heroImage: "/collections/runner1.webp",
  galleryImages: Array.from({ length: 12 }, (_, i) => ({
    src: `/collections/runner${i + 2}.webp`,
    alt: `Runner rug design ${i + 2}`,
  })),
  materials: ["100% Wool", "Wool-Silk Blend"],
  weaveTypes: ["Hand-knotted", "Handwoven"],
  availableSizes: ["2' x 6'", "2' x 8'", "2' x 10'", "2' x 12'", "2' x 13'", "2' 6\" x 8'", "2' 6\" x 10'", "2' 6\" x 12'", "3' x 8'", "3' x 10'", "3' x 12'"],
  idealFor: ["Hallways", "Corridors", "Staircases", "Entryways"],
  customizationOptions: [
    "Custom lengths",
    "Pattern scaling",
    "Color coordination",
    "Durable edge finishing",
  ],
},
{
  id: "table-runner",
  slug: "table-runner",
  title: "Table Runner",
  description:
    "Artisan-crafted textile runners designed to elevate dining and console tables.",
  story:
    "Our Table Runner Collection blends traditional weaving with refined elegance. Perfect for dining tables, consoles, and sideboards, these runners add warmth, texture, and a touch of cultural artistry to everyday living and special occasions.",
  heroImage: "/collections/table-runner.webp",
  galleryImages: Array.from({ length: 3 }, (_, i) => ({
    src: `/collections/table-runner${i + 1}.webp`,
    alt: `Table runner design ${i + 1}`,
  })),
  materials: ["Wool", "Cotton-Wool Blend", "Silk Accents"],
  weaveTypes: ["Handwoven"],
  availableSizes: ["16 inch x 55 inch", "16 inch x 74 inch"],
  idealFor: ["Dining Tables", "Console Tables", "Decor Styling", "Gift Collections"],
  customizationOptions: [
    "Custom lengths",
    "Color matching",
    "Festive patterns",
    "Bulk gifting orders",
  ],
},

]

