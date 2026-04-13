"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "./ThemeProvider";

const achievementsList = [
  { metric: "Projects Delivered", value: 30, postfix: "+" },
  { metric: "Years Experience", value: 7, postfix: "+" },
  { metric: "Happy Clients", value: 25, postfix: "+" },
];

const AchievementsSection = () => {
  const { theme, mounted } = useTheme();
  const isDark = mounted && theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={`py-12 ${isDark ? 'bg-slate-900/30 border-y border-slate-800/30' : 'bg-slate-100/50 border-y border-slate-200/50'}`}>
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid grid-cols-3 gap-8">
          {achievementsList.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {isInView ? (
                  <CountUp end={achievement.value} duration={2} className={isDark ? 'text-white' : 'text-slate-900'} />
                ) : 0}
                {achievement.postfix}
              </h2>
              <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{achievement.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;