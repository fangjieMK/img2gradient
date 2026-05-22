import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-[#070a13]/90 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          img2gradient
        </Link>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <Link
            href="/"
            className="hover:text-gray-200 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/privacy"
            className="hover:text-gray-200 transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-gray-200 transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-200 transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
