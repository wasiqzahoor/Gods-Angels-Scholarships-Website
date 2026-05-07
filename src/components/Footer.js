import Link from 'next/link';

export default function Footer({
  companyName = 'Scholarship Program',
  companyInfo = {
    address: '123 Education Street, City, State 12345',
    email: 'info@scholarship.com',
    phone: '(555) 123-4567',
  },
  navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Scholarships', href: '/scholarships' },
    { label: 'Application', href: '/application' },
    { label: 'Contact', href: '/contact' },
  ],
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{companyName}</h3>
            {companyInfo.address && (
              <p className="text-footer-text mb-2">{companyInfo.address}</p>
            )}
            {companyInfo.email && (
              <p className="text-footer-text mb-2">
                <a href={`mailto:${companyInfo.email}`} className="hover:text-primary-hover">
                  {companyInfo.email}
                </a>
              </p>
            )}
            {companyInfo.phone && (
              <p className="text-footer-text">
                <a href={`tel:${companyInfo.phone}`} className="hover:text-primary-hover">
                  {companyInfo.phone}
                </a>
              </p>
            )}
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-footer-text hover:text-primary-hover transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/application" className="text-footer-text hover:text-primary-hover transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-footer-text hover:text-primary-hover transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-footer-text hover:text-primary-hover transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-footer-text hover:text-primary-hover transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-border/20 pt-8 text-center">
          <p className="text-footer-text text-sm">
            © {currentYear} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

