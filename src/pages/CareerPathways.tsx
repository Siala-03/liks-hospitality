import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Building2, UtensilsCrossed, Coffee, Hotel } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import { useSEO } from '../hooks/useSEO';
export function CareerPathways() {
  useSEO({
    title: 'Hospitality Career Pathways | LIKS Academy — Kigali, Rwanda',
    description: 'Discover the career opportunities open to LIKS graduates: hotel management, restaurant operations, specialty coffee, luxury mixology, café ownership, and more across East Africa and globally.',
    canonicalPath: '/career-pathways',
  });

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
            Your Future
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-brand-primary leading-tight mb-8">
            Global Career <br />
            <span className="italic font-serifAlt">Opportunities</span>
          </h1>
          <p className="font-body text-brand-ink/70 text-lg max-w-2xl leading-relaxed">
            A career in luxury hospitality is a passport to the world. Explore
            the diverse, prestigious, and deeply rewarding pathways available to
            our graduates.
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-6 md:px-12 max-w-8xl mx-auto">
        <AnimatedSection>
          <div className="w-full h-[50vh] rounded-3xl overflow-hidden shadow-soft-lg mb-24 relative group">
            <img
              src="/board meeting.jpg"
              alt="LIKS hospitality industry board meeting and strategic planning"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy" />

            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
          {
            title: 'Luxury Hotel Management',
            desc: 'Command operations in world-renowned hotels, exclusive resorts, and private estates. Roles include General Manager, Director of Rooms, and Guest Experience Director, where you will dictate the standard of international luxury.',
            image:
            'https://plus.unsplash.com/premium_photo-1677553953699-e62954777d8f?q=80&w=800&auto=format&fit=crop&q=75'
          },
          {
            title: 'Culinary & Beverage Arts',
            desc: 'Shape the global dining landscape. Lead as a Head Sommelier, Executive Mixologist, or Food & Beverage Director in Michelin-starred environments and premium establishments where taste meets artistry.',
            image:
            '/class mixology.jpg'
          },
          {
            title: 'Hospitality Entrepreneurship',
            desc: 'Create your own legacy. Armed with operational mastery and business acumen, launch boutique hotels, innovative dining concepts, or specialized hospitality consultancy firms that disrupt the market.',
            image:
            'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=800&auto=format&fit=crop&q=75'
          }].
          map((path, idx) =>
          <AnimatedSection key={idx} delay={idx * 0.2}>
              <div className="bg-white rounded-3xl shadow-soft h-full border border-brand-accent/20 hover:shadow-soft-lg transition-shadow duration-500 overflow-hidden flex flex-col group">
                <div className="w-full h-56 overflow-hidden relative">
                  <img
                  src={path.image}
                  alt={path.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy" />
                  <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <h3 className="font-display text-2xl text-brand-primary mb-4">
                    {path.title}
                  </h3>
                  <p className="font-body text-brand-ink/70 leading-relaxed flex-grow">
                    {path.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Internship & Placement Section */}
      <section className="py-24 md:py-32 bg-brand-primary text-brand-bg">
        <div className="max-w-8xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <span className="font-button text-brand-accent tracking-widest uppercase text-sm mb-4 block">
                Internship & Placement
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
                From Classroom to{' '}
                <span className="italic font-serifAlt">Industry Floor</span>
              </h2>
              <div className="space-y-6 font-body text-brand-accent text-lg leading-relaxed">
                <p>
                  At LIKS, we don't just train you — we place you. Built on
                  over two decades of trusted industry partnerships, our
                  placement programme connects every student with structured
                  internships at leading hospitality establishments.
                </p>
                <p>
                  These are not observation programmes. You will work alongside
                  seasoned professionals in real service environments — refining
                  your craft, building your professional network, and proving
                  your readiness for a career at the highest level.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <span className="font-display text-4xl font-medium block">95%</span>
                  <span className="font-button text-xs tracking-widest uppercase text-brand-accent">Placement Rate</span>
                </div>
                <div>
                  <span className="font-display text-4xl font-medium block">20+</span>
                  <span className="font-button text-xs tracking-widest uppercase text-brand-accent">Years of Industry Networks</span>
                </div>
                <div>
                  <span className="font-display text-4xl font-medium block">50+</span>
                  <span className="font-button text-xs tracking-widest uppercase text-brand-accent">Partner Establishments</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                {[
                  {
                    icon: <Hotel className="w-6 h-6 text-brand-accent" />,
                    title: 'Luxury Hotels & Resorts',
                    desc: 'Five-star properties across East Africa and internationally, from boutique lodges to global hotel brands.',
                  },
                  {
                    icon: <UtensilsCrossed className="w-6 h-6 text-brand-accent" />,
                    title: 'Fine Dining & Restaurants',
                    desc: 'Award-winning restaurants and premium dining establishments where service standards are uncompromising.',
                  },
                  {
                    icon: <Coffee className="w-6 h-6 text-brand-accent" />,
                    title: 'Specialty Coffee & Bar',
                    desc: 'Leading specialty coffee roasters, cocktail bars, and beverage-forward venues setting industry trends.',
                  },
                  {
                    icon: <Building2 className="w-6 h-6 text-brand-accent" />,
                    title: 'Boutique & Entrepreneurial Ventures',
                    desc: 'Emerging hospitality concepts and founder-led businesses where you can grow alongside visionary operators.',
                  },
                ].map((partner, idx) => (
                  <AnimatedSection key={idx} delay={0.3 + idx * 0.1}>
                    <div className="flex gap-5 p-6 rounded-2xl bg-[#633632] border border-[#834d48] hover:bg-[#5a322f] transition-colors duration-500">
                      <div className="w-12 h-12 rounded-full bg-brand-primary/50 flex items-center justify-center flex-shrink-0">
                        {partner.icon}
                      </div>
                      <div>
                        <h3 className="font-display text-lg mb-1">{partner.title}</h3>
                        <p className="font-body text-brand-accent/80 text-sm leading-relaxed">
                          {partner.desc}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Why Internships Matter */}
          <div className="mt-24 pt-16 border-t border-brand-accent/20">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-button text-brand-accent tracking-widest uppercase text-sm mb-4 block">
                Why It Matters
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                The Bridge Between Training &{' '}
                <span className="italic font-serifAlt">Career</span>
              </h2>
              <p className="font-body text-brand-accent text-lg leading-relaxed">
                Industry internships transform classroom knowledge into
                professional instinct — the difference between knowing what to
                do and doing it under pressure with grace.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Handshake className="w-8 h-8 mb-4 text-brand-accent" />,
                  title: 'Real-World Mastery',
                  desc: 'Translate theory into muscle memory. Working live service builds the confidence, speed, and intuition that no simulation can replicate.',
                },
                {
                  title: 'Professional Network',
                  desc: 'Your internship supervisor becomes your first industry reference. Many of our placement partners hire directly from their intern cohorts.',
                },
                {
                  title: 'Career Acceleration',
                  desc: 'Graduates with structured internship experience enter the workforce 6–12 months ahead of peers, often securing senior-track positions from day one.',
                },
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.2}>
                  <div className="text-center">
                    <span className="font-display text-5xl text-white/10 block mb-4">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-xl mb-3">{item.title}</h3>
                    <p className="font-body text-brand-accent/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center mt-16">
              <Button
                href="/register"
                size="lg"
                className="bg-brand-bg text-brand-primary hover:bg-brand-accent"
              >
                Secure Your Placement
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Full Width Inspirational Banner */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1709837167686-a2e33aad1bf0?q=80&w=800&auto=format&fit=crop&q=75"
            alt="Impeccable fine dining service"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-brand-primary/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl text-brand-bg mb-6 leading-tight">
              A World of Possibility
            </h2>
            <p className="font-body text-lg md:text-xl text-brand-accent mb-10 leading-relaxed">
              Our alumni network will span the globe, connecting you to the most
              prestigious brands and visionary leaders in the industry.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>);

}