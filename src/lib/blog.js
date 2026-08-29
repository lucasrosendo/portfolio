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
// build time only (this module must never be imported from a Client
// Component) — that's compatible with `output: 'export'` because every
// page that uses it is fully static.
const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/blog');

// coverImage in frontmatter is a plain string (not a static `import`), so
// Next can't auto-prefix it the way it does for next/link or next/image.
// Under the GitHub Pages basePath every public/-relative asset path needs
// this manual prefix or it 404s in production.
export function withBasePath(assetPath) {
  if (!assetPath) return assetPath;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${assetPath}`;
}

function readPostFile(filename) {
  const slug = filename.replace(/\.mdx?$/, '');
  const fullPath = path.join(POSTS_DIRECTORY, filename);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);

  return {
    slug: data.slug || slug,
    title: data.title || slug,
    date: data.date || null,
    author: data.author || 'Lucas Rosendo',
    tags: data.tags || [],
    coverImage: data.coverImage || null,
    excerpt: data.excerpt || '',
    readingTime: data.readingTime || null,
    content,
  };
}

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

export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIRECTORY)) return [];

  const filenames = fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((name) => /\.mdx?$/.test(name));

  const posts = filenames.map((filename) => {
    const post = readPostFile(filename);
    return {
      ...post,
      coverImage: hasCoverImageAsset(post.coverImage) ? post.coverImage : null,
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getAllPostSlugs() {
  return getAllPosts().map((post) => post.slug);
}

export function getPostsByTag(tag) {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

export async function getPostBySlug(slug) {
  const posts = getAllPosts();
  const meta = posts.find((post) => post.slug === slug);
  if (!meta) return null;

  const filename = fs
    .readdirSync(POSTS_DIRECTORY)
    .find((name) => readPostFile(name).slug === slug);
  const { content } = readPostFile(filename);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  return {
    ...meta,
    contentHtml: processed.toString(),
  };
}
