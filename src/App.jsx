import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative text-white overflow-hidden min-h-screen">
      {/* Particle background */}
      <div className="particles absolute top-0 left-0 w-full h-full"></div>

      {/* Sections */}
      <Hero />
      <Features />
      <About />
      <Footer />
    </div>
  );
}

export default App;
