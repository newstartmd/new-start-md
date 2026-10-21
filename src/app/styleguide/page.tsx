import type { Metadata } from "next";
import { Container, Button, Eyebrow } from "@/components/ui";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "Style guide",
  description: "The NewStartMD design system — tokens, type, and components.",
  robots: { index: false, follow: false },
};

type Swatch = { name: string; varName: string; hex: string; note?: string; dark?: boolean };

const BLUES: Swatch[] = [
  { name: "navy-950", varName: "bg-navy-950", hex: "#0A1A33", note: "Primary text · deep grounds", dark: true },
  { name: "navy-800", varName: "bg-navy-800", hex: "#11284D", note: "Dark chapter cards", dark: true },
  { name: "royal-600", varName: "bg-royal-600", hex: "#1F4FD1", note: "Primary CTA · links", dark: true },
  { name: "royal-700", varName: "bg-royal-700", hex: "#1A43B4", note: "CTA hover", dark: true },
  { name: "electric-500", varName: "bg-electric-500", hex: "#3D86FF", note: "Focus · data accent", dark: true },
  { name: "ice-300", varName: "bg-ice-300", hex: "#7FB2FF", note: "Accents on navy" },
  { name: "sky-100", varName: "bg-sky-100", hex: "#E6EFFC", note: "Pale cool panels" },
  { name: "mist-50", varName: "bg-mist-50", hex: "#F3F6FA", note: "Cool off-white (never cream)" },
];

const NEUTRALS: Swatch[] = [
  { name: "line-200", varName: "bg-line-200", hex: "#DCE3ED", note: "Hairlines · card borders" },
  { name: "slate-500", varName: "bg-slate-500", hex: "#536279", note: "Secondary text (AA)", dark: true },
  { name: "slate-300", varName: "bg-slate-300", hex: "#B8C4D6", note: "Disclaimer on navy" },
  { name: "white", varName: "bg-white", hex: "#FFFFFF", note: "60% of every screen" },
];

const GOLD: Swatch[] = [
  { name: "gold-300", varName: "bg-gold-300", hex: "#E9CF85", note: "Gold on dark" },
  { name: "gold-500", varName: "bg-gold-500", hex: "#C9A43F", note: "Decorative · target markers", dark: true },
  { name: "gold-700", varName: "bg-gold-700", hex: "#8A6716", note: "The ONLY gold for text on light", dark: true },
];

const SEMANTIC: Swatch[] = [
  { name: "success-600", varName: "bg-success-600", hex: "#12805C", note: "In range", dark: true },
  { name: "warning-600", varName: "bg-warning-600", hex: "#B45309", note: "Monitor", dark: true },
  { name: "danger-600", varName: "bg-danger-600", hex: "#C2334D", note: "Out of range", dark: true },
];

