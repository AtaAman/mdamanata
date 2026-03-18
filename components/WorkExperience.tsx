"use client";

import { Bot, Briefcase } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Tech Lead & Full Stack Developer",
    company: "Sunkode",
    companyUrl: "https://sunkode.com/",
    date: "Nov 2025 – Present",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Leading product architecture and technical decisions.</li>
        <li>Managing client requirements & integrations.</li>
        <li>Improved performance and UX significantly.</li>
        <li>Built an advanced solar proposal editor actively used by 50+ EPC (solar companies).</li>
        <li>Handling debugging, testing, and mentoring interns.</li>
      </ul>
    ),
    isLatest: true,
    icon: <Briefcase size={16} />,
  },
  {
    title: "IT Programmer",
    company: "Tata Memorial Centre",
    companyUrl: "https://hbchrcmzp.tmc.gov.in/",
    date: "Mar 2025 – Nov 2025",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Built institutional websites and Web-EMR system.</li>
        <li>Solved long-standing system architecture issues.</li>
        <li>Ensured robust performance for healthcare use-cases.</li>
      </ul>
    ),
    isLatest: false,
    icon: <Bot size={16} />,
  },
  {
    title: "Full Stack Developer Intern",
    company: "Lead2Solar",
    companyUrl: "https://www.lead2solar.in/",
    date: "2024",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Built a lead management system.</li>
        <li>Integrated Google Sheets API for automated tracking.</li>
        <li>Implemented WhatsApp automation for leads.</li>
      </ul>
    ),
    isLatest: false,
    icon: <Bot size={16} />,
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Various Clients",
    date: "2023 - 2024",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Delivered multiple client projects combining modern design & performance.</li>
        <li>Focused on UI excellence, core web vitals, and reliable backend infrastructure.</li>
      </ul>
    ),
    isLatest: false,
    icon: <Briefcase size={16} />,
  },
];

const WorkAndEducation = () => {
  return (
    <section id="experience" className="w-full relative z-10 py-12">
      <div className="flex flex-col items-start justify-start space-y-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
        <p className="text-primary/70 dark:text-slate-300 md:text-lg max-w-2xl">
          My professional journey focused on building and scaling software systems.
        </p>
      </div>

      <div className="relative border-l-2 border-primary/20 dark:border-white/10 ml-4 md:ml-6 space-y-12 pb-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-8 md:pl-10"
          >
            {/* Timeline node */}
            <div className="absolute -left-[17px] top-1 h-8 w-8 rounded-full bg-background border-4 border-slate-900 dark:border-white text-slate-900 dark:text-white flex items-center justify-center shadow-lg">
              <span className="scale-75">{exp.icon}</span>
            </div>

            <div className="glass p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-primary dark:text-white flex items-center gap-3">
                  {exp.title}
                  {exp.isLatest && (
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                      Current
                    </span>
                  )}
                </h3>
                <time className="text-sm font-medium text-primary/60 dark:text-slate-400 font-mono bg-secondary/50 dark:bg-white/5 px-3 py-1 rounded-full w-fit">
                  {exp.date}
                </time>
              </div>
              <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4 h-6">
                {exp.companyUrl ? (
                  <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </h4>
              <div className="text-primary/70 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                {exp.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkAndEducation;
