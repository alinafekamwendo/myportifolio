"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
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
            className="text-sm font-medium mb-4 text-indigo-400"
          >
            Hello, I&apos;m Alinafe Kamwendo
          </motion.p>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
            Building Exceptional
            <br />
            <span className="text-indigo-600 dark:text-indigo-400">Digital Experiences</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mb-8 text-lg text-slate-600 dark:text-slate-400 max-w-xl"
          >
            Full-stack developer crafting scalable web and mobile solutions that drive business growth and user engagement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/#projects"
                className="btn-primary ripple-btn"
              >
                View My Work
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/cv/Alinafe_Kamwendo_CV.pdf"
                download="Alinafe_Kamwendo_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500"
              >
                Download CV
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="relative w-72 h-72 rounded-full mx-auto overflow-hidden shadow-2xl border-4 border-slate-200 dark:border-slate-800">
              <Image
                src="/images/alinafe-image.png"
                alt="Alinafe Kamwendo"
                fill
                sizes="288px"
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg4IiBoZWlnaHQ9IjI4OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjNjM2NkYxIiB3aWR0aD0iMjg4IiBoZWlnaHQ9IjI4OCIgcng9IjE0NCIvPjwvc3ZnPg=="
              />
            </div>
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-indigo-500 dark:bg-indigo-400"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: -2 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-blue-500 dark:bg-blue-400"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
