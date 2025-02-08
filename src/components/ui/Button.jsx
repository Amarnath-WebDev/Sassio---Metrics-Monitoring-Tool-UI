import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'h-10 px-8 rounded-full font-medium transition-all duration-200 text-sm';
  const variants = {
    primary: 'bg-[#9FE870] text-black hover:bg-[#8ed45f]',
    outline: 'border border-white/20 text-white hover:bg-white/10',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};