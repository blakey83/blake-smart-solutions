"use client";

import Script from "next/script";
import { useRef } from "react";

const pixelId = "1552625626159730";

export function WifiMetaPixel() {
  const hasTrackedPageView = useRef(false);

  return (
    <>
      <Script
        id="wifi-meta-pixel"
        strategy="afterInteractive"
        onReady={() => {
          const fbq = (window as Window & {
            fbq?: (...args: string[]) => void;
          }).fbq;

          if (fbq && !hasTrackedPageView.current) {
            // onReady also runs when returning through client-side navigation.
            fbq("trackSingle", pixelId, "PageView");
            hasTrackedPageView.current = true;
          }
        }}
      >
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
        `}
      </Script>
      <noscript>
        {/* This tracking beacon must use the original, unoptimized URL. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
