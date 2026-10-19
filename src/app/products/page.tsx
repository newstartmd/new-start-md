import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Button, Disclaimer, PriceBand, ProductImageSlot } from "@/components/ui";
import { GOALS, PRODUCTS, BLENDS, getGoal } from "@/lib/products";
import { signupUrl } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The full New Start MD line — weight loss, hormone therapy, recovery, longevity and more. Prescribed by licensed providers after a visit.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ goal?: string }>;
}) {
  const { goal: goalParam } = await searchParams;
  const activeGoal = goalParam ? getGoal(goalParam) : undefined;

  const goalsToShow = activeGoal ? [activeGoal] : GOALS;

  return (
    <>
      <section className="border-b border-line glow">
        <Container className="py-16">
          <Eyebrow>The full line</Eyebrow>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Products</h1>
          <p className="mt-4 max-w-xl text-bone-soft">
            Everything we carry, grouped by what you want to change. A licensed provider
            decides what is right for you after a visit — nothing here is sold over the counter.
          </p>

          <PriceBand className="mt-8 max-w-xl" />

          {/* Goal filter */}
          <div className="mt-8 flex flex-wrap gap-2">
            <FilterPill href="/products" active={!activeGoal}>
              All
            </FilterPill>
            {GOALS.map((g) => (
              <FilterPill key={g.slug} href={`/products?goal=${g.slug}`} active={activeGoal?.slug === g.slug}>
                {g.label}
              </FilterPill>
            ))}
          </div>
        </Container>
      </section>

      {goalsToShow.map((goal) => {
        const singles = PRODUCTS.filter((p) => p.goal === goal.slug);
        const blends = BLENDS.filter((b) => b.goal === goal.slug);
        if (singles.length === 0 && blends.length === 0) return null;
        return (
          <Section key={goal.slug} id={goal.slug}>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold sm:text-3xl">{goal.label}</h2>
                <p className="mt-1 text-sm text-muted">{goal.tagline}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {singles.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group rounded-xl2 border border-line bg-surface p-6 transition hover:border-volt"
                >
                  <ProductImageSlot name={p.name} src={p.image} className="mb-4" />
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-bone">{p.name}</h3>
                    {p.legitScript ? (
                      <span className="rounded-full border border-line px-2 py-0.5 text-[0.6rem] uppercase tracking-wide text-muted">
                        Also on FitClinicMD
                      </span>
                    ) : null}
                  </div>
                  {p.aka?.length ? (
                    <p className="mt-1 text-xs text-muted">{p.aka.join(" · ")}</p>
                  ) : null}
                  <p className="mt-3 text-sm text-bone-soft">{p.usedFor}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-volt opacity-0 transition group-hover:opacity-100">
                    Details →
                  </span>
                </Link>
              ))}

              {blends.map((b) => (
                <div key={b.slug} className="rounded-xl2 border border-line bg-surface p-6">
                  <ProductImageSlot name={b.name} src={b.image} className="mb-4" />
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-bone">{b.name}</h3>
                    <span className="rounded-full bg-ember/15 px-2 py-0.5 text-[0.6rem] uppercase tracking-wide text-ember">
                      Blend
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted">{b.components.join(" + ")}</p>
                  <p className="mt-3 text-sm text-bone-soft">{b.usedFor}</p>
                </div>
              ))}
            </div>
          </Section>
        );
      })}

      <section className="border-t border-line">
        <Container className="py-16">
          <div className="rounded-xl2 border border-line bg-surface p-8 text-center">
            <h2 className="text-2xl font-extrabold">Not sure where to start?</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted">
              Tell us your goal and a licensed provider will point you to the right plan.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button href={signupUrl}>Start now</Button>
              <Button href="/contact" variant="ghost">
                Ask a question
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
          </div>
        </Container>
      </section>
    </>
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
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
        active
          ? "border-volt bg-volt text-volt-ink"
          : "border-line text-bone-soft hover:border-volt hover:text-volt"
      }`}
    >
      {children}
    </Link>
  );
}
