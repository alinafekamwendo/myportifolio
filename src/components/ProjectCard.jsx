import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const ProjectCard = ({ project, showMetrics = false }) => {
  const { theme, mounted } = useTheme();
  const isDark = mounted && theme === "dark";
  
  const { title, description, image, gitUrl, previewUrl, metrics, tags, techStack } = project;
  
  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2
      ${isDark 
        ? 'bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/50' 
        : 'bg-white border border-slate-200 shadow-lg hover:shadow-xl'}`}>
      {/* Image Container */}
      <div className="relative h-56 md:h-64 group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 flex items-end p-4 transition-opacity duration-300
          ${isDark ? 'bg-black/40' : 'bg-black/20'}`}>
          <div className="w-full flex justify-between">
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300
                ${isDark ? 'bg-white/20 text-slate-200 hover:bg-white/30 hover:text-white' : 'bg-white/80 text-slate-700 hover:bg-white hover:text-slate-900'}`}
            >
              <CodeBracketIcon className="h-5 w-5 mr-2" />
              <span>Source</span>
            </Link>
            {previewUrl && previewUrl !== "#" && (
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300
                  ${isDark ? 'bg-white/20 text-slate-200 hover:bg-white/30 hover:text-white' : 'bg-white/80 text-slate-700 hover:bg-white hover:text-slate-900'}`}
              >
                <EyeIcon className="h-5 w-5 mr-2" />
                <span>Live</span>
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        <p className={`mb-4 line-clamp-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className={`px-3 py-1 text-xs font-medium rounded-full
              ${isDark ? 'bg-slate-800/50 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span key={index} className={`px-2 py-0.5 text-xs font-medium rounded
              ${isDark ? 'bg-indigo-600/20 text-indigo-300' : 'bg-indigo-50 text-indigo-600'}`}>
              {tech}
            </span>
          ))}
        </div>
        
        {showMetrics && metrics && (
          <div className={`grid grid-cols-2 gap-4 mt-4 pt-4 border-t ${isDark ? 'border-slate-800/50' : 'border-slate-200'}`}>
            {Object.entries(metrics).slice(0, 2).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </p>
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;