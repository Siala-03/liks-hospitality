import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
const faqs = [
{
  question: 'Is prior hospitality experience required to enroll?',
  answer:
  'For our foundational programmes, prior experience is not strictly required—what we seek is an undeniable passion for service and a commitment to excellence. However, advanced programmes, such as Hospitality Leadership, do require previous industry experience or relevant academic qualifications to ensure the cohort can engage with complex strategic material.'
},
{
  question: 'Are LIKS certifications internationally recognized?',
  answer:
  'Our entire curriculum has been architected to align seamlessly with the highest global standards of luxury hospitality. We are actively establishing strategic partnerships with international bodies to ensure our certifications carry significant weight and prestige, both regionally across East Africa and globally.'
},
{
  question: 'Where exactly is the academy located?',
  answer:
  "LIKS Hospitality Academy is strategically located in the vibrant heart of Kigali, Rwanda. This positions our students at the very center of East Africa's rapidly expanding luxury tourism and hospitality sector, offering unparalleled access to emerging industry trends."
},
{
  question: 'What is the primary language of instruction?',
  answer:
  'To ensure our graduates are fully prepared to excel in the global hospitality market, all programmes, lectures, and practical training sessions are conducted entirely in English.'
},
{
  question: 'Will the academy assist with job placement after graduation?',
  answer:
  'Absolutely. A core pillar of the LIKS philosophy is career trajectory. We are building a robust network of premium industry partners—from luxury hotels to fine dining groups—to facilitate exclusive internships and direct recruitment opportunities for our top-performing graduates.'
}];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="w-full bg-brand-bg min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/rwanda city.jpg"
            alt="A luxurious hotel lobby"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-brand-ink/60 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-6 mt-16">
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
            }}>
            
            <span className="font-button text-brand-accent tracking-widest uppercase text-sm mb-4 block">
              Support & Information
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-brand-bg leading-tight">
              Frequently Asked{' '}
              <span className="italic font-serifAlt">Questions</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <AnimatedSection>
              <div className="w-full h-[60vh] rounded-3xl overflow-hidden shadow-soft-lg group sticky top-32 relative">
                <img
                  src="/customer service in action.jpg"
                  alt="A professional concierge assisting a guest"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) =>
            <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-brand-accent/20 transition-all duration-300 hover:border-brand-primary/30">
                  <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none">
                  
                    <span className="font-display text-xl text-brand-primary pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown
                    className={`text-brand-secondary transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180 text-brand-primary' : ''}`} />
                  
                  </button>
                  <AnimatePresence>
                    {openIndex === idx &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}>
                    
                        <div className="px-8 pb-8 font-body text-brand-ink/70 leading-relaxed text-lg">
                          {faq.answer}
                        </div>
                      </motion.div>
                  }
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>
    </div>);

}