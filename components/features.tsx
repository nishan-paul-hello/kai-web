"use client"

import { Users, Zap, Search, ShieldCheck, HeartHandshake, Rocket } from "lucide-react"
import { motion, Variants } from "framer-motion"

const features = [
  {
    icon: Users,
    title: "Elite Engineering",
    description:
      "No middle managers. No diluted focus. You work directly with the architects and engineers building your vision.",
  },
  {
    icon: Zap,
    title: "Rapid Synthesis",
    description: "Our small size allows us to iterate at a speed that large agencies simply can't match.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Engineering",
    description: "Security isn't a feature; it's our baseline. Every project is hardened for production from day zero.",
  },
  {
    icon: Rocket,
    title: "Future-Ready Stack",
    description:
      "We use the latest in AI, MCP, and cloud-native technologies to ensure your project stays relevant for years.",
  },
  {
    icon: Search,
    title: "Deep Technical Audit",
    description:
      "We don't just build; we analyze. Every solution is stress-tested for scale and performance anomalies.",
  },
  {
    icon: HeartHandshake,
    title: "Founders' Commitment",
    description:
      "Our reputation is on the line with every project. We treat your software like it's our own flagship product.",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, rotateX: -20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
}

export function Features() {
  return (
    <section id="features" className="py-24 md:py-40 relative perspective-1000">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gradient"
          >
            The Boutique Advantage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We are not a factory. We are a specialized foundry where elite engineers pour 100% of their craft into every
            line of code.
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
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="group relative p-8 rounded-[2.5rem] border border-white/5 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] preserve-3d"
            >
              <div className="flex flex-col gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-lg">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>

              {/* Floating element inside card */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/20 transition-all" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
