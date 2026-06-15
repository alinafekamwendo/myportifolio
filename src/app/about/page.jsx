import AboutSection from "../../components/AboutSection";

export const metadata = {
  title: "About",
  description: "Learn about Alinafe Kamwendo's skills, experience, and journey as a full-stack developer.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-transparent to-blue-50 dark:from-indigo-950/20 dark:via-transparent dark:to-blue-950/20 pointer-events-none" />
        <div className="container mx-auto px-6 pt-16 pb-8 text-center relative">
          <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400 mb-3 tracking-wide uppercase">About</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg mb-4">
            A passionate developer dedicated to building solutions that make a difference
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-slate-400 dark:text-slate-500">
            <span>Full-Stack Developer</span>
            <span className="w-1 h-1 rounded-full bg-indigo-400" />
            <span>Malawi</span>
            <span className="w-1 h-1 rounded-full bg-indigo-400" />
            <span>7+ Years Experience</span>
          </div>
        </div>
      </div>
      <AboutSection standalone />
    </div>
  );
}
