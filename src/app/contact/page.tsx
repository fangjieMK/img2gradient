import Link from "next/link";

export const metadata = {
  title: "Contact — img2gradient",
  description: "Get in touch with the img2gradient team.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-8 text-gray-300 text-sm leading-relaxed">
      <h1 className="text-3xl font-bold text-white">Contact</h1>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">Get in Touch</h2>
        <p>
          Have questions, feedback, or feature requests? We would love to hear
          from you.
        </p>
        <div className="bg-white/[0.03] border border-gray-700/60 rounded-xl p-6 space-y-3">
          <div>
            <span className="text-gray-500">Email: </span>
            <a
              href="mailto:fangjiezw@163.com"
              className="text-indigo-400 hover:underline"
            >
              fangjiezw@163.com
            </a>
          </div>
          <div>
            <span className="text-gray-500">Response time: </span>
            <span className="text-gray-300">Usually within 24 hours</span>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">Business Inquiries</h2>
        <p>
          For advertising partnerships, sponsored placements, or other business
          opportunities, please reach out via email with &ldquo;Business
          Inquiry&rdquo; in the subject line.
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
