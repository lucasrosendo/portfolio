'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import PostCard from './PostCard';
import './styles.css';

// Resolves each bilingual post entry ({ slug, en, pt }) to the currently
// selected language, falling back to whichever locale is actually
// available so a post never disappears just because it isn't translated
// yet.
function resolvePost(entry, lang) {
  const preferred = entry[lang];
  const fallback = entry[lang === 'pt' ? 'en' : 'pt'];
  const post = preferred || fallback;
  if (!post) return null;
  return { post, translated: Boolean(preferred) };
}

export default function BlogIndexView({ posts }) {
  const { lang, t } = useLanguage();

  const resolved = posts.map((entry) => resolvePost(entry, lang)).filter(Boolean);

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2 className="glow-text section-title">{t.blog.pageTitle}</h2>
        <p className="blog-subtitle">{t.blog.pageSubtitle}</p>
      </div>

      {resolved.length === 0 ? (
        <p className="empty-state">{t.blog.emptyState}</p>
      ) : (
        <div className="post-grid">
          {resolved.map(({ post, translated }) => (
            <PostCard
              key={post.slug}
              post={post}
              lang={lang}
              note={translated ? null : t.blog.notTranslatedNote}
            />
          ))}
        </div>
      )}
    </section>
  );
}
