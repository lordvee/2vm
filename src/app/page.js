'use client'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import ProductSection from '../components/ProductSection';

export default function Home() {

  const pickSection = (selection) => {
    sel[1](selection);
  };

  const showSelection = (selection) => {
    switch (selection) {
      case 'home':
        return <HeroSection />;
      case 'about':
        return <AboutSection />;
      case 'services':
        return <ServicesSection />;
      case 'product':
        return <ProductSection />
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };
  const sel = useState('home');
  return (
    <div className="bg-custom-bg bg-cover bg-center h-screen">
      <Navbar { ...{sel, pickSection} }/>
      {
        showSelection(sel[0])
      }
    </div>
  );
}
