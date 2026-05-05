"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n/config";

/** Syncs `<html lang>` with the URL locale without awaiting headers in the root layout. */
export function LocaleHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
