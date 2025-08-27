import React from "react";
import telebirr from "../assets/telebirr.png";
import plug from "../assets/charge.png";
import location from "../assets/location.png";
import washManual from "../assets/manual.png";
import washMachine from "../assets/automatic.png";
import carWashMain from "../assets/Scene 15.png"; 

export default function Cards() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 m-40">
      {/* EV Charging Section */}
      <div className="mb-16 mt-10">
        <h1 className="text-3xl font-bold text-lightPrimary">Charging Service</h1>
        <br />
        <p className="text-secondary max-w-2xl mx-auto text-center -mb-8">
          Charge your electric vehicle in just three simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
        {[
          {
            icon: <img className="rounded-xl h-10 w-10" src={location} alt="Locate" />,
            title: "Step 1: Locate",
            desc: "Find AddisPlug charging station with our real-time map",
            bg: "from-green-200 to-teal-200",
            sectionId: "station", // <-- scroll to this section
          },
          {
            icon: <img className="rounded-xl h-10 w-10" src={plug} alt="Plug In" />,
            title: "Step 2: Plug In",
            desc: "Connect your EV using our charging ports",
            bg: "from-green-200 to-teal-200",
          },
          {
            icon: <img className="rounded-xl h-10 w-10" src={telebirr} alt="Pay" />,
            title: "Step 3: Charge & Pay",
            desc: "Monitor your session and pay seamlessly via Telebirr app",
            bg: "from-green-200 to-teal-200",
          },
        ].map((step, index) => (
          <div
            key={index}
            className="group perspective-1000 cursor-pointer"
            onClick={() => {
              if (step.sectionId) {
                scrollToSection(step.sectionId); // scroll instead of navigate
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector(".card-inner").style.transform =
                "rotateY(15deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector(".card-inner").style.transform =
                "rotateY(0deg)";
            }}
          >
            <div className="card-inner relative h-full transition-transform duration-500 ease-in-out transform-style-preserve-3d">
              <div
                className={`bg-gradient-to-br ${step.bg} p-6 rounded-2xl shadow-md h-full transition-all duration-500 group-hover:shadow-lg`}
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4 text-3xl bg-white rounded-2xl shadow-sm">
                  {step.icon}
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                </div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Car Washing Section */}
      <div className="top-10">
        <h3 className="text-3xl font-bold mb-4 text-lightPrimary">Washing Services</h3>
        <p className="text-secondary max-w-2xl mx-auto text-center mb-6">
          Keep your vehicle clean while it charges. Choose between manual or automated washing options.
        </p>

        <div className="w-full mb-10">
          <img
            src={carWashMain}
            alt="Car being washed"
            className="rounded-2xl shadow-lg mx-auto max-h-[400px] w-full object-cover"
          />
        </div>
      </div>

      {/* Manual & Machine Washing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {[
          {
            icon: <img className="rounded-xl h-16 w-16" src={washManual} alt="Manual Wash" />,
            title: "Manual Car Wash",
            desc: "Professionally hand-washed with care for delicate finishes and thorough cleaning.",
            bg: "from-green-200 to-teal-200",
          },
          {
            icon: <img className="rounded-xl h-16 w-16" src={washMachine} alt="Machine Wash" />,
            title: "Automated Car Wash",
            desc: "Quick and efficient machine wash to get your car sparkling clean in minutes.",
            bg: "from-green-200 to-teal-200",
          },
        ].map((wash, index) => (
          <div
            key={index}
            className="group"
            onMouseEnter={(e) => {
              e.currentTarget.querySelector(".card-inner").style.transform =
                "rotateY(15deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector(".card-inner").style.transform =
                "rotateY(0deg)";
            }}
          >
            <div className="card-inner relative h-full transition-transform duration-500 ease-in-out transform-style-preserve-3d">
              <div
                className={`bg-gradient-to-br ${wash.bg} p-6 rounded-2xl shadow-md h-full transition-all duration-500 group-hover:shadow-lg`}
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4 text-3xl bg-white rounded-2xl shadow-sm">
                  {wash.icon}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                </div>
                <h4 className="text-xl font-semibold mb-2">{wash.title}</h4>
                <p className="text-gray-600">{wash.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
