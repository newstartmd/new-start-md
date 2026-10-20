import Link from "next/link";
import type { ReactNode } from "react";
import { priceRange, priceFrom, PRICE_NOTE, PRICE_CONFIRMED } from "@/lib/pricing";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[var(--container-content)] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-volt">
      <span className="h-px w-6 rule" aria-hidden />
      {children}
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-volt focus-visible:ring-offset-2 focus-visible:ring-offset-ink";
  const styles = {
    primary: "bg-volt text-volt-ink hover:bg-volt-deep",
    ghost: "border border-line text-bone hover:border-volt hover:text-volt",
    light: "bg-bone text-ink hover:bg-bone-soft",
  }[variant];
  const external = href.startsWith("http");
  if (external) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`} rel="noopener">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl font-extrabold text-volt tabular-nums">{value}</div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}

/**
 * ImageSlot — a branded placeholder for lifestyle photography.
 *
 * New Start MD's look is built on real photography of fit, happy, successful
 * people (sport / nightlife / everyday wins) — that imagery is Gomega's to
 * supply. Until a real photo is dropped in, this renders a premium dark panel
 * with the brand glow and a one-word mood label, so the layout looks
 * intentional (never broken, never fake/AI imagery). When a photo is ready,
 * pass `src`/`alt` and it renders the image instead.
 *
 * STANDING RULE: real photos only — never ship AI-generated or cartoon imagery
 * in these slots.
 */
export function ImageSlot({
  mood,
  src,
  alt,
  className = "",
  ratio = "aspect-[4/5]",
}: {
  mood?: string;
  src?: string;
  alt?: string;
  className?: string;
  ratio?: string;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt ?? ""} className={`${ratio} w-full rounded-xl2 object-cover ${className}`} />;
  }
  return (
    <div
      className={`${ratio} relative w-full overflow-hidden rounded-xl2 border border-line bg-surface-2 ${className}`}
      data-photo-slot
      role="img"
      aria-label={alt ?? (mood ? `${mood} — lifestyle photo` : "lifestyle photo")}
    >
      <div className="absolute inset-0 grid-texture opacity-60" aria-hidden />
      {mood ? (
        <div className="absolute bottom-4 left-4 right-4">
          <span className="font-display text-2xl font-extrabold uppercase tracking-tight text-bone/70">
            {mood}
          </span>
          <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.2em] text-muted">
            photo slot
          </span>
        </div>
      ) : null}
    </div>
  );
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs leading-relaxed text-muted" data-print-hide>
      {children}
    </p>
  );
}

function IndicativeTag() {
  if (PRICE_CONFIRMED) return null;
  return (
    <span className="ml-2 rounded-full border border-line px-2 py-0.5 align-middle text-[0.6rem] uppercase tracking-wide text-muted">
      indicative
    </span>
  );
}

/**
 * PriceBand — the prominent price-range callout. Shows the range (lowest single
 * therapy up to combination formularies & VIP) and always carries the care-team
 * caveat, because the real plan and price are set with the provider.
 */
export function PriceBand({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl2 border border-line bg-surface p-6 ${className}`}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Programs</span>
        <span className="font-display text-3xl font-extrabold text-volt tabular-nums">
          {priceRange()}
        </span>
        <IndicativeTag />
      </div>
      <p className="mt-1 text-sm text-bone-soft">
        From a single therapy up to combination formularies and VIP programs.
      </p>
      <p className="mt-3 text-xs leading-relaxed text-muted">{PRICE_NOTE}</p>
    </div>
  );
}

/** Compact inline price, e.g. in a hero or on a card: "from $199/mo". */
export function PriceInline({ className = "" }: { className?: string }) {
  return (
    <span className={`font-semibold text-volt tabular-nums ${className}`}>
      {priceFrom()}
      <IndicativeTag />
    </span>
  );
}

/**
 * ProductImageSlot — a branded placeholder for a REAL product photo (vial /
 * packaging). Same rule as the lifestyle slots: real photos only, never
 * AI/stock-fake. Pass `src` once a photo exists and it renders the image.
 */
export function ProductImageSlot({
  name,
  src,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  name: string;
  src?: string;
  className?: string;
  ratio?: string;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={name} className={`${ratio} w-full rounded-xl object-cover ${className}`} />;
  }
  return (
    <div
      className={`${ratio} relative w-full overflow-hidden rounded-xl border border-line bg-surface-2 ${className}`}
      data-product-photo-slot
      role="img"
      aria-label={`${name} — product photo`}
    >
      <div className="absolute inset-0 grid-texture opacity-50" aria-hidden />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-muted">product photo</span>
      </div>
    </div>
  );
}
