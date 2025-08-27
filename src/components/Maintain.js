import React from "react";
import { motion } from "framer-motion";
import maintenanceImg from "../assets/maintain.png";

export default function MaintenanceSection() {
  return (
    <div className="w-full lg:max-w-7xl mx-auto relative">
      {/* Maintenance Badge */}
      <div className="mb-12 text-center px-4 lg:px-0">
        <h1 className="text-lightPrimary text-3xl font-bold relative inline-block group text-center">
          Maintenance Service
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-1 w-0 bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-500 group-hover:w-full"></span>
        </h1>
      </div>

      {/* Maintenance Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 0.77, 0.47, 0.97] }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col lg:flex-row items-center gap-6 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl p-4 lg:p-10 mb-40 overflow-hidden relative w-full"
      >
        {/* Glowing accent */}
        <div className="absolute -right-32 -top-32 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-30 z-0" />

        {/* Image */}
        <motion.div
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full lg:w-[65%] relative z-10"
        >
          <img
            src={maintenanceImg}
            alt="EV Maintenance"
            className="w-full rounded-2xl shadow-xl object-cover h-80 md:h-96 lg:h-[28rem] transform transition-all duration-500 hover:scale-[1.015]"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60">
            <span className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Coming Soon
            </span>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="w-full lg:w-[35%] text-center relative z-10 space-y-5 lg:space-y-6 px-2 lg:px-0">
          <motion.h4
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight"
          >
            Keep Your EV in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400">
              Top Shape
            </span>
          </motion.h4>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 text-lg lg:text-xl leading-relaxed"
          >
            Regular maintenance ensures your electric vehicle runs smoothly, safely, and efficiently. 
            Trust our professional team to take care of{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              battery health, performance checks, and overall EV care
            </span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-2"
          >
            <button className="px-7 py-3.5 bg-secondary text-white font-medium rounded-full shadow-lg cursor-not-allowed opacity-70">
              Coming Soon
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
