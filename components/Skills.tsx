"use client";

import React from "react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "TypeScript", "JavaScript", "OOPs"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL", "SQL", "Prisma"],
  },
  {
    category: "DevOps & Tools",
    skills: ["AWS", "Vercel", "Docker", "Git", "GitHub", "Monorepo", "Turborepo", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full relative z-10 py-12">
      <div className="flex flex-col items-start justify-start space-y-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Arsenal</h2>
        <p className="text-primary/70 dark:text-slate-300 md:text-lg max-w-2xl">
          Technologies and tools I leverage to build scalable, high-performance systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass p-6 rounded-xl border border-primary/10 dark:border-white/10 hover:border-primary/30 dark:hover:border-white/30 transition-colors"
          >
            <h3 className="text-xl font-bold text-primary dark:text-white mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className="bg-secondary/60 dark:bg-white/10 text-primary dark:text-slate-100 px-3 py-1.5 rounded-md cursor-default text-sm font-medium hover:bg-slate-200 dark:hover:bg-white/20 transition-colors shadow-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
