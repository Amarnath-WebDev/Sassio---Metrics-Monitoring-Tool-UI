import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Dashboard />
      <Testimonials />
      <Stats />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;