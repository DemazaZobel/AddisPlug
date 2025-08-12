import React, { useState, useEffect } from "react";


export default function Header() {
  // Removed menuOpen as it's unused
  const [activeTab, setActiveTab] = useState("home");
  const menuItems = ["Home", "Services", "Station", "About", "Contact"];

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) ;
      setActiveTab("home"); // Reset to home on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer for active tab
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // Higher threshold so section is more visible before activating
         // Trigger slightly earlier/later on top and bottom
      }
    );
    

    menuItems.forEach(item => {
      const element = document.getElementById(item.toLowerCase().replace(/\s+/g, ""));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[85%] md:w-[500px] bg-white/80 backdrop-blur-md py-3 px-4 sm:px-6 z-[999] shadow-sm rounded-2xl sm:rounded-3xl h-18 p-5">
      <div className="flex items-center justify-center relative p-2">
        {/* Navigation for all screen sizes */}
        <nav className="flex space-x-4 sm:space-x-6 font-poppins">
          {menuItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xs sm:text-sm md:text-base transition-all duration-300 font-medium relative group p-1 ${
                activeTab === item.toLowerCase() ? "text-green-500" : "text-gray-700"
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                  activeTab === item.toLowerCase() ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
