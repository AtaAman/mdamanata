"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "180+", label: "Daily Users (SIF360)" },
  { value: "300+", label: "Funds Data Integrated" },
];

const Stats = () => {
  return (
    <div className="w-full flex-col z-50 mb-10 py-10 border-y border-primary/10 dark:border-white/10 glass bg-primary/5 rounded-xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center justify-center text-center space-y-2"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-primary dark:text-white">
              {stat.value}
            </h3>
            <p className="text-sm md:text-base text-primary/70 dark:text-slate-300 font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
