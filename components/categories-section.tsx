"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import persianRug from "@/public/persian-rug.jpg";
import modernRug from "@/public/modern-rug.jpg";
import kilimRug from "@/public/kilim-rug.jpg";
import shagRug from "@/public/shag-rug.jpg";
import { url } from "inspector";
import Link from "next/link";

import { collectionsData } from "@/lib/collections-data";

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
  {collectionsData.slice(0, 4).map((category, index) => (
  <Link
    key={category.title}
    href={`/collections/${category.slug}`}
    className="block"
  >
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={category.heroImage}
          alt={category.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={index === 0}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-heading font-semibold text-background/70 mb-2">
          {category.title}
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
  </Link>
))}

</div>
      </div>
    </section>
  );
};

export default CategoriesSection;
