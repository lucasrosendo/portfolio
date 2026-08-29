import { getAllBilingualPosts } from '@/lib/blog';
import BlogIndexView from '@/components/Blog/BlogIndexView';

export const metadata = {
  title: 'Blog | Lucas Rosendo',
  description: 'Devlogs and technical notes from Lucas Rosendo.',
};

export default function BlogIndexPage() {
  const posts = getAllBilingualPosts();
  return <BlogIndexView posts={posts} />;
}
