import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  Award,
  Briefcase,
  BookOpen,
  CheckCircle2 } from
'lucide-react';
import { courses } from '../data/courses';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import { useSEO } from '../hooks/useSEO';
export function CourseDetail() {
  const { slug } = useParams<{
    slug: string;
  }>();
  const course = courses.find((c) => c.slug === slug);

  useSEO({
    title: course ? `${course.title} | LIKS Hospitality Academy — Kigali` : 'Programme | LIKS Hospitality Academy',
    description: course ? `${course.shortDescription} ${course.duration} programme at LIKS Hospitality Academy, Kigali. ${course.certification}.` : '',
    canonicalPath: course ? `/courses/${course.slug}` : '/courses',
  });

  useEffect(() => {
    if (!course) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'course-jsonld';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: course.title,
      description: course.overview,
      url: `https://liks.rw/courses/${course.slug}`,
      timeRequired: course.duration,
      educationalCredentialAwarded: course.certification,
      coursePrerequisites: course.entryRequirements,
      provider: {
        '@type': 'EducationalOrganization',
        name: 'LIKS Hospitality Academy',
        url: 'https://liks.rw',
        address: { '@type': 'PostalAddress', addressLocality: 'Kigali', addressCountry: 'RW' },
      },
    });
    document.head.appendChild(script);
    return () => { document.getElementById('course-jsonld')?.remove(); };
  }, [course]);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }
  return (
    <div className="w-full bg-brand-bg min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          
          <div className="absolute inset-0 bg-brand-ink/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-12 w-full">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-brand-bg/80 hover:text-brand-bg font-button text-sm mb-8 transition-colors">
            
            <ArrowLeft size={16} /> Back to Programmes
          </Link>
          <motion.h1
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
            className="font-display text-4xl sm:text-5xl md:text-7xl text-brand-primary leading-tight mb-4">
            
            {course.title}
          </motion.h1>
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
              duration: 0.8,
              delay: 0.2
            }}
            className="flex flex-wrap gap-4">
            
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full font-button text-sm text-brand-primary">
              <Clock size={16} /> {course.duration}
            </span>
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full font-button text-sm text-brand-primary">
              <Award size={16} /> {course.certification}
            </span>
          </motion.div>
        </div>
      </section>

      <div className="max-w-8xl mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <AnimatedSection>
              <h2 className="font-display text-3xl text-brand-primary mb-6">
                Programme Overview
              </h2>
              <p className="font-body text-brand-ink/80 text-lg leading-relaxed">
                {course.overview}
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="font-display text-3xl text-brand-primary mb-6 flex items-center gap-3">
                <BookOpen className="text-brand-secondary" /> Learning Outcomes
              </h2>
              <ul className="space-y-4">
                {course.learningOutcomes.map((outcome, idx) =>
                <li
                  key={idx}
                  className="flex items-start gap-4 font-body text-brand-ink/80 text-lg">
                  
                    <CheckCircle2
                    className="text-brand-secondary flex-shrink-0 mt-1"
                    size={20} />
                  
                    <span>{outcome}</span>
                  </li>
                )}
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="font-display text-3xl text-brand-primary mb-6">
                Practical Training
              </h2>
              <div className="bg-white p-8 rounded-3xl shadow-soft mb-8">
                <p className="font-body text-brand-ink/80 text-lg leading-relaxed">
                  {course.practicalTraining}
                </p>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 h-64 rounded-2xl overflow-hidden shadow-soft group relative">
                  <img
                    src="https://images.unsplash.com/photo-1663530761401-15eefb544889?q=80&w=800&auto=format&fit=crop&q=75"
                    alt="Practical training in action"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
                </div>
                <div className="h-48 rounded-2xl overflow-hidden shadow-soft group relative">
                  <img
                    src="/class mixology.jpg"
                    alt="Detail of hospitality craft"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
                </div>
                <div className="h-48 rounded-2xl overflow-hidden shadow-soft group relative">
                  <img
                    src="https://images.unsplash.com/photo-1709837167686-a2e33aad1bf0?q=80&w=800&auto=format&fit=crop&q=75"
                    alt="Students mastering service"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AnimatedSection delay={0.2} className="sticky top-32 space-y-8">
              <div className="bg-brand-primary text-brand-bg p-8 rounded-3xl">
                <h3 className="font-display text-2xl mb-6 flex items-center gap-3">
                  <Briefcase className="text-brand-accent" /> Career
                  Opportunities
                </h3>
                <p className="font-body text-brand-accent text-base leading-relaxed mb-8">
                  {course.careerOpportunities}
                </p>
                <Button
                  href="/register"
                  className="w-full bg-brand-bg text-brand-primary hover:bg-brand-accent">
                  
                  Register Interest
                </Button>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-soft border border-brand-accent/30">
                <h3 className="font-display text-xl text-brand-primary mb-4">
                  Entry Requirements
                </h3>
                <p className="font-body text-brand-ink/70 text-sm leading-relaxed">
                  {course.entryRequirements}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>);

}