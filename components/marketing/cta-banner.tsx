import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CTABannerAction {
  label: string
  href: string
  variant?: "primary" | "outline"
}

interface CTABannerProps {
  title: string
  description: string
  actions: CTABannerAction[]
  className?: string
}

export function CTABanner({
  title,
  description,
  actions,
  className,
}: CTABannerProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center md:px-16 md:py-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-4 text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
              {title}
            </h2>
            <p className="mb-8 text-primary-foreground/80">{description}</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {actions.map((action) => (
                <Button
                  key={action.href + action.label}
                  size="lg"
                  variant={action.variant === "outline" ? "outline" : "secondary"}
                  asChild
                  className={
                    action.variant === "outline"
                      ? "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                      : "bg-background text-foreground hover:bg-background/90 hover-lift"
                  }
                >
                  <Link href={action.href}>
                    {action.label}
                    {action.variant !== "outline" && (
                      <ArrowRight className="ml-2 h-4 w-4" />
                    )}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
