import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/alinafekamwendo" },
    { name: "LinkedIn", url: "https://mw.linkedin.com/in/alinafe-kamwendo-568585197" },
  ];

  return (
    <footer className="transition-colors duration-300 bg-white dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold transition-colors hover:text-indigo-500 text-slate-900 dark:text-white">
              AK<span className="text-indigo-500">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-slate-500 dark:text-slate-400">
              Building exceptional digital experiences that drive business growth and user engagement.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.path} className="nav-link text-sm transition-colors hover:text-indigo-500 text-slate-500 dark:text-slate-400">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="nav-link text-sm transition-colors hover:text-indigo-500 text-slate-500 dark:text-slate-400">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-slate-200 dark:border-slate-800/50">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            &copy; {currentYear} Alinafe Kamwendo. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500">
            Designed and Developed by Alinafe Kamwendo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
