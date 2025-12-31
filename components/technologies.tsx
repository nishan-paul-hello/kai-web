"use client"

import { motion } from "framer-motion"

const techs = [
  {
    name: "GPT-5 / o1-pro",
    category: "LLM CORE",
    description: "Multi-modal reasoning and hyper-efficient code generation",
    delay: 0.1,
  },
  {
    name: "Claude 4.5 Sonnet",
    category: "CONTEXT ENGINE",
    description: "Unmatched long-context retrieval and nuanced understanding",
    delay: 0.2,
  },
  {
    name: "MCP Protocol",
    category: "ARCHITECTURE",
    description: "Standardized agent-to-tool communication layer",
    delay: 0.3,
  },
  {
    name: "Hyper-Vector RT",
    category: "INFRASTRUCTURE",
    description: "Real-time semantic indexing at sub-5ms latency",
    delay: 0.4,
  },
]

export function Technologies() {
  return (
    <section id="technology" className="py-24 md:py-40 relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            The <span className="font-mono text-primary">&lt;Tech_Stack /&gt;</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Engineered with the most advanced orchestration layers and neural architectures available today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: tech.delay, duration: 0.5 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-3xl" />
              <div className="relative h-full border border-white/5 bg-black/40 backdrop-blur-3xl p-8 rounded-3xl overflow-hidden transition-all duration-300 group-hover:border-primary/30 group-hover:scale-[1.02]">
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
    </section>
  )
}
