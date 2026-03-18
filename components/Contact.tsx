"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="w-full relative z-10 py-16 mb-20 border-t border-primary/10 dark:border-white/10 mt-10">
      <div className="mx-auto flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-2xl px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-white">
            Let's build something <span className="text-blue-600 dark:text-blue-400">impactful</span> together.
          </h2>
          <p className="text-primary/70 dark:text-slate-300 md:text-xl font-light leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Link href="mailto:mdamanata8@gmail.com">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-lg bg-primary text-primary-foreground dark:bg-white dark:text-black px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <Mail size={20} />
                Send Email
              </motion.div>
            </Link>

            <Link href="https://www.linkedin.com/in/md-aman-ata-b9bb361bb/" target="_blank">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-lg bg-[#0077b5] text-white px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <Linkedin size={20} fill="currentColor" />
                LinkedIn
              </motion.div>
            </Link>

            <Link href="https://github.com/AtaAman" target="_blank">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-lg bg-slate-900 border border-slate-700 text-white dark:bg-black dark:border-slate-800 px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <Github size={20} />
                GitHub
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
