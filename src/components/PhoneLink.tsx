"use client";

import { trackPhoneClick } from "@/lib/analytics";

type PhoneLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function PhoneLink({ onClick, ...props }: PhoneLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackPhoneClick();
        onClick?.(event);
      }}
    />
  );
}
