"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const skillCategories = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  "Mobile": ["Flutter", "Dart", "Firebase", "Android", "iOS"],
  "Tools": ["Git", "AWS", "Docker", "Linux", "Cybersecurity"],
};

const experienceData = [
  {
    role: "Software Developer",
    company: "Hasteal System Malawi",
    period: "2023 - Present",
  },
  {
    role: "Systems Analyst",
    company: "Dedza District Council",
    period: "2021 - 2023",
  },
  {
    role: "Data Officer",
    company: "Ministry of Health",
    period: "2019 - 2021",
  },
  {
    role: "Computer Science Instructor",
    company: "Ministry of Education",
    period: "2017 - 2019",
  },
  {
    role: "Google Developers Mentor",
    company: "Andela Learning Community",
    period: "2019 - 2020",
  },
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

const AboutSection = () => {
  const { theme, mounted } = useTheme();
  const isDark = mounted && theme === "dark";
  const [activeTab, setActiveTab] = useState("skills");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const tabs = [
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
  ];

  return (
    <section id="about" className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            About Me
          </h2>
          <p className={`max-w-3xl mx-auto text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            A passionate developer dedicated to building solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative mb-8">
              <div className={`w-full h-80 rounded-2xl overflow-hidden relative ${isDark ? 'border-4 border-slate-800' : 'border-4 border-slate-200'}`}>
                <Image src="/images/about.avif" alt="Alinafe Kamwendo" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 rounded-xl p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">7+</p>
                  <p className="text-indigo-200 text-sm">Years Experience</p>
                </div>
              </div>
            </div>

            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Transforming Ideas into Reality
            </h3>
            <p className={`mb-6 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              I'm a full-stack developer with a unique blend of technical expertise and teaching experience.
              My background in education has sharpened my ability to communicate complex ideas clearly.
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Whether you need a web application, mobile app, or system optimization, I bring creativity,
              reliability, and a client-focused approach to every project.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 
                    ${activeTab === tab.id
                      ? isDark ? "bg-indigo-600 text-white" : "bg-indigo-600 text-white"
                      : isDark ? "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50" : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className={`rounded-2xl p-8 min-h-[400px] ${isDark ? 'bg-slate-900/50 border border-slate-800/50' : 'bg-white border border-slate-200 shadow-lg'}`}>
              {activeTab === "skills" && (
                <div className="space-y-6">
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                          <span key={index} className={`px-4 py-2 rounded-lg text-sm border ${isDark ? 'bg-slate-800/50 text-slate-300 border-slate-700/50' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "experience" && (
                <div className="space-y-6">
                  {experienceData.map((exp, index) => (
                    <div key={index} className="flex gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-indigo-600/20' : 'bg-indigo-100'}`}>
                        <span className={isDark ? 'text-indigo-400' : 'text-indigo-600'}>★</span>
                      </div>
                      <div>
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h4>
                        <p className={isDark ? 'text-slate-400 text-sm' : 'text-slate-500 text-sm'}>{exp.company} - {exp.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "education" && (
                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <div key={index} className="flex gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-blue-600/20' : 'bg-blue-100'}`}>
                        <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>🎓</span>
                      </div>
                      <div>
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{edu.degree}</h4>
                        <p className={isDark ? 'text-slate-400 text-sm' : 'text-slate-500 text-sm'}>{edu.institution} - {edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "certifications" && (
                <div className="space-y-4">
                  {certificationsData.map((cert, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg border ${isDark ? 'bg-slate-800/30 border-slate-700/50' : 'bg-slate-50 border-slate-200'}`}>
                      <div>
                        <h4 className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{cert.name}</h4>
                        <p className={isDark ? 'text-slate-400 text-sm' : 'text-slate-500 text-sm'}>{cert.issuer}</p>
                      </div>
                      <span className={isDark ? 'text-indigo-400 text-sm' : 'text-indigo-600 text-sm'}>{cert.year}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;