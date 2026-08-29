import Header from '@/components/Header';
import './globals.css';

// Next's metadata API does NOT auto-prepend basePath for icons/manifest
// (unlike next/link and next/image), so these need the prefix by hand or
// they 404 once the site is served from /portfolio on GitHub Pages.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'Lucas Rosendo',
  description:
    'Portfólio de Lucas Rosendo — Desenvolvedor Full Stack (NestJS/Node, React/Next).',
  manifest: `${basePath}/site.webmanifest`,
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico` },
      { url: `${basePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${basePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
    ],
    apple: `${basePath}/apple-touch-icon.png`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
