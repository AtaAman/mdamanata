"use client";

import { Code, Globe, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectProps {
  image?: string;
  name: string;
  techStack: string[];
  shortDesc: string | React.ReactNode;
  date: string;
  Github?: string;
  LiveLink?: string;
  isFeatured?: boolean;
}

function ProjectCard({
  i,
  project,
}: {
  i: number;
  project: ProjectProps;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -5 }}
      className={`relative rounded-xl mb-10 overflow-hidden flex flex-col justify-between mx-auto w-full transition-all duration-300 group ${
        project.isFeatured
          ? "border-2 border-slate-400 dark:border-slate-600 shadow-xl dark:shadow-slate-800/50"
          : "border border-primary/10 dark:border-white/10 shadow-sm"
      }`}
    >
      {/* Dynamic background effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {project.isFeatured && (
        <div className="absolute top-4 right-4 z-10 bg-slate-900 text-white dark:bg-white dark:text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <Star size={14} className="fill-current" />
          Featured
        </div>
      )}

      <div className="h-full glass flex flex-col justify-between p-5 relative z-10">
        <div>
          {project.image && (
            <div className="mb-4 overflow-hidden rounded-lg">
              <Image
                width={900}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                src={project.image}
                alt={project.name}
              />
            </div>
          )}
          
          <h3 className="text-xl font-bold text-primary dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>
          <div className="text-sm text-primary/70 dark:text-slate-300 leading-relaxed mb-4">
            {project.shortDesc}
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 my-4">
            {project.techStack.map((tech: string) => (
               <div
                  key={tech}
                  className="text-xs font-mono font-semibold text-primary/80 dark:text-slate-300 rounded-md bg-secondary/50 dark:bg-white/10 px-2.5 py-1 backdrop-blur-sm"
                >
                  {tech}
                </div>
            ))}
          </div>
          
          <div className="flex gap-3">
            {project.LiveLink && (
              <Link target="_blank" href={project.LiveLink}>
                <motion.div whileTap={{ scale: 0.95 }} className="bg-primary text-primary-foreground dark:bg-white dark:text-black hover:opacity-90 flex gap-2 items-center px-4 py-2 rounded-md text-sm font-medium transition-opacity">
                  <Globe size={16} /> Website
                </motion.div>
              </Link>
            )}

            {project.Github && (
              <Link target="_blank" href={project.Github}>
                <motion.div whileTap={{ scale: 0.95 }} className="bg-secondary/50 dark:bg-white/10 hover:bg-secondary dark:hover:bg-white/20 border border-primary/10 dark:border-white/10 flex gap-2 items-center text-primary dark:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors backdrop-blur-sm">
                  <Code size={16} /> Code
                </motion.div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const Projects = () => {
  const data: ProjectProps[] = [
    {
      name: "SIF360",
      isFeatured: true,
      techStack: ["Next.js", "Node.js", "TypeScript", "TailwindCSS"],
      shortDesc: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Fintech platform for comparing &amp; investing in funds.</li>
          <li>Built full platform UI independently.</li>
          <li>Integrated live stock, NAV, TER APIs (300+ fund houses).</li>
          <li>Optimized SEO &amp; Core Web Vitals for 180-200 daily users.</li>
        </ul>
      ),
      date: "2025",
      LiveLink: "https://sif360.com",
    },
    {
      name: "Sunkode CRM",
      techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
      shortDesc: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Solar CRM platform managing scalable internal features.</li>
          <li>Built a solar proposal editor actively used by 50+ EPC (solar companies).</li>
          <li>Involved in product decisions, debugging, testing.</li>
          <li>Deployed and managed using AWS &amp; Vercel.</li>
        </ul>
      ),
      date: "2024",
      LiveLink: "https://sunkode.com/",
    },
    {
      name: "HBCH & RC Website (TMC)",
      techStack: ["Next.js", "TypeScript", "TailwindCSS"],
      shortDesc: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Hospital website &amp; Web EMR system for Tata Memorial Centre.</li>
          <li>Enabled online patient report system.</li>
          <li>Government-level high-availability deployment.</li>
        </ul>
      ),
      date: "2024",
      LiveLink: "https://hbchrcmzp.tmc.gov.in/",
    },
    {
      name: "Lead2Solar",
      techStack: ["React", "Node.js", "Google Sheets API", "WhatsApp API"],
      shortDesc: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Lead generation and management system.</li>
          <li>Integrated Google Sheets API for data sync.</li>
          <li>Implemented WhatsApp automation for leads.</li>
        </ul>
      ),
      date: "2024",
      LiveLink: "https://www.lead2solar.in/",
    },
    {
      image: "https://portfolio-aman-ata.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvtube.261649a8.png&w=750&q=75",
      name: "Vtube - Video Platform",
      techStack: ["React.js", "MongoDB", "Express", "Redux"],
      shortDesc: "A video platform like YouTube with streaming, tweets, likes, comments, and subscriptions.",
      date: "August 2024",
      Github: "https://github.com/AtaAman/vtube",
      LiveLink: "https://vtube-gamma.vercel.app//",
    },
  ];

  return (
    <section id="projects" className="w-full relative z-10">
      <div className="space-y-12 w-full pt-12">
        {/* Header */}
        <div className="flex flex-col items-start justify-start space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Work</h2>
          <p className="text-primary/70 dark:text-slate-300 md:text-lg max-w-2xl">
            A selection of products and systems I&apos;ve built, focusing on scalable architecture, user experience, and business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {data.map((project, idx) => (
            <ProjectCard
              key={idx}
              i={idx}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
