"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/types";
import EnquiryModal from "@/components/EnquiryModal";
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
  const [successRedirectTo, setSuccessRedirectTo] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const handleOpenModal = (event: Event) => {
      const customEvent = event as CustomEvent<EnquiryModalEventDetail>;
      const productName = customEvent.detail?.productName?.trim();
      const redirectTo = customEvent.detail?.redirectTo?.trim();

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
      product={selectedProduct}
      isOpen={selectedProduct !== null}
      onClose={() => {
        setSelectedProduct(null);
        setSuccessRedirectTo(null);
      }}
      onSuccess={
        successRedirectTo
          ? () => {
              const redirectTo = successRedirectTo;
              setSelectedProduct(null);
              setSuccessRedirectTo(null);
              router.push(redirectTo);
            }
          : undefined
      }
    />
  );
}
