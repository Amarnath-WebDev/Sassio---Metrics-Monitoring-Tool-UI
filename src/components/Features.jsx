import React from 'react';
import { CheckCircleIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/solid';

const features = [
  {
    icon: <CheckCircleIcon className="h-8 w-8 text-green-500" />,
    title: "Easy Installation",
    description: "Get started in minutes with our simple setup process"
  },
  {
    icon: <ChartBarIcon className="h-8 w-8 text-green-500" />,
    title: "Smart Analytics",
    description: "Gain valuable insights with advanced data analysis"
  },
  {
    icon: <ClockIcon className="h-8 w-8 text-green-500" />,
    title: "Real-time Monitoring",
    description: "Track your metrics in real-time with instant updates"
  }
];

export default function Features() {
  return (
    <div className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Follow the easy steps for installation
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Get started quickly with our intuitive setup process and start monitoring your metrics in minutes.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}