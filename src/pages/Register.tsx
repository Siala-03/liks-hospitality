import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import { courses } from '../data/courses';
import { useSEO } from '../hooks/useSEO';

export function Register() {
  useSEO({
    title: 'Register Your Interest | LIKS Hospitality Academy — Kigali',
    description: 'Secure your place at LIKS Hospitality Academy in Kigali, Rwanda. Register your interest for our next intake and start your journey in world-class luxury hospitality.',
    canonicalPath: '/register',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or email us directly at admissions@likshospitality.com');
      }
    } catch {
      setError('Something went wrong. Please try again or email us directly at admissions@likshospitality.com');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full bg-brand-bg min-h-screen flex items-center">
      <div className="w-full max-w-8xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <div className="max-w-xl">
              <span className="font-button text-brand-secondary tracking-widest uppercase text-sm mb-4 block">
                Apply Now
              </span>
              <h1 className="font-display text-5xl md:text-6xl text-brand-primary leading-tight mb-6">
                Join the Next <br />
                <span className="italic font-serifAlt">Intake</span>
              </h1>
              <p className="font-body text-brand-ink/80 text-lg leading-relaxed mb-8">
                The future of East African hospitality begins here. Register
                your interest today to receive priority updates regarding
                detailed programme schedules and exclusive
                pre-enrollment opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12 hidden lg:grid">
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-soft-lg group">
                  <img
                    src="/operations resto manager.jpg"
                    alt="LIKS restaurant operations manager in training"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
                </div>
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-soft-lg group mt-8">
                  <img
                    src="/Cafe:late making.jpg"
                    alt="LIKS barista crafting a café latte"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.2}>
            <div className="bg-white p-6 sm:p-10 md:p-12 rounded-3xl shadow-soft-lg border border-brand-accent/20">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-display text-3xl text-brand-primary mb-4">Thank You</h2>
                  <p className="font-body text-brand-ink/70 text-lg leading-relaxed">
                    Your interest has been formally registered. You are now on
                    the exclusive list for our next intake. We will be in
                    touch shortly with further details regarding the admissions
                    timeline.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-button text-sm text-brand-ink/80">First Name *</label>
                      <input
                        required
                        type="text"
                        name="first_name"
                        className="w-full bg-brand-bg border border-brand-accent/50 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-button text-sm text-brand-ink/80">Last Name *</label>
                      <input
                        required
                        type="text"
                        name="last_name"
                        className="w-full bg-brand-bg border border-brand-accent/50 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-button text-sm text-brand-ink/80">Email Address *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full bg-brand-bg border border-brand-accent/50 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-button text-sm text-brand-ink/80">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full bg-brand-bg border border-brand-accent/50 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-button text-sm text-brand-ink/80">Programme of Interest *</label>
                    <select
                      required
                      name="programme"
                      className="w-full bg-brand-bg border border-brand-accent/50 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors appearance-none"
                    >
                      <option value="">Select a programme</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.title}>
                          {course.title}
                        </option>
                      ))}
                      <option value="Undecided">Undecided at this time</option>
                    </select>
                  </div>

                  {error && (
                    <p className="font-body text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="w-full mt-4"
                    size="lg"
                    disabled={isSending}
                  >
                    {isSending ? 'Sending…' : 'Submit Registration'}
                  </Button>

                  <p className="font-body text-xs text-brand-ink/50 text-center mt-6 leading-relaxed">
                    By submitting this form, you agree to receive official
                    communications from LIKS Hospitality Academy regarding our
                    programmes, events, and launch updates. Your information is
                    kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
