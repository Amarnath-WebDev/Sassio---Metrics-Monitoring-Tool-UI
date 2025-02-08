import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Sassio has transformed how we track and analyze our metrics. The insights are invaluable.",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1630673618876-be46d2722d85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The ease of use and powerful features make Sassio an essential tool for our business.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image:
      "https://plus.unsplash.com/premium_photo-1688821129194-aa8c50116b36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "We've seen a 40% increase in productivity since implementing Sassio.",
  },
];

export default function Testimonials() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
