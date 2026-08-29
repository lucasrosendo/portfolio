import { notFound } from 'next/navigation';
import { getAllPostSlugs, getBilingualPost } from '@/lib/blog';
import PostView from '@/components/Blog/PostView';

// Static export needs every dynamic route enumerated at build time — there's
// no server around at request time to resolve an arbitrary slug. Note this
// is one route per slug, not per locale: both language variants are baked
// into the same static page and picked client-side (see PostView).
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = await getBilingualPost(slug);
  const post = entry?.en || entry?.pt;
  if (!post) return {};
  return {
    title: `${post.title} | Lucas Rosendo`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const entry = await getBilingualPost(slug);

  if (!entry || (!entry.en && !entry.pt)) {
    notFound();
  }

  return <PostView entry={entry} />;
}
