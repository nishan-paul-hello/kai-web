import { Card, CardContent } from "@/components/ui/card"

export function Technologies() {
  const techs = [
    {
      name: "GPT-5",
      category: "Large Language Model",
      description: "Next-generation reasoning and code generation",
    },
    {
      name: "Claude Sonnet 4.5",
      category: "AI Model",
      description: "Advanced contextual understanding",
    },
    {
      name: "MCP Protocol",
      category: "Architecture",
      description: "Model Context Protocol for agent communication",
    },
    {
      name: "Vector DB",
      category: "Infrastructure",
      description: "High-performance semantic search",
    },
  ]

  return (
    <section id="technology" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Powered by cutting-edge technology</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            {`We leverage the latest advancements in AI and infrastructure to deliver unmatched performance.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:glow-primary group"
            >
              <CardContent className="p-6">
                <div className="mb-3">
                  <span className="inline-block text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    {tech.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-mono group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
