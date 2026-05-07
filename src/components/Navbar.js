'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({
  logo = 'God’s Angels Scholarships',
  links = [
  { label: 'Scholarships', href: '/scholarships' },
  { label: 'Contact', href: '/contact' },
  { label: 'About', href: '/about' },
  { label: 'Apply Now', href: '/application', highlight: true }, // Highlighted button
]
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold text-primary hover:text-primary-hover transition-colors">
            {logo}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={
                  link.highlight
                    ? 'btn-primary text-white hover:bg-primary-hover'
                    : `px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === link.href
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-text hover:text-primary hover:bg-gray-light'
                    }`
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-text hover:text-primary hover:bg-gray-light"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-border">
            <div className="flex flex-col gap-2">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={
                    link.highlight
                      ? 'btn-primary text-white hover:bg-primary-hover text-center'
                      : `px-4 py-3 rounded-md text-base font-medium transition-colors ${pathname === link.href
                        ? 'text-primary bg-blue-50'
                        : 'text-gray-text hover:text-primary hover:bg-gray-light'
                      }`
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

