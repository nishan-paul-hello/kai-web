"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      {/* Premium Background Elements */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main heading with premium typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-8 text-balance leading-[1.1]"
          >
            Intelligence that <span className="text-gradient">evolves</span> with you
          </motion.h1>

          {/* Description with better legibility */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed text-balance max-w-3xl mx-auto"
          >
            Deploy enterprise-grade AI solutions across mobile, desktop, and web. Secure, scalable, and built for the
            future of intelligent automation.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              size="lg"
              className="h-14 px-8 text-lg group relative overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg glass-dark hover:bg-white/5 transition-all"
            >
              Live Demo
            </Button>
          </motion.div>

          {/* Premium Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm font-medium text-muted-foreground/80 uppercase tracking-widest"
          >
            <div className="flex items-center gap-3 group">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="group-hover:text-primary transition-colors">99.9% SLAs</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="group-hover:text-primary transition-colors">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="group-hover:text-primary transition-colors">Global Infrastructure</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
