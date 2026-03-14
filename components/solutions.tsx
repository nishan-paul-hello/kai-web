"use client"

import { Brain, Shield, Globe, Smartphone, Monitor, Terminal } from "lucide-react"
import { motion } from "framer-motion"

const solutions = [
  {
    icon: Globe,
    title: "Web Ecosystems",
    description:
      "High-performance, scalable web applications built with Next.js and React. Optimized for velocity and SEO.",
    color: "bg-blue-500/10 text-blue-500",
    delay: 0.1,
  },
  {
    icon: Smartphone,
    title: "Mobile Interface",
    description: "Native and cross-platform mobile experiences that feel fluid and responsive on any device.",
    color: "bg-purple-500/10 text-purple-500",
    delay: 0.2,
  },
  {
    icon: Monitor,
    title: "Desktop Software",
    description:
      "Robust desktop applications for specialized workflows, ensuring deep system integration and performance.",
    color: "bg-orange-500/10 text-orange-500",
    delay: 0.3,
  },
  {
    icon: Brain,
    title: "AI Agents",
    description: "Autonomous agents that reason, plan, and execute complex tasks using state-of-the-art LLMs.",
    color: "bg-primary/20 text-primary",
    delay: 0.4,
  },
  {
    icon: Terminal,
    title: "MCP Servers",
    description: "Custom Model Context Protocol servers to bridge your data with any LLM ecosystem securely.",
    color: "bg-emerald-500/10 text-emerald-500",
    delay: 0.5,
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Hardened software architecture and automated threat detection built into every line of code.",
    color: "bg-red-500/10 text-red-500",
    delay: 0.6,
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="relative py-24 md:py-40 perspective-1000">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-balance"
          >
            Engineering <span className="text-gradient">Versatility</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
          >
            An elite engineering team delivering enterprise-grade modularity across the entire digital spectrum.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: solution.delay }}
              whileHover={{
                rotateX: 5,
                rotateY: -5,
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="group preserve-3d"
            >
              <div className="relative glass-dark border border-white/5 p-8 rounded-[2.5rem] h-full flex flex-col items-start transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[0_20px_50px_rgba(0,240,124,0.1)]">
                <div
                  className={`mb-6 p-4 rounded-2xl ${solution.color} transition-transform group-hover:scale-110 group-hover:rotate-12`}
                >
                  <solution.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow text-sm md:text-base">
                  {solution.description}
                </p>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
