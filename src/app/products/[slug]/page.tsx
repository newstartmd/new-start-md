import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Container,
  Button,
  Eyebrow,
  Disclaimer,
  ProductImageSlot,
  RxBadge,
  Reassurance,
} from "@/components/ui";
import { BiomarkerRangeBar } from "@/components/graphics";
import { PRODUCTS, getProduct, getGoal, productsByGoal } from "@/lib/products";
import { priceFor } from "@/lib/catalogPricing";
import { signupUrl } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Treatment not found" };
  return {
    title: product.name,
    description: `${product.name} — ${product.usedFor} Prescribed by a licensed New Start MD provider after a visit.`,
  };
}

// Sample biomarker panels by goal — illustrative only (guide §7.3 + §10).
const PANELS: Record<string, { name: string; unit: string; value: number; min: number; max: number; optimalMin: number; optimalMax: number; status: "in" | "monitor" | "out" }[]> = {
  hormone: [
    { name: "Free Testosterone", unit: "ng/dL", value: 18, min: 5, max: 25, optimalMin: 15, optimalMax: 22, status: "in" },
    { name: "Estradiol", unit: "pg/mL", value: 28, min: 10, max: 60, optimalMin: 20, optimalMax: 40, status: "in" },
    { name: "hs-CRP", unit: "mg/L", value: 1.4, min: 0, max: 3, optimalMin: 0, optimalMax: 1, status: "monitor" },
  ],
  "weight-loss": [
    { name: "HbA1c", unit: "%", value: 5.9, min: 4, max: 8, optimalMin: 4, optimalMax: 5.6, status: "monitor" },
    { name: "Fasting Insulin", unit: "µIU/mL", value: 7, min: 2, max: 20, optimalMin: 2, optimalMax: 8, status: "in" },
    { name: "ApoB", unit: "mg/dL", value: 88, min: 40, max: 140, optimalMin: 40, optimalMax: 90, status: "in" },
  ],
  wellness: [
    { name: "IGF-1", unit: "ng/mL", value: 180, min: 80, max: 280, optimalMin: 150, optimalMax: 230, status: "in" },
    { name: "Vitamin D", unit: "ng/mL", value: 42, min: 20, max: 80, optimalMin: 40, optimalMax: 60, status: "in" },
    { name: "hs-CRP", unit: "mg/L", value: 0.8, min: 0, max: 3, optimalMin: 0, optimalMax: 1, status: "in" },
  ],
};

