"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/types";

const INITIAL_FORM_DATA = {
  name: "",
  phone: "",
  email: "",
  suburb: "",
  message: "",
  website: "",
};

type EnquiryModalProps = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function EnquiryModal({
  product,
  isOpen,
  onClose,
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

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!product) return;

    setFormStartedAt(Date.now());
    setStatus({
      type: "idle",
      message: "",
    });
    setFormData({
      ...INITIAL_FORM_DATA,
      message: `Hi, I'm interested in the ${product.name}.`,
    });
  }, [product]);

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
            "We could not send your enquiry right now. Please try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Your enquiry has been sent. We will get back to you shortly.",
      });
      setFormData({
        ...INITIAL_FORM_DATA,
        message: `Hi, I'm interested in the ${product.name}.`,
      });
    } catch {
      setStatus({
        type: "error",
        message: "We could not send your enquiry right now. Please try again.",
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
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-700 transition hover:bg-slate-200"
        >
          ×
        </button>

        <div className="pr-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
            Send an enquiry
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {product.name}
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Fill this out and We&apos;ll get back to you about this service.
            Alternatively you can call 0477 948 079 during business hours
          </p>
        </div>

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
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"
          />

          <input
            name="suburb"
            type="text"
            placeholder="Suburb"
            value={formData.suburb}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-sky-500"
          />

          <textarea
            name="message"
            placeholder="Tell me what you need"
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
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </button>

          {status.type !== "idle" ? (
            <p
              className={
                status.type === "success"
                  ? "text-sm text-green-600"
                  : "text-sm text-red-600"
              }
            >
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
