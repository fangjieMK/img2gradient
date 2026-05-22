"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "img2gradient_cookie_consent";

// Replace with your real Google AdSense publisher ID after approval.
// Format: ca-pub-XXXXXXXXXXXXXXXX
const PUBLISHER_ID = "ca-pub-8366908512129463";

// Replace with your real ad unit slot ID.
const AD_SLOT = "xxxxxxxxxx";

/**
 * Google AdSense ad unit that respects user consent.
 *
 * - Only loads the AdSense script and renders ads after the user
 *   has accepted cookies via the consent banner.
 * - If consent is declined, a minimal non-functional placeholder is shown.
 */
export default function GoogleAd() {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const v = localStorage.getItem(CONSENT_KEY);
    setConsent(v === "accepted");
  }, []);

  useEffect(() => {
    if (!consent) return;

    // Dynamically load the AdSense script only after consent
    const scriptId = "google-adsense-script";
    if (document.getElementById(scriptId)) {
      // Script already loaded — push the ad command
      try {
        (window as any).adsbygoogle?.push({});
      } catch {
        /* ignore */
      }
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUBLISHER_ID}`;
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    // Push after script is appended
    script.onload = () => {
      try {
        (window as any).adsbygoogle?.push({});
      } catch {
        /* ignore */
      }
    };
  }, [consent]);

  // Don't render anything until we know consent status
  if (consent === null) return null;

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
