import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <div className="bg-light px-4 sm:px-6 lg:px-8 pb-20 mt-20 p-10">
      <div className="max-w-7xl mx-auto">
        {/* Core Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative overflow-hidden rounded-xl bg-white p-6 border border-gray-200 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 ${hoveredCard === index ? 'opacity-100' : ''} transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-green-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto shadow-md">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{value.title}</h4>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10+", label: "Charging Ports" },
              { number: "1k+", label: "EVs Charged" },
              { number: "100+", label: "Tons CO₂ Saved" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
