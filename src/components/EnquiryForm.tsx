"use client";

import { PhoneLink } from "@/components/PhoneLink";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getEnquiryGclid } from "@/lib/adAttribution";
import {
  enquiryModalContent,
  enquiryProductContent,
} from "@/content/components/siteContent";
import type { Product } from "@/lib/types";
import {
  trackEnquiryOpen,
  trackEnquirySubmit,
  type EnquiryOpenTrackingParams,
} from "@/lib/analytics";

const INITIAL_FORM_DATA = {
  name: "",
  contact: "",
  suburb: "",
  message: "",
  website: "",
};

export type EnquiryFormProps = {
  presentation?: "modal" | "inline";
  defaultMessage?: string;
  serviceOptions?: { label: string; value: string }[];
  product: Product | null;
  openTracking?: EnquiryOpenTrackingParams;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
};

const SOLUTION_QUOTE_CONTENT = [
  enquiryModalContent.wifiConnectivityQuote,
  enquiryModalContent.starlinkInstallationQuote,
  enquiryModalContent.ajaxSecurityQuote,
  enquiryModalContent.cctvQuote,
  enquiryModalContent.dataCablingQuote,
  enquiryModalContent.tvAntennaQuote,
];

function getInitialMessage(product: Product) {
  if (SOLUTION_QUOTE_CONTENT.some((content) => content.productNames.includes(product.name))) {
    return "";
  }

  if (product.name === enquiryModalContent.generalQuoteProductName) {
    return enquiryModalContent.generalQuoteMessage;
  }

  return `${enquiryModalContent.productMessagePrefix}${product.name}${enquiryModalContent.productMessageSuffix}`;
}

function getContactPayload(contact: string) {
  const trimmedContact = contact.trim();

  if (!trimmedContact) {
    return null;
  }

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedContact)) {
    return {
      email: trimmedContact,
      phone: "",
    };
  }

  const phoneDigits = trimmedContact.replace(/\D/g, "");
  const hasPhoneCharactersOnly = /^[\d\s()+.-]+$/.test(trimmedContact);

  if (hasPhoneCharactersOnly && phoneDigits.length >= 8) {
    return {
      email: "",
      phone: trimmedContact,
    };
  }

  return null;
}

