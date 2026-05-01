export const ENQUIRY_MODAL_EVENT = "bss:open-enquiry-modal";

export type EnquiryModalOptions = {
  defaultMessage?: string;
  redirectTo?: string;
  tracking?: {
    source?: string;
    default_message?: string;
  };
};

export type EnquiryModalEventDetail = {
  defaultMessage?: string;
  productName?: string;
  redirectTo?: string;
  tracking?: {
    source?: string;
    default_message?: string;
  };
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
        defaultMessage: options.defaultMessage,
        productName,
        redirectTo: options.redirectTo,
        tracking: options.tracking,
      } satisfies EnquiryModalEventDetail,
    }),
  );
}
