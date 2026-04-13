"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const HeroSection = () => {
  const { theme, mounted } = useTheme();
  const isDark = mounted && theme === "dark";

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'}`} />
      
      <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 lg:pr-12 mb-10 lg:mb-0 text-center lg:text-left"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-sm font-medium mb-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}
          >
            Hello, I'm Alinafe Kamwendo
          </motion.p>
          <h1 className={`mb-6 text-4xl md:text-5xl lg:text-6xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Building Exceptional
            <br />
            <span className={isDark ? 'text-indigo-400' : 'text-indigo-600'}>Digital Experiences</span>
          </h1>
          <p className={`mb-8 text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'} max-w-xl`}>
            Full-stack developer crafting scalable web and mobile solutions that drive business growth and user engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/#projects"
              className="px-8 py-3 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg bg-indigo-600 text-white hover:bg-indigo-700"
            >
              View My Work
            </Link>
            <Link
              href="/cv/Alinafe_Kamwendo_CV.pdf"
              download="Alinafe_Kamwendo_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 border font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1
                ${isDark ? 'border-slate-600 text-slate-300 hover:border-indigo-400 hover:text-indigo-400' : 'border-slate-300 text-slate-700 hover:border-indigo-600 hover:text-indigo-600'}`}
            >
              Download CV
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 hidden lg:block"
        >
          <div className="relative ">
            <div className={`relative w-72 h-72 rounded-full mx-auto bg-red-600 overflow-hidden shadow-2xl 
              ${isDark ? 'border-4 border-slate-800' : 'border-4 border-slate-200'}`}>
              <Image
                src="/images/alinafe-image.png"
                alt="Alinafe Kamwendo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 ${isDark ? 'bg-indigo-500' : 'bg-indigo-400'}`} />
            <div className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20 ${isDark ? 'bg-blue-500' : 'bg-blue-400'}`} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;