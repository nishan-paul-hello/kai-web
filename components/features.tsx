import { Zap, Lock, Globe, Code2, Database, Workflow } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance with sub-millisecond response times",
    },
    {
      icon: Lock,
      title: "Secure by Default",
      description: "End-to-end encryption and zero-trust architecture",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy across 300+ edge locations worldwide",
    },
    {
      icon: Code2,
      title: "Developer First",
      description: "Simple APIs and comprehensive documentation",
    },
    {
      icon: Database,
      title: "Real-time Data",
      description: "Stream processing with millisecond latency",
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "No-code automation for complex business logic",
    },
  ]

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Built for the modern web</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            {`Everything you need to build, deploy, and scale AI-powered applications with confidence.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-2.5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
