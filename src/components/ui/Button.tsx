import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center font-button transition-all duration-300 ease-out-expo rounded-full disabled:opacity-60 disabled:cursor-not-allowed';
  const variants = {
    primary:
    'bg-brand-primary text-brand-bg hover:bg-[#5a322f] hover:shadow-soft',
    secondary:
    'bg-brand-secondary text-brand-bg hover:bg-[#8f8475] hover:shadow-soft',
    outline:
    'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-bg',
    ghost: 'text-brand-primary hover:bg-brand-accent/30'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  const combinedClasses = twMerge(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );
  if (href) {
    return (
      <Link to={href} className={combinedClasses}>
        {children}
      </Link>);

  }
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>);

}