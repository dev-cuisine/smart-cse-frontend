import Link from "next/link"
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, LucideIcon } from "lucide-react"

interface PageHeroAction {
  label: string
  href: string
  variant?: "default" | "outline"
}

interface PageHeroProps {
  badge: string
  title: ReactNode
  description: string
  icon?: LucideIcon
  actions?: PageHeroAction[]
  className?: string
}

export function PageHero({
  badge,
  title,
  description,
  icon: Icon,
  actions,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 lg:py-28",
        className,
      )}
    >
      <div className="marketing-mesh absolute inset-0 -z-10" />
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {Icon && (
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-lg shadow-primary/5">
              <Icon className="h-8 w-8 text-primary" />
            </div>
          )}
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            {badge}
          </Badge>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
          {actions && actions.length > 0 && (
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {actions.map((action) => (
                <Button
                  key={action.href + action.label}
                  size="lg"
                  variant={action.variant ?? "default"}
                  asChild
                  className={action.variant === "outline" ? "bg-background/80 backdrop-blur-sm" : "shadow-lg shadow-primary/20 hover-lift"}
                >
                  <Link href={action.href}>
                    {action.label}
                    {action.variant !== "outline" && (
                      <ArrowRight className="ml-2 h-5 w-5" />
                    )}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
