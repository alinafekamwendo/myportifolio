"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "./HeroSection";

const AnimatedBackground = dynamic(() => import("./AnimatedBackground"), {
  ssr: false,
});

const AchievementsSection = dynamic(() => import("./AchievementsSection"), {
  loading: () => <div className="h-64" />,
});

const ProjectsSection = dynamic(() => import("./ProjectsSection"), {
  loading: () => <div className="min-h-[600px]" />,
});

const AboutSection = dynamic(() => import("./AboutSection"), {
  loading: () => <div className="min-h-[600px]" />,
});

const EmailSection = dynamic(() => import("./EmailSection"), {
  loading: () => <div className="min-h-[600px]" />,
});

export default function HomeContent() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="h-64" />}>
        <AchievementsSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <EmailSection />
      </Suspense>
    </>
  );
}
