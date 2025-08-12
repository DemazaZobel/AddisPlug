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
export default function Home() {
  const [activeTab, setActiveTab] = useState('stations');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" ">
      {/* Luxury Navbar with Mobile Menu */}
      <Header/>

      {/* Hero Section with Animated Gradient */}
      <section id="home" className="relative  text-center overflow-hidden">
        <Hero/>
      </section>
      <section id="services" className="py-20 px-4 bg-light ">
        <Price />
      </section>
      <section id="station" className=" bg-light">
        <Map />
      </section>
     

      {/* How It Works with Animated Cards */}
      <section id="cards" className="p-10 text-center bg-light flex flex-col gap-10">
        <Cards />
        <CoreValues />
      </section>
      <section id="about" className=" relative bg-light">
       <About />
      </section>
      

      
      

      {/* Testimonials */}
      <section className="py-20 px-4 bg-light">
        <Testimonials />
      </section>

      {/* Contact Section with Floating Form */}
      <section id="contact" className="py-20 px-4 relative">
       <Contact />
      </section>
      

      

      <Footer />

      
      
    </div>
  );
}