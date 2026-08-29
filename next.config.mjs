const basePath = '/portfolio';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages has no Node runtime, so this is built as a fully static site.
  output: 'export',
  // Project page (lucasrosendo.github.io/portfolio), not a user/org root page,
  // so every route and static asset needs the /portfolio prefix.
  basePath,
  assetPrefix: basePath,
  // Emit /route/index.html for every page instead of /route.html — the safest
  // shape for GitHub Pages' static file server.
  trailingSlash: true,
  images: {
    // next/image's on-demand optimizer needs a server; static export has none.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
