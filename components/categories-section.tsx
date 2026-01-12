"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import persianRug from "@/public/persian-rug.jpg";
import modernRug from "@/public/modern-rug.jpg";
import kilimRug from "@/public/kilim-rug.jpg";
import shagRug from "@/public/shag-rug.jpg";

const categories = [
  {
    name: "Persian & Oriental",
    description: "Timeless elegance with intricate patterns",
    image: persianRug,
    count: "150+ designs",
  },
  {
    name: "Modern & Contemporary",
    description: "Clean lines for modern spaces",
    image: modernRug,
    count: "120+ designs",
  },
  {
    name: "Kilim & Tribal",
    description: "Authentic handwoven traditions",
    image: kilimRug,
    count: "80+ designs",
  },
  {
    name: "Shag & Plush",
    description: "Luxurious comfort underfoot",
    image: shagRug,
    count: "60+ designs",
  },
];

// Animation variants
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: index * 0.15,
    },
  }),
};

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
            <motion.div
              key={category.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index === 0}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-background/70 text-xs uppercase tracking-wider mb-2">
                  {category.count}
                </p>
                <h3 className="text-xl font-heading font-semibold text-background/70 mb-2">
                  {category.name}
                </h3>
                <p className="text-background/80 text-sm">
                  {category.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-background text-sm font-medium opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>Explore Collection</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
