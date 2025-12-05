import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Community } from './components/Community';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-titan-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Pricing />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;