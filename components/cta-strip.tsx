"use client"

export function CTAStrip() {
  return (
    <section className="w-full py-16 md:py-20 bg-foreground">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center space-y-8">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-background leading-tight">
          Ready to Discover Your Perfect Rug?
        </h2>
        <p className="font-sans text-lg text-background/90 max-w-2xl mx-auto">
          Connect with our team to explore our full collection, discuss custom orders, or learn about our wholesale
          partnerships.
        </p>

        {/* Contact CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="https://wa.me/12314634971?text=I%20am%20interested%20in%20discussing%20a%20wholesale%20partnership"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold hover:bg-primary/90 transition-colors duration-300"
          >
            Message on WhatsApp
          </a>
          <a
            href="mailto:contact@aryarugs.com"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-background text-background hover:bg-background/10 font-sans font-semibold transition-colors duration-300"
          >
            Email: contact@aryarugs.com
          </a>
        </div>
      </div>
    </section>
  )
}
