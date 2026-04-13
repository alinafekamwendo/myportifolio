"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const Footer = () => {
  const { theme, mounted } = useTheme();
  const isDark = mounted && theme === "dark";
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/alinafekamwendo" },
    { name: "LinkedIn", url: "https://mw.linkedin.com/in/alinafe-kamwendo-568585197" },
  ];

  return (
    <footer className={isDark ? 'bg-slate-900/50 border-t border-slate-800/50' : 'bg-white border-t border-slate-200'}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className={`text-xl font-bold transition-colors hover:text-indigo-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              AK<span className="text-indigo-500">.</span>
            </Link>
            <p className={`mt-4 max-w-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Building exceptional digital experiences that drive business growth and user engagement.
            </p>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.path} className={`text-sm transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className={`text-sm transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${isDark ? 'border-t border-slate-800/50' : 'border-t border-slate-200'}`}>
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            © {currentYear} Alinafe Kamwendo. All rights reserved.
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Crafted with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;