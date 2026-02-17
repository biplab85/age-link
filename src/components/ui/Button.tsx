"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "icon";
type Size = "sm" | "md" | "lg" | "hero";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-primary to-primary-dark text-white shadow-[0_1px_2px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,128,159,0.2)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,128,159,0.28)]",
  secondary:
    "border border-neutral-200/80 text-secondary bg-white hover:border-primary/30 hover:text-primary shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-glow)]",
  ghost:
    "text-primary hover:bg-primary-light/50",
  icon:
    "p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-primary",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
  hero: "px-8 py-4 text-base sm:px-10 sm:py-[18px] sm:text-[17px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl",
    "transition-all duration-300 ease-[var(--ease-smooth)]",
    "active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
    "focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2",
    variant !== "icon" && sizes[size],
    variants[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );
}
