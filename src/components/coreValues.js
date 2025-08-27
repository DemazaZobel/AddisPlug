import React, { useState } from 'react';
import { motion } from 'framer-motion';
import parking from "../assets/parking.png";
export default function CoreValues() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const values = [
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "Smart charging solutions for Addis Ababa's infrastructure"
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15l8-8m0 0l-8-8m8 8H4" />
        </svg>
      ),
      title: "Sustainability",
      description: "Reducing emissions through clean transportation"
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Community",
      description: "Solutions serving all Ethiopians equitably"
    }
  ];

  return (
    <div className="bg-light px-4 sm:px-6 lg:px-8 pb-20 mb-20 p-10 sm:-m-20">
      <div className="max-w-7xl mx-auto">
      <div className="mb-12">
      <h1 className="text-lightPrimary text-3xl font-bold relative inline-block group">
  Parking Service
  <span className="absolute left-0 -bottom-1 h-1 w-0 bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-500 group-hover:w-full"></span>
</h1>


      </div>
        {/* Parking Space Section - Dominant Image Edition */}
        <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: 0.7,
    ease: [0.16, 0.77, 0.47, 0.97]  
  }}
  viewport={{ once: true, margin: "-50px" }}
  className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl p-2 lg:p-10 mb-16 lg:mb-40 overflow-hidden w-full"
>
  {/* Glowing accent */}
  <div className="absolute -right-24 -top-24 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 z-0" />

  {/* Image */}
  <motion.div
    initial={{ scale: 0.98 }}
    whileInView={{ scale: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="w-full lg:w-[65%] relative z-10"
  >
    <img 
      src={parking}
      alt="Luxurious EV Parking Space"
      className="w-full rounded-2xl shadow-xl object-cover h-72 md:h-96 lg:h-[28rem] transform transition-all duration-500 hover:scale-[1.02]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
  </motion.div>

  {/* Text Content */}
  <div className="w-full lg:w-[35%] text-center lg:text-left relative z-10 space-y-4 lg:space-y-6 px-2 lg:px-0">
    <motion.h4 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight"
    >
      Your EV Deserves <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400">Premium Parking</span>
    </motion.h4>
    
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed"
    >
      Slide into our <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">spacious charging bays</span> designed for effortless access. No tight squeezes - just smooth arrivals and seamless charging experiences.
    </motion.p>
    
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="pt-2"
    >
      <a href="#station">
        <button className="px-6 md:px-7 py-3.5 bg-gradient-to-r from-green-400 to-teal-400 hover:bg-green-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95">
          Find Nearby Stations →
        </button>
      </a>
    </motion.div>
  </div>
</motion.div>



          {/* Core Values Section */}
          <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, margin: "-50px" }}
  className="mb-24 max-w-6xl mx-auto px-4"
>
  {/* Title with sexy gradient & subtle shine */}
  <motion.h3 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500"
  >
    Our <span >
      Core Values
    </span>
  </motion.h3>

  {/* Cards with 3D hover & liquid motion */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {values.map((value, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ 
          y: -8,
          scale: 1.03,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 15,
          duration: 0.5
        }}
        className="relative group overflow-hidden rounded-2xl bg-white p-8 border border-gray-100 hover:border-green-200 transition-all duration-500 shadow-lg hover:shadow-xl"
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating reflection effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400/30 to-teal-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10">
          {/* Icon with floating glow */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-br from-green-500 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-green-200/50 transition-all duration-500"
          >
            <div className="text-white text-2xl">
              {value.icon}
            </div>
          </motion.div>

          <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-green-700 transition-colors duration-300">
            {value.title}
          </h4>
          
          <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">
            {value.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
          </motion.div>

      </div>
    </div>
  );
}
