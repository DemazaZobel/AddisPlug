import React, { useState } from "react";

export default function Price() {
    const [activeTab, setActiveTab] = useState("services");

  const plans = [
    {
      name: "Economy",
      price: "500",
      desc: "Perfect for everyday EV users looking for affordable and reliable service.",
      features: [
        "Standard Charging (up to 22kW)",
        "Regular Maintenance",
        "Hand Car Wash by Staff",
        "24/7 Customer Support"
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "1000",
      desc: "Enhanced service for professionals and frequent drivers.",
      features: [
        "Fast Charging (up to 150kW)",
        "Priority Maintenance",
        "Machine Car Wash",
        "Advanced Customer Service"
      ],
      popular: true,
    },
    {
      name: "VIP",
      price: "2500",
      desc: "Premium hands-off experience for our most exclusive clients.",
      features: [
        "Car Pickup & Drop-off",
        "Fast Charging & Full Maintenance",
        "Machine Car Wash",
        "No Waiting — Skip the Line"
      ],
      popular: false,
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 ">
      <div className="text-center mb-16 mt-20">
        <h3 className="text-3xl font-bold mb-3">Transparent Pricing</h3>
        <p className="text-secondary max-w-2xl mx-auto">
          Choose the plan that fits your charging and car care needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-xl p-8 transition-all duration-300 hover:shadow-xl border ${
              plan.popular ? "border-green-300 bg-green-50/30 scale-105" : "border-primary  hover:scale-[1.02]"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
            <div className="flex items-end mb-4">
              <span className={`text-4xl font-bold ${plan.popular ? "text-green-600" : "text-accent"}`}>
                {plan.price}
              </span>
              <span className="text-gray-500 ml-1 mb-1">ETB / session</span>
            </div>
            <p className="text-gray-600 mb-6">{plan.desc}</p>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className={`flex-shrink-0 w-5 h-5 mr-2 mt-0.5 ${
                      plan.popular ? "text-green-500" : "text-secondary"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            
          </div>
        ))}
      </div>
    </div>
  );
}
