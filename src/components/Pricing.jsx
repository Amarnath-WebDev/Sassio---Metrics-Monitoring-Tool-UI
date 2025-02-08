import React from 'react';

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: ["Basic analytics", "5 team members", "Basic support"]
  },
  {
    name: "Pro",
    price: "$49/mo",
    features: ["Advanced analytics", "Unlimited team members", "24/7 support"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Custom solutions", "Dedicated support", "SLA guarantee"]
  }
];

export default function Pricing() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Try Sassio free for 14 days
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}