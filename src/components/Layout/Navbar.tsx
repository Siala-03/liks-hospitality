import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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
        isScrolled
          ? 'bg-brand-bg/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="z-50">
          <img
            src="/logo.png"
            alt="LIKS Hospitality Academy"
            className={`w-auto transition-all duration-500 ${
              isScrolled ? 'h-12 md:h-14 brightness-0' : 'h-16 md:h-20'
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
                  ? 'text-brand-primary'
                  : 'text-brand-ink/80 hover:text-brand-primary'
              }`}
            >
              {link.name}
              {isActive(link.path) ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              ) : (
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 hover:w-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" href="/contact">
            Contact
          </Button>
          <Button href="/register">Register Interest</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 text-brand-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`
          fixed inset-0 bg-brand-bg z-40 flex flex-col pt-28 px-6 pb-10 transition-transform duration-500 ease-out-expo lg:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        >
          <nav className="flex flex-col gap-6 text-2xl font-display">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`border-b border-brand-accent/30 pb-4 transition-colors ${
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
              className="text-brand-ink hover:text-brand-primary transition-colors border-b border-brand-accent/30 pb-4"
            >
              Contact
            </Link>
          </nav>
          <div className="mt-auto pt-8">
            <Button href="/register" className="w-full" size="lg">
              Register Interest
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
