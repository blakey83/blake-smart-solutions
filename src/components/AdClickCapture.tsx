"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getEnquiryGclid } from "@/lib/adAttribution";

export function AdClickCapture() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    getEnquiryGclid();
  }, [pathname, searchParams]);

  return null;
}
