"use client"

import React from "react"
import { Brain, Shield, Globe, Smartphone, Monitor, Terminal, Cpu, Network, Lock, Layers } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const solutions = [
  {
    id: "web",
    icon: Globe,
    title: "Web Ecosystems",
    description: "High-performance, scalable web applications built with Next.js & React. Optimized for velocity.",
    color: "from-blue-600/20 to-cyan-400/20",
    accent: "text-blue-400",
    delay: 0.1,
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Interface",
    description: "Native & cross-platform mobile experiences that feel fluid and responsive on any device.",
    color: "from-purple-600/20 to-pink-400/20",
    accent: "text-purple-400",
    delay: 0.2,
  },
  {
    id: "desktop",
    icon: Monitor,
    title: "Desktop Software",
    description: "Robust desktop applications for specialized workflows, ensuring deep system integration.",
    color: "from-orange-600/20 to-yellow-400/20",
    accent: "text-orange-400",
    delay: 0.3,
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Agents",
    description: "Autonomous agents that reason, plan, and execute complex tasks using state-of-the-art LLMs.",
    color: "from-green-600/20 to-emerald-400/20",
    accent: "text-primary",
    delay: 0.4,
  },
  {
    id: "mcp",
    icon: Terminal,
    title: "MCP Servers",
    description: "Custom Model Context Protocol servers to bridge your data with any LLM ecosystem securely.",
    color: "from-emerald-600/20 to-teal-400/20",
    accent: "text-emerald-400",
    delay: 0.5,
  },
  {
    id: "cyber",
    icon: Shield,
    title: "Cybersecurity",
    description: "Hardened software architecture and automated threat detection built into every line of code.",
    color: "from-red-600/20 to-rose-400/20",
    accent: "text-red-400",
    delay: 0.6,
  },
]

function PlatformVisual({ id, accent }: { id: string; accent: string }) {
  switch (id) {
    case "web":
      return (
        <div className="relative w-full h-32 flex items-center justify-center perspective-1000">
          <motion.div
            animate={{ rotateY: [15, -15, 15], rotateX: [5, -5, 5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className={`w-28 h-20 glass-dark border border-white/10 rounded-lg relative ${accent} preserve-3d`}
          >
            <div className="absolute top-2 left-2 flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
            <div className="absolute inset-x-3 top-6 h-1 w-2/3 bg-white/10 rounded-full" />
            <div className="absolute inset-x-3 top-9 h-1 w-1/2 bg-white/5 rounded-full" />

            <motion.div
              style={{ transform: "translateZ(20px)" }}
              className="absolute -right-4 -bottom-4 w-16 h-12 glass border border-white/20 rounded-md shadow-2xl"
            >
              <div className="absolute inset-2 bg-primary/20 rounded-sm overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      )
    case "mobile":
      return (
        <div className="relative w-full h-32 flex items-center justify-center perspective-1000">
          <motion.div
            animate={{ rotateY: [-20, 20, -20], y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-28 glass-dark border border-white/10 rounded-[1.5rem] relative preserve-3d"
          >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full" />
            <div className="absolute inset-3 rounded-lg border border-white/5 bg-gradient-to-b from-white/5 to-transparent shadow-inner flex flex-col gap-2 p-2">
              <div className="h-6 w-full bg-white/5 rounded-sm" />
              <div className="h-2 w-2/3 bg-primary/20 rounded-full" />
              <div className="mt-auto h-8 w-8 bg-white/5 rounded-full self-center" />
            </div>
            <motion.div
              style={{ transform: "translateZ(15px)" }}
              className="absolute -right-6 top-8 w-12 h-12 bg-primary/10 rounded-2xl blur-xl"
            />
          </motion.div>
        </div>
      )
    case "desktop":
      return (
        <div className="relative w-full h-32 flex items-center justify-center perspective-1000">
          <motion.div
            animate={{ rotateX: [10, -10, 10], rotateZ: [2, -2, 2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-20 border border-white/10 glass-dark rounded-xl relative preserve-3d"
          >
            <div className="absolute inset-2 bg-black/40 rounded-lg overflow-hidden font-mono text-[8px] p-2 text-white/40">
              <div className="flex gap-1 mb-1 opacity-50">
                <div className="w-1 h-1 rounded-full bg-red-400" />
                <div className="w-1 h-1 rounded-full bg-yellow-400" />
                <div className="w-1 h-1 rounded-full bg-green-400" />
              </div>
              root@kai:~$ ./secure-build
              <br />
              <span className="text-primary">&gt; compilling native_v8...</span>
              <br />
              <span className="text-primary">DONE</span>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full" />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-20 h-2 bg-white/10 rounded-b-xl" />
          </motion.div>
        </div>
      )
    case "ai":
      return (
        <div className="relative w-full h-32 flex items-center justify-center">
          <div className="relative w-20 h-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border-2 border-dashed border-white/20 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-8 bg-primary rounded-full blur-2xl opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Cpu className={`h-8 w-8 ${accent} drop-shadow-[0_0_10px_rgba(0,240,124,0.5)]`} />
            </div>
          </div>
        </div>
      )
    case "mcp":
      return (
        <div className="relative w-full h-32 flex items-center justify-center perspective-1000">
          <div className="relative w-24 h-24 preserve-3d flex items-center justify-center">
            <Network className={`h-12 w-12 ${accent} transition-transform group-hover:scale-125`} />
            {[0, 120, 240].map((angle) => (
              <motion.div
                key={angle}
                animate={{
                  rotate: [angle, angle + 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/40 rounded-full" />
              </motion.div>
            ))}
            <div className="absolute inset-0 border border-white/10 rounded-full animate-ping opacity-20" />
          </div>
        </div>
      )
    case "cyber":
      return (
        <div className="relative w-full h-32 flex items-center justify-center perspective-1000">
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 relative preserve-3d"
          >
            <Lock
              className={`h-16 w-16 absolute inset-2 ${accent} transition-all`}
              style={{ transform: "translateZ(20px)" }}
            />
            <Shield
              className="h-20 w-20 absolute inset-0 text-white/5 blur-sm"
              style={{ transform: "rotateY(90deg)" }}
            />
            <div
              className="absolute inset-0 border-4 border-primary/20 rounded-2xl animate-pulse"
              style={{ transform: "translateZ(-20px)" }}
            />
            <div className="absolute inset-0 bg-red-500/10 blur-[40px] rounded-full opacity-50" />
          </motion.div>
        </div>
      )
    default:
      return null
  }
}

function SolutionCard({ solution }: { solution: (typeof solutions)[0] }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: solution.delay, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      <div className="relative glass-dark border border-white/5 rounded-[2.5rem] p-8 h-full flex flex-col items-center text-center transition-all duration-500 group-hover:border-primary/20 group-hover:bg-white/[0.02] overflow-hidden">
        {/* Background Radial Gradient */}
        <div
          className={`absolute -inset-24 bg-gradient-radial ${solution.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
        />

        {/* Animated Platform Visual */}
        <div className="mb-8 w-full">
          <PlatformVisual id={solution.id} accent={solution.accent} />
        </div>

        <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
          <h3 className={`text-2xl font-bold mb-4 ${solution.accent} transition-colors group-hover:text-white`}>
            {solution.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base px-2">{solution.description}</p>
        </div>

        {/* 3D Border Light */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  )
}

export function Solutions() {
  return (
    <section id="solutions" className="relative py-24 md:py-40 perspective-1000 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-white/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            <Layers className="h-3 w-3" />
            Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 text-balance tracking-tighter"
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
            Delivering cross-platform mastery through specialized architecture and modern intelligence primitives.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  )
}
