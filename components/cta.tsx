import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="border-border/50 bg-card backdrop-blur-sm overflow-hidden relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

          <CardContent className="relative p-12 md:p-16 lg:p-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
                Ready to transform your business with AI?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-balance">
                Join thousands of companies already building the future with KAI. Subscribe to get the latest updates.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="bg-background border-border" />
                <Button size="lg" className="text-base w-full sm:w-auto">
                  Subscribe
                </Button>
              </div>

              <div className="mt-6">
                <Button size="lg" variant="ghost" className="text-base">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Sales
                </Button>
              </div>

              <p className="mt-8 text-sm text-muted-foreground">Get updates on new features and releases</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
