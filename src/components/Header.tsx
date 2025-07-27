import { Link } from "@tanstack/react-router";
import { useState } from "react";
import Logo from "~/assets/ehltd-logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-off-white/95 fixed z-50 w-full shadow-sm backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-primary text-2xl font-bold">
            <img src={Logo} alt="Elias Homes Ltd." className="h-24 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <Link
              to="/"
              className="text-brand-gray hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-brand-gray hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-brand-gray hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="text-brand-gray hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-brand-gray hover:text-primary transition-colors"
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
              className="text-brand-gray hover:text-primary block transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-brand-gray hover:text-primary block transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-brand-gray hover:text-primary block transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="text-brand-gray hover:text-primary block transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-brand-gray hover:text-primary block transition-colors"
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
