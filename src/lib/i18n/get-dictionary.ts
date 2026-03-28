import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Locale } from "./config";
import { parseArb } from "./parse-arb";

export type TranslateFn = (key: string) => string;

/**
 * Loads the ARB file for the given locale every call (no cross-request cache)
 * so /en and /sq always resolve to the correct catalog after client navigation.
 */
export async function getDictionary(locale: Locale): Promise<Record<string, string>> {
  const filePath = path.join(process.cwd(), "src/locales", `app_${locale}.arb`);
  const raw = await readFile(filePath, "utf-8");
  return parseArb(raw);
}

export async function getTranslator(locale: Locale): Promise<TranslateFn> {
  const dict = await getDictionary(locale);
  return (key: string) => dict[key] ?? key;
}
