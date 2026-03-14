"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Shield } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-40 perspective-1000">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.05]"
            >
              Building the <br />
              <span className="text-gradient">Future of AI</span> <br />
              One Agent at a Time.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl"
            >
              We are a specialized engineering team crafting elite AI agents, secure MCP servers, and multi-platform
              software. High-performance intelligence, tailored for your specific domain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Button
                size="lg"
                className="h-14 px-8 text-lg group relative overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center">
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg glass-dark hover:bg-white/5 transition-all w-full sm:w-auto"
              >
                Meet the Founders
              </Button>
            </motion.div>
          </div>

          {/* 3D Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ y: y1 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square preserve-3d">
              {/* Floating Cards simulating 3D layers */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [0, 5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-10 glass-dark rounded-[2.5rem] border border-white/10 p-8 shadow-2xl overflow-hidden preserve-3d backface-hidden"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Terminal className="text-primary h-6 w-6" />
                  </div>
                  <div className="h-2 w-24 bg-white/10 rounded-full" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-full bg-white/5 rounded-lg animate-pulse" />
                  <div className="h-4 w-3/4 bg-white/5 rounded-lg animate-pulse delay-75" />
                  <div className="h-4 w-5/6 bg-white/5 rounded-lg animate-pulse delay-150" />
                </div>

                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotateZ: [0, -5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-0 w-64 h-80 glass rounded-3xl border border-primary/20 p-6 shadow-xl translate-z-20 transform rotate-y-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <Shield className="text-indigo-400 h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono text-indigo-400">SECURE_INIT</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="h-1.5 w-20 bg-white/10 rounded-full" />
                    <div className="h-1.5 w-8 bg-primary/40 rounded-full" />
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full" />
                  <div className="h-1.5 w-full bg-white/5 rounded-full" />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-10 bottom-20 w-48 h-48 bg-primary/30 blur-[80px] rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
