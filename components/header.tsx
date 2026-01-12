import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
         <Image src="/logov3.png" alt="Logo" width={140} height={40} />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/collections"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Collections
          </Link>
          <Link
            href="/in-home-trial"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            In-Home Trial
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Quote
            </Button>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
