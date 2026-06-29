import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { courses } from '../data/courses';

export function CoursesIndex() {
  return (
    <div className="w-full bg-brand-bg min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="font-button text-brand-secondary tracking-widest uppercase text-sm mb-4 block">
            Our Programmes
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-brand-primary leading-tight mb-6">
            Master the Art of <br />
            <span className="italic font-serifAlt">Service</span>
          </h1>
          <p className="font-body text-brand-ink/70 text-lg max-w-2xl">
            Discover our comprehensive range of programmes, meticulously
            designed to transform passion into professional excellence.
          </p>
        </motion.div>
      </section>

      {/* Courses Grid */}
      <section className="pb-32 px-6 md:px-12 max-w-8xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, idx) => (
            <AnimatedSection key={course.id} delay={idx * 0.1}>
              <Link
                to={`/courses/${course.slug}`}
                className="group block h-full"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-soft h-full flex flex-col transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-2">
                  <div className="relative h-72 overflow-hidden">
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
                    <div className="absolute top-4 right-4 bg-brand-bg/90 backdrop-blur-sm px-4 py-1.5 rounded-full font-button text-xs font-semibold text-brand-primary">
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
                    <h3 className="font-display text-2xl text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors">
                      {course.title}
                    </h3>
                    <p className="font-body text-brand-ink/70 mb-8 flex-grow leading-relaxed">
                      {course.shortDescription}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-brand-accent/30">
                      <span className="text-brand-primary font-button text-sm font-medium">
                        View Details
                      </span>
                      <div className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors">
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
