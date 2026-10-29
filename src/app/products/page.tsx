import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, Button, Disclaimer, PriceInline, ProductImageSlot, RxBadge } from "@/components/ui";
import { GOALS, PRODUCTS, BLENDS, getGoal } from "@/lib/products";
import { getReviewBySlug } from "@/lib/fullReviews";
import { priceFor } from "@/lib/catalogPricing";
import { signupUrl } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Protocols",
  description:
    "Protocols built around your goal — the prescribed compound plus the diet, training, monitoring and coaching you opt into. Set with a licensed U.S. provider after a visit.",
};

// The modular parts of a protocol — mirrors the opt-in functions in the
// /start assessment (src/lib/assessment.ts). The compound is the required
// core; everything else is opt-in.
const PROTOCOL_PARTS: { title: string; blurb: string; core?: boolean }[] = [
  { title: "Prescribed compound", blurb: "The peptide, GLP-1 or hormone your provider prescribes.", core: true },
  { title: "Diet & nutrition", blurb: "A plan shaped to your food preferences and routine." },
  { title: "Training", blurb: "Workouts matched to your goal and schedule." },
  { title: "Wearable tracking", blurb: "Sync Apple Watch, Fitbit, Garmin, Oura and more." },
  { title: "Coaching", blurb: "A human in your corner, checking in and adjusting." },
];

type Item =
  | { kind: "single"; slug: string; name: string; goal: string; usedFor: string; aka?: string[]; image?: string; href: string }
  | { kind: "blend"; slug: string; name: string; goal: string; usedFor: string; components: string[]; image?: string };

