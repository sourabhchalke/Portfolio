import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../utils/cn";

/* ── Entrance: things seat into place, they do not float in ── */
export function Reveal({ children, delay = 0, y = 14, className, as = "div" }) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* ── Corner ticks: the rivets on every plate ── */
export function Ticks({ className }) {
  return (
    <span aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      {[
        "left-0 top-0 border-l border-t",
        "right-0 top-0 border-r border-t",
        "left-0 bottom-0 border-l border-b",
        "right-0 bottom-0 border-r border-b",
      ].map((pos) => (
        <span
          key={pos}
          className={cn("absolute h-3 w-3", pos)}
          style={{ borderColor: "var(--accent)", opacity: 0.55 }}
        />
      ))}
    </span>
  );
}

/* ── Section shell: indexed, ruled, asymmetric label column ── */
export function Section({ id, index, label, title, lead, children, className }) {
  return (
    <section
      id={id}
      className={cn("relative border-t px-5 py-20 sm:px-8 md:py-28 lg:px-14", className)}
      style={{ borderColor: "var(--line)" }}
    >
      <div className="mx-auto max-w-295">
        <header className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10">
          <div className="flex items-baseline gap-4 md:block">
            <span className="microcaps tnum block text-[13px]" style={{ color: "var(--accent)" }}>
              {index}
            </span>
            <span className="microcaps mt-2 block" style={{ color: "var(--muted)" }}>
              {label}
            </span>
            <span
              aria-hidden="true"
              className="mt-4 hidden h-px w-14 md:block"
              style={{ background: "var(--line-strong)" }}
            />
          </div>

          <div>
            <h2 className="max-w-[19ch] font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-balance">
              {title}
            </h2>
            {lead && (
              <p
                className="mt-5 max-w-[62ch] text-[15px] leading-relaxed sm:text-base"
                style={{ color: "var(--muted)" }}
              >
                {lead}
              </p>
            )}
          </div>
        </header>

        {children}
      </div>
    </section>
  );
}

/* ── Buttons ── */
export function Button({
  href,
  children,
  variant = "solid",
  icon,
  external = false,
  onClick,
  type,
  className,
  download,
}) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 px-5 py-3 microcaps text-[11px] transition-all duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)]";

  const styles = {
    solid: "text-white",
    outline: "border",
    ghost: "border border-transparent",
  };

  const style =
    variant === "solid"
      ? {
          backgroundImage:
            "linear-gradient(100deg, var(--accent-deep), var(--accent) 55%, var(--accent-2))",
          boxShadow: "0 12px 30px -14px var(--accent)",
        }
      : variant === "outline"
        ? { borderColor: "var(--line-strong)", color: "var(--text)" }
        : { color: "var(--muted)" };

  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(base, styles[variant], className)}
        style={style}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        download={download}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={cn(base, styles[variant], className)}
      style={style}
    >
      {content}
    </button>
  );
}

/* ── Small mono chip ── */
export function Chip({ children, tone = "default" }) {
  const toneStyle =
    tone === "accent"
      ? {
          color: "var(--accent-soft)",
          borderColor: "var(--accent)",
          background: "var(--plate-glow)",
        }
      : tone === "led"
        ? { color: "var(--led)", borderColor: "var(--led)" }
        : { color: "var(--muted)", borderColor: "var(--line)" };

  return (
    <span
      className="inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[11px] tracking-wide"
      style={toneStyle}
    >
      {children}
    </span>
  );
}
