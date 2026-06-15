"use client";
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({ project, showMetrics = false }) => {
  const { title, description, image, gitUrl, previewUrl, metrics, tags, techStack } = project;
  
  return (
    <div className="rounded-2xl overflow-hidden transition-all duration-500 card-hover cursor-pointer glass dark:glass border-slate-200 dark:border-slate-800/50 hover:border-indigo-500/50">
      <div className="relative h-56 md:h-64 group overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjMWUyOTNiIiB3aWR0aD0iNjQwIiBoZWlnaHQ9IjQwMCIvPjwvc3ZnPg=="
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-white/90 dark:from-slate-950/90 to-transparent"
        >
          <div className="w-full flex justify-between">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm glass text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
              >
                <CodeBracketIcon className="h-5 w-5 mr-2" />
                <span>Source</span>
              </Link>
            </motion.div>
            {previewUrl && previewUrl !== "#" && (
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm glass text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
                >
                  <EyeIcon className="h-5 w-5 mr-2" />
                  <span>Live</span>
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{title}</h3>
        <p className="mb-4 line-clamp-2 text-slate-600 dark:text-slate-300">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-xs font-medium rounded-full glass text-slate-600 dark:text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.08, y: -1 }}
              className="px-2 py-0.5 text-xs font-medium rounded cursor-default bg-indigo-50 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        {showMetrics && metrics && (
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/50">
            {Object.entries(metrics).slice(0, 2).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </p>
                <p className="font-semibold text-slate-900 dark:text-white">{value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
