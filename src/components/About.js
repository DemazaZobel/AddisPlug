import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gear1 from "../assets/Scene 33.png";
import gear2 from "../assets/Scene 36.png";
import gear3 from "../assets/Scene 39.png";
import gear4 from "../assets/Scene 43.png";
import gear5 from "../assets/Scene 4_1.png";
import logo from "../assets/logo.png";

const images = [gear1, gear2, gear3, gear4, gear5];
export default function AboutIntro() {
  const [activeTab, setActiveTab] = useState("about");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-light py-20 px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Powering Ethiopia's <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">Electric Future</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            AddisPlug is revolutionizing transportation with reliable, accessible charging solutions in Addis Ababa.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h3>
            <p className="text-gray-600 mb-8 text-lg">
              To accelerate Addis Ababa's transition to sustainable transportation by building the city's most reliable EV charging Station.
            </p>
            <div className="space-y-5">
              {[
                "Deploy charging station in Addis Ababa",
                "Support Clean Energy by Reducing carbon emissions ",
                "Make EV charging accessible for all Electric Vechile brands",
                "Provide washing options Both Manual or Automatic",
                "Offer affordable and transparent pricing",
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 bg-gradient-to-br from-green-500 to-teal-500 p-2 rounded-lg group-hover:scale-110 transition-transform shadow-md">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-4 text-gray-600 text-lg group-hover:text-gray-900 transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative rounded-2xl overflow-hidden h-[500px] shadow-lg border border-gray-200"
          >
             <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden relative rounded-xl">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`carousel-${index}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0"
                  }`}
                />
              ))}</div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h4 className="text-white text-2xl font-semibold">
                <img className="w-20 h-20" src={logo} alt="AddisPlug logo" />
                AddisPlug
              </h4>
              <p className="text-gray-200">Our flagship station with 10 charging bays</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
