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

export function trackClickToCall() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "click_to_call", {
    event_category: "lead",
    event_label: "WiFi Problems Perth call button clicked",
    page_path: "/wifi-problems-perth",
    phone_number: "0477948079",
  });
}
