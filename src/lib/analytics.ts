export function trackEnquiryOpen() {
  window.gtag?.("event", "enquiry_open", {
    event_category: "engagement",
    event_label: "Enquiry modal opened",
  });
}

export function trackEnquirySubmit() {
  window.gtag?.("event", "enquiry_submit", {
    event_category: "lead",
    event_label: "Enquiry form submitted",
  });
}
