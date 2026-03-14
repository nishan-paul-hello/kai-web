"use client"

import { Brain, Shield, Cpu, MousePointer2 } from "lucide-react"
import { motion } from "framer-motion"

const solutions = [
  {
    icon: Brain,
    title: "AI Agents",
    description:
      "Autonomous agents that understand context, make strategic decisions, and execute complex workflows with human-level reasoning.",
    color: "bg-blue-500/10 text-blue-500",
    delay: 0.1,
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Advanced threat detection and mitigation powered by deep learning. Protect your digital assets 24/7 with zero-day vulnerability scanning.",
    color: "bg-emerald-500/10 text-emerald-500",
    delay: 0.2,
  },
  {
    icon: Cpu,
    title: "LLM Integration",
    description:
      "State-of-the-art language models with Model Context Protocol. Build applications that don't just process text, but reason through it.",
    color: "bg-purple-500/10 text-purple-500",
    delay: 0.3,
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="relative py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-balance"
          >
            The Intelligence <span className="text-primary">Architecture</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
          >
            Our core solutions are built on a foundation of security, scalability, and relentless innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: solution.delay }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative glass-dark border border-white/5 p-8 rounded-[2rem] h-full flex flex-col items-start overflow-hidden">
                <div className={`mb-6 p-4 rounded-2xl ${solution.color}`}>
                  <solution.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">{solution.description}</p>
                <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Learn more <MousePointer2 className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
