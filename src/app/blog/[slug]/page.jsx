import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../../data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function ContentRenderer({ block }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">{block.text}</p>;

    case "heading": {
      const Tag = `h${block.level}`;
      const sizes = {
        2: "text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6",
        3: "text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4",
      };
      return <Tag className={sizes[block.level]}>{block.text}</Tag>;
    }

    case "code":
      return (
        <div className="mb-6 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-200 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800">
            <span className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/50" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/50" />
            <span className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/50" />
            <span className="text-xs text-slate-400 dark:text-slate-500 ml-2 font-mono">{block.language}</span>
          </div>
          <pre className="p-5 overflow-x-auto">
            <code className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-mono">{block.code}</code>
          </pre>
        </div>
      );

    case "list":
      return (
        <ul className="mb-6 space-y-3 list-none text-slate-600 dark:text-slate-300 leading-relaxed">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "blockquote":
      return (
        <blockquote className="mb-6 pl-6 border-l-4 border-indigo-500 text-slate-500 dark:text-slate-400 italic leading-relaxed text-lg bg-indigo-50/50 dark:bg-indigo-500/5 rounded-r-xl py-4 pr-6">
          {block.text}
        </blockquote>
      );

    default:
      return null;
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1] || null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors mb-12 group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <article>
            {/* Header */}
            <header className="mb-12">
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-slate-400 dark:text-slate-500 pb-8 border-b border-slate-200 dark:border-slate-800/50">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readingTime}
                </span>
              </div>
            </header>

            {/* Content */}
            <div>
              {post.content.map((block, index) => (
                <ContentRenderer key={index} block={block} />
              ))}
            </div>
          </article>

          {/* Next Post */}
          {nextPost && (
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/50">
              <p className="text-sm text-slate-400 dark:text-slate-500 mb-3">Next article</p>
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group block rounded-2xl p-6 glass border border-slate-200 dark:border-slate-800/50 hover:border-indigo-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors mb-2">
                  {nextPost.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{nextPost.excerpt}</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
