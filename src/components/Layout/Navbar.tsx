import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Career Pathways', path: '/career-pathways' },
    { name: 'FAQs', path: '/faqs' },
  ];

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <>
      {/* ── Main header bar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-brand-primary/95 lg:bg-transparent py-4 lg:py-6'
            : 'bg-brand-primary/95 backdrop-blur-md shadow-sm py-4'
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="LIKS Hospitality Academy"
              className={`w-auto transition-all duration-500 ${
                isTransparent ? 'h-12 lg:h-16 lg:md:h-20' : 'h-11 md:h-12'
              }`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-button text-sm font-medium transition-colors relative py-1 ${
                  isActive(link.path)
                    ? 'text-brand-bg'
                    : 'text-brand-accent hover:text-brand-bg'
                }`}
              >
                {link.name}
                {isActive(link.path) ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-bg rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-bg/60 transition-all duration-300 hover:w-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" href="/contact" className="text-brand-accent hover:text-brand-bg">
              Contact
            </Button>
            <Button href="/register" className="bg-brand-bg text-brand-primary hover:bg-brand-accent">
              Register Interest
            </Button>
          </div>

          {/* Hamburger — mobile only */}
          <button
            aria-label="Open menu"
            className="lg:hidden p-2 -mr-1 text-brand-bg"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* ── Mobile menu overlay — sibling of header, z-index above it ── */}
      <div
        className={`
          fixed inset-0 z-[60] bg-brand-bg flex flex-col lg:hidden
          transition-transform duration-500 ease-out-expo
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Top bar inside the overlay */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-accent/20">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/logo.png" alt="LIKS Hospitality Academy" className="h-10 w-auto brightness-0" />
          </Link>
          <button
            aria-label="Close menu"
            className="p-2 -mr-1 text-brand-ink"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={26} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 pt-4 overflow-y-auto flex-1">
          {[...navLinks, { name: 'Contact', path: '/contact' }].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-display text-2xl py-4 border-b border-brand-accent/20 transition-colors ${
                isActive(link.path)
                  ? 'text-brand-primary'
                  : 'text-brand-ink hover:text-brand-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 py-8">
          <Button href="/register" className="w-full" size="lg">
            Register Interest
          </Button>
        </div>
      </div>
    </>
  );
}
