import Link from "next/link";
import { SITE, FOOTER_NAV } from "@/lib/site";
import { MEDICAL_DISCLAIMER } from "@/lib/legal";
import { Wordmark } from "@/components/Header";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-site-footer className="mt-auto border-t border-line-200 bg-white">
      <div className="mx-auto w-full max-w-[var(--container-content)] px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm text-slate-500">{SITE.blurb}</p>
            <p className="mt-4 text-sm text-slate-500">
              Partners:{" "}
              <a href={`mailto:${SITE.partnerEmail}`} className="text-slate-500 hover:text-royal-600">
                {SITE.partnerEmail}
              </a>
            </p>
          </div>

          {FOOTER_NAV.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-500 transition hover:text-royal-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-line-200 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-slate-500">{MEDICAL_DISCLAIMER}</p>
          <p className="mt-4 text-xs text-slate-500">
            © {year} {SITE.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
