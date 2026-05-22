import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — img2gradient",
  description: "img2gradient privacy policy — learn how we protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-8 text-gray-300 text-sm leading-relaxed">
      <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
      <p className="text-gray-500">Last updated: {new Date().getFullYear()}/05/21</p>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">1. Overview</h2>
        <p>
          img2gradient (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the
          Service&rdquo;) is a client-side tool that processes images entirely in
          your browser. We do not upload, store, or transmit your images to any
          server. This policy explains what information we collect and how it is
          used.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">2. Data We Collect</h2>

        <h3 className="font-medium text-gray-200">2.1 Data we DO NOT collect</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your images — all processing happens locally on your device.</li>
          <li>Personal identification information (name, email, etc.).</li>
          <li>Account credentials — there is no login or registration.</li>
        </ul>

        <h3 className="font-medium text-gray-200">2.2 Data we may collect</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Usage data via cookies and similar technologies</strong> —
            we use Google AdSense to serve advertisements. Google may use
            cookies to serve ads based on your prior visits to this or other
            websites. Google&apos;s use of advertising cookies enables it and
            its partners to serve ads based on your visit to this site and/or
            other sites on the Internet.
          </li>
          <li>
            <strong>Local Storage</strong> — we store a small cache of
            recently-processed image color data in your browser&apos;s
            localStorage to avoid re-processing the same image. This data never
            leaves your device.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">3. Third-Party Services</h2>

        <h3 className="font-medium text-gray-200">3.1 Google AdSense</h3>
        <p>
          We use Google AdSense to display advertisements. Google uses cookies
          to serve ads based on user interests. These cookies do not contain
          personally identifiable information. You can opt out of personalized
          advertising by visiting{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            Google Ads Settings
          </a>
          .
        </p>
        <p>
          Third-party vendors, including Google, use cookies to serve ads based
          on your prior visits. Google&apos;s use of the DoubleClick cookie
          enables it and its partners to serve ads to you. You may opt out of
          the DoubleClick cookie by visiting{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            Google&apos;s Advertising Policy page
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">4. Cookies</h2>
        <p>
          Cookies are small text files stored on your device. We use the
          following types:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Essential cookies</strong> — required for the website to
            function (e.g., storing your cookie consent preference).
          </li>
          <li>
            <strong>Advertising cookies</strong> — set by Google AdSense to
            deliver relevant advertisements and measure ad performance.
          </li>
          <li>
            <strong>Analytics cookies</strong> — set by Google to understand
            ad performance and website usage patterns.
          </li>
        </ul>
        <p>You can disable cookies via your browser settings at any time.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">5. GDPR Compliance</h2>
        <p>
          For users in the European Economic Area (EEA) and the United
          Kingdom, we adhere to the General Data Protection Regulation (GDPR):
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Lawful basis</strong> — we rely on consent for non-essential
            cookies and legitimate interest for essential functionality.
          </li>
          <li>
            <strong>Your rights</strong> — you have the right to access, rectify,
            or delete any personal data we may hold. You also have the right to
            withdraw consent for cookies at any time.
          </li>
          <li>
            <strong>Data retention</strong> — localStorage cache data is kept
            only on your device. You can clear it through your browser settings.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">
          6. CCPA / CPRA Compliance
        </h2>
        <p>
          For California residents, you have the right to know what personal
          information is collected, to opt out of the sale of personal
          information, and to request deletion of your data. Since we do not
          collect, store, or sell personal information, no action is needed. To
          opt out of Google&apos;s personalized advertising, visit{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            Google Ads Settings
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">7. Children&apos;s Privacy</h2>
        <p>
          Our Service is not directed at children under 13. We do not knowingly
          collect personal information from anyone under 13. If you are a parent
          or guardian and believe your child has provided us with personal data,
          please contact us.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated date. Continued use of the Service
          after changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">9. Contact</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us
          through our website.
        </p>
      </section>

      <div className="pt-6">
        <Link href="/" className="text-indigo-400 hover:underline text-sm">
          &larr; Back to img2gradient
        </Link>
      </div>
    </div>
  );
}
