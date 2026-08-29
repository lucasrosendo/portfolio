import { getAllPosts } from '@/lib/blog';
import PostCard from '@/components/Blog/PostCard';
import '@/components/Blog/styles.css';

export const metadata = {
  title: 'Blog | Lucas Rosendo',
  description: 'Devlogs and technical notes from Lucas Rosendo.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2 className="glow-text section-title">Blog</h2>
        <p className="blog-subtitle">
          Devlogs, technical write-ups and progress notes — including the{' '}
          <code>/game-develop</code> series tracking a fighting-style card
          game from architecture through playtesting.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="empty-state">No posts published yet. Check back soon.</p>
      ) : (
        <div className="post-grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
