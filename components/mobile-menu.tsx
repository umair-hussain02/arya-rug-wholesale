"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "In-Home Trial", href: "/in-home-trial" },
    { label: "About", href: "/about" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative z-50 p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 h-screen w-full max-w-sm bg-foreground z-40 flex flex-col"
            >
              {/* Header with Logo and Close */}
              <div className="flex items-center justify-between p-6 border-b border-background/20">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Image src="/logov4.png" alt="Logo" width={140} height={40} />
                </Link>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 flex flex-col justify-start py-8 px-6 space-y-2 overflow-y-auto">
                {menuItems.map((item, i) => (
                  <motion.div key={item.href} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                    <Link
                      href={item.href}
                      className="block py-4 text-lg font-medium text-background/90 hover:text-background hover:text-primary transition-colors border-b border-background/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.div
                custom={menuItems.length}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="p-6 border-t border-background/20 space-y-4"
              >
                <a
                  href="https://wa.me/12314634971?text=I%20am%20interested%20in%20your%20rugs"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors w-full rounded-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.289-3.847 6.645-1.518 10.189 1.310 1.895 3.466 3.181 5.897 3.435.503.046 1.006.051 1.509 0 4.719-.423 8.297-4.85 7.874-9.569-.423-4.719-4.85-8.297-9.569-7.874z" />
                  </svg>
                  Contact via WhatsApp
                </a>
                <p className="text-center text-xs text-background/60 font-sans">Available 24/7 for inquiries</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
