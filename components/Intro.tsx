"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

const typingText = "Full Stack Developer | Tech Lead | Problem Solver";

const Intro = () => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < typingText.length) {
        setDisplayedText(typingText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="flex z-50 flex-col items-start gap-10 py-10 w-full max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex items-center gap-6"
      >
        <Image
          src="https://ataaman.github.io/myPortfolio/assets/6563382.png"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full border-2 border-primary/20 h-24 w-24 object-cover shadow-xl"
        />
        <div className="flex flex-col text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-white">
            Aman
          </h1>
          <p className="text-primary/70 dark:text-slate-300 font-medium text-lg mt-2 h-7 font-mono">
            {displayedText}
            <span className="animate-pulse">_</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="space-y-4 text-slate-800 font-light dark:text-slate-300 md:text-lg leading-relaxed text-left max-w-2xl">
          <p>
            Full Stack Developer with 1.5–2 years of experience building scalable
            web applications using Next.js, Node.js, and TypeScript.
          </p>
          <p>
            Currently working as a <strong className="font-medium text-primary dark:text-white">Tech Lead at <a href="https://sunkode.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600 dark:text-blue-400">Sunkode</a></strong>, driving product
            architecture, performance optimization, and scalable feature development.
          </p>
          <p>
            Focused on building fast, reliable, and business-driven products.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground dark:bg-white dark:text-black font-medium flex items-center gap-2 shadow-lg"
            >
              View Projects <ArrowRight size={18} />
            </motion.button>
          </Link>
          <motion.a
            href="./Resume.pdf"
            download="Aman_Resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-md border border-primary/20 dark:border-white/20 bg-secondary/50 dark:bg-white/5 backdrop-blur-sm hover:bg-secondary dark:hover:bg-white/10 font-medium flex items-center gap-2 transition-colors"
          >
            Download Resume <Download size={18} />
          </motion.a>
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-md border border-primary/20 dark:border-white/20 bg-secondary/50 dark:bg-white/5 backdrop-blur-sm hover:bg-secondary dark:hover:bg-white/10 font-medium flex items-center gap-2 transition-colors"
            >
              Contact Me <Mail size={18} />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
