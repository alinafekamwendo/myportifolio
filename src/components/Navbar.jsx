"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = mounted && theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? `${theme === 'dark' ? 'bg-slate-950/90' : 'bg-white/90'} backdrop-blur-md border-b ${theme === 'dark' ? 'border-slate-800/50' : 'border-slate-200'} py-4`
        : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className={`text-xl font-bold transition-colors hover:text-indigo-500 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            ALINAFE KAMWENDO<span className="text-indigo-500">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-500 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
              >
                {link.title}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            {/* <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${theme === 'dark' ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button> */}

            <Link
              href="/#contact"
              className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-10 h-10 flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${isOpen ? 'top-2 rotate-45' : 'top-0'} ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`} />
                <span className={`absolute left-0 top-2 w-6 h-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'} ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`} />
                <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${isOpen ? 'top-2 -rotate-45' : 'top-4'} ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-md border-b ${
              theme === 'dark' 
                ? 'bg-slate-950/95 border-slate-800/50' 
                : 'bg-white/95 border-slate-200'
            }`}
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium py-2 transition-colors hover:text-indigo-500 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
                  >
                    {link.title}
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-5 py-3 bg-indigo-600 text-white text-center text-sm font-medium rounded-lg"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;