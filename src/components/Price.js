import React, { useState } from "react";

export default function Price() {
  const [activeTab, setActiveTab] = useState("services");

  const plans = [
    {
      name: "Economy",
      price: "500",
      desc: "Perfect for everyday EV users looking for affordable and reliable service.",
      features: [
        "Standard Charging",
        "Regular Maintenance",
        "Hand Car Wash",
        "12/7 Customer Support"
      ],
      color: "secondary", // Orange #E99522
      popular: false,
    },
    {
      name: "Business",
      price: "1000",
      desc: "Enhanced service for professionals and frequent drivers.",
      features: [
        "Fast Charging",
        "Priority Maintenance",
        "Machine Car Wash",
        "24/7 Customer Service"
      ],
      color: "lightPrimary", // Light Blue #4F94A8
      popular: true,
    },
    {
      name: "VIP",
      price: "2500",
      desc: "Premium hands-off experience for our most exclusive clients.",
      features: [
        "VIP Fast Charging",
        "VIP Maintenance", 
        "VIP Machine Car Wash", 
        "24/7 Customer Service",
        "Car Pickup & Drop-off",
        "No Waiting — Skip the Line", 
      ], 
      color: "green",
      popular: false,
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 ">
      <div className="text-center mb-16 mt-20">
        <h3 className="text-3xl font-bold mb-3">Our Services</h3>
        <p className="text-secondary max-w-2xl mx-auto">
          Choose the plan that fits your EV station needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => {
          const colorClasses =
            plan.color === "secondary"
              ? {
                  border: "border-[#E99522]",
                  bg: "bg-[#E99522]/10",
                  text: "text-[#E99522]",
                  check: "text-[#E99522]",
                  badgeBg: "bg-[#E99522]"
                }
              : plan.color === "lightPrimary"
              ? {
                  border: "border-[#4F94A8]",
                  bg: "bg-[#4F94A8]/10",
                  text: "text-[#4F94A8]",
                  check: "text-[#4F94A8]",
                  badgeBg: "bg-[#4F94A8]"
                }
              : {
                  border: "border-green-300",
                  bg: "bg-green-500/10",
                  text: "text-green-600",
                  check: "text-green-500",
                  badgeBg: "bg-green-500"
                };

          return (
            <div
              key={index}
              className={`relative rounded-xl p-8 transition-all duration-300 hover:shadow-xl border hover:scale-[1.02] ${colorClasses.border} ${colorClasses.bg}`}
            >
              {plan.popular && (
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${colorClasses.badgeBg} text-white text-xs font-bold px-4 py-1 rounded-full`}>
                  MOST POPULAR
                </div>
              )}

              <div className="flex gap-2 text-2xl">
                <h4 className="font-bold mb-2">{plan.name}</h4>
                <span className={colorClasses.text}>Service</span>
              </div>
              <div className="flex items-end mb-4">
                <span className={`text-4xl font-bold ${colorClasses.text}`}>
                  {plan.price}
                </span>
                <span className="text-gray-500 ml-1 mb-1">ETB / session</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.desc}</p>

              <h1 className="text-xl font-bold mb-4">Our Services</h1>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className={`flex-shrink-0 w-5 h-5 mr-2 mt-0.5 ${colorClasses.check}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={`font-bold ${colorClasses.text}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
