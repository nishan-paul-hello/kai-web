"use client"

import { Button } from "@/components/ui/button"
import { Mail, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function CTA() {
  return (
    <section className="py-24 md:py-40 relative px-4 overflow-hidden">
      <div className="mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass-dark border border-white/10 rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-xl"
        >
          <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 p-3 rounded-2xl bg-primary text-primary-foreground shadow-lg"
            >
              <Send className="h-6 w-6" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-8 text-balance tracking-tight"
            >
              Begin your <span className="text-primary">transformation</span> today
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl"
            >
              Join the elite circle of companies leveraging KAI to redefine the boundaries of what's possible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch justify-center gap-4 w-full max-w-lg"
            >
              <Input
                type="email"
                placeholder="Enter your corporate email"
                className="h-14 px-6 rounded-2xl bg-black/50 border-white/10 focus:border-primary/50 text-lg transition-all"
              />
              <Button
                size="lg"
                className="h-14 px-10 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all"
              >
                Get Started
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
                <Mail className="h-5 w-5" />
                <span>Talk to an Intelligence Advisor</span>
              </div>
              <div className="h-px w-0 group-hover:w-full bg-primary transition-all duration-300 mx-auto mt-1" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
