"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { enquiryModalContent } from "@/content/siteContent";
import type { Product } from "@/lib/types";
import {
  trackPhoneClick,
  trackEnquiryOpen,
  trackEnquirySubmit,
  type EnquiryOpenTrackingParams,
} from "@/lib/analytics";

const INITIAL_FORM_DATA = {
  name: "",
  phone: "",
  email: "",
  suburb: "",
  message: "",
  website: "",
};

type EnquiryModalProps = {
  defaultMessage?: string;
  product: Product | null;
  openTracking?: EnquiryOpenTrackingParams;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
};

function getInitialMessage(product: Product) {
  if (product.name === enquiryModalContent.generalQuoteProductName) {
    return enquiryModalContent.generalQuoteMessage;
  }

  return `${enquiryModalContent.productMessagePrefix}${product.name}${enquiryModalContent.productMessageSuffix}`;
}

export default function EnquiryModal({
  defaultMessage,
  product,
  openTracking,
  isOpen,
  onClose,
  onSuccess,
}: EnquiryModalProps) {
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

  const resetForm = useCallback(
    (nextProduct: Product | null) => {
      setFormStartedAt(Date.now());
      setIsSubmitting(false);
      setStatus({
        type: "idle",
        message: "",
      });
      setFormData({
        ...INITIAL_FORM_DATA,
        message: nextProduct
          ? defaultMessage || getInitialMessage(nextProduct)
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

    resetForm(null);
    onClose();
  }, [onClose, onSuccess, resetForm, status.type]);

  useEffect(() => {
    if (!isOpen) return;

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
  }, [handleClose, isOpen]);

  useEffect(() => {
    if (!product) return;
    resetForm(product);
  }, [product, resetForm]);

  useEffect(() => {
    const didOpen = !wasOpenRef.current && isOpen && product;
    wasOpenRef.current = isOpen;

    if (!didOpen) return;

    trackEnquiryOpen(openTracking);
  }, [isOpen, openTracking, product]);

  if (!isOpen || !product) return null;

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
    setIsSubmitting(true);
    setStatus({
      type: "idle",
      message: "",
    });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          productName: product.name,
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
    <div className="fixed inset-0 z-[999] flex min-h-[100dvh] items-start justify-center overflow-y-auto bg-slate-950/70 p-4 pt-20 md:items-center md:pt-4">
      <div className="relative w-full max-w-xl rounded-[28px] bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={handleClose}
          aria-label={enquiryModalContent.closeLabel}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-700 transition hover:bg-slate-200"
        >
          ×
        </button>

        <div className="pr-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
            {enquiryModalContent.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {product.name}
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            {enquiryModalContent.intro}
          </p>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">
              {enquiryModalContent.preferPrompt}
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <a
                href="tel:0477948079"
                onClick={trackPhoneClick}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 transition hover:border-sky-500 hover:text-sky-600"
              >
                {enquiryModalContent.callCta}
              </a>
              <a
                href="sms:0477948079"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 transition hover:border-sky-500 hover:text-sky-600"
              >
                {enquiryModalContent.smsCta}
              </a>
            </div>
          </div>
        </div>

        {status.type === "success" ? (
          <div className="mt-8 rounded-[24px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              {enquiryModalContent.successTitle}
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
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
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
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
              name="phone"
              type="tel"
              placeholder={enquiryModalContent.placeholders.phone}
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"
            />

            <input
              name="email"
              type="email"
              placeholder={enquiryModalContent.placeholders.email}
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"
            />

            <input
              name="suburb"
              type="text"
              placeholder={enquiryModalContent.placeholders.suburb}
              value={formData.suburb}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"
            />

            <textarea
              name="message"
              placeholder={enquiryModalContent.placeholders.message}
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-sky-500 px-6 py-4 text-lg font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              {isSubmitting
                ? enquiryModalContent.sendingCta
                : enquiryModalContent.submitCta}
            </button>

            {status.type === "error" ? (
              <p className="text-sm text-red-600">{status.message}</p>
            ) : null}
          </form>
        )}
      </div>
    </div>
  );
}
