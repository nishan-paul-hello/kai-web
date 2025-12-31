import { Brain, Shield, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Solutions() {
  const solutions = [
    {
      icon: Brain,
      title: "AI Agents",
      description:
        "Autonomous AI agents that understand context, make decisions, and execute complex workflows with human-level reasoning.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Advanced threat detection and response powered by machine learning. Protect your infrastructure 24/7 with AI-driven security.",
    },
    {
      icon: Cpu,
      title: "LLM Integration",
      description:
        "State-of-the-art language models with MCP server architecture. Build intelligent applications that truly understand users.",
    },
  ]

  return (
    <section id="solutions" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Enterprise AI Solutions</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Comprehensive AI-powered tools designed for modern businesses. From security to scalability, we've got you
            covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-secondary p-3 group-hover:bg-secondary/80 transition-colors">
                  <solution.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
