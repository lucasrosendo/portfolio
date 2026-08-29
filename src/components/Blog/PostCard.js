import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { withBasePath } from '@/lib/blog';
import './styles.css';

function formatDate(dateString) {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="post-card glass-panel">
      {post.coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={withBasePath(post.coverImage)} alt="" className="post-card-cover" />
      )}
      <div className="post-card-body">
        <div className="post-card-tags">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tech-badge">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="post-card-title">{post.title}</h3>
        <p className="post-card-excerpt">{post.excerpt}</p>
        <div className="post-card-meta">
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
      </div>
    </Link>
  );
}
