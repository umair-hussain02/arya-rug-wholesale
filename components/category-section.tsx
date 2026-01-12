import persianRug from "@/assets/persian-rug.jpg";
import modernRug from "@/assets/modern-rug.jpg";
import kilimRug from "@/assets/kilim-rug.jpg";
import shagRug from "@/assets/shag-rug.jpg";

const categories = [
  {
    name: "Persian & Oriental",
    description: "Timeless elegance with intricate patterns",
    image: persianRug,
    count: "150+ designs"
  },
  {
    name: "Modern & Contemporary",
    description: "Clean lines for modern spaces",
    image: modernRug,
    count: "120+ designs"
  },
  {
    name: "Kilim & Tribal",
    description: "Authentic handwoven traditions",
    image: kilimRug,
    count: "80+ designs"
  },
  {
    name: "Shag & Plush",
    description: "Luxurious comfort underfoot",
    image: shagRug,
    count: "60+ designs"
  }
];

const CategoriesSection = () => {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4">
            Our Collections
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Curated Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From traditional Persian masterpieces to contemporary designs, 
            discover the perfect rugs for your clientele.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary-foreground/70 text-xs uppercase tracking-wider mb-2">
                  {category.count}
                </p>
                <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-primary-foreground text-sm font-medium opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>Explore Collection</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
