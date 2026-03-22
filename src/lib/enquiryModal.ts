export const ENQUIRY_MODAL_EVENT = "bss:open-enquiry-modal";

export function openEnquiryModal(productName = "General Quote Request") {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent(ENQUIRY_MODAL_EVENT, {
      detail: { productName },
    }),
  );
}
