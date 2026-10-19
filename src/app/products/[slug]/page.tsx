import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Button, Disclaimer, PriceBand, ProductImageSlot } from "@/components/ui";
import { PRODUCTS, getProduct, getGoal } from "@/lib/products";
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
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: `${product.name} — ${product.usedFor} Prescribed by a licensed New Start MD provider after a visit.`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const goal = getGoal(product.goal);

  return (
    <article>
      <section className="border-b border-line glow">
        <Container className="py-14">
          <nav className="text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/products" className="hover:text-volt">
              Products
            </Link>
            {goal ? (
              <>
                {" / "}
                <Link href={`/products?goal=${goal.slug}`} className="hover:text-volt">
                  {goal.label}
                </Link>
              </>
            ) : null}
          </nav>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">{product.name}</h1>
          {product.aka?.length ? (
            <p className="mt-2 text-muted">Also known as {product.aka.join(", ")}</p>
          ) : null}
          <p className="mt-5 max-w-xl text-lg text-bone-soft">{product.usedFor}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={signupUrl}>Start a visit</Button>
            <Button href="/contact" variant="ghost">
              Ask about {product.name}
            </Button>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5 text-bone-soft">
            {product.detail ? (
              <p>{product.detail}</p>
            ) : (
              <p className="rounded-xl2 border border-dashed border-line bg-surface p-6 text-sm text-muted">
                Full education for {product.name} is being finalized with our medical team
                and will appear here. In the meantime, start a visit or ask us anything —
                a licensed provider will walk you through whether it fits your goal.
              </p>
            )}
            <div className="rounded-xl2 border border-line bg-surface p-6">
              <h2 className="text-base font-bold text-bone">How you get it</h2>
              <ol className="mt-3 space-y-2 text-sm">
                <li>1. Start a visit and tell us your goal.</li>
                <li>2. A licensed provider reviews your intake and decides if {product.name} is appropriate.</li>
                <li>3. If prescribed, it ships to your door with guidance.</li>
              </ol>
            </div>
          </div>

          <aside className="space-y-4">
            <ProductImageSlot name={product.name} src={product.image} ratio="aspect-square" />
            <PriceBand />
            <div className="rounded-xl2 border border-line bg-surface p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Category</h2>
              <p className="mt-2 font-bold text-bone">{goal?.label ?? "—"}</p>
              {product.legitScript ? (
                <p className="mt-4 text-xs text-muted">
                  Also available on our LegitScript-certified sister clinic, FitClinicMD.
                </p>
              ) : null}
            </div>
          </aside>
        </div>

        <div className="mt-12 max-w-3xl">
          <Disclaimer>{MEDICAL_DISCLAIMER}</Disclaimer>
        </div>
      </Container>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />
    </article>
  );
}
