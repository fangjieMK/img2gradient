"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "img2gradient_cookie_consent";
const PUBLISHER_ID = "ca-pub-8366908512129463";
const AD_SLOT = "3969509099";

export default function GoogleAd() {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const v = localStorage.getItem(CONSENT_KEY);
    setConsent(v === "accepted");
  }, []);

  // Push ads only after consent is confirmed
  useEffect(() => {
    if (consent) {
      try {
        (window as any).adsbygoogle?.push({});
      } catch {
        /* ignore */
      }
    }
  }, [consent]);

  if (consent === null) {
    return (
      <div className="mt-auto mx-auto max-w-4xl w-full px-4 pb-8 text-center">
        <div className="bg-white/[0.02] border border-gray-800 rounded-xl p-6">
          <span className="text-xs text-gray-600 tracking-wide uppercase">
            Advertisement
          </span>
        </div>
      </div>
    );
  }

  if (!consent) {
    return (
      <div className="mt-auto mx-auto max-w-4xl w-full px-4 pb-8 text-center">
        <div className="bg-white/[0.02] border border-gray-800 rounded-xl p-6">
          <span className="text-xs text-gray-600 tracking-wide uppercase">
            Advertisement
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-auto mx-auto max-w-4xl w-full px-4 pb-8 text-center">
      <div className="bg-white/[0.02] border border-gray-800 rounded-xl p-6">
        <span className="text-xs text-gray-600 tracking-wide uppercase mb-2 block">
          Advertisement
        </span>

        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={PUBLISHER_ID}
          data-ad-slot={AD_SLOT}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
