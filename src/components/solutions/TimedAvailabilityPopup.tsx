"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { enquiryModalContent } from "@/content/components/siteContent";
import {
  trackEnquirySubmit,
  trackHandshakeDecline,
  trackHandshakeTrigger,
} from "@/lib/analytics";
import type { TimedAvailabilityPopup as TimedAvailabilityPopupContent } from "@/components/solutions/types";

const INITIAL_FORM_DATA = {
  name: "",
  contact: "",
  suburb: "",
  preferredDate: "",
  website: "",
};

type TimedAvailabilityPopupProps = {
  content: TimedAvailabilityPopupContent;
};

function getContactPayload(contact: string) {
  const trimmedContact = contact.trim();

  if (!trimmedContact) return null;

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedContact)) {
    return { email: trimmedContact, phone: "" };
  }

  const phoneDigits = trimmedContact.replace(/\D/g, "");
  const hasPhoneCharactersOnly = /^[\d\s()+.-]+$/.test(trimmedContact);

  if (hasPhoneCharactersOnly && phoneDigits.length >= 8) {
    return { email: "", phone: trimmedContact };
  }

  return null;
}

export function TimedAvailabilityPopup({
  content,
}: TimedAvailabilityPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [formStartedAt, setFormStartedAt] = useState(Date.now());
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasTrackedOpenRef = useRef(false);

  useEffect(() => {
    if (!content.enabled || hasDismissed) return;

    timeoutRef.current = setTimeout(() => {
      setFormStartedAt(Date.now());
      setIsOpen(true);
      if (!hasTrackedOpenRef.current) {
        hasTrackedOpenRef.current = true;
        trackHandshakeTrigger();
      }
    }, content.delayAfterLoadMs ?? 20_000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [content.delayAfterLoadMs, content.enabled, hasDismissed]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setHasDismissed(true);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!content.enabled || !isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    setHasDismissed(true);
  };

  const handleKeepBrowsing = () => {
    trackHandshakeDecline();
    handleClose();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const contactPayload = getContactPayload(formData.contact);

    if (!contactPayload) {
      setIsSubmitting(false);
      setStatus({
        type: "error",
        message: enquiryModalContent.contactInvalidError,
      });
      return;
    }

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          suburb: formData.suburb,
          message: `Starlink ${formData.preferredDate}`,
          website: formData.website,
          productName: content.productName ?? "Starlink Installation",
          formStartedAt,
          ...contactPayload,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message: result.error ?? enquiryModalContent.sendError,
        });
        return;
      }

      setStatus({
        type: "success",
        message: enquiryModalContent.successMessage,
      });
      trackEnquirySubmit();
    } catch {
      setStatus({
        type: "error",
        message: enquiryModalContent.sendError,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[998] flex min-h-[100dvh] items-end justify-center bg-slate-950/55 p-4 sm:items-center">
      <div className="w-full max-w-lg rounded-[28px] bg-white p-6 shadow-2xl sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-500">
              Starlink availability
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {content.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              {content.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label={enquiryModalContent.closeLabel}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-700 transition hover:bg-slate-200"
          >
            ×
          </button>
        </div>

        {status.type === "success" ? (
          <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-xl font-bold tracking-tight text-slate-900">
              {enquiryModalContent.successTitle}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {status.message}
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-5 w-full rounded-2xl bg-sky-500 px-5 py-3 text-base font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              {enquiryModalContent.okCta}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
              className="hidden"
              aria-hidden="true"
            />
            <input
              name="name"
              type="text"
              placeholder={enquiryModalContent.placeholders.name}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"
            />
            <input
              name="contact"
              type="text"
              placeholder={enquiryModalContent.placeholders.contact}
              value={formData.contact}
              onChange={handleChange}
              required
              inputMode="email"
              autoComplete="email tel"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"
            />
            <input
              name="suburb"
              type="text"
              placeholder={enquiryModalContent.placeholders.suburb}
              value={formData.suburb}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"
            />
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-slate-700 sm:sr-only">
                Preferred installation date
              </span>
              <input
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-700 outline-none transition focus:border-sky-500"
              />
            </label>

            <p className="text-xs leading-5 text-slate-600">
              {enquiryModalContent.privacyDisclaimerBeforeLink}{" "}
              <Link
                href={enquiryModalContent.privacyPolicyHref}
                className="font-semibold text-sky-600 transition hover:text-sky-700"
              >
                {enquiryModalContent.privacyPolicyLabel}
              </Link>
              {enquiryModalContent.privacyDisclaimerAfterLink}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-sky-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? enquiryModalContent.sendingCta : "Check Availability"}
              </button>
              <button
                type="button"
                onClick={handleKeepBrowsing}
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-sky-500 hover:text-sky-600"
              >
                Keep Browsing
              </button>
            </div>

            {status.type === "error" ? (
              <p className="text-sm text-red-600">{status.message}</p>
            ) : null}
          </form>
        )}
      </div>
    </div>
  );
}
