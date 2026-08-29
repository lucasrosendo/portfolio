'use client';

import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import { withBasePath } from '@/lib/assetPath';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import './styles.css';

function formatDate(dateString, lang) {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// `entry` is { slug, en, pt } — both locale variants already compiled to
// HTML at build time. Picking one is a pure client-side concern (the
// reader's stored language preference), so this stays a Client Component
// while the page.js that fetched the content stays a plain server
// component reading the filesystem.
export default function PostView({ entry }) {
  const { lang, t } = useLanguage();

  const preferred = entry[lang];
  const fallback = entry[lang === 'pt' ? 'en' : 'pt'];
  const post = preferred || fallback;
  const translated = Boolean(preferred);

  if (!post) return null;

  return (
    <section className="post-page">
      <Link href="/blog" className="post-back-link">
        {t.blog.backLink}
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
              <Calendar size={14} /> {formatDate(post.date, lang)}
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

        {!translated && <p className="post-not-translated">{t.blog.notTranslatedNote}</p>}

        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </section>
  );
}
