"use client"

export function PillarsSection() {
  const pillars = [
    {
      number: "01",
      title: "Authentic Craftsmanship",
      description:
        "Hand-selected from master weavers across the globe, each rug carries centuries of tradition and technique.",
    },
    {
      number: "02",
      title: "Premium Quality",
      description:
        "Only the finest natural materials—100% wool, silk, and jute—ensuring durability and timeless beauty.",
    },
    {
      number: "03",
      title: "Wholesale Expertise",
      description:
        "Dedicated support for designers, retailers, and hospitality partners with competitive bulk pricing and custom orders.",
    },
    {
      number: "04",
      title: "Curated Collections",
      description:
        "Thoughtfully selected styles from traditional to contemporary, ensuring something for every aesthetic.",
    },
  ]

  return (
    <section className="w-full py-24 md:py-32 bg-foreground">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <p className="text-primary text-sm font-sans font-semibold tracking-widest uppercase">Why Wei Rugs</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-background leading-tight">
            The Wei Difference
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="space-y-6 p-6 md:p-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-500"
            >
              <p className="text-primary text-5xl md:text-6xl font-serif font-bold">{pillar.number}</p>
              <div className="space-y-3">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-background">{pillar.title}</h3>
                <p className="text-background/80 font-sans text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
