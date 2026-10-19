import Link from "next/link";
import { NAV, showSignIn, loginUrl, signupUrl } from "@/lib/site";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-baseline gap-1 ${className}`} aria-label="New Start MD home">
      <span className="font-display text-lg font-extrabold uppercase tracking-tight text-bone">
        New Start
      </span>
      <span className="font-display text-lg font-extrabold uppercase tracking-tight text-volt">MD</span>
    </Link>
  );
}

export default function Header() {
  return (
    <header
      data-site-header
      className="sticky top-0 z-40 border-b border-line/80 bg-ink/85 backdrop-blur supports-[backdrop-filter]:bg-ink/70"
    >
      <div className="mx-auto flex h-16 w-full max-w-[var(--container-content)] items-center justify-between px-5 sm:px-8">
        <Wordmark />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-bone-soft transition hover:text-volt"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {showSignIn ? (
            <a href={loginUrl} className="text-sm font-medium text-muted transition hover:text-bone">
              Sign in
            </a>
          ) : null}
          <Link
            href={signupUrl}
            className="inline-flex items-center rounded-full bg-volt px-5 py-2 text-sm font-semibold text-volt-ink transition hover:bg-volt-deep"
          >
            Start now
          </Link>
        </div>

        {/* Mobile disclosure — no JS needed */}
        <details className="relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-line text-bone [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="absolute right-0 top-12 w-60 rounded-xl border border-line bg-surface p-4 shadow-2xl">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-bone-soft hover:bg-surface-2 hover:text-volt"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={signupUrl}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-volt px-5 py-2 text-sm font-semibold text-volt-ink"
              >
                Start now
              </Link>
              {showSignIn ? (
                <a href={loginUrl} className="px-3 py-2 text-sm text-muted hover:text-bone">
                  Sign in
                </a>
              ) : null}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