const BENEFITS = [
  { h: "Built around your goal", p: "Prescribed for what you want to change — not a one-size protocol." },
  { h: "Dosed by a provider", p: "A licensed clinician sets and adjusts your dose. You never guess." },
  { h: "Monitored over time", p: "Check-ins and labs where appropriate keep your plan on track." },
  { h: "Delivered discreetly", p: "Shipped to your door with guidance and messaging included." },
];

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const goal = getGoal(product.goal);
  const panel = PANELS[product.goal];
  const related = productsByGoal(product.goal).filter((p) => p.slug !== product.slug).slice(0, 3);
  const price = priceFor(product.slug);

  return (
    <article className="pb-24 lg:pb-0">
      {/* Breadcrumb */}
      <div className="border-b border-line-200 bg-white">
        <Container className="py-4">
          <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/products" className="hover:text-royal-600">Treatments</Link>
            {goal ? (
              <>
                {" / "}
                <Link href={`/products?goal=${goal.slug}`} className="hover:text-royal-600">{goal.label}</Link>
              </>
            ) : null}
            {" / "}
            <span className="text-navy-950">{product.name}</span>
          </nav>
        </Container>
      </div>

      {/* Above the fold */}
      <Container className="py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <ProductImageSlot name={product.name} src={product.image} ratio="aspect-[4/3]" />
            <div className="mt-4 grid grid-cols-3 gap-4">
              {["Vial", "Lifestyle", "Clinician"].map((m) => (
                <ProductImageSlot key={m} name={`${product.name} — ${m}`} ratio="aspect-square" />
              ))}
            </div>
          </div>

          {/* Buy column */}
          <div>
            <Eyebrow>{goal?.label}</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{product.name}</h1>
            {product.aka?.length ? (
              <p className="mt-2 text-slate-500">Also known as {product.aka.join(", ")}</p>
            ) : null}
            <p className="mt-4 text-lg text-slate-500">{product.usedFor}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <RxBadge full />
              <Pill>Licensed U.S. pharmacy</Pill>
              <Pill>Free 2-day delivery</Pill>
            </div>

            {/* Delivery cadence — monthly programs only (GLP-1). The savings is
                on shipping (flat $40/order), not a product discount. */}
            {price.kind === "month" ? (
              <fieldset className="mt-7">
                <legend className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">How often it ships</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {[
                    { id: "m", label: "Monthly", note: "Ships every month", save: null, def: true },
                    { id: "q", label: "Quarterly", note: "One box every 90 days", save: "Save on shipping", def: false },
                    { id: "h", label: "6-month", note: "One box every 6 months", save: "Fewer shipments", def: false },
                  ].map((plan) => (
                    <label
                      key={plan.id}
                      className="group relative cursor-pointer rounded-md border border-line-200 bg-white p-4 transition has-[:checked]:border-royal-600 has-[:checked]:bg-sky-100/50"
                    >
                      <input type="radio" name="plan" defaultChecked={plan.def} className="sr-only" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-navy-950">{plan.label}</span>
                        {plan.save ? (
                          <span className="rounded-full bg-gold-700/15 px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-gold-700">
                            {plan.save}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-xs text-slate-500">{plan.note}</p>
                    </label>
                  ))}
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Shipping is a flat $40 per order, so fewer, larger boxes cost you less. Your
                  clinician determines the right therapy, format and final dosing.
                </p>
              </fieldset>
            ) : null}

            {/* Price + CTA */}
            <div className="mt-6 rounded-xl2 border border-line-200 bg-white p-5">
              <div className="font-mono text-2xl font-medium text-navy-950">{price.short}</div>
              <p className="mt-1 text-xs text-slate-500">
                {price.label}
                {price.kind === "vial" || price.kind === "month"
                  ? " · plus flat $40 shipping per order. Your plan and final price are set with your provider."
                  : ""}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href={signupUrl}>{price.kind === "hold" ? "Join the waitlist" : "Start my assessment"}</Button>
                <Button href="/contact" variant="ghost">Talk to a clinician</Button>
              </div>
            </div>

            <Reassurance
              className="mt-6"
              items={[
                "No clinic visit — your provider reviews everything online",
                "Prescribed only if clinically appropriate for you",
                "Ongoing messaging, dose adjustments and re-testing",
              ]}
            />
          </div>
        </div>
      </Container>

      {/* Benefits */}
      <section className="border-t border-line-200 bg-mist-50">
        <Container className="py-14 sm:py-20">
          <Eyebrow>What it&apos;s for</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold">How {product.name} fits your plan.</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.h} className="rounded-xl2 border border-line-200 bg-white p-5">
                <h3 className="text-base font-bold text-navy-950">{b.h}</h3>
                <p className="mt-2 text-sm text-slate-500">{b.p}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Described by what people use {product.name} for — not a promise of results. It is not
            FDA-approved for the uses described unless your provider tells you otherwise.
          </p>
        </Container>
      </section>

      {/* How it works + what to expect */}
      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold">Four steps to start.</h2>
            <ol className="mt-6 space-y-5">
              {[
                { n: "01", h: "Assessment", p: "Five minutes on your goals and history." },
                { n: "02", h: "Clinician review", p: "A licensed provider reviews your intake and labs where appropriate." },
                { n: "03", h: "Licensed pharmacy", p: "If prescribed, it's prepared and quality-checked." },
                { n: "04", h: "Delivered & tracked", p: "Shipped to your door with ongoing care." },
              ].map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="font-mono text-sm font-medium text-royal-600">{s.n}</span>
                  <div>
                    <h3 className="text-base font-bold text-navy-950">{s.h}</h3>
                    <p className="mt-1 text-sm text-slate-500">{s.p}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <Eyebrow>What to expect</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold">Your first few months.</h2>
            <div className="mt-6 space-y-4">
              {[
                { w: "Weeks 1–4", h: "Start & adjust", p: "Begin your plan and settle in; your provider fine-tunes as needed." },
                { w: "Weeks 4–12", h: "Find your rhythm", p: "Build consistency with check-ins and messaging along the way." },
                { w: "Week 12+", h: "Review & optimize", p: "Re-assess, re-test where appropriate, and optimize your plan." },
              ].map((t) => (
                <div key={t.w} className="rounded-xl2 border border-line-200 bg-white p-5">
                  <span className="font-mono text-xs uppercase tracking-wide text-gold-700">{t.w}</span>
                  <h3 className="mt-1 text-base font-bold text-navy-950">{t.h}</h3>
                  <p className="mt-1 text-sm text-slate-500">{t.p}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Timelines vary by person and plan. Your provider sets expectations for you.
            </p>
          </div>
        </div>
      </Container>

      {/* Biomarkers we monitor */}
      {panel ? (
        <section className="border-t border-line-200 bg-mist-50">
          <Container className="py-14 sm:py-20">
            <div className="flex items-end justify-between gap-4">
              <div>
                <Eyebrow>Lab-informed</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold">Biomarkers we may monitor.</h2>
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Sample data</span>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {panel.map((b) => (
                <BiomarkerRangeBar key={b.name} {...b} />
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Illustrative sample values — not a real patient and not a medical claim. The panel
              your provider orders depends on your plan. Individual results vary.
            </p>
          </Container>
        </section>
      ) : null}

      {/* Details accordions */}
      <Container className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Details</Eyebrow>
          <div className="mt-6 divide-y divide-line-200 border-y border-line-200">
            {[
              {
                q: "Overview",
                a: product.detail
                  ? product.detail
                  : `Full education for ${product.name} is being finalized with our medical team. Start a visit or message us and a licensed provider will walk you through whether it fits your goal.`,
              },
              {
                q: "Important safety information",
                a: "Placeholder — the full safety information and boxed warnings where applicable are added before launch and reviewed by regulatory counsel. Tell your provider about your full medical history and medications.",
              },
              {
                q: "Ingredients & formulation",
                a: "Formulation and sourcing details are provided by the dispensing licensed U.S. pharmacy and confirmed before launch.",
              },
              {
                q: "Shipping & storage",
                a: "Prescribed therapies ship discreetly after clinician approval, with any cold-chain and storage instructions included in your kit.",
              },
            ].map((d) => (
              <details key={d.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-navy-950 [&::-webkit-details-marker]:hidden">
                  {d.q}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-royal-600 transition group-open:rotate-45">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{d.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>

      {/* Related treatments */}
      {related.length ? (
        <section className="border-t border-line-200 bg-mist-50">
          <Container className="py-14 sm:py-20">
            <h2 className="text-2xl font-semibold sm:text-3xl">More in {goal?.label}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group flex flex-col rounded-xl2 border border-line-200 bg-white p-5 shadow-card transition hover:shadow-lift"
                >
                  <ProductImageSlot name={p.name} src={p.image} ratio="aspect-[4/3]" className="mb-4" />
                  <h3 className="text-lg font-bold text-navy-950">{p.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{p.usedFor}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-sm font-medium text-navy-950">{priceFor(p.slug).short}</span>
                    <RxBadge />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <Container className="py-12">
        <div className="mx-auto max-w-3xl">
          <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
        </div>
      </Container>

      {/* Sticky mobile buy bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line-200 bg-white/95 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-[var(--container-content)] items-center justify-between gap-4 px-5 py-3">
          <div>
            <div className="font-mono text-sm font-medium text-navy-950">{price.short}</div>
            <div className="text-[0.65rem] text-slate-500">Set with your provider</div>
          </div>
          <Button href={signupUrl} className="shrink-0">{price.kind === "hold" ? "Join the waitlist" : "Start my assessment"}</Button>
        </div>
      </div>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Treatments", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />
    </article>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line-200 px-2.5 py-1 text-xs font-medium text-slate-500">
      {children}
    </span>
  );
}
