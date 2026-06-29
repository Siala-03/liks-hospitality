import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
export function Admissions() {
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
            Admissions
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-brand-primary leading-tight mb-8">
            Begin Your <br />
            <span className="italic font-serifAlt">Journey</span>
          </h1>
          <p className="font-body text-brand-ink/70 text-lg max-w-2xl leading-relaxed">
            We are actively seeking passionate, driven individuals ready to
            define the future of global hospitality. Discover our selective
            admissions process and the requirements to join our next
            intake.
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-6 md:px-12 max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-brand-primary mb-8">
              The Selection Process
            </h2>
            <div className="space-y-12">
              {[
              {
                step: '01',
                title: 'Register Interest',
                desc: 'Submit your details to join our exclusive prospective student list. You will receive priority updates regarding our upcoming intake and curriculum details.',
                image:
                '/step 1.jpg'
              },
              {
                step: '02',
                title: 'Formal Application',
                desc: 'Upon the opening of our admissions window, you will be invited to submit a comprehensive application detailing your background, ambitions, and alignment with our values.',
                image:
                '/step 2.jpg'
              },
              {
                step: '03',
                title: 'Personal Interview',
                desc: 'Shortlisted candidates will be invited for a rigorous personal interview with our faculty to discuss their passion for luxury hospitality and long-term career trajectory.',
                image:
                '/step 3.jpg'
              },
              {
                step: '04',
                title: 'Offer & Enrollment',
                desc: 'Successful applicants will receive a formal offer of admission to join LIKS Hospitality Academy, marking the beginning of their professional transformation.',
                image:
                '/step 4.jpg'
              }].
              map((item, idx) =>
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-6 group">
                
                  <div className="w-full sm:w-1/3 h-32 rounded-2xl overflow-hidden shadow-soft flex-shrink-0 relative">
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display text-2xl text-brand-secondary/50 group-hover:text-brand-primary transition-colors duration-300">
                        {item.step}
                      </span>
                      <h3 className="font-display text-xl text-brand-primary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-body text-brand-ink/70 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white p-10 rounded-3xl shadow-soft h-full flex flex-col border border-brand-accent/20">
              <div className="w-full h-48 rounded-2xl overflow-hidden shadow-soft mb-8 group relative">
                <img
                  src="/customer service in action.jpg"
                  alt="LIKS hospitality students in customer service training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
              </div>
              <h2 className="font-display text-3xl text-brand-primary mb-6">
                Who We Look For
              </h2>
              <p className="font-body text-brand-ink/70 mb-8 leading-relaxed">
                While specific programmes may carry additional prerequisites,
                all prospective students must demonstrate the following
                foundational qualities:
              </p>
              <ul className="space-y-5 font-body text-brand-ink/80 text-lg mb-10">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                  <span>
                    A profound, demonstrable passion for service and
                    uncompromising excellence.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                  <span>
                    A high school diploma or equivalent (required for most
                    foundational programmes).
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                  <span>
                    Professional proficiency in English, the primary language of
                    instruction and global hospitality.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                  <span>
                    Exceptional interpersonal skills, emotional intelligence,
                    and a collaborative mindset.
                  </span>
                </li>
              </ul>
              <div className="mt-auto pt-8 border-t border-brand-accent/30">
                <Button
                  href="/register"
                  size="lg"
                  className="w-full shadow-soft hover:shadow-soft-lg">
                  
                  Register Interest Now
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Full Width Banner */}
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/cafe service.jpg"
            alt="LIKS café service training in action"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-brand-ink/50 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-bg mb-4">
              Your Future Awaits
            </h2>
            <p className="font-body text-lg text-brand-accent max-w-2xl mx-auto">
              Step into a world of opportunity and refinement.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>);

}