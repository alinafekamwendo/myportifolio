import Link from "next/link";
import { blogPosts } from "../../data/blog-posts";

export const metadata = {
  title: 'Blog',
  description: "Thoughts on software development, architecture, and technology by Alinafe Kamwendo.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400 mb-3 tracking-wide uppercase">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Insights & Tutorials
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Thoughts on software development, architecture, and technology.
          </p>
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="block mb-12 group">
          <article className="relative rounded-3xl overflow-hidden glass border border-slate-200 dark:border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 card-hover">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 dark:from-indigo-500/10 dark:via-transparent dark:to-purple-500/10 pointer-events-none" />
            <div className="relative p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-600 text-white tracking-wide">
                  Featured
                </span>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                {featured.title}
              </h2>

              <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg leading-relaxed max-w-3xl">
                {featured.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-slate-400 dark:text-slate-500">
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {featured.readingTime}
                  </span>
                </div>
                <span className="text-indigo-500 dark:text-indigo-400 text-sm font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                  Read article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </Link>

        {/* Other Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="relative h-full rounded-2xl overflow-hidden glass border border-slate-200 dark:border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 card-hover flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/50">
                    <div className="flex items-center gap-4 text-sm text-slate-400 dark:text-slate-500">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readingTime}
                      </span>
                    </div>
                    <svg className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
