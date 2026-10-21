import Link from "next/link";
import { NAV, showSignIn, loginUrl, signupUrl } from "@/lib/site";
import { brand } from "@/config/brand";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-baseline gap-1.5 ${className}`}
      aria-label={`${brand.name} home`}
    >
      {/* Guide §9.3: "New Start" in Cormorant 500 navy-950 + "MD" in Inter 600 gold */}
      <span className="font-display text-2xl font-medium leading-none tracking-tight text-navy-950">
        {brand.wordmark.lead}
      </span>
      <span className="font-sans text-sm font-semibold leading-none tracking-wide text-gold-700">
        {brand.wordmark.suffix}
      </span>
    </Link>
  );
}

export default function Header() {
  return (
    <header
      data-site-header
      className="sticky top-0 z-40 border-b border-line-200/80 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70"
    >
      <div className="mx-auto flex h-16 w-full max-w-[var(--container-content)] items-center justify-between px-5 sm:px-8">
        <Wordmark />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-500 transition hover:text-royal-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {showSignIn ? (
            <a href={loginUrl} className="text-sm font-medium text-slate-500 transition hover:text-navy-950">
              Sign in
            </a>
          ) : null}
          <Link
            href={signupUrl}
            className="inline-flex items-center rounded-full bg-royal-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-royal-700"
          >
            Start now
          </Link>
        </div>

        {/* Mobile disclosure — no JS needed */}
        <details className="relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-line-200 text-navy-950 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="absolute right-0 top-12 w-60 rounded-xl border border-line-200 bg-white p-4 shadow-2xl">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-sky-100 hover:text-royal-600"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={signupUrl}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-royal-600 px-5 py-2 text-sm font-semibold text-white"
              >
                Start now
              </Link>
              {showSignIn ? (
                <a href={loginUrl} className="px-3 py-2 text-sm text-slate-500 hover:text-navy-950">
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
