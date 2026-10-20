import type { ReactNode } from "react";
import { externalProps } from "@/lib/links";

type Variant = "primary" | "ghost-light" | "ghost" | "light";

const styles: Record<Variant, string> = {
  primary: "bg-teal text-white hover:bg-blue shadow-[0_10px_30px_-12px_rgb(0_120_143/0.7)]",
  light: "bg-white text-navy hover:bg-cyan",
  "ghost-light": "text-white ring-1 ring-inset ring-white/35 hover:bg-white/10",
  ghost: "text-navy ring-1 ring-inset ring-navy/25 hover:bg-navy/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...externalProps(href)}
      className={`group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[1.0625rem] font-semibold transition-[background-color,color,transform] duration-300 ease-lens active:scale-[0.97] ${styles[variant]} ${className}`}
    >
      {icon && <span className="transition-transform duration-300 ease-lens group-hover:-rotate-6">{icon}</span>}
      {children}
    </a>
  );
}
