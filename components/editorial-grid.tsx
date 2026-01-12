"use client"

export function EditorialGrid() {
  const items = [
    {
      title: "Moroccan Heritage",
      image: "/moroccan-cream-rug.jpg",
      size: "large",
    },
    {
      title: "Persian Mastery",
      image: "/persian-garden-rug.jpg",
      size: "medium",
    },
    {
      title: "Modern Living",
      image: "/modern-charcoal-rug.jpg",
      size: "medium",
    },
  ]

  return (
    <section className="w-full py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <p className="text-primary text-sm font-sans font-semibold tracking-widest uppercase">Collections</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight max-w-4xl">
            A World of Authentic Design
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid gap-6 auto-rows-[400px] md:auto-rows-[300px] grid-cols-1 md:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group cursor-pointer ${
                item.size === "large" ? "md:col-span-2 md:row-span-2" : item.size === "medium" ? "md:col-span-2" : ""
              }`}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-background">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="mt-20 flex items-center gap-8">
          <div className="flex-1 h-px bg-gradient-to-r from-primary to-transparent" />
          <p className="text-primary text-xs font-sans font-semibold tracking-widest uppercase whitespace-nowrap">
            Craftsmanship
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}
