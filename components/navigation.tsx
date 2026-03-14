"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Solutions", href: "#solutions" },
    { name: "Features", href: "#features" },
    { name: "Technology", href: "#technology" },
    { name: "Docs", href: "#docs" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl h-14 px-6 rounded-full transition-all duration-300 glass-dark border-white/10 shadow-xl ${
          scrolled ? "shadow-2xl scale-[1.02]" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Image
              src="/icon.svg"
              alt="KAI"
              width={24}
              height={24}
              className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 -translate-y-[0.5px]"
            />
          </div>
          <span className="text-lg font-bold font-mono tracking-tighter">KAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <Button
            size="sm"
            className="rounded-full px-5 bg-primary/90 hover:bg-primary transition-all hover:scale-105 active:scale-95"
          >
            Foundry Access
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden rounded-full p-2 text-foreground hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 md:hidden pointer-events-auto overflow-hidden rounded-3xl glass-dark border border-white/10 p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-muted-foreground hover:bg-white/5 hover:text-primary transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  <Sparkles className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3">
                <Button size="lg" className="rounded-2xl bg-primary w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
