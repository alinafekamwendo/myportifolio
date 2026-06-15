"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skillCategories = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  "Mobile": ["Flutter", "Dart", "Firebase", "Android", "iOS"],
  "Tools": ["Git", "AWS", "Docker", "Linux", "Cybersecurity"],
};

const experienceData = [
  { role: "Software Developer", company: "Hasteal System Malawi", period: "2023 - Present" },
  { role: "Systems Analyst", company: "Dedza District Council", period: "2021 - 2023" },
  { role: "Data Officer", company: "Ministry of Health", period: "2019 - 2021" },
  { role: "Computer Science Instructor", company: "Ministry of Education", period: "2017 - 2019" },
  { role: "Google Developers Mentor", company: "Andela Learning Community", period: "2019 - 2020" },
];

const educationData = [
  { degree: "B.Ed Computer Science", institution: "University of Malawi", year: "2022" },
  { degree: "Diploma in Cybersecurity", institution: "Alison Online Learning", year: "2021" },
];

const certificationsData = [
  { name: "Google Android Developer", issuer: "Google", year: "2020" },
  { name: "DHIS2 Fundamentals", issuer: "University of Oslo", year: "2021" },
  { name: "Full Stack Web Development", issuer: "freeCodeCamp", year: "2023" },
];

const tabVariants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
};

const AboutSection = ({ standalone = false }) => {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "skills":
        return (
          <div className="space-y-6">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category}>
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-semibold mb-3 text-slate-900 dark:text-white"
                >
                  {category}
                </motion.h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      custom={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-lg text-sm border cursor-default bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700/50"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case "experience":
        return (
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-indigo-100 dark:bg-indigo-600/20">
                  <span className="text-indigo-600 dark:text-indigo-400">&#9733;</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{exp.role}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{exp.company} - {exp.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case "education":
        return (
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-100 dark:bg-blue-600/20">
                  <span className="text-blue-600 dark:text-blue-400">&#127891;</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{edu.institution} - {edu.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case "certifications":
        return (
          <div className="space-y-4">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.01, x: 4 }}
                className="flex items-center justify-between p-4 rounded-lg border transition-colors bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-700/50"
              >
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">{cert.name}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{cert.issuer}</p>
                </div>
                <span className="text-indigo-600 dark:text-indigo-400 text-sm">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        );
    }
  };

  return (
    <section id={standalone ? undefined : "about"} className={standalone ? "py-16" : "py-24 bg-slate-50 dark:bg-slate-950"}>
      <div className="container mx-auto px-6">
        {!standalone && (
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
              >
                About Me
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300"
              >
                A passionate developer dedicated to building solutions that make a difference
              </motion.p>
            </div>
          </ScrollReveal>
        )}

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal delay={100}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative mb-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-full h-80 rounded-2xl overflow-hidden relative border-4 border-slate-200 dark:border-slate-800"
                >
                  <Image src="/images/about.avif" alt="Alinafe Kamwendo" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjNjM2NkYxIiB3aWR0aD0iNjQwIiBoZWlnaHQ9IjMyMCIvPjwvc3ZnPg==" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-indigo-600 rounded-xl p-6 shadow-xl"
                >
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">7+</p>
                    <p className="text-indigo-200 text-sm">Years Experience</p>
                  </div>
                </motion.div>
              </div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white"
              >
                Transforming Ideas into Reality
              </motion.h3>
              <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
                I&apos;m a full-stack developer with a unique blend of technical expertise and teaching experience.
                My background in education has sharpened my ability to communicate complex ideas clearly.
              </p>
              <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                Whether you need a web application, mobile app, or system optimization, I bring creativity,
                reliability, and a client-focused approach to every project.
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 mb-8">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200
                      ${activeTab === tab.id
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-200 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700/50"
                      }`}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              <div className="rounded-2xl p-8 min-h-[400px] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 shadow-lg dark:shadow-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    variants={tabVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25 }}
                  >
                    {renderTabContent()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
