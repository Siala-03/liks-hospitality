import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Star, Globe, BookOpen, Briefcase } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import { courses } from '../data/courses';

export function Home() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-[90vh] min-h-[550px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/mixology.jpg"
            alt="LIKS mixology and bartending training in action"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-ink/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-12 text-center text-brand-bg flex flex-col items-center mt-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-button text-sm md:text-base tracking-[0.2em] uppercase mb-6 text-brand-accent"
          >
            Kigali, Rwanda
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6 md:mb-8 max-w-5xl px-2 sm:px-0"
          >
            Master the Art of{' '}
            <span className="italic font-serifAlt">Exceptional Service</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-base sm:text-lg md:text-xl text-brand-bg/90 max-w-2xl mb-8 md:mb-12 font-light leading-relaxed px-2 sm:px-0"
          >
            A premier academy dedicated to shaping the future leaders of the
            global luxury hospitality industry. Begin your journey toward
            uncompromising excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              href="/register"
              size="lg"
              className="bg-brand-bg text-brand-primary hover:bg-brand-accent"
            >
              Secure Your Place
            </Button>
            <Button
              href="/courses"
              variant="outline"
              size="lg"
              className="border-brand-bg text-brand-bg hover:bg-brand-bg hover:text-brand-primary"
            >
              Explore Programmes
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Statistics / Proof Band */}
      <section className="bg-brand-primary py-10 md:py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center">
            {[
              { number: '7', label: 'Programmes' },
              { number: '95%', label: 'Job Placement After Graduation' },
              { number: '100%', label: 'English Instruction' },
              { number: 'Kigali', label: 'Rwanda' },
            ].map((stat, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                <div className="text-brand-bg">
                  <span className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium block mb-1 md:mb-2">
                    {stat.number}
                  </span>
                  <span className="font-button text-xs md:text-sm tracking-widest uppercase text-brand-accent">
                    {stat.label}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hospitality / Vision */}
      <section className="py-24 md:py-32 bg-brand-bg">
        <div className="max-w-8xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-soft-lg group">
                <img
                  src="/customer service in action.jpg"
                  alt="LIKS hospitality students demonstrating customer service excellence"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <span className="font-button text-brand-secondary tracking-widest uppercase text-sm mb-4 block">
                Our Purpose
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-brand-primary mb-8 leading-tight">
                A New Standard of Luxury for <br />
                <span className="italic font-serifAlt">East Africa</span>
              </h2>
              <div className="space-y-6 font-body text-brand-ink/80 text-lg leading-relaxed">
                <p>
                  At LIKS Hospitality Academy, we believe that true hospitality
                  is an art form—a delicate, invisible choreography of
                  precision, warmth, and profound anticipation. It is the
                  ability to make every guest feel entirely seen and
                  effortlessly cared for.
                </p>
                <p>
                  Located in the vibrant heart of Kigali, our academy is built
                  to bridge the gap between raw passion and refined professional
                  mastery. We are creating an immersive environment where
                  aspiring professionals can internalize the exacting standards
                  of global luxury hospitality.
                </p>
                <p>
                  Whether your ambition lies in orchestrating a fine dining
                  room, crafting exceptional specialty coffee, or leading a
                  boutique hotel, our curriculum is meticulously crafted to
                  prepare you for the world stage.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-button text-brand-primary font-medium hover:gap-4 transition-all group"
                >
                  Discover our philosophy{' '}
                  <ArrowRight
                    size={20}
                    className="text-brand-secondary group-hover:text-brand-primary transition-colors"
                  />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pull-Quote Section */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <AnimatedSection>
            <div className="py-12">
              <div className="w-16 h-[1px] bg-brand-secondary/50 mx-auto mb-10" />
              <blockquote className="font-serifAlt italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-brand-primary leading-relaxed mb-10">
                "Hospitality is almost impossible to teach. It's all about
                hiring the right people, creating the right environment, and
                letting them be themselves."
              </blockquote>
              <p className="font-button text-sm tracking-widest uppercase text-brand-secondary">
                — Danny Meyer
              </p>
              <div className="w-16 h-[1px] bg-brand-secondary/50 mx-auto mt-10" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Features */}
      <section className="py-24 bg-brand-primary text-brand-bg">
        <div className="max-w-8xl mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-button text-brand-accent tracking-widest uppercase text-sm mb-4 block">
              Why LIKS
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              The LIKS Distinction
            </h2>
            <p className="font-body text-brand-accent text-lg leading-relaxed">
              An education designed not merely for employment, but for visionary
              leadership and innovation within the premium service sector.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 mb-6 text-brand-accent" />,
                title: 'Global Standards',
                desc: 'Our curriculum is rigorously aligned with international luxury hospitality benchmarks, ensuring your expertise is recognized and respected worldwide.',
              },
              {
                icon: <BookOpen className="w-8 h-8 mb-6 text-brand-accent" />,
                title: 'Immersive Learning',
                desc: 'We prioritize tactile, hands-on training within simulated premium environments, building the muscle memory and confidence required for flawless execution.',
              },
              {
                icon: <Globe className="w-8 h-8 mb-6 text-brand-accent" />,
                title: 'Elite Pathways',
                desc: "Receive structured, personalized guidance to navigate the industry's upper echelons, from entry-level excellence to ambitious entrepreneurial ventures.",
              },
              {
                icon: <Briefcase className="w-8 h-8 mb-6 text-brand-accent" />,
                title: 'Internship & Job Placement',
                desc: 'With over two decades of trusted industry partnerships, we place students in structured internships at top hotels, restaurants, and hospitality brands — with a 95% post-graduation job placement rate.',
              },
            ].map((feature, idx) => (
              <AnimatedSection
                key={idx}
                delay={idx * 0.2}
                className="p-6 md:p-10 rounded-3xl bg-[#633632] border border-[#834d48] hover:bg-[#5a322f] transition-colors duration-500"
              >
                {feature.icon}
                <h3 className="font-display text-2xl mb-4">{feature.title}</h3>
                <p className="font-body text-brand-accent/90 leading-relaxed">
                  {feature.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 md:py-32 bg-brand-bg">
        <div className="max-w-8xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <AnimatedSection>
              <span className="font-button text-brand-secondary tracking-widest uppercase text-sm mb-4 block">
                Programmes
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-brand-primary mb-4">
                Our Programmes
              </h2>
              <p className="font-body text-brand-ink/70 text-lg max-w-xl">
                Comprehensive, industry-aligned training designed for the modern
                hospitality professional.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Button href="/courses" variant="outline">
                View All Programmes
              </Button>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {featuredCourses.map((course, idx) => (
              <AnimatedSection key={course.id} delay={idx * 0.2}>
                <Link
                  to={`/courses/${course.slug}`}
                  className="group block h-full"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-soft h-full flex flex-col transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-transparent transition-colors duration-500" />
                      {/* Category label */}
                      <div className="absolute top-4 left-4 bg-brand-primary/90 backdrop-blur-sm px-3 py-1 rounded-full font-button text-[10px] font-semibold text-brand-bg tracking-wider uppercase">
                        {course.category}
                      </div>
                      <div className="absolute top-4 right-4 bg-brand-bg/95 backdrop-blur-sm px-4 py-1.5 rounded-full font-button text-xs font-semibold text-brand-primary shadow-sm">
                        {course.duration}
                      </div>
                      {/* Hover overlay with sliding caption */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/40 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <p className="font-body text-brand-bg/90 text-sm leading-relaxed line-clamp-2">
                          {course.shortDescription}
                        </p>
                      </div>
                    </div>
                    <div className="p-5 sm:p-8 flex flex-col flex-grow">
                      <h3 className="font-display text-xl sm:text-2xl text-brand-primary mb-2 sm:mb-3 group-hover:text-brand-secondary transition-colors">
                        {course.title}
                      </h3>
                      <p className="font-body text-brand-ink/70 mb-4 sm:mb-6 flex-grow leading-relaxed text-sm sm:text-base">
                        {course.shortDescription}
                      </p>
                      <div className="flex items-center text-brand-primary font-button text-sm font-medium">
                        Explore Programme{' '}
                        <ChevronRight
                          size={16}
                          className="ml-1 group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hospitality leadership.jpg"
            alt="LIKS hospitality leadership and professional training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary/95 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-brand-bg">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-6xl mb-6 leading-tight">
              Your Legacy Begins Here
            </h2>
            <p className="font-body text-lg md:text-xl text-brand-accent mb-10 max-w-2xl mx-auto leading-relaxed">
              Be among the select few to experience a new standard of
              hospitality education in Rwanda. Register your interest to secure
              your place in our next intake.
            </p>
            <Button
              href="/register"
              size="lg"
              className="bg-brand-bg text-brand-primary hover:bg-brand-accent shadow-soft-lg"
            >
              Register Interest
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
