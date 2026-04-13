"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/alinafekamwendo", icon: GithubIcon },
  { name: "LinkedIn", url: "https://mw.linkedin.com/in/alinafe-kamwendo-568585197", icon: LinkedinIcon },
];

const EmailSection = () => {
  const { theme, mounted } = useTheme();
  const isDark = mounted && theme === "dark";
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      fullName: e.target.fullName.value,
    };
    
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      if (response.status === 200) setEmailSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Let's Work Together
          </h2>
          <p className={`max-w-3xl mx-auto text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Get In Touch</h3>
              <p className={`mb-8 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Whether you have a question about my services or just want to say hello, 
                I'll try my best to get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-indigo-600/20' : 'bg-indigo-100'}`}>
                  <svg className={`w-6 h-6 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Email</p>
                  <a href="mailto:kamwendoalina@gmail.com" className={`hover:text-indigo-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    kamwendoalina@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-indigo-600/20' : 'bg-indigo-100'}`}>
                  <svg className={`w-6 h-6 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Phone</p>
                  <a href="tel:+265993925060" className={`hover:text-indigo-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    +265 993 925 060
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-indigo-600/20' : 'bg-indigo-100'}`}>
                  <svg className={`w-6 h-6 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Location</p>
                  <p className={isDark ? 'text-white' : 'text-slate-900'}>Lilongwe, Malawi</p>
                </div>
              </div>
            </div>

            <div className={`pt-6 border-t ${isDark ? 'border-slate-800/50' : 'border-slate-200'}`}>
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300
                      ${isDark ? 'bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500' : 'bg-slate-100 border border-slate-200 hover:border-indigo-500'}`}
                  >
                    <Image src={social.icon} alt={`${social.name} Icon`} className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 ${isDark ? 'bg-slate-900/50 border border-slate-800/50' : 'bg-white border border-slate-200 shadow-lg'}`}
          >
            {emailSubmitted ? (
              <div className="text-center py-12">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${isDark ? 'bg-green-600/20' : 'bg-green-100'}`}>
                  <svg className={`w-8 h-8 ${isDark ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className={`text-2xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Message Sent!</h3>
                <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className={`text-sm font-medium mb-2 block ${isDark ? 'text-white' : 'text-slate-700'}`}>Full Name</label>
                    <input
                      name="fullName"
                      type="text"
                      required
                      className={`w-full rounded-lg px-4 py-3 transition-colors focus:outline-none focus:border-indigo-500
                        ${isDark ? 'bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500' : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400'}`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className={`text-sm font-medium mb-2 block ${isDark ? 'text-white' : 'text-slate-700'}`}>Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className={`w-full rounded-lg px-4 py-3 transition-colors focus:outline-none focus:border-indigo-500
                        ${isDark ? 'bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500' : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400'}`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={`text-sm font-medium mb-2 block ${isDark ? 'text-white' : 'text-slate-700'}`}>Subject</label>
                  <input
                    name="subject"
                    type="text"
                    required
                    className={`w-full rounded-lg px-4 py-3 transition-colors focus:outline-none focus:border-indigo-500
                      ${isDark ? 'bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500' : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400'}`}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className={`text-sm font-medium mb-2 block ${isDark ? 'text-white' : 'text-slate-700'}`}>Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className={`w-full rounded-lg px-4 py-3 transition-colors focus:outline-none focus:border-indigo-500 resize-none
                      ${isDark ? 'bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500' : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400'}`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2
                    ${isDark ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-600 text-white hover:bg-indigo-700'}
                    disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;