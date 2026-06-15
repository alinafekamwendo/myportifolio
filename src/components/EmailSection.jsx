"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/alinafekamwendo", icon: GithubIcon },
  { name: "LinkedIn", url: "https://mw.linkedin.com/in/alinafe-kamwendo-568585197", icon: LinkedinIcon },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const EmailSection = ({ standalone = false }) => {
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
    <section id={standalone ? undefined : "contact"} className={standalone ? "py-16" : "py-24 bg-slate-50 dark:bg-slate-950"}>
      <div className="container mx-auto px-6">
        {!standalone && (
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
              >
                Let&apos;s Work Together
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300"
              >
                Have a project in mind? I&apos;d love to hear about it.
              </motion.p>
            </div>
          </ScrollReveal>
        )}

        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollReveal delay={100}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Get In Touch</h3>
                <p className="mb-8 leading-relaxed text-slate-600 dark:text-slate-300">
                  Whether you have a question about my services or just want to say hello, 
                  I&apos;ll try my best to get back to you as soon as possible.
                </p>
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    ),
                    label: "Email",
                    value: "kamwendoalina@gmail.com",
                    href: "mailto:kamwendoalina@gmail.com",
                  },
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    ),
                    label: "Phone",
                    value: "+265 993 925 060",
                    href: "tel:+265993925060",
                  },
                  {
                    icon: (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </>
                    ),
                    label: "Location",
                    value: "Lilongwe, Malawi",
                  },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-indigo-100 dark:bg-indigo-600/20">
                      <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="hover:text-indigo-500 transition-colors text-slate-900 dark:text-white">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 dark:text-white">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-6 border-t border-slate-200 dark:border-slate-800/50"
              >
                <p className="text-sm mb-4 text-slate-500 dark:text-slate-400">Connect with me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.div
                      key={social.name}
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={social.url}
                        target="_blank"
                        className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500"
                      >
                        <Image src={social.icon} alt={`${social.name} Icon`} className="w-6 h-6" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 shadow-lg dark:shadow-none"
            >
              {emailSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-green-100 dark:bg-green-600/20">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-white">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-300">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div variants={fadeUp}>
                      <label className="text-sm font-medium mb-2 block text-slate-700 dark:text-white">Full Name</label>
                      <input
                        name="fullName"
                        type="text"
                        required
                        className="w-full rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                        placeholder="John Doe"
                      />
                    </motion.div>
                    <motion.div variants={fadeUp}>
                      <label className="text-sm font-medium mb-2 block text-slate-700 dark:text-white">Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={fadeUp}>
                    <label className="text-sm font-medium mb-2 block text-slate-700 dark:text-white">Subject</label>
                    <input
                      name="subject"
                      type="text"
                      required
                      className="w-full rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                      placeholder="Project Inquiry"
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="text-sm font-medium mb-2 block text-slate-700 dark:text-white">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 resize-none bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    variants={fadeUp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </motion.button>
                </motion.form>
              )}
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
