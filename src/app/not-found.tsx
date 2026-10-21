import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="glow">
      <Container className="py-28 text-center">
        <div className="font-display text-7xl font-semibold text-royal-600">404</div>
        <h1 className="mt-4 text-2xl font-semibold">This page took a rest day.</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-slate-500">
          The page you&apos;re after isn&apos;t here. Let&apos;s get you moving again.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Home</Button>
          <Button href="/products" variant="ghost">
            Browse products
          </Button>
        </div>
      </Container>
    </section>
  );
}
