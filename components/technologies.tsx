"use client"

import { motion } from "framer-motion"

const techs = [
  {
    name: "Agent Orchestration",
    category: "AI CORE",
    description: "Custom multi-agent workflows using GPT-4o, Claude 3.5, and DeepSeek.",
    delay: 0.1,
  },
  {
    name: "MCP Protocol",
    category: "CONNECTIVITY",
    description: "Architecting seamless tool-to-model interfaces for real-world automation.",
    delay: 0.2,
  },
  {
    name: "Full-Stack Native",
    category: "CROSS-PLATFORM",
    description: "Next.js, React Native, and Electron for unified digital experiences.",
    delay: 0.3,
  },
  {
    name: "Cyber Defense",
    category: "SECURITY",
    description: "Automated vulnerability scanning and zero-trust software architecture.",
    delay: 0.4,
  },
]

export function Technologies() {
  return (
    <section id="technology" className="py-24 md:py-40 relative overflow-hidden perspective-1000">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Our <span className="font-mono text-primary">&lt;Arsenal /&gt;</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Leveraging the most powerful primitives in modern engineering to build high-stakes intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: 45 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: tech.delay, duration: 0.8 }}
              className="group relative h-full preserve-3d"
            >
              <div className="relative h-full border border-white/5 bg-black/40 backdrop-blur-3xl p-8 rounded-3xl overflow-hidden transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5 shadow-xl">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <span className="font-mono text-4xl">0{index + 1}</span>
                </div>

                <div className="mb-4">
                  <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-primary uppercase px-0 py-0 rounded">
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 font-mono tracking-tight group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>

                {/* Animated corner detail */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/50 transition-all rounded-tl-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  )
}
