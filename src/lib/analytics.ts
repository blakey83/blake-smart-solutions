export type EnquiryOpenTrackingParams = {
  source?: string;
  default_message?: string;
};

export function trackEnquiryOpen(params: EnquiryOpenTrackingParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "enquiry_open", {
    event_category: "engagement",
    event_label: "Enquiry modal opened",
    ...params,
  });
}

export function trackEnquirySubmit() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "enquiry_submit", {
    event_category: "lead",
    event_label: "Enquiry form submitted",
  });
}

export function trackPhoneClick() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "phone_click", {
    event_category: "lead",
    event_label: "Phone call CTA clicked",
  });
}
