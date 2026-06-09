import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import logo from "@/public/cse.avif"
import Image from "next/image"

const footerLinks = {
  platform: {
    title: "Platform",
    links: [
      { href: "/features", label: "Features" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  modules: {
    title: "Modules",
    links: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/schedule", label: "Schedule" },
      { href: "/attendance", label: "Attendance" },
      { href: "/resources", label: "Resources" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { href: "/help-center", label: "Help Center" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
      { href: "/give-feedback", label: "Give Feedback" },
    ],
  },
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 py-14 lg:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-5 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Image src={logo} alt="SmartCSE Logo" width={34} height={34} className="object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">SmartCSE</span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A comprehensive platform for managing academic and administrative tasks
              within the CSE department at University of Barishal.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>University of Barishal, Barishal, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>contact@smartcse.edu.bd</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+880 1XXX-XXXXXX</span>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SmartCSE. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for University of Barishal CSE Department
          </p>
        </div>
      </div>
    </footer>
  )
}
