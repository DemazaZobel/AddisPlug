import React, { useState, useEffect } from "react";
import burger from "../assets/burger.png";
import closeBurger from "../assets/closeBurger.png";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const menuItems = ["Home", "Services","Station", "About", "Contact"];

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
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
      { threshold: 0.5 }
    );

    menuItems.forEach(item => {
      const element = document.getElementById(item.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-6 left-1/2  transform -translate-x-1/2 w-[85%] md:w-[500px] bg-white/80 backdrop-blur-md py-3 px-4 sm:px-6 z-[999] shadow-sm rounded-2xl sm:rounded-3xl h-18 p-5">
      <div className="flex items-center justify-center relative p-2">
        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-poppins">
          {menuItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm sm:text-base transition-all duration-300 font-medium relative group p-1 ${
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

        {/* Mobile Burger Button */}
        <button
          className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <img
            src={menuOpen ? closeBurger : burger}
            alt={menuOpen ? "Close menu" : "Open menu"}
            className="h-6 w-6"
            onError={(e) => {
              e.target.src = menuOpen ? burger : closeBurger; // Fallback
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 z-40 mt-0 pt-20">
          {menuItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-2xl font-medium ${
                activeTab === item.toLowerCase() ? "text-green-500" : "text-gray-700"
              } hover:text-green-500 transition-colors`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
