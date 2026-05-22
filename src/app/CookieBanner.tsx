"use client";

import { useState, useEffect, useCallback } from "react";

const CONSENT_KEY = "img2gradient_cookie_consent";

type Consent = "accepted" | "declined" | null;

function getStoredConsent(): Consent {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(CONSENT_KEY);
  if (v === "accepted" || v === "declined") return v;
  return null;
}

function storeConsent(value: Consent) {
  localStorage.setItem(CONSENT_KEY, value ?? "");
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setConsent(getStoredConsent());
    setMounted(true);
  }, []);

  const accept = useCallback(() => {
    storeConsent("accepted");
    setConsent("accepted");
  }, []);

  const decline = useCallback(() => {
    storeConsent("declined");
    setConsent("declined");
  }, []);

  if (!mounted || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#070a13]/95 backdrop-blur-sm border-t border-gray-800 px-4 py-4 shadow-2xl"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-xs text-gray-400 leading-relaxed">
          <p>
            We use cookies and similar technologies to display personalized
            advertisements via Google AdSense and to analyze traffic. By
            clicking &ldquo;Accept&rdquo;, you consent to our use of cookies.
            You can withdraw consent at any time.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <a
            href="/privacy"
            className="px-3 py-1.5 rounded-lg text-xs text-gray-400 border border-gray-700 hover:bg-gray-800 transition-colors"
          >
            Learn more
          </a>
          <button
            type="button"
            onClick={decline}
            className="px-3 py-1.5 rounded-lg text-xs text-gray-400 border border-gray-700 hover:bg-gray-800 transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-4 py-1.5 rounded-lg text-xs font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
