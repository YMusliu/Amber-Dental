/**
 * Parses ARB-style JSON: drops @@locale and @metadata keys; keeps only string entries.
 */
export function parseArb(raw: string): Record<string, string> {
  const obj = JSON.parse(raw) as Record<string, unknown>;
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith("@")) continue;
    if (typeof value === "string") out[key] = value;
  }
  return out;
}
