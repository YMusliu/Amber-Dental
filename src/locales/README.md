# Locale catalogs (`app_*.arb`)

- `app_sq.arb` — Albanian locale (default URL: `/sq`).
- `app_en.arb` — English locale (`/en`).
- Keys are flat dot-notation strings (e.g. `hero.title`, `pricing.card2.note`). Entries whose keys start with `@` are ARB metadata and are ignored at runtime.
- Add `app_<code>.arb` and register the code in `src/lib/i18n/config.ts` to support more languages.
