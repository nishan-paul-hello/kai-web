"use client"

import { Zap, Lock, Globe, Code2, Database, Workflow } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Zap,
    title: "Neural Velocity",
    description: "Optimized for extreme performance with sub-millisecond inference and response times.",
  },
  {
    icon: Lock,
    title: "Hardened Security",
    description: "Multi-layered encryption and zero-trust protocol integrated at the BIOS level.",
  },
  {
    icon: Globe,
    title: "Planetary Scale",
    description: "Instantly deploy across 300+ edge nodes with automated load balancing.",
  },
  {
    icon: Code2,
    title: "Unified SDKs",
    description: "Developer-centric APIs that bridge the gap between human intent and machine logic.",
  },
  {
    icon: Database,
    title: "Vector Streams",
    description: "Dynamic semantic processing of multi-modal data streams in real-time.",
  },
  {
    icon: Workflow,
    title: "Logic Autopilot",
    description: "Autonomous orchestration of complex business logic without manual intervention.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Features() {
  return (
    <section id="features" className="py-24 md:py-40 relative">
      <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gradient"
          >
            Engineered for Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A comprehensive ecosystem designed to accelerate your AI transition with zero compromise.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
            >
              <div className="flex flex-col gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{feature.description}</p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
