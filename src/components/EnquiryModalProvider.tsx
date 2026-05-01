"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/types";
import EnquiryModal from "@/components/EnquiryModal";
import type { EnquiryOpenTrackingParams } from "@/lib/analytics";
import {
  ENQUIRY_MODAL_EVENT,
  type EnquiryModalEventDetail,
} from "@/lib/enquiryModal";

function createEnquiryProduct(productName: string): Product {
  return {
    name: productName,
    description: "",
    price: "",
    features: [],
  };
}

export function EnquiryModalProvider() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [defaultMessage, setDefaultMessage] = useState<string | null>(null);
  const [openTracking, setOpenTracking] =
    useState<EnquiryOpenTrackingParams | null>(null);
  const [successRedirectTo, setSuccessRedirectTo] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const handleOpenModal = (event: Event) => {
      const customEvent = event as CustomEvent<EnquiryModalEventDetail>;
      const defaultMessage = customEvent.detail?.defaultMessage?.trim();
      const productName = customEvent.detail?.productName?.trim();
      const redirectTo = customEvent.detail?.redirectTo?.trim();

      setDefaultMessage(defaultMessage || null);
      setOpenTracking(customEvent.detail?.tracking ?? null);
      setSuccessRedirectTo(redirectTo || null);
      setSelectedProduct(
        createEnquiryProduct(productName || "General Quote Request"),
      );
    };

    window.addEventListener(ENQUIRY_MODAL_EVENT, handleOpenModal);

    return () => {
      window.removeEventListener(ENQUIRY_MODAL_EVENT, handleOpenModal);
    };
  }, []);

  return (
    <EnquiryModal
      defaultMessage={defaultMessage ?? undefined}
      product={selectedProduct}
      openTracking={openTracking ?? undefined}
      isOpen={selectedProduct !== null}
      onClose={() => {
        setDefaultMessage(null);
        setOpenTracking(null);
        setSelectedProduct(null);
        setSuccessRedirectTo(null);
      }}
      onSuccess={
        successRedirectTo
          ? () => {
              const redirectTo = successRedirectTo;
              setDefaultMessage(null);
              setOpenTracking(null);
              setSelectedProduct(null);
              setSuccessRedirectTo(null);
              router.push(redirectTo);
            }
          : undefined
      }
    />
  );
}
