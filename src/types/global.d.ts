export {};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: "enquiry_open" | "enquiry_submit" | "phone_click",
      params: {
        event_category: "engagement" | "lead";
        event_label: string;
        source?: string;
        default_message?: string;
        page_path?: string;
        phone_number?: string;
      },
    ) => void;
  }
}
