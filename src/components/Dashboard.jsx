import React from 'react';

export default function Dashboard() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Unleash the full potential of your dashboard</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful analytics and insights to help you make data-driven decisions
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-yellow-100 rounded-lg p-8">
            <img src="https://images.unsplash.com/photo-1584291527908-033f4d6542c8?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Analytics Chart" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="bg-blue-100 rounded-lg p-8">
            <img src="https://plus.unsplash.com/premium_photo-1682310103070-d22ac81df717?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Performance Chart" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}