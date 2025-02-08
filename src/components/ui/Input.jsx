import React from 'react';

export const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative w-full max-w-md">
      {Icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <input
        className={`w-full h-12 px-4 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9FE870]/50 ${
          Icon ? 'pl-12' : ''
        }`}
        {...props}
      />
    </div>
  );
};