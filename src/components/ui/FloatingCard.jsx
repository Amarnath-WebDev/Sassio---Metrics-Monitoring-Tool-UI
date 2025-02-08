import React from 'react';

export const FloatingCard = ({ className = '', children, ...props }) => {
  return (
    <div 
      className={`absolute bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};