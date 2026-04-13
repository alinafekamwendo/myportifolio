"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

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
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
      );

  const cardVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-4xl mx-auto text-lg">
            Solutions that solve real business problems and create measurable impact
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Web", "Mobile"].map((filterName) => (
            <button
              key={filterName}
              onClick={() => handleFilterChange(filterName)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${filter === filterName 
                  ? "bg-indigo-600 text-white" 
                  : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white"}
              `}
            >
              {filterName}
            </button>
          ))}
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <ProjectCard project={project} showMetrics={true} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;