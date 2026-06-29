import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export function About() {
  return (
    <div className="w-full bg-brand-bg">
      {/* Page Header */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative"
        >
          <span className="font-button text-brand-secondary tracking-widest uppercase text-sm mb-4 block">
            About LIKS
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-brand-primary leading-tight mb-8">
            A Legacy of Excellence <br />
            <span className="italic font-serifAlt">Begins Here</span>
          </h1>
        </motion.div>
      </section>

      {/* Main Image */}
      <section className="px-6 md:px-12 max-w-8xl mx-auto mb-24">
        <AnimatedSection>
          <div className="w-full h-[60vh] rounded-3xl overflow-hidden shadow-soft-lg group">
            <img
              src="/customer service class.jpg"
              alt="LIKS hospitality students in a customer service training class"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
          </div>
        </AnimatedSection>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 md:px-12 max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          <AnimatedSection direction="up">
            <span className="font-button text-brand-secondary tracking-widest uppercase text-sm mb-4 block">
              Vision
            </span>
            <h2 className="font-display text-3xl text-brand-primary mb-6">
              Our Vision
            </h2>
            <p className="font-body text-brand-ink/80 text-lg leading-relaxed">
              To establish Rwanda as the undisputed premier hub for hospitality
              excellence in East Africa. We are cultivating a generation of
              professionals who lead with grace, technical expertise, and a
              profound, intuitive understanding of global luxury service
              standards. We envision a future where LIKS alumni are the driving
              force behind the region's most celebrated dining and accommodation
              experiences.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <span className="font-button text-brand-secondary tracking-widest uppercase text-sm mb-4 block">
              Mission
            </span>
            <h2 className="font-display text-3xl text-brand-primary mb-6">
              Our Mission
            </h2>
            <p className="font-body text-brand-ink/80 text-lg leading-relaxed">
              To provide an immersive, world-class educational environment that
              bridges the critical gap between theoretical knowledge and
              practical, floor-ready mastery. Through rigorous training,
              industry-aligned curricula, and an unwavering focus on leadership,
              we empower our students not just to enter the hospitality
              industry, but to elevate and redefine it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pull-Quote Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 max-w-8xl mx-auto">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center py-8">
            <div className="w-16 h-[1px] bg-brand-secondary/50 mx-auto mb-10" />
            <blockquote className="font-serifAlt italic text-2xl md:text-3xl lg:text-4xl text-brand-primary leading-relaxed mb-10">
              "The key to great hospitality is not just what you do, but how you
              make people feel while you're doing it."
            </blockquote>
            <p className="font-button text-sm tracking-widest uppercase text-brand-secondary">
              — The LIKS Philosophy
            </p>
            <div className="w-16 h-[1px] bg-brand-secondary/50 mx-auto mt-10" />
          </div>
        </AnimatedSection>
      </section>

      {/* The Philosophy */}
      <section className="py-24 bg-brand-primary text-brand-bg mt-12">
        <div className="max-w-8xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <span className="font-button text-brand-accent tracking-widest uppercase text-sm mb-4 block">
                Philosophy
              </span>
              <h2 className="font-display text-4xl md:text-5xl mb-8">
                The LIKS{' '}
                <span className="italic font-serifAlt">Philosophy</span>
              </h2>
              <div className="space-y-6 font-body text-brand-accent text-lg leading-relaxed">
                <p>
                  Hospitality is infinitely more than a transaction; it is a
                  profound emotional connection. It is the rare art of making
                  someone feel entirely seen, deeply valued, and effortlessly
                  cared for.
                </p>
                <p>
                  At LIKS, our philosophy is rooted in the fundamental belief
                  that exceptional service cannot simply be memorized from a
                  manual—it must be embodied. We focus intensely on developing
                  the intuition, empathy, and meticulous attention to detail
                  that distinguish a merely good experience from an
                  unforgettable one.
                </p>
                <p>
                  Our pedagogical approach seamlessly combines the exacting
                  discipline of classic European service standards with the
                  innate warmth, vibrancy, and grace of Rwandan culture,
                  creating a uniquely powerful approach to modern luxury
                  hospitality.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl shadow-soft group relative">
                  <img
                    src="https://images.unsplash.com/photo-1610851467843-fe4a65aea9c0?q=80&w=2070&auto=format&fit=crop"
                    alt="Exquisite culinary detail and plating"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-ink/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-soft mt-8 group relative">
                  <img
                    src="https://images.unsplash.com/photo-1740512376474-f34f5c8d542a?q=80&w=2070&auto=format&fit=crop"
                    alt="Refined service detail in a premium setting"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-ink/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Editorial Story Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <div className="w-full h-[70vh] rounded-3xl overflow-hidden shadow-soft-lg group relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1703435536977-a496234479e0?q=80&w=2070&auto=format&fit=crop"
                alt="A sophisticated dining room prepared for evening service"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.2}>
            <span className="font-button text-brand-secondary tracking-widest uppercase text-sm mb-4 block">
              The Campus Vision
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-brand-primary mb-8 leading-tight">
              An Environment <br />
              <span className="italic font-serifAlt">Built for Mastery</span>
            </h2>
            <div className="space-y-6 font-body text-brand-ink/80 text-lg leading-relaxed">
              <p>
                Our upcoming campus in Kigali is more than a collection of
                classrooms; it is a meticulously designed ecosystem that mirrors
                the world's finest hospitality venues.
              </p>
              <p>
                From state-of-the-art culinary laboratories to fully functional
                mock-hotel suites and premium dining simulation rooms, every
                square meter is engineered to provide an authentic, high-stakes
                training ground.
              </p>
              <p>
                Here, students do not just study hospitality—they live it,
                breathing in the standards of excellence that will define their
                future careers on the global stage.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Full Width Banner */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1687986261123-b17f08f2796c?q=80&w=2070&auto=format&fit=crop"
            alt="Elegant architectural details of a luxury hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-ink/40 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-6">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-6xl text-brand-bg mb-6">
              Join the Vanguard
            </h2>
            <p className="font-body text-lg text-brand-accent max-w-2xl mx-auto">
              Be part of the next cohort that will set the new benchmark for
              luxury service across the continent.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
