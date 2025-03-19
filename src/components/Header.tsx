import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Elias Homes
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <Link
              to="/"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="space-y-4 py-4 md:hidden">
            <Link
              to="/"
              className="block text-gray-700 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block text-gray-700 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="block text-gray-700 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
