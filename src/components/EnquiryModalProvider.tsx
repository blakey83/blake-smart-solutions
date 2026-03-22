"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/types";
import EnquiryModal from "@/components/EnquiryModal";
import { ENQUIRY_MODAL_EVENT } from "@/lib/enquiryModal";

function createEnquiryProduct(productName: string): Product {
  return {
    name: productName,
    description: "",
    price: "",
    features: [],
  };
}

export function EnquiryModalProvider() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const handleOpenModal = (event: Event) => {
      const customEvent = event as CustomEvent<{ productName?: string }>;
      const productName = customEvent.detail?.productName?.trim();

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
      onClose={() => setSelectedProduct(null)}
    />
  );
}
