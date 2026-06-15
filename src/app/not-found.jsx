import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
      <div className="text-center max-w-md px-6">
        <h1 className="text-8xl font-bold text-indigo-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Page Not Found</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
