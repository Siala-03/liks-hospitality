import React from 'react';
import { motion } from 'framer-motion';
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}
export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: {
            opacity: 0,
            y: 40
          },
          visible: {
            opacity: 1,
            y: 0
          }
        };
      case 'down':
        return {
          hidden: {
            opacity: 0,
            y: -40
          },
          visible: {
            opacity: 1,
            y: 0
          }
        };
      case 'left':
        return {
          hidden: {
            opacity: 0,
            x: 40
          },
          visible: {
            opacity: 1,
            x: 0
          }
        };
      case 'right':
        return {
          hidden: {
            opacity: 0,
            x: -40
          },
          visible: {
            opacity: 1,
            x: 0
          }
        };
      case 'none':
        return {
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1
          }
        };
      default:
        return {
          hidden: {
            opacity: 0,
            y: 40
          },
          visible: {
            opacity: 1,
            y: 0
          }
        };
    }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '-100px'
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      variants={getVariants()}
      className={className}>
      
      {children}
    </motion.div>);

}