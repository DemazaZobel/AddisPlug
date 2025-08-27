import React from "react";
import logo from "../assets/wholeLogo.png";
import dArrow from "../assets/downArrow.png";

export default function AddisPlugLanding() {
  return (
    <div className="min-h-screen bg-cover bg-center text-white flex flex-col items-center font-sans bg-gradient-to-b from-darkPrimary to-lightPrimary relative overflow-hidden">
      
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
      <div className="hidden lg:block absolute top-12 left-16 w-32 lg:w-48 z-10">
        <img src={logo} alt="Addis Plug Logo" className="w-full" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center w-full px-4 lg:px-0 lg:mt-8 sm:mt-20 z-10">
        <div className="relative group z-10">
          <img 
            src={logo} 
            alt="Addis Plug Logo" 
            className="sm:w-[120px] md:w-[500px] lg:w-[400px] sm:mb-4 md:-mb-20 lg:mb-[-150px] lg:mt-2 md:mt-0 sm:mt-20 z-10 relative" 
          />
        </div>

        <h1 className="text-xl md:text-2xl lg:text-2xl font-poppins tracking-wider px-4 max-w-2xl lg:mt-20 md:mt-20 ">
          Ethiopia's most <span className="text-green-400">advanced</span> EV station.
        </h1>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center px-2">
          <a
            href="#services"
            className="bg-gradient-to-r from-green-400 to-teal-400 tracking-wider text-base md:text-lg font-poppins hover:bg-green-700 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 text-center"
          >
            Our Services →
          </a>

          {/* Glowing Border Buttons */}
          {["#station", "#cards"].map((href, idx) => (
  <a
    key={idx}
    href={href}
    className="relative px-6 sm:px-8 py-3 sm:py-4 text-white font-poppins text-base md:text-lg rounded-full border-2 border-green-400 text-center
               bg-gray-900
               hover:border-white
               hover:text-secondary
               before:absolute before:-inset-1 before:rounded-full before:bg-green-400/40 before:blur-xl before:opacity-70
               before:animate-[pulse_2s_ease-in-out_infinite]
               transition-all duration-300 hover:border-green-300 hover:before:opacity-100 hover:before:animate-[pulse_1s_ease-in-out_infinite]"
  >
    {idx === 0 ? "Find Station" : "How to Charge"}
  </a>
))}


        </div>
      </div>

      {/* Side Features */}
      <div className="hidden lg:flex absolute left-16 top-[300px] flex-col gap-4 text-md text-justify font-poppins z-10">
        <p className="hover:text-green-400 transition-colors duration-300">⚡ Fast Charging</p>
        <p className="hover:text-green-400 transition-colors duration-300">⚡ Support All EVs</p>
        <p className="hover:text-green-400 transition-colors duration-300">⚡ Transparent Pricing</p>
      </div>

      {/* Mobile Features */}
      <div className="lg:hidden mt-8 flex flex-col gap-4 text-lg text-center font-poppins tracking-wider px- z-10 ">
        <p>⚡ Fast Charging</p>
        <p>⚡ Support All EVs</p>
        <p>⚡ Transparent Pricing</p>
      </div>

      {/* Scroll Down Footer */}
      <div className="mt-auto mb-8 lg:mb-12 text-center w-full px-4 z-10">
        <div 
          className="w-12 h-20 mx-auto mt-4 bg-secondary rounded-full mb-4 flex items-center justify-center animate-bounce cursor-pointer"
          onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
        >
          <img src={dArrow} alt="Down Arrow" className="w-6 h-6" />
        </div>
        <p className="text-white text-xl md:text-2xl font-poppins font-bold"> 
          Plug In. <span className="text-orange-500 animate-pulse">Power Up.</span> Drive On
        </p>
      </div>
    </div>
  );
}
