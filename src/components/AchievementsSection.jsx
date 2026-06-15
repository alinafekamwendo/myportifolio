"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import ScrollReveal from "./ScrollReveal";

const achievementsList = [
  { metric: "Projects Delivered", value: 30, postfix: "+" },
  { metric: "Years Experience", value: 7, postfix: "+" },
  { metric: "Happy Clients", value: 25, postfix: "+" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-12 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-3 gap-8"
          >
            {achievementsList.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  {isInView ? (
                    <CountUp end={achievement.value} duration={2.5} className="text-slate-900 dark:text-white" />
                  ) : 0}
                  {achievement.postfix}
                </h2>
                <p className="text-sm mt-2 text-slate-500 dark:text-slate-400">{achievement.metric}</p>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AchievementsSection;
