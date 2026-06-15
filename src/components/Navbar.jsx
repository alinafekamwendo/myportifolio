"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? "py-3 bg-white/85 dark:bg-slate-950/85 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800/50 shadow-sm"
        : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold transition-colors hover:text-indigo-500 text-slate-900 dark:text-white">
            ALINAFE KAMWENDO<span className="text-indigo-500">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                className={`nav-link text-sm font-medium transition-colors hover:text-indigo-500 ${
                  pathname === link.path
                    ? "text-indigo-500"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {link.title}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-300 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              aria-label="Toggle theme"
            >
              <svg className="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
              <svg className="w-5 h-5 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </button>

            <Link
              href="/contact"
              className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-all duration-300 active:scale-95"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-300 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400"
              aria-label="Toggle theme"
            >
              <svg className="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
              <svg className="w-5 h-5 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center text-slate-900 dark:text-white"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 bg-slate-900 dark:bg-white ${isOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 top-2 w-6 h-0.5 transition-all duration-300 bg-slate-900 dark:bg-white ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 bg-slate-900 dark:bg-white ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-lg border-b bg-white/95 dark:bg-slate-950/95 border-slate-200 dark:border-slate-800/50"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.path}
                    onClick={closeMenu}
                    className={`text-lg font-medium py-2 transition-colors hover:text-indigo-500 ${
                      pathname === link.path
                        ? "text-indigo-500"
                        : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="mt-4 px-5 py-3 bg-indigo-600 text-white text-center text-sm font-medium rounded-lg"
                >
                  Let&apos;s Talk
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
