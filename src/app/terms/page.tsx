import Link from "next/link";

export const metadata = {
  title: "Terms of Service — img2gradient",
  description: "Terms of Service for img2gradient — usage terms and conditions.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-8 text-gray-300 text-sm leading-relaxed">
      <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
      <p className="text-gray-500">Last updated: {new Date().getFullYear()}/05/21</p>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">1. Acceptance of Terms</h2>
        <p>
          By accessing or using img2gradient (&ldquo;the Service&rdquo;), you
          agree to be bound by these Terms of Service. If you do not agree,
          please do not use the Service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">2. Description of Service</h2>
        <p>
          img2gradient is a free, client-side tool that extracts dominant colors
          from images and generates CSS gradients. All image processing is
          performed locally in your browser — no image data is uploaded to our
          servers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">3. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Use the Service for any unlawful purpose or in violation of any
            applicable laws or regulations.
          </li>
          <li>
            Attempt to disrupt, overload, or impair the Service or its
            infrastructure.
          </li>
          <li>
            Use automated tools (bots, scrapers) to access or interact with the
            Service in a way that imposes unreasonable load.
          </li>
          <li>
            Upload or process images containing illegal content, malware, or any
            material that infringes on third-party rights.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">4. Intellectual Property</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Your content</strong> — you retain all rights to the images
            you upload and the gradients you create. Since processing is
            entirely local, we never possess your images.
          </li>
          <li>
            <strong>Our content</strong> — the Service itself, including its
            code, design, and branding, is owned by us and protected by
            applicable intellectual property laws.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">
          5. Third-Party Advertisements
        </h2>
        <p>
          The Service displays advertisements served by Google AdSense. We are
          not responsible for the content of these advertisements or the
          practices of third-party advertisers. Your interactions with
          advertisements are governed by the respective advertisers&apos;
          policies.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">6. Disclaimer of Warranties</h2>
        <p>
          The Service is provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; without warranties of any kind, either express or
          implied. We do not warrant that the Service will be uninterrupted,
          error-free, or free of harmful components.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">
          7. Limitation of Liability
        </h2>
        <p>
          To the fullest extent permitted by law, we shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages
          arising out of or related to your use of the Service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">8. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes take
          effect upon posting. Your continued use of the Service after changes
          are posted constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the jurisdiction in which we
          operate, without regard to conflict of law principles.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">10. Contact</h2>
        <p>
          For questions about these Terms, please contact us through our
          website.
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
