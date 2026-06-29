"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { enquiryProductContent } from "@/content/components/siteContent";
import type { Product } from "@/lib/types";
import EnquiryModal from "@/components/EnquiryModal";
import type { EnquiryOpenTrackingParams } from "@/lib/analytics";
import {
  ENQUIRY_MODAL_EVENT,
  type EnquiryModalEventDetail,
} from "@/lib/enquiryModal";

const PAGE_ENQUIRY_PRODUCT_NAMES = [
  {
    path: "/starlink-installation-perth",
    productName: "Starlink Installation",
  },
  {
    path: "/rural-starlink-installation-wa",
    productName: "Starlink Installation",
  },
  {
    path: "/security-cameras-perth",
    productName: "Security Cameras",
  },
  {
    path: "/ajax-security-perth",
    productName: "Ajax Alarm Systems",
  },
  {
    path: "/data-cabling",
    productName: "Data Cabling",
  },
  {
    path: "/tv-antennas-perth",
    productName: "TV Antennas",
  },
] as const;

function getPageEnquiryProductName(pathname: string | null) {
  return PAGE_ENQUIRY_PRODUCT_NAMES.find(
    ({ path }) => pathname === path || pathname?.startsWith(`${path}/`),
  )?.productName;
}

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
  const pathname = usePathname();
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
        createEnquiryProduct(
          productName ||
            getPageEnquiryProductName(pathname) ||
            enquiryProductContent.generalQuoteRequest,
        ),
      );
    };

    window.addEventListener(ENQUIRY_MODAL_EVENT, handleOpenModal);

    return () => {
      window.removeEventListener(ENQUIRY_MODAL_EVENT, handleOpenModal);
    };
  }, [pathname]);

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
