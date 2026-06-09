import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface SectionHeaderProps {
  badge?: string
  badgeVariant?: "primary" | "accent"
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  badge,
  badgeVariant = "primary",
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {badge && (
        <Badge
          className={cn(
            "mb-4",
            badgeVariant === "accent"
              ? "bg-accent/10 text-accent hover:bg-accent/20"
              : "bg-primary/10 text-primary hover:bg-primary/20",
          )}
        >
          {badge}
        </Badge>
      )}
      <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-pretty text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
