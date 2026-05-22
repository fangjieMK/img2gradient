import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "./CookieBanner";
import NavBar from "./NavBar";

export const metadata: Metadata = {
  title: "img2gradient - Image to CSS Gradient Generator",
  description:
    "Free online tool to extract dominant colors from any image and generate production-ready CSS gradients. 100% client-side, privacy-first, no uploads needed.",
  keywords: [
    "image to gradient",
    "CSS gradient generator",
    "extract colors from image",
    "color palette extractor",
    "linear gradient",
    "radial gradient",
    "gradient CSS",
  ],
  authors: [{ name: "img2gradient" }],
  openGraph: {
    title: "img2gradient - Image to CSS Gradient Generator",
    description:
      "Extract dominant colors from any image and turn them into beautiful CSS gradients — all in your browser.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0b0f19] text-gray-100 min-h-screen flex flex-col antialiased selection:bg-indigo-500 selection:text-white">
        <NavBar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>

        <footer className="border-t border-gray-800 bg-[#070a13] px-6 py-8 text-center text-xs text-gray-500">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              &copy; {new Date().getFullYear()} img2gradient. All rights
              reserved. 100% client-side computing — your images never leave
              your device.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
              <a
                href="https://www.google.com/adsense"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Cookie Preferences
              </a>
            </div>
          </div>
        </footer>

        <CookieBanner />
      </body>
    </html>
  );
}