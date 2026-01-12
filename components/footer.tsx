import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-[#2c2521] text-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
         <Image src="/logov4.png" alt="Logo" width={180} height={40} />
        </Link>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Premium handcrafted rugs for design professionals, hotels, and discerning collectors worldwide.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/in-home-trial" className="text-background/70 hover:text-background transition-colors">
                  In-Home Trial
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-background/70 hover:text-background transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background uppercase tracking-wider text-sm">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/faq" className="text-background/70 hover:text-background transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-background/70 hover:text-background transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <a href="mailto:contact@aryarugs.com" className="text-background/70 hover:text-background transition-colors">
                  Email Support
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/12314634971"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background uppercase tracking-wider text-sm">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-background/70 hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-background/70 hover:text-background transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">© 2026 ARYA RUGS. All rights reserved.</p>
          <p className="text-sm text-background/60">Premium wholesale rugs for global design professionals</p>
        </div>
      </div>
    </footer>
  )
}
