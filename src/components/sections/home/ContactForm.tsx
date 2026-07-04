"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDb } from "@/lib/firebase";

type Props = {
  recipientEmail: string;
  formLegend: string;
  nameLabel: string;
  emailLabel: string;
  notesLabel: string;
  submitCta: string;
  sendingCta: string;
  successMessage: string;
  errorMessage: string;
  validationName: string;
  validationEmail: string;
  validationNotes: string;
};

type Status = "idle" | "sending" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inputClass =
  "rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900/10";

export function ContactForm({
  recipientEmail,
  formLegend,
  nameLabel,
  emailLabel,
  notesLabel,
  submitCta,
  sendingCta,
  successMessage,
  errorMessage,
  validationName,
  validationEmail,
  validationNotes,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; notes?: string }>({});

  function validate() {
    const next: typeof errors = {};
    if (!name.trim()) next.name = validationName;
    if (!EMAIL_RE.test(email.trim())) next.email = validationEmail;
    if (!notes.trim()) next.notes = validationNotes;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    // Honeypot: real users never fill this hidden field; bots usually do.
    const trap = (e.currentTarget.elements.namedItem("company") as HTMLInputElement | null)?.value;
    if (trap) {
      setStatus("success"); // pretend success, drop silently
      return;
    }

    if (!validate()) return;

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanNotes = notes.trim();

    setStatus("sending");
    try {
      // Document shape consumed by the Firebase "Trigger Email" extension.
      await addDoc(collection(getDb(), "mail"), {
        to: [recipientEmail],
        replyTo: cleanEmail,
        message: {
          subject: `New website enquiry — ${cleanName}`,
          text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanNotes}`,
          html:
            `<p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>` +
            `<p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>` +
            `<p><strong>Message:</strong></p><p>${escapeHtml(cleanNotes).replace(/\n/g, "<br>")}</p>`,
        },
        name: cleanName,
        email: cleanEmail,
        notes: cleanNotes,
        source: "website-contact-form",
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      setName("");
      setEmail("");
      setNotes("");
      setErrors({});
    } catch (err) {
      console.error("Contact form submission failed", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
      >
        {successMessage}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-3 sm:grid-cols-2">
      <fieldset className="contents" disabled={status === "sending"}>
        <legend className="sr-only">{formLegend}</legend>

        <div className="flex flex-col gap-1">
          <input
            name="name"
            autoComplete="name"
            className={inputClass}
            placeholder={nameLabel}
            aria-label={nameLabel}
            aria-invalid={Boolean(errors.name)}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="text-xs text-red-600">{errors.name}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <input
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder={emailLabel}
            aria-label={emailLabel}
            aria-invalid={Boolean(errors.email)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
        </div>

        <div className="flex flex-col gap-1 sm:col-span-2">
          <textarea
            name="notes"
            className={`${inputClass} min-h-[120px]`}
            placeholder={notesLabel}
            aria-label={notesLabel}
            aria-invalid={Boolean(errors.notes)}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          {errors.notes && <span className="text-xs text-red-600">{errors.notes}</span>}
        </div>

        {/* Honeypot — visually hidden, ignored by humans, tempting to bots. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <button
          type="submit"
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2 sm:w-fit"
        >
          {status === "sending" ? sendingCta : submitCta}
        </button>

        {status === "error" && (
          <p role="alert" className="text-sm text-red-600 sm:col-span-2">
            {errorMessage}
          </p>
        )}
      </fieldset>
    </form>
  );
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
