import Header from "@/components/header"
import Footer from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { EditorialGrid } from "@/components/editorial-grid"
import { AnimatedPillarsSection } from "@/components/animated-pillars"
import { AnimatedTestimonialsCarousel } from "@/components/animated-testimonials"
import { CTAStrip } from "@/components/cta-strip"
import CategoriesSection from "@/components/categories-section"
import { HeroSection2 } from "@/components/hero-two"
import HomeAbout from "@/components/home-about"

export default function Home() {
  return (
    <div className="w-full">
      <Header />

      <main className="w-full">
        <HeroSection2 />
        {/* <HeroCarousel /> */}
        <CategoriesSection />
        <HomeAbout />
        {/* <FeaturedCarousel /> */}
        <EditorialGrid />
        <AnimatedPillarsSection />
        <AnimatedTestimonialsCarousel />
        <CTAStrip />
      </main>

      <Footer />
    </div>
  )
}
