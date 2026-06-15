export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-950 z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-400 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}
