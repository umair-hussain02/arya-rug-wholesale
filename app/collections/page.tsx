"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { collectionsData } from "@/lib/collections-data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function CollectionsPage() {
  return (
    <div className="w-full">
      <Header />

      <main className="w-full">
        {/* Page Hero */}
        <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-primary text-sm font-sans font-semibold tracking-widest uppercase">
                Curated Collections
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-foreground">
                Explore by Collection
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Discover our curated collections, from traditional Persian heritage to contemporary minimalism. Each
                collection tells a story of authentic craftsmanship and design excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="w-full py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
            >
              {collectionsData.map((collection) => (
                <motion.div key={collection.slug} variants={cardVariants} asChild>
                  <Link href={`/collections/${collection.slug}`} className="group cursor-pointer">
                    <div className="space-y-8">
                      {/* Image Container */}
                      <div className="relative aspect-[3/4] overflow-hidden bg-muted rounded-sm">
                        <motion.img
                          src={collection.heroImage || "/placeholder.svg"}
                          alt={collection.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-8">
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            className="text-background text-sm font-sans font-light tracking-wider"
                          >
                            Explore Collection
                          </motion.p>
                        </div>
                      </div>

                      {/* Collection Info */}
                      <div className="space-y-4">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "3rem" }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="h-px bg-primary"
                        ></motion.div>
                        <div>
                          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                            {collection.title}
                          </h2>
                        </div>
                        <p className="text-muted-foreground font-sans text-base leading-relaxed max-w-md">
                          {collection.description}
                        </p>
                        <div className="flex items-center gap-8 pt-4">
                          <div className="space-y-1">
                            <p className="text-foreground font-sans text-sm font-semibold">
                              {collection.galleryImages.length} Designs
                            </p>
                            <p className="text-muted-foreground font-sans text-xs">Available in collection</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-foreground font-sans text-sm font-semibold">
                              {collection.availableSizes.length} Sizes
                            </p>
                            <p className="text-muted-foreground font-sans text-xs">Standard options</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-foreground text-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-background">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-background/80 text-lg">
                We offer fully customizable rugs tailored to your specific needs and preferences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Link
                href="/custom-rugs"
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors duration-300"
              >
                Explore Custom Rugs
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-background hover:bg-background/10 text-background font-semibold transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
