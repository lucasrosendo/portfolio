// Split out from lib/blog.js on purpose: that module imports `fs`/`path`
// (Node-only) at the top level, so anything importing from it — even just
// this helper — pulls those into the client bundle and breaks the build.
// PostCard/PostView (Client Components) need this helper, so it lives in
// its own dependency-free file.
//
// coverImage in frontmatter is a plain string (not a static `import`), so
// Next can't auto-prefix it the way it does for next/link or next/image.
// Under the GitHub Pages basePath every public/-relative asset path needs
// this manual prefix or it 404s in production.
export function withBasePath(assetPath) {
  if (!assetPath) return assetPath;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${assetPath}`;
}
