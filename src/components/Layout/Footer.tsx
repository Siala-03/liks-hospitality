import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-bg relative overflow-hidden">
      {/* Thin top accent rule */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />

      <div className="pt-20 pb-10">
        <div className="max-w-8xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-1">
              <Link to="/" className="mb-6 block">
                <img src="/logo.png" alt="LIKS Hospitality Academy" className="h-14 w-auto brightness-0 invert" />
              </Link>
              <p className="font-body text-brand-accent text-sm leading-relaxed mb-6 max-w-xs">
                Elevating the art of hospitality in Rwanda. Shaping the future
                leaders of the global service industry.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent hover:bg-brand-bg hover:text-brand-primary transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent hover:bg-brand-bg hover:text-brand-primary transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent hover:bg-brand-bg hover:text-brand-primary transition-colors"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-button font-semibold text-sm tracking-wider uppercase mb-6 text-brand-accent">
                Explore
              </h4>
              <ul className="space-y-4 font-body text-sm text-brand-bg/80">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About the Academy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="hover:text-white transition-colors"
                  >
                    Programmes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admissions"
                    className="hover:text-white transition-colors"
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career-pathways"
                    className="hover:text-white transition-colors"
                  >
                    Career Pathways
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs"
                    className="hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-button font-semibold text-sm tracking-wider uppercase mb-6 text-brand-accent">
                Contact
              </h4>
              <ul className="space-y-4 font-body text-sm text-brand-bg/80">
                <li>Kigali, Rwanda</li>
                <li>East Africa</li>
                <li className="pt-2">
                  <a
                    href="mailto:admissions@liks.rw"
                    className="hover:text-white transition-colors"
                  >
                    admissions@liks.rw
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+250785023984"
                    className="hover:text-white transition-colors"
                  >
                    +250 785 023 984
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/250785023984"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-button font-semibold text-sm tracking-wider uppercase mb-6 text-brand-accent">
                Stay Updated
              </h4>
              <p className="font-body text-sm text-brand-bg/80 mb-4">
                Register your interest to receive exclusive updates on our
                upcoming intake and programme details.
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-brand-primary border border-brand-accent/30 rounded-full px-4 py-2 text-sm text-brand-bg placeholder:text-brand-accent/50 focus:outline-none focus:border-brand-accent w-full"
                />
                <button
                  type="submit"
                  className="bg-brand-bg text-brand-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-brand-accent transition-colors"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-accent/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body text-brand-accent/60">
            <p>
              &copy; {new Date().getFullYear()} LIKS Hospitality Academy. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="#"
                className="hover:text-brand-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="hover:text-brand-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
