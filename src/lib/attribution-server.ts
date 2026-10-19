// Server-side read of the first-party partner-attribution cookie, for use in
// server actions. Kept separate from lib/partners (which is client-safe)
// because next/headers is server-only.

import { cookies } from "next/headers";
import { ATTR_COOKIE, parseAttribution, type Attribution } from "@/lib/partners";

export async function readAttribution(): Promise<Attribution | null> {
  const store = await cookies();
  const raw = store.get(ATTR_COOKIE)?.value;
  return parseAttribution(raw ? decodeURIComponent(raw) : undefined);
}
