import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#4B7F21] z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-12">
            <div className="text-2xl font-bold text-white">Sassio</div>
            <div className="hidden md:flex justify-right space-x-8">
              <a href="#features" className="text-white hover:text-gray-900">Features</a>
              <a href="#solutions" className="text-white hover:text-gray-900">Solutions</a>
              <a href="#pricing" className="text-white hover:text-gray-900">Pricing</a>
              <a href="#resources" className="text-white hover:text-gray-900">Resources</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-900">Sign in</button>
            <button className="bg-[#7bcf36] text-gray-600 px-6 py-2 rounded-lg hover:text-white hover:bg-green-600 transition-colors">
              Try Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}