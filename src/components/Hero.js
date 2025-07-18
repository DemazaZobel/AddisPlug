import React from "react";
import logo from "../assets/wholeLogo.png";
import dArrow from "../assets/downArrow.png";

export default function AddisPlugLanding() {
  return (
    <div className="min-h-screen bg-cover bg-center text-white flex flex-col items-center font-sans bg-gradient-to-b from-[#0B101E] to-[#154D61] relative overflow-hidden">
      {/* Animated Radiation Effect - Orange Rectangles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/30 via-gray-900 to-gray-950 animate-pulse-slow" />
        {[...Array(50)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const duration = Math.random() * 60 + 40;
          const delay = Math.random() * 10;
          const top = Math.random() * 100;
          const left = Math.random() * 100;

          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                opacity: 0.1 + Math.random() * 0.4,
                animation: `sky-drift ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Holographic Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[55%] w-full max-w-3xl h-64 md:h-[28rem] z-0">
        <div className="absolute inset-0 flex items-center justify-center">
          {[0, 1, 2].map((ring) => (
            <div
              key={ring}
              className="absolute rounded-full border border-yellow-500"
              style={{
                width: `${100 + ring * 40}%`,
                height: `${100 + ring * 40}%`,
                animation: `pulse-ring ${3 + ring * 2}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                animationDelay: `${ring * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Logo (top left corner) */}
      <div className="hidden lg:block absolute top-4 left-16 w-40 lg:w-60 z-10">
        <img src={logo} alt="Addis Plug Logo" className="w-full" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center w-full px-4 lg:px-0 lg:mt-20 z-10">
        <div className="relative group z-10">
          <img 
            src={logo} 
            alt="Addis Plug Logo" 
            className="w-[250px] md:w-[400px] lg:w-[550px] mb-4 lg:mb-[-130px] mt-8 lg:mt-0 z-10 relative " 
          />
        </div>

        <h1 className="text-xl md:text-2xl lg:text-3xl font-poppins tracking-wider px-4 max-w-3xl">
          Ethiopians most <span className="text-green-400">advanced</span> ev charging station
        </h1>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4">
          <a
            href="#services"
            className="bg-gradient-to-r from-green-400 to-teal-400 tracking-wider text-lg md:text-xl font-poppins hover:bg-green-600 px-8 sm:px-12 py-4 sm:py-6 text-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 text-center"
          >
            Our Services →
          </a>
          <a
            href="#station"
            className="bg-[#214E3B] hover:bg-green-400 px-8 sm:px-12 py-4 sm:py-6 text-white font-poppins text-lg md:text-xl rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 text-center"
          >
            Find Station
          </a>
          <a
            href="#cards"
            className="bg-[#214E3B] hover:bg-green-400 px-8 sm:px-12 py-4 sm:py-6 text-white font-poppins text-lg md:text-xl rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 text-center"
          >
            How to Charge
          </a>
        </div>
      </div>

      {/* Side Features */}
      <div className="hidden lg:flex absolute left-16 top-[400px] flex-col gap-4 text-lg text-justify font-poppins tracking-wider z-10">
        <p className="hover:text-green-400 transition-colors duration-300">⚡ Fast Charging</p>
        <p className="hover:text-green-400 transition-colors duration-300">⚡ Support All EVs</p>
        <p className="hover:text-green-400 transition-colors duration-300">⚡ Transparent Pricing</p>
      </div>

      {/* Mobile Features */}
      <div className="lg:hidden mt-8 flex flex-col gap-4 text-lg text-center font-poppins tracking-wider px-4 z-10">
        <p>⚡ Fast Charging</p>
        <p>⚡ Support All EVs</p>
        <p>⚡ Transparent Pricing</p>
      </div>

      {/* Footer Slogan */}
      <div className="mt-auto mb-8 lg:mb-12 text-center w-full px-4 z-10">
        <div className="w-12 h-20 mx-auto bg-orange-500 rounded-full mb-4 flex items-center justify-center animate-bounce">
          <img src={dArrow} alt="Down Arrow" className="w-6 h-6" />
        </div>
        <p className="text-white text-xl md:text-2xl font-poppins font-bold">
          Plug In. <span className="text-orange-500 animate-pulse">Power Up.</span> Drive On
        </p>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
        @keyframes sky-drift {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-5px) translateX(10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
      `}</style>
    </div>
  );
}
