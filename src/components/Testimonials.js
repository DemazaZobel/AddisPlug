import React, { useState } from "react";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("stations");
  const [menuOpen, setMenuOpen] = useState(false);

  const testimonials = [
    {
      quote:
        "As a BYD owner, finding reliable charging used to be stressful. AddisPlug changed that — it’s now quick and convenient wherever I go.",
      name: "Alemayehu K.",
      role: "BYD Owner",
      avatar: "AK",
    },
    {
      quote:
        "Driving my VW ID.4 around Addis used to give me range anxiety. Thanks to AddisPlug’s fast chargers, I now enjoy every trip worry-free.",
      name: "Selam W.",
      role: "VW ID.4 Owner",
      avatar: "SW",
    },
    {
      quote:
        "Managing a Tesla fleet in the city is easier than ever. AddisPlug’s network and business support cut our costs and keep us on the move.",
      name: "Michael T.",
      role: "Tesla Owner",
      avatar: "MT",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 bg-light">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold mb-3 text-primary">What Our Customers Say</h3>
        <p className="text-secondary max-w-2xl mx-auto">
          Hear from EV owners who use our charging network
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-navy italic mb-6">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-4">
                {testimonial.avatar}
              </div>
              <div>
                <h5 className="font-medium">{testimonial.name}</h5>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
