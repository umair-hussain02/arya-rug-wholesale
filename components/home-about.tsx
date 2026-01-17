"use client"

import Link from "next/link"

export default function HomeAbout() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-sm font-semibold text-amber-700 mb-4 uppercase tracking-wide">Welcome to</h2>
            <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Arya Rugs</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Discover a curated collection of premium rugs that blend artisanal craftsmanship with timeless design. Each piece is thoughtfully selected to bring warmth, elegance, and character to your living spaces.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">50</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">1000+</div>
                <div className="text-sm text-gray-600">Collections Available</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
            <Link href="/about">
            <button  className="cursor-pointer inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-800 transition">
              Explore More
              <span className="text-lg">→</span>
            </button>
            </Link>
          </div>

          {/* Right image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img src="/rug-stack.jpg" alt="Kitchen design" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img src="/gray-rug.jpg" alt="Kitchen interior" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img src="/hero-rug.jpg" alt="Luxury kitchen" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
