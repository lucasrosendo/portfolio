import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import { getAllPostSlugs, getPostBySlug, withBasePath } from '@/lib/blog';
import '@/components/Blog/styles.css';

// Static export needs every dynamic route enumerated at build time — there's
// no server around at request time to resolve an arbitrary slug.
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Lucas Rosendo`,
    description: post.excerpt,
  };
}

function formatDate(dateString) {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="post-page">
      <Link href="/blog" className="post-back-link">
        &larr; Back to blog
      </Link>

      <article className="post-article glass-panel">
        {post.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={withBasePath(post.coverImage)} alt="" className="post-cover" />
        )}

        <h1 className="post-title glow-text">{post.title}</h1>

        <div className="post-meta">
          {post.author && (
            <span>
              <User size={14} /> {post.author}
            </span>
          )}
          {post.date && (
            <span>
              <Calendar size={14} /> {formatDate(post.date)}
            </span>
          )}
          {post.readingTime && (
            <span>
              <Clock size={14} /> {post.readingTime}
            </span>
          )}
        </div>

        {post.tags?.length > 0 && (
          <div className="post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tech-badge">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </section>
  );
}
