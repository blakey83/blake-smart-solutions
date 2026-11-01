"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { EnquiryForm } from "@/components/EnquiryForm";
import { enquiryProductContent } from "@/content/components/siteContent";
import { getPageEnquiryProductName } from "@/lib/enquiryProduct";

const handleClose = () => {};

export function HeroEnquiryForm({ productName, defaultMessage, serviceOptions }: {
  productName?: string;
  defaultMessage?: string;
  serviceOptions?: { label: string; value: string }[];
}) {
  const pathname = usePathname();
  const resolvedName = productName?.trim() || getPageEnquiryProductName(pathname) || enquiryProductContent.generalQuoteRequest;
  const product = useMemo(() => ({
    name: resolvedName,
    description: "",
    features: [],
  }), [resolvedName]);

  return (
    <EnquiryForm
      presentation="inline"
      product={product}
      defaultMessage={defaultMessage}
      serviceOptions={serviceOptions}
      isOpen
      onClose={handleClose}
    />
  );
}
