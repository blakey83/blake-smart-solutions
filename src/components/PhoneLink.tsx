"use client";

import { forwardingText, isBusinessPhone, useForwardingNumber } from "@/lib/phoneForwarding";
import { trackPhoneClick } from "@/lib/analytics";

type PhoneLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function PhoneLink({ onClick, href, children, ...props }: PhoneLinkProps) {
  const number = useForwardingNumber();
  const forwarding = isBusinessPhone(href) ? number : undefined;
  return (
    <a
      {...props}
      href={forwarding ? `tel:${forwarding.mobile}` : href}
      onClick={(event) => {
        trackPhoneClick();
        onClick?.(event);
      }}
    >
      {forwarding ? forwardingText(children, forwarding.formatted) : children}
    </a>
  );
}
