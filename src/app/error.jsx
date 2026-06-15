"use client";

export default function Error({ error, reset }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-950 z-50">
      <div className="text-center max-w-md px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Something went wrong</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
