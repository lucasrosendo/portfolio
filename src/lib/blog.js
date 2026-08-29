import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
// Content pipeline: every post is a Markdown/MDX file with a YAML
// frontmatter block (slug, title, date, author, tags, coverImage, excerpt,
// readingTime). Files live in src/content/blog and are read from disk at
// build time only — this module imports `fs`/`path` at the top level, so it
// must never be imported from a Client Component (import `withBasePath`
// from '@/lib/assetPath' directly there instead). That's all compatible
// with `output: 'export'` because every page using this module is fully
// static.
//
// Bilingual convention: a post is one or two files sharing a slug,
// disambiguated by a locale suffix — `<slug>.en.mdx` / `<slug>.pt.mdx`. A
// post only needs one language to exist; the UI falls back to whichever
// locale is available and shows a small "not translated yet" note.
const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/blog');
const FILENAME_PATTERN = /^(.+)\.(en|pt)\.mdx?$/;

function hasCoverImageAsset(coverImage) {
  if (!coverImage) return false;
  // coverImage is a public/-relative path (e.g. "/images/devlogs/x.png").
  // Static export can't validate that at request time, so we check the
  // file exists on disk at build time and gracefully drop the field
  // instead of shipping a broken <img>.
  const relativePath = coverImage.replace(/^\//, '');
  const fullPath = path.join(process.cwd(), 'public', relativePath);
  return fs.existsSync(fullPath);
}

function listFilesBySlug() {
  if (!fs.existsSync(POSTS_DIRECTORY)) return new Map();

  const bySlug = new Map();
  for (const filename of fs.readdirSync(POSTS_DIRECTORY)) {
    const match = filename.match(FILENAME_PATTERN);
    if (!match) continue;
    const [, slugFromFilename, locale] = match;
    if (!bySlug.has(slugFromFilename)) bySlug.set(slugFromFilename, {});
    bySlug.get(slugFromFilename)[locale] = filename;
  }
  return bySlug;
}

function readFrontmatter(filename) {
  const fullPath = path.join(POSTS_DIRECTORY, filename);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);

  return {
    title: data.title || filename,
    date: data.date || null,
    author: data.author || 'Lucas Rosendo',
    tags: data.tags || [],
    coverImage: hasCoverImageAsset(data.coverImage) ? data.coverImage : null,
    excerpt: data.excerpt || '',
    readingTime: data.readingTime || null,
    content,
  };
}

async function renderMarkdown(markdown) {
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);
  return processed.toString();
}

export function getAllPostSlugs() {
  return Array.from(listFilesBySlug().keys());
}

// Returns every post with BOTH locale variants (whichever exist) already
// resolved, so a Client Component can pick pt/en at render time without
// touching the filesystem itself.
export function getAllBilingualPosts() {
  const bySlug = listFilesBySlug();
  const posts = [];

  for (const [slug, files] of bySlug.entries()) {
    const entry = { slug, en: null, pt: null };
    for (const locale of ['en', 'pt']) {
      if (files[locale]) {
        entry[locale] = { slug, ...readFrontmatter(files[locale]) };
      }
    }
    posts.push(entry);
  }

  const sortDate = (post) => post.en?.date || post.pt?.date || 0;
  return posts.sort((a, b) => new Date(sortDate(b)) - new Date(sortDate(a)));
}

export async function getBilingualPost(slug) {
  const bySlug = listFilesBySlug();
  const files = bySlug.get(slug);
  if (!files) return null;

  const entry = { slug, en: null, pt: null };
  for (const locale of ['en', 'pt']) {
    if (files[locale]) {
      const { content, ...meta } = readFrontmatter(files[locale]);
      entry[locale] = { slug, ...meta, contentHtml: await renderMarkdown(content) };
    }
  }
  return entry;
}
