import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ariaLabel,
  ...rest
}) {
  const baseClasses =
    'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-purple select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-accent-purple to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 active:scale-[0.98]',
    secondary:
      'bg-dark-surface/90 hover:bg-dark-card text-dark-text border border-white/10 hover:border-accent-purple/40 dark:bg-dark-surface dark:text-dark-text dark:border-white/10 dark:hover:border-accent-purple/40 light:bg-white light:text-light-text light:border-black/10 light:hover:border-accent-purple/40 active:scale-[0.98]',
    outline:
      'border border-accent-purple/50 text-accent-purple hover:bg-accent-purple/10 active:scale-[0.98]',
    ghost:
      'text-dark-muted hover:text-dark-text hover:bg-white/5 dark:text-dark-muted dark:hover:text-dark-text light:text-light-muted light:hover:text-light-text active:scale-[0.98]',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        aria-label={ariaLabel}
        {...rest}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      whileHover={!disabled ? { y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
    </motion.button>
  );
}
