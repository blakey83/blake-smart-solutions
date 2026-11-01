"use client";

import { EnquiryForm, type EnquiryFormProps } from "@/components/EnquiryForm";

export default function EnquiryModal(props: Omit<EnquiryFormProps, "presentation">) {
  return <EnquiryForm {...props} presentation="modal" />;
}
