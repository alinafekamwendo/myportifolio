import ProjectsSection from "../../components/ProjectsSection";

export const metadata = {
  title: "Projects",
  description: "Explore projects built by Alinafe Kamwendo — web apps, mobile apps, and systems that solve real business problems.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-transparent to-purple-50 dark:from-indigo-950/20 dark:via-transparent dark:to-purple-950/20 pointer-events-none" />
        <div className="container mx-auto px-6 pt-16 pb-8 text-center relative">
          <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400 mb-3 tracking-wide uppercase">Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg mb-4">
            Solutions that solve real business problems and create measurable impact
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-slate-400 dark:text-slate-500">
            <span>Web Apps</span>
            <span className="w-1 h-1 rounded-full bg-indigo-400" />
            <span>Mobile Apps</span>
            <span className="w-1 h-1 rounded-full bg-indigo-400" />
            <span>Systems</span>
          </div>
        </div>
      </div>
      <ProjectsSection standalone />
    </div>
  );
}
