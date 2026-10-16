"use client";

import { Children, cloneElement, isValidElement, useSyncExternalStore, type ReactNode } from "react";

function subscribe(listener: () => void) {
  window.addEventListener("bss:forwarding-number", listener);
  return () => window.removeEventListener("bss:forwarding-number", listener);
}

// The inline callback may run before any PhoneLink mounts. Keep its result for
// later mounts/navigation, with the original number used for SSR and hydration.
export function useForwardingNumber() {
  return useSyncExternalStore(subscribe, () => window.bssForwardingNumber, () => undefined);
}

export function isBusinessPhone(href: string) {
  return /^tel:/i.test(href) && ["0477948079", "+61477948079"].includes(href.slice(4).replace(/[\s()-]/g, ""));
}

export function forwardingText(children: ReactNode, formatted: string): ReactNode {
  return Children.map(children, child => {
    if (typeof child === "string") return child.replace(/0477\s*948\s*079/g, formatted);
    if (isValidElement<{ children?: ReactNode }>(child) && typeof child.type === "string" && child.props.children !== undefined) {
      return cloneElement(child, {}, forwardingText(child.props.children, formatted));
    }
    return child;
  });
}