export function EnquiryForm({
  presentation = "modal",
  defaultMessage,
  serviceOptions,
  product,
  openTracking,
  isOpen,
  onClose,
  onSuccess,
}: EnquiryFormProps) {
  const isInline = presentation === "inline";
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formStartedAt, setFormStartedAt] = useState<number>(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });
  const wasOpenRef = useRef(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const resetForm = useCallback(
    (nextProduct: Product | null) => {
      setFormStartedAt(Date.now());
      setSelectedServices([]);
      setIsSubmitting(false);
      setStatus({
        type: "idle",
        message: "",
      });
      setFormData({
        ...INITIAL_FORM_DATA,
        message: nextProduct
          ? defaultMessage ?? getInitialMessage(nextProduct)
          : "",
      });
    },
    [defaultMessage],
  );

  const handleClose = useCallback(() => {
    if (status.type === "success" && onSuccess) {
      onSuccess();
      return;
    }

    resetForm(isInline ? product : null);
    onClose();
  }, [onClose, onSuccess, resetForm, status.type, isInline, product]);

  useEffect(() => {
    if (!isOpen || isInline) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [handleClose, isOpen, isInline]);

  useEffect(() => {
    if (!product) return;
    resetForm(product);
  }, [product, resetForm]);

  useEffect(() => {
    const didOpen = !wasOpenRef.current && isOpen && product;
    wasOpenRef.current = isOpen;

    if (!didOpen || isInline) return;

    trackEnquiryOpen(openTracking);
  }, [isOpen, openTracking, product, isInline]);

  if (!isOpen || !product) return null;

  const isStarlinkInstallationQuote =
    product.name === enquiryProductContent.starlinkInstallation;
  const tailoredQuoteContent = SOLUTION_QUOTE_CONTENT.find(
    (content) => content.productNames.includes(product.name),
  );
  const modalTitle = serviceOptions ? "How can we help?" : tailoredQuoteContent?.title ?? product.name;
  const modalIntro = tailoredQuoteContent?.intro ?? enquiryModalContent.intro;
  const messagePlaceholder =
    tailoredQuoteContent?.messagePlaceholder ??
    enquiryModalContent.placeholders.message;
  const submitCta =
    tailoredQuoteContent?.submitCta ?? enquiryModalContent.submitCta;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatus({
      type: "idle",
      message: "",
    });

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gclid: getEnquiryGclid(),
          ...formData,
          ...contactPayload,
          productName: selectedServices.length ? selectedServices.join(", ") : product.name,
          formStartedAt,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message:
            result.error ??
            enquiryModalContent.sendError,
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
    <div className={isInline ? "w-full text-slate-900" : "fixed inset-0 z-[999] flex min-h-[100dvh] items-start justify-center overflow-y-auto bg-slate-950/70 p-4 pt-20 md:items-center md:pt-4"}>
      <div className={`relative w-full max-w-xl rounded-[28px] bg-white shadow-2xl ${isInline ? "border border-slate-200 p-5 sm:p-6" : "p-6 sm:p-8"}`}>
        {!isInline ? <button
          type="button"
          onClick={handleClose}
          aria-label={enquiryModalContent.closeLabel}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-700 transition hover:bg-slate-200"
        >
          ×
        </button> : null}

        <div className={isInline ? "" : "pr-10"}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
            {enquiryModalContent.eyebrow}
          </p>
          <h2 className={`mt-2 font-bold tracking-tight text-slate-900 ${isInline ? "text-2xl" : "text-3xl"}`}>
            {modalTitle}
          </h2>
          <p className={isInline ? "mt-2 text-sm leading-5 text-slate-600" : "mt-3 text-base leading-7 text-slate-600"}>
            {modalIntro}
          </p>
          <div className={isInline ? "mt-3 flex flex-wrap items-center gap-x-3 gap-y-1" : "mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"}>
            <p className="text-sm font-semibold text-slate-900">
              {enquiryModalContent.preferPrompt}
            </p>
            <div className={isInline ? "flex" : "mt-3 flex flex-col gap-2 sm:flex-row"}>
              <PhoneLink
                href="tel:0477948079"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 transition hover:border-sky-500 hover:text-sky-600"
              >
                {enquiryModalContent.callCta}
              </PhoneLink>
            </div>
          </div>
        </div>

        {status.type === "success" ? (
          <div role="status" className="mt-8 rounded-[24px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              {enquiryModalContent.successTitle}
            </h3>
            <p className={isInline ? "mt-2 text-sm leading-5 text-slate-600" : "mt-3 text-base leading-7 text-slate-600"}>
              {status.message}
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 w-full rounded-2xl bg-sky-500 px-6 py-4 text-lg font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              {enquiryModalContent.okCta}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={isInline ? "mt-4 grid grid-cols-1 gap-3 text-slate-900 sm:grid-cols-2" : "mt-8 space-y-4 text-slate-900"}>
            {serviceOptions ? (
              <select
                name="service"
                aria-label="Service you're interested in (optional)"
                value={selectedServices[0] ?? ""}
                onChange={(event) => setSelectedServices(event.target.value ? [event.target.value] : [])}
                className="sm:col-span-2 min-w-0 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-sky-500"
              >
                <option value="">Choose a service (optional)</option>
                {serviceOptions.map(({ label, value }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            ) : null}
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
              aria-label={enquiryModalContent.placeholders.name}
              placeholder={enquiryModalContent.placeholders.name}
              value={formData.name}
              onChange={handleChange}
              required
              className={isInline ? "min-w-0 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-sky-500" : "w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"}
            />

            <input
              name="contact"
              type="text"
              aria-label={enquiryModalContent.placeholders.contact}
              placeholder={enquiryModalContent.placeholders.contact}
              value={formData.contact}
              onChange={handleChange}
              required
              inputMode="email"
              autoComplete="email tel"
              className={isInline ? "min-w-0 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-sky-500" : "w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"}
            />

            <input
              name="suburb"
              type="text"
              aria-label={enquiryModalContent.placeholders.suburb}
              placeholder={enquiryModalContent.placeholders.suburb}
              value={formData.suburb}
              onChange={handleChange}
              className={isInline ? "sm:col-span-2 min-w-0 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-sky-500" : "w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"}
            />

            <textarea
              name="message"
              aria-label={enquiryModalContent.placeholders.message}
              placeholder={messagePlaceholder}
              value={formData.message}
              onChange={handleChange}
              rows={isInline ? 2 : 5}
              required={!isStarlinkInstallationQuote}
              className={isInline ? "sm:col-span-2 min-w-0 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-sky-500" : "w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"}
            />

            <p className={isInline ? "sm:col-span-2 text-xs leading-5 text-slate-600" : "text-sm leading-6 text-slate-600"}>
              {enquiryModalContent.privacyDisclaimerBeforeLink}{" "}
              <Link
                href={enquiryModalContent.privacyPolicyHref}
                className="font-semibold text-sky-600 transition hover:text-sky-700"
              >
                {enquiryModalContent.privacyPolicyLabel}
              </Link>
              {enquiryModalContent.privacyDisclaimerAfterLink}
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-2xl bg-sky-500 px-6 font-semibold text-slate-950 transition hover:bg-sky-400 ${isInline ? "sm:col-span-2 min-h-11 py-2.5 text-base" : "py-4 text-lg"}`}
            >
              {isSubmitting
                ? enquiryModalContent.sendingCta
                : submitCta}
            </button>

            {status.type === "error" ? (
              <p role="alert" className={`text-sm text-red-600 ${isInline ? "sm:col-span-2" : ""}`}>{status.message}</p>
            ) : null}
          </form>
        )}
      </div>
    </div>
  );
}
