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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Only go transparent on the home page hero, desktop only, before scrolling
  const isTransparent = isHome && !isScrolled;

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-brand-primary/95 lg:bg-transparent py-4 lg:py-6 backdrop-blur-sm lg:backdrop-blur-none'
          : 'bg-brand-primary/95 backdrop-blur-md shadow-sm py-4'
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="z-50 flex-shrink-0">
          <img
            src="/logo.png"
            alt="LIKS Hospitality Academy"
            className={`w-auto transition-all duration-500 ${
              isTransparent ? 'h-12 lg:h-16 lg:md:h-20' : 'h-11 md:h-12'
            }`}
          />
        </Link>

        {/* Desktop Nav */}
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
          <Button
            variant="ghost"
            href="/contact"
            className="text-brand-accent hover:text-brand-bg"
          >
            Contact
          </Button>
          <Button
            href="/register"
            className="bg-brand-bg text-brand-primary hover:bg-brand-accent"
          >
            Register Interest
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden z-50 p-2 -mr-1 text-brand-bg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-brand-bg z-40 flex flex-col px-6 pb-10
          transition-transform duration-500 ease-out-expo lg:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Top bar inside overlay — logo + close button */}
        <div className="flex items-center justify-between py-4 border-b border-brand-accent/20 mb-8">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img
              src="/logo.png"
              alt="LIKS Hospitality Academy"
              className="h-10 w-auto brightness-0"
            />
          </Link>
          <button
            aria-label="Close menu"
            className="p-2 text-brand-ink"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 font-display">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-2xl py-4 border-b border-brand-accent/20 transition-colors ${
                isActive(link.path)
                  ? 'text-brand-primary'
                  : 'text-brand-ink hover:text-brand-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-2xl py-4 border-b border-brand-accent/20 text-brand-ink hover:text-brand-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="mt-auto pt-8 space-y-3">
          <Button href="/register" className="w-full" size="lg">
            Register Interest
          </Button>
        </div>
      </div>
    </header>
  );
}
