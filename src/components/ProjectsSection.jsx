"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

const projectsData = [
  {
    id: 1,
    title: "PrecBrain School Management System",
    description: "A comprehensive school management platform that streamlines administrative tasks, improves communication between teachers, students, and parents, and enhances learning outcomes through data-driven insights.",
    image: "/images/projects/precbrain.png",
    tags: ["Web", "Mobile"],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Flutter"],
    gitUrl: "https://github.com/alinafekamwendo",
    previewUrl: "https://precbrain.vercel.app/",
    metrics: { users: "500+", schools: "15+" }
  },
  {
    id: 2,
    title: "Mount Carmel Academy Website",
    description: "A fully responsive, SEO-optimized website that showcases the institution's offerings while providing easy navigation for prospective students, parents, and staff.",
    image: "/images/projects/mtcarmel.png",
    tags: ["Web"],
    techStack: ["Next.js", "Tailwind CSS", "Google Analytics"],
    gitUrl: "https://github.com/alinafekamwendo",
    previewUrl: "https://mcgacademy.vercel.app/",
    metrics: { traffic: "300%", loadTime: "2.1s" }
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "A showcase of technical expertise and professional accomplishments designed to attract clients and demonstrate capabilities in modern web development.",
    image: "/images/projects/portifolio.png",
    tags: ["Web"],
    techStack: ["Next.js 13", "TypeScript", "Tailwind CSS", "Framer Motion"],
    gitUrl: "https://github.com/alinafekamwendo/my-portfolio",
    previewUrl: "#",
    metrics: { performance: "98+", accessibility: "WCAG 2.1" }
  },
  {
    id: 4,
    title: "Kabaza business tracking system",
    description: "Offline mobile application that allows taxi or motrbike owners to track their daily business activities, including income, expenses, and customer interactions, providing insights to optimize operations and increase profitability.",
    image: "/images/projects/kabaza/kabazaapp3.jpeg",
    tags: ["Mobile"],
    techStack: ["React Native", "Node.js", "Sqlite"],
    gitUrl: "https://github.com/alinafekamwendo",
    previewUrl: "#",
    metrics: { users: "15+", drivers: "50+" }
  },
  {
    id: 5,
    title: "MangaDigital",
    description: "Operational control for construction sites, safety, inventory, payroll, and reporting, providing real-time insights and analytics to optimize operations and improve decision-making",
    image: "/images/projects/mangadigital.png",
    tags: ["Web"],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Nestjs","Tailwind CSS","Prisma ORM"],
    gitUrl: "https://github.com/alinafekamwendo",
    previewUrl: "https://mangadigital.vercel.app/login",
    metrics: { companies: "3+", sites: "10+" }
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const ProjectsSection = ({ standalone = false }) => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
      );

  return (
    <section id={standalone ? undefined : "projects"} className={standalone ? "py-16" : "py-20"}>
      <div className="container mx-auto px-6">
        {!standalone && (
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
              >
                Featured Projects
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-slate-500 dark:text-slate-400 max-w-4xl mx-auto text-lg"
              >
                Solutions that solve real business problems and create measurable impact
              </motion.p>
            </div>
          </ScrollReveal>
        )}

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Web", "Mobile"].map((filterName) => (
            <motion.button
              key={filterName}
              onClick={() => setFilter(filterName)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200
                ${filter === filterName 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25" 
                  : "bg-slate-200 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-white"}
              `}
            >
              {filterName}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <ProjectCard project={project} showMetrics={true} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
