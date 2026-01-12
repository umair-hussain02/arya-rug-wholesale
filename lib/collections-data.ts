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
    id: "moroccan-dreams",
    slug: "moroccan-dreams",
    title: "Moroccan Dreams",
    description: "Bold geometric patterns and warm earthy tones inspired by North African weaving traditions.",
    story:
      "Our Moroccan collection draws inspiration from the vibrant souks and desert landscapes of Morocco. Each piece features authentic geometric patterns and rich earth tones that bring warmth and cultural heritage to any space. Hand-woven using traditional techniques passed down through generations, these rugs tell stories of Moroccan craftsmanship.",
    heroImage: "/moroccan-navy-rug.jpg",
    galleryImages: [
      { src: "/moroccan-navy-rug.jpg", alt: "Marrakech Midnight - Navy Moroccan rug", caption: "Marrakech Midnight" },
      { src: "/moroccan-rug-detail.jpg", alt: "Detail view of Moroccan pattern" },
      { src: "/moroccan-cream-rug.jpg", alt: "Sahara Sand - Cream Moroccan rug" },
      { src: "/sahara-texture.jpg", alt: "Close-up texture of Moroccan weave" },
      { src: "/moroccan-terracotta-rug.jpg", alt: "Casablanca Harmony - Terracotta tones" },
      { src: "/traditional-rug.jpg", alt: "Traditional Moroccan design detail" },
      { src: "/moroccan-rug-room-setting.jpg", alt: "Moroccan rug in room setting" },
      { src: "/moroccan-geometric-pattern-close-up.jpg", alt: "Moroccan geometric pattern close-up" },
    ],
    materials: ["100% Wool", "Wool-Cotton blend"],
    weaveTypes: ["Hand-knotted", "Handwoven"],
    availableSizes: ["5' x 7'", "6' x 9'", "8' x 10'", "9' x 12'"],
    idealFor: ["Retail Boutiques", "Residential Homes", "Design Projects", "Hospitality Spaces"],
    customizationOptions: [
      "Custom sizes available",
      "Custom color palette",
      "Semi-custom patterns",
      "Quick turnaround available",
    ],
  },
  {
    id: "persian-heritage",
    slug: "persian-heritage",
    title: "Persian Heritage",
    description: "Exquisite hand-knotted carpets featuring intricate floral motifs and jewel-toned palettes.",
    story:
      "Celebrating centuries of Persian weaving excellence, our Heritage collection features traditional patterns and techniques that have been refined over generations. Each carpet is a masterpiece of artistry, combining silk accents with premium wool to create timeless pieces that command attention and respect.",
    heroImage: "/persian-garden-rug.jpg",
    galleryImages: [
      { src: "/persian-garden-rug.jpg", alt: "Persian Garden - traditional design", caption: "Persian Garden" },
      { src: "/persian-floral.jpg", alt: "Detailed floral Persian pattern" },
      { src: "/tabriz-cream-rug.jpg", alt: "Tabriz Majesty - cream silk Persian" },
      { src: "/persian-carpet-intricate-details.jpg", alt: "Persian carpet intricate details" },
      { src: "/persian-medallion-design-close.jpg", alt: "Persian medallion design close-up" },
      { src: "/jewel-tone-persian-rug-room.jpg", alt: "Jewel tone Persian rug in elegant room" },
      { src: "/luxury-persian-carpet-silk.jpg", alt: "Luxury Persian carpet with silk" },
      { src: "/traditional-persian-pattern-vintage.jpg", alt: "Traditional Persian pattern vintage" },
    ],
    materials: ["100% Wool", "Wool with silk accents", "100% Silk"],
    weaveTypes: ["Hand-knotted"],
    availableSizes: ["6' x 9'", "8' x 10'", "9' x 12'", "10' x 14'"],
    idealFor: ["Luxury Hotels", "Design Collections", "Premium Residential", "Corporate Offices"],
    customizationOptions: [
      "Custom designs available",
      "Commissioned pieces",
      "Heritage restoration",
      "Extended lead times",
    ],
  },
  {
    id: "modern-minimalist",
    slug: "modern-minimalist",
    title: "Modern Minimalist",
    description: "Contemporary designs with clean lines and neutral colors perfect for today's interiors.",
    story:
      "Designed for the modern aesthetic, our Minimalist collection strips away excess to reveal pure form and function. These flatweave rugs feature subtle geometric elements and sophisticated neutral palettes that anchor contemporary spaces without competing for attention.",
    heroImage: "/modern-charcoal-rug.jpg",
    galleryImages: [
      { src: "/modern-charcoal-rug.jpg", alt: "Minimalist Canvas - charcoal flatweave", caption: "Minimalist Canvas" },
      { src: "/modern-neutral-rug-interior-design.jpg", alt: "Modern neutral rug in contemporary space" },
      { src: "/minimalist-grey-rug-geometric.jpg", alt: "Minimalist grey rug with subtle geometry" },
      { src: "/modern-beige-flatweave-rug.jpg", alt: "Modern beige flatweave" },
      { src: "/contemporary-taupe-wool-rug.jpg", alt: "Contemporary taupe wool rug" },
      { src: "/minimalist-rug-clean-lines.jpg", alt: "Minimalist rug with clean lines" },
      { src: "/modern-office-rug-neutral.jpg", alt: "Modern office with neutral rug" },
      { src: "/contemporary-interior-flatweave.jpg", alt: "Contemporary interior with flatweave" },
    ],
    materials: ["100% Wool", "Wool-Jute blend"],
    weaveTypes: ["Flatweave", "Handwoven"],
    availableSizes: ["5' x 7'", "6' x 9'", "8' x 10'", "9' x 12'"],
    idealFor: ["Modern Offices", "Contemporary Homes", "Minimalist Galleries", "Tech Startups"],
    customizationOptions: [
      "Custom dimensions",
      "Color matching service",
      "Bulk orders available",
      "Fast delivery options",
    ],
  },
  {
    id: "boho-fusion",
    slug: "boho-fusion",
    title: "Boho Fusion",
    description: "Eclectic bohemian styles blending natural textures with artistic flair.",
    story:
      "Embrace free-spirited design with our Boho Fusion collection. Combining natural fibers—jute, wool, and cotton—with vibrant patterns and warm earth tones, these rugs celebrate individuality and artistic expression. Perfect for those seeking authenticity and worldly charm.",
    heroImage: "/boho-multicolor-rug.jpg",
    galleryImages: [
      { src: "/boho-multicolor-rug.jpg", alt: "Boho Wanderlust - multicolor fusion", caption: "Boho Wanderlust" },
      { src: "/boho-terracotta-rug.jpg", alt: "Earthy Harmony - terracotta blend" },
      { src: "/bohemian-jute-wool-rug-natural.jpg", alt: "Bohemian jute and wool blend" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Eclectic bohemian colorful pattern" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Bohemian bedroom with cozy rug" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Natural fiber bohemian sustainable rug" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Bohemian living room design" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Artisanal bohemian texture detail" },
    ],
    materials: ["100% Wool", "Jute-Wool blend", "Cotton-Wool blend"],
    weaveTypes: ["Handwoven"],
    availableSizes: ["5' x 7'", "6' x 8'", "7' x 9'", "8' x 10'"],
    idealFor: ["Boutique Hotels", "Artisanal Retail", "Residential Interiors", "Design Studios"],
    customizationOptions: [
      "Custom color blending",
      "Unique weave patterns",
      "Sustainable sourcing",
      "Artisan collaborations",
    ],
  },
  {
    id: "vintage-elegance",
    slug: "vintage-elegance",
    title: "Vintage Elegance",
    description: "Timeless pieces with aged patina that add character and sophistication.",
    story:
      "Our Vintage Elegance collection brings the charm of time-worn beauty to contemporary spaces. Featuring classic designs with subtle aging effects, these hand-knotted pieces bridge traditional craftsmanship with modern sensibilities, offering both heritage and contemporary appeal.",
    heroImage: "/placeholder.svg?height=600&width=400",
    galleryImages: [
      {
        src: "/placeholder.svg?height=600&width=400",
        alt: "Victorian Elegance - burgundy and gold",
        caption: "Victorian Elegance",
      },
      { src: "/placeholder.svg?height=600&width=400", alt: "Antique Charm - cream with aged patina" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Heritage Stone - grey transitional" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Ornate vintage carpet detail" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Aged Persian style in living room" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Vintage rug with traditional motifs" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Elegant vintage timeless home decor" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Vintage carpet in luxury study room" },
    ],
    materials: ["100% Wool"],
    weaveTypes: ["Hand-knotted"],
    availableSizes: ["6' x 9'", "7' x 9'", "8' x 10'", "9' x 12'"],
    idealFor: ["Heritage Properties", "Luxury Residences", "Fine Hotels", "Collector's Items"],
    customizationOptions: [
      "Aging treatment available",
      "Color antiquing",
      "Pattern customization",
      "Premium quality upgrades",
    ],
  },
  {
    id: "turkish-kilims",
    slug: "turkish-kilims",
    title: "Turkish Kilims",
    description: "Traditional flat-woven kilims with vibrant patterns and authentic cultural heritage.",
    story:
      "Rooted in centuries of Anatolian tradition, our Turkish Kilims collection showcases authentic flat-weave patterns and vibrant geometric designs. Each kilim is a testament to the weaving heritage of Turkey, offering bold visual impact with the durability and functionality of flatweave construction.",
    heroImage: "/placeholder.svg?height=600&width=400",
    galleryImages: [
      {
        src: "/placeholder.svg?height=600&width=400",
        alt: "Ankara Midnight - navy Turkish kilim",
        caption: "Ankara Midnight",
      },
      { src: "/placeholder.svg?height=600&width=400", alt: "Anatolia Red - vibrant red kilim" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Ottoman Gold - golden traditional kilim" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Geometric kilim pattern close-up" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Turkish kilim in vibrant room setting" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Authentic kilim flatweave durability" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Anatolian kilim traditional heritage" },
      { src: "/placeholder.svg?height=600&width=400", alt: "Colorful kilim bohemian eclectic" },
    ],
    materials: ["100% Wool"],
    weaveTypes: ["Flatweave (Kilim)"],
    availableSizes: ["5' x 7'", "6' x 8'", "7' x 10'", "8' x 10'"],
    idealFor: ["Eclectic Interiors", "Bohemian Spaces", "Retail Display", "Commercial Projects"],
    customizationOptions: [
      "Custom pattern scaling",
      "Color variation options",
      "Bulk purchasing",
      "Quick-ship available",
    ],
  },
]
