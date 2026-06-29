import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
export function Contact() {
  return (
    <div className="w-full bg-brand-bg">
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-8xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}
          className="max-w-4xl">
          
          <span className="font-button text-brand-secondary tracking-widest uppercase text-sm mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-brand-primary leading-tight mb-8">
            Contact <span className="italic font-serifAlt">Us</span>
          </h1>
        </motion.div>
      </section>

      <section className="pb-32 px-6 md:px-12 max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-soft h-full">
              <h2 className="font-display text-3xl text-brand-primary mb-8">
                Get in Touch
              </h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="font-button text-sm text-brand-ink/80">
                    I'd like to *
                  </label>
                  <select
                    required
                    className="w-full bg-brand-bg border border-brand-accent/50 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors appearance-none"
                  >
                    <option value="">Select a reason</option>
                    <option value="general">Make a General Inquiry</option>
                    <option value="programmes">Ask About Programmes</option>
                    <option value="admissions">Ask About Admissions</option>
                    <option value="partnerships">Discuss Partnerships</option>
                    <option value="review">Leave a Review</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-button text-sm text-brand-ink/80">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-brand-bg border border-brand-accent/50 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" />

                  </div>
                  <div className="space-y-2">
                    <label className="font-button text-sm text-brand-ink/80">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-brand-bg border border-brand-accent/50 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" />

                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-button text-sm text-brand-ink/80">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-brand-bg border border-brand-accent/50 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" />

                </div>
                <div className="space-y-2">
                  <label className="font-button text-sm text-brand-ink/80">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-brand-bg border border-brand-accent/50 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors resize-none">
                  </textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-12">
              <div>
                <h3 className="font-display text-2xl text-brand-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-brand-primary flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-button font-medium text-brand-ink mb-1">
                        Location
                      </h4>
                      <p className="font-body text-brand-ink/70">
                        Kigali, Rwanda
                        <br />
                        East Africa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-brand-primary flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-button font-medium text-brand-ink mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:admissions@likshospitality.com"
                        className="font-body text-brand-ink/70 hover:text-brand-primary transition-colors">
                        
                        admissions@likshospitality.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-brand-primary flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-button font-medium text-brand-ink mb-1">
                        Phone
                      </h4>
                      <a
                        href="tel:+250785023984"
                        className="font-body text-brand-ink/70 hover:text-brand-primary transition-colors block">
                        +250 785 023 984
                      </a>
                      <a
                        href="https://wa.me/250785023984"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm text-[#25D366] hover:text-[#128C7E] transition-colors mt-1 inline-block">
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-64 rounded-3xl overflow-hidden shadow-soft-lg group relative">
                <img
                  src="/class discussion.jpg"
                  alt="LIKS hospitality class discussion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Full Width Image Banner */}
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/operations resto manager.jpg"
            alt="LIKS restaurant operations training"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-brand-primary/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-6">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl text-brand-bg mb-4">
              We Look Forward to Welcoming You
            </h2>
            <p className="font-body text-lg text-brand-accent max-w-2xl mx-auto">
              Our team is here to assist you with any inquiries regarding our
              programmes and admissions.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>);

}