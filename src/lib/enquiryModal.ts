export const ENQUIRY_MODAL_EVENT = "bss:open-enquiry-modal";

export type EnquiryModalOptions = {
  redirectTo?: string;
};

export type EnquiryModalEventDetail = {
  productName?: string;
  redirectTo?: string;
};

export function openEnquiryModal(
  productName = "General Quote Request",
  options: EnquiryModalOptions = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent(ENQUIRY_MODAL_EVENT, {
      detail: {
        productName,
        redirectTo: options.redirectTo,
      } satisfies EnquiryModalEventDetail,
    }),
  );
}