function SwatchRow({ title, items }: { title: string; items: Swatch[] }) {
  return (
    <div>
      <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s) => (
          <div key={s.name} className="overflow-hidden rounded-md border border-line-200 bg-white shadow-xs">
            <div className={`flex h-20 items-end p-3 ${s.varName}`}>
              <span className={`font-mono text-xs ${s.dark ? "text-white" : "text-navy-950"}`}>{s.hex}</span>
            </div>
            <div className="px-3 py-2.5">
              <div className="font-mono text-xs font-medium text-navy-950">{s.name}</div>
              {s.note ? <div className="mt-0.5 text-xs text-slate-500">{s.note}</div> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StyleGuidePage() {
  return (
    <>
      <section className="glow border-b border-line-200">
        <Container className="py-16">
          <Eyebrow>Design system</Eyebrow>
          <h1 className="mt-5 text-5xl font-medium sm:text-6xl">
            {brand.name} <span className="italic text-royal-600">style guide</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-500">
            Tokens, type and components for the build. Cool navy &amp; royal blues, gold as a ≤5%
            accent, cool off-white — never cream. Gold text on light is always gold-700.
          </p>
        </Container>
      </section>

      {/* Color */}
      <Container className="py-16">
        <div className="flex items-end gap-4">
          <h2 className="text-3xl font-semibold">Color</h2>
          <div className="mb-2 h-px flex-1 rule" aria-hidden />
        </div>
        <div className="mt-8 space-y-8">
          <SwatchRow title="Blues — the brand spine" items={BLUES} />
          <SwatchRow title="Cool neutrals" items={NEUTRALS} />
          <SwatchRow title="Gold — accent only" items={GOLD} />
          <SwatchRow title="Semantic — separate from the accent hue" items={SEMANTIC} />
        </div>
      </Container>

      {/* Type */}
      <section className="bg-mist-50 py-16">
        <Container>
          <div className="flex items-end gap-4">
            <h2 className="text-3xl font-semibold">Typography</h2>
            <div className="mb-2 h-px flex-1 rule" aria-hidden />
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-5">
              <div>
                <span className="font-mono text-xs text-slate-500">display-2xl · Cormorant 500/600</span>
                <p className="text-6xl font-medium leading-[0.98] tracking-tight sm:text-7xl">
                  You too can have it all.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-slate-500">h2 · Cormorant 600</span>
                <p className="text-4xl font-semibold tracking-tight">It all starts with your health.</p>
              </div>
              <div>
                <span className="font-mono text-xs text-slate-500">body-lg · Inter</span>
                <p className="max-w-prose text-lg text-slate-500">
                  Your new start, guided by board-certified clinicians and delivered to your door —
                  with the energy for everything you love.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-slate-500">stat · IBM Plex Mono</span>
                <p className="font-mono text-4xl font-medium tracking-tight tabular-nums text-navy-950">
                  72% · $199/mo · 24h
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Eyebrow>Eyebrow label</Eyebrow>
              <p className="text-sm text-slate-500">
                Three faces: <span className="font-display text-navy-950">Cormorant Garamond</span> for
                display, <span className="font-sans font-medium text-navy-950">Inter</span> for UI, and{" "}
                <span className="font-mono text-navy-950">IBM Plex Mono</span> for data and prices.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Buttons */}
      <Container className="py-16">
        <div className="flex items-end gap-4">
          <h2 className="text-3xl font-semibold">Buttons</h2>
          <div className="mb-2 h-px flex-1 rule" aria-hidden />
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="#">Primary</Button>
          <Button href="#" variant="ghost">Secondary</Button>
          <span className="inline-flex items-center rounded-full border border-gold-500 px-6 py-3 text-sm font-semibold text-gold-700">
            Gold outline — Signature
          </span>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-lg ocean p-6">
          <Button href="#" variant="light">Primary on dark</Button>
          <a href="#" className="text-sm font-semibold text-ice-300 underline-offset-4 hover:underline">
            Ghost link on navy
          </a>
        </div>
      </Container>

      {/* Cards */}
      <section className="bg-mist-50 py-16">
        <Container>
          <div className="flex items-end gap-4">
            <h2 className="text-3xl font-semibold">Cards</h2>
            <div className="mb-2 h-px flex-1 rule" aria-hidden />
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Product card */}
            <div className="overflow-hidden rounded-lg border border-line-200 bg-white shadow-card">
              <div className="aspect-[4/5] bg-sky-100" />
              <div className="p-5">
                <span className="font-mono text-xs uppercase tracking-wide text-slate-500">Weight &amp; GLP-1</span>
                <h3 className="mt-1 text-xl font-semibold">Semaglutide program</h3>
                <p className="mt-1 text-sm text-slate-500">May support appetite control.</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-mono text-sm font-medium text-navy-950">from $199/mo</span>
                  <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-royal-700">
                    Rx · Clinician approval
                  </span>
                </div>
              </div>
            </div>
            {/* Dark chapter card */}
            <div className="rounded-lg bg-navy-800 p-6 ring-1 ring-gold-500/25">
              <span className="font-mono text-xs uppercase tracking-wide text-gold-300">Signature</span>
              <h3 className="mt-2 text-xl font-semibold text-white">Concierge membership</h3>
              <p className="mt-2 text-sm text-ice-300">
                Same-day clinician messaging, quarterly labs, travel-ready kits.
              </p>
            </div>
            {/* Stat card */}
            <div className="rounded-lg border border-line-200 bg-white p-6 shadow-card">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Licensed</span>
              <p className="mt-2 font-mono text-5xl font-medium tabular-nums text-navy-950">40+</p>
              <p className="mt-1 text-sm text-slate-500">states, with clinician response under 24h.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
