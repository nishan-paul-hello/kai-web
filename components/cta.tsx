"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export function CTA() {
  return (
    <section className="py-24 md:py-40 relative px-4 overflow-hidden perspective-1000">
      <div className="mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative glass-dark border border-white/10 rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl preserve-3d"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-indigo-500/5 pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mb-8 w-16 h-16 rounded-[1.5rem] bg-primary flex items-center justify-center text-primary-foreground shadow-[0_0_30px_rgba(0,240,124,0.3)]"
            >
              <MessageSquare className="h-8 w-8" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-7xl font-bold mb-8 text-balance tracking-tight leading-tight"
            >
              Ready to build <br />
              the <span className="text-gradient">Extraordinary</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl"
            >
              Skip the sales queue. Our engineering team is looking for ambitious projects. Let's discuss how we can
              engineer your vision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
            >
              <Button
                size="lg"
                className="h-16 px-12 rounded-2xl font-bold text-xl hover:scale-105 active:scale-95 transition-all w-full sm:w-auto shadow-xl"
              >
                Schedule a Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-12 rounded-2xl font-bold text-xl glass-dark hover:bg-white/5 transition-all w-full sm:w-auto"
              >
                Send an Email
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-16 flex items-center gap-4 text-sm font-mono text-muted-foreground/60 uppercase tracking-widest"
            >
              <div className="h-px w-8 bg-white/10" />
              Direct Engineering Communication
              <div className="h-px w-8 bg-white/10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
