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
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-royal-600">
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
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-royal-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  const styles = {
    primary: "bg-royal-600 text-white hover:bg-royal-700",
    ghost: "border border-line-200 text-navy-950 hover:border-royal-600 hover:text-royal-600",
    light: "bg-navy-950 text-white hover:bg-slate-500",
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
      <div className="font-mono text-4xl font-medium text-navy-950 tabular-nums">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
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
      className={`${ratio} relative w-full overflow-hidden rounded-xl2 border border-line-200 bg-sky-100 ${className}`}
      data-photo-slot
      role="img"
      aria-label={alt ?? (mood ? `${mood} — lifestyle photo` : "lifestyle photo")}
    >
      <div className="absolute inset-0 grid-texture opacity-60" aria-hidden />
      {mood ? (
        <div className="absolute bottom-4 left-4 right-4">
          <span className="font-display text-2xl font-semibold uppercase tracking-tight text-navy-950/70">
            {mood}
          </span>
          <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">
            photo slot
          </span>
        </div>
      ) : null}
    </div>
  );
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs leading-relaxed text-slate-500" data-print-hide>
      {children}
    </p>
  );
}

/**
 * RxBadge — compliance slot (guide §10). Everything New Start carries is
 * prescription-only, dispensed after a clinician reviews a visit; nothing is
 * sold over the counter. `full` renders the longer PDP wording.
 */
export function RxBadge({ full = false, className = "" }: { full?: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-royal-700 ${className}`}
    >
      <span className="font-mono text-[0.65rem] font-semibold">Rx</span>
      <span aria-hidden>·</span>
      {full ? "Requires clinician approval" : "Clinician approval"}
    </span>
  );
}

/**
 * Reassurance — the icon + text trust list used on the PDP and checkout.
 */
export function Reassurance({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2.5 text-sm text-slate-500 ${className}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-2.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 shrink-0 text-royal-600">
            <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t}
        </li>
      ))}
    </ul>
  );
}

function IndicativeTag() {
  if (PRICE_CONFIRMED) return null;
  return (
    <span className="ml-2 rounded-full border border-line-200 px-2 py-0.5 align-middle text-[0.6rem] uppercase tracking-wide text-slate-500">
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
    <div className={`rounded-xl2 border border-line-200 bg-white p-6 ${className}`}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Programs</span>
        <span className="font-mono text-3xl font-medium text-navy-950 tabular-nums">
          {priceRange()}
        </span>
        <IndicativeTag />
      </div>
      <p className="mt-1 text-sm text-slate-500">
        From a single therapy up to combination formularies and VIP programs.
      </p>
      <p className="mt-3 text-xs leading-relaxed text-slate-500">{PRICE_NOTE}</p>
    </div>
  );
}

/** Compact inline price, e.g. in a hero or on a card: "from $199/mo". */
export function PriceInline({ className = "" }: { className?: string }) {
  return (
    <span className={`font-mono font-medium text-navy-950 tabular-nums ${className}`}>
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
  // Products without a specific vial photo fall back to the branded blank vial,
  // so every product renders a real image rather than a placeholder slot.
  const resolved = src ?? "/images/products/vial-blank-brand.jpg";
  if (resolved) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={resolved} alt={name} className={`${ratio} w-full rounded-xl object-cover ${className}`} />;
  }
  return (
    <div
      className={`${ratio} relative w-full overflow-hidden rounded-xl border border-line-200 bg-sky-100 ${className}`}
      data-product-photo-slot
      role="img"
      aria-label={`${name} — product photo`}
    >
      <div className="absolute inset-0 grid-texture opacity-50" aria-hidden />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">product photo</span>
      </div>
    </div>
  );
}
