import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "slate" | "emerald";
}

export function Section({ children, className, id, background = "white" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-24 lg:py-32",
        {
          "bg-white dark:bg-slate-900": background === "white",
          "bg-slate-50 dark:bg-slate-800/50": background === "slate",
          "bg-gradient-to-b from-emerald-50/50 to-white dark:from-emerald-950/20 dark:to-slate-900": background === "emerald",
        },
        className
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("mb-12 sm:mb-16", centered && "text-center")}>
      {subtitle && (
        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
