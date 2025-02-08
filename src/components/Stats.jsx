import React from 'react';

const stats = [
  { value: "20M+", label: "Active Users" },
  { value: "2K+", label: "Enterprise Clients" },
  { value: "95%", label: "Customer Satisfaction" }
];

export default function Stats() {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}