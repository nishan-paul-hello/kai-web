import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Platform: [
      { name: "Evolution", href: "#features" },
      { name: "Solutions", href: "#solutions" },
      { name: "Neural Network", href: "#technology" },
      { name: "API Reference", href: "#docs" },
    ],
    Ecosystem: [
      { name: "Community", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Showcase", href: "#" },
      { name: "Status", href: "#status" },
    ],
    Resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Privacy Lab", href: "#privacy" },
      { name: "Whitepapers", href: "#" },
      { name: "Foundation", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="relative border-t border-white/5 bg-black/20 backdrop-blur-3xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          {/* Brand section */}
          <div className="md:col-span-4 flex flex-col items-start gap-6">
            <p className="text-muted-foreground leading-relaxed text-balance">
              Architecting the next generation of autonomous intelligence. Secure, scalable, and decentralized by
              design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass-dark border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-foreground/80">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-xs text-muted-foreground uppercase tracking-widest font-medium">
            <span>© {new Date().getFullYear()} KAI CORE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
