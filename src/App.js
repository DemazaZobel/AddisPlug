import React, { useState } from 'react';
import Header from "./components/Header";
import Hero from './components/Hero';
import Cards from './components/Cards';
import Map from './components/Map';
import Price from './components/Price';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import CoreValues from './components/coreValues';
import Maintain from './components/Maintain';
import Rental from './components/Rental';

export default function Home() {
  const [activeTab, setActiveTab] = useState('stations');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden relative">
      {/* Fixed Header */}
      <header className="lg:mt-[-200px] fixed top-0 left-0 w-full z-50 bg-light shadow-md">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>

      

      {/* Hero Section */}
      <section id="home" className="relative w-full text-center overflow-hidden">
        <Hero />
      </section>

      {/* Price Section */}
      <section id="services" className="py-20 px-2 md:px-4 lg:px-20 bg-light w-full">
        <Price />
      </section>

      {/* Map Section */}
      <section id="station" className="bg-light w-full px-2 md:px-4 lg:px-20">
        <Map />
      </section>

      {/* Cards, Maintain, Core Values */}
      <section id="cards" className="flex flex-col gap-10 px-2 md:px-4 lg:px-20 py-10 text-center bg-light w-full">
        <Cards />
        <Maintain />
        <CoreValues />
      </section>

      {/* About Section */}
      <section id="about" className="relative bg-light w-full px-2 md:px-4 lg:px-20 py-10">
        <About />
      </section>

      {/* Rental Section */}
      <section id="rental" className="py-20 px-2 md:px-4 lg:px-20 bg-light w-full">
        <Rental />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-2 md:px-4 lg:px-20 bg-light w-full">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-2 md:px-4 lg:px-20 relative w-full">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