function itemsForGoals(slugs: string[]): Item[] {
  const singles: Item[] = PRODUCTS.filter((p) => slugs.includes(p.goal)).map((p) => ({
    kind: "single",
    slug: p.slug,
    name: p.name,
    goal: p.goal,
    usedFor: p.usedFor,
    aka: p.aka,
    image: p.image,
    href: `/products/${p.slug}`,
  }));
  const blends: Item[] = BLENDS.filter((b) => slugs.includes(b.goal)).map((b) => ({
    kind: "blend",
    slug: b.slug,
    name: b.name,
    goal: b.goal,
    usedFor: b.usedFor,
    components: b.components,
    image: b.image,
  }));
  return [...singles, ...blends];
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ goal?: string }>;
}) {
  const { goal: goalParam } = await searchParams;
  const activeGoal = goalParam ? getGoal(goalParam) : undefined;
  const shownGoals = activeGoal ? [activeGoal.slug] : GOALS.map((g) => g.slug);
  const items = itemsForGoals(shownGoals);

  return (
    <>
      {/* Hero band */}
      <section className="ocean">
        <Container className="py-14">
          <Eyebrow>Built around your goal</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Protocols</h1>
          <p className="mt-4 max-w-2xl text-ice-300">
            A protocol is more than a vial. Start with the prescribed compound below, then build
            the rest of your system — diet, training, wearable tracking and coaching — around it,
            only the parts you want. Everything is set with a licensed provider after a visit;
            nothing here is sold over the counter. Programs <PriceInlineLight />.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={signupUrl} variant="light">
              Build your protocol
            </Button>
            <Link
              href="/how-it-works"
              className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/60"
            >
              How it works
            </Link>
          </div>
        </Container>
      </section>

      {/* What a protocol includes — the modular system, honestly framed */}
      <section className="border-b border-line-200 bg-mist-50">
        <Container className="py-8">
          <p className="font-mono text-xs uppercase tracking-wide text-slate-500">
            What a protocol includes
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {PROTOCOL_PARTS.map((part) => (
              <div
                key={part.title}
                className="rounded-xl2 border border-line-200 bg-white p-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-navy-950">{part.title}</span>
                  {part.core ? (
                    <span className="rounded-full bg-royal-600/10 px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-royal-600">
                      Core
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-500/10 px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-slate-500">
                      Opt in
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-xs text-slate-500">{part.blurb}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">
            The compound is the core. Add diet, training, wearable tracking and coaching only if
            you want them — your protocol is yours to shape.{" "}
            <Link href={signupUrl} className="font-medium text-royal-600 hover:underline">
              Build yours in 5 minutes →
            </Link>
          </p>
        </Container>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-16 z-30 border-b border-line-200 bg-white/90 backdrop-blur">
        <Container className="flex gap-2 overflow-x-auto py-3">
          <FilterPill href="/products" active={!activeGoal}>
            All
          </FilterPill>
          {GOALS.map((g) => (
            <FilterPill key={g.slug} href={`/products?goal=${g.slug}`} active={activeGoal?.slug === g.slug}>
              {g.label}
            </FilterPill>
          ))}
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        {activeGoal ? (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold sm:text-3xl">{activeGoal.label}</h2>
            <p className="mt-1 text-sm text-slate-500">{activeGoal.tagline}</p>
          </div>
        ) : null}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <RenderCell key={`${item.kind}-${item.slug}`} item={item} index={i} total={items.length} />
          ))}
        </div>

        <p className="mt-10 text-xs text-slate-500">
          Every therapy requires a visit and a licensed provider&apos;s approval. Some are
          FDA-approved medications; compounded medications are not FDA-approved and are prepared
          by licensed U.S. pharmacies. Your provider determines what is appropriate and the
          correct dosing.
        </p>
      </Container>

      <section className="border-t border-line-200 bg-mist-50">
        <Container className="py-14">
          <div className="mx-auto max-w-3xl">
            <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
          </div>
        </Container>
      </section>
    </>
  );
}

/** Insert the "not sure where to start" dark card after every 6 product cells. */
function RenderCell({ item, index, total }: { item: Item; index: number; total: number }) {
  const showInterstitial = (index + 1) % 6 === 0 && index + 1 < total;
  return (
    <>
      <ProductCard item={item} />
      {showInterstitial ? <Interstitial /> : null}
    </>
  );
}

function ProductCard({ item }: { item: Item }) {
  const goal = getGoal(item.goal);
  const inner = (
    <>
      <ProductImageSlot name={item.name} src={item.image} ratio="aspect-[4/3]" className="mb-4" />
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-wide text-slate-500">{goal?.label}</span>
        {item.kind === "blend" ? (
          <span className="rounded-full bg-gold-700/15 px-2 py-0.5 text-[0.6rem] uppercase tracking-wide text-gold-700">
            Blend
          </span>
        ) : null}
      </div>
      <h3 className="mt-1 text-lg font-bold text-navy-950">{item.name}</h3>
      {item.kind === "single" && item.aka?.length ? (
        <p className="mt-0.5 text-xs text-slate-500">{item.aka.join(" · ")}</p>
      ) : null}
      {item.kind === "blend" ? (
        <p className="mt-0.5 text-xs text-slate-500">{item.components.join(" + ")}</p>
      ) : null}
      <p className="mt-2 text-sm text-slate-500">{item.usedFor}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-mono text-sm font-medium text-navy-950">{priceFor(item.slug).short}</span>
        <RxBadge />
      </div>
    </>
  );

  if (item.kind === "single") {
    return (
      <Link
        href={item.href}
        className="group flex flex-col rounded-xl2 border border-line-200 bg-white p-5 shadow-card transition hover:shadow-lift"
      >
        {inner}
      </Link>
    );
  }
  // Blends have no checkout page, but when a full review exists it is their
  // detail page — link the card there so the breakdown is reachable from the shop.
  if (getReviewBySlug(item.slug)) {
    return (
      <Link
        href={`/evidence/${item.slug}`}
        className="group flex flex-col rounded-xl2 border border-line-200 bg-white p-5 shadow-card transition hover:shadow-lift"
      >
        {inner}
      </Link>
    );
  }
  return <div className="flex flex-col rounded-xl2 border border-line-200 bg-white p-5 shadow-card">{inner}</div>;
}

function Interstitial() {
  return (
    <div className="flex flex-col justify-center rounded-xl2 bg-navy-800 p-6 ring-1 ring-gold-500/25">
      <h3 className="font-display text-xl font-semibold text-white">Not sure where to start?</h3>
      <p className="mt-2 text-sm text-ice-300">
        Take the 5-minute assessment and a licensed provider will point you to the right plan.
      </p>
      <div className="mt-5">
        <Button href={signupUrl} variant="light">
          Take the assessment
        </Button>
      </div>
    </div>
  );
}

function PriceInlineLight() {
  // Inline price rendered for the dark hero band (white numerals).
  return (
    <span className="font-mono font-medium text-white">
      <PriceInline className="!text-white" />
    </span>
  );
}

function FilterPill({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition ${
        active
          ? "border-royal-600 bg-royal-600 text-white"
          : "border-line-200 text-slate-500 hover:border-royal-600 hover:text-royal-600"
      }`}
    >
      {children}
    </Link>
  );
}
