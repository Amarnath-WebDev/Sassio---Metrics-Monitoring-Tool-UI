import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sassio</h3>
            <p className="text-gray-400">Essential metrics monitoring tool for your business</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Features</li>
              <li>Solutions</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white mb-4"
            />
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg w-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Sassio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}