import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#090a0f',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Sulaiman Mustafa | Full-Stack Software Developer',
  description:
    'Full-Stack Software Developer Portfolio of Sulaiman Mustafa. Discover scalable web applications, engineering case studies, live production demo of a restaurant ordering platform, skills, and contact.',
  keywords: [
    'Sulaiman Mustafa',
    'Software Developer',
    'Full-Stack Engineer',
    'Next.js',
    'TypeScript',
    'React',
    'Node.js',
    'Web Development',
    'Portfolio',
    'Restaurant App',
  ],
  authors: [{ name: 'Sulaiman Mustafa', url: 'mailto:sulaimanmustafa718@gmail.com' }],
  creator: 'Sulaiman Mustafa',
  openGraph: {
    title: 'Sulaiman Mustafa | Full-Stack Software Developer',
    description:
      'Portfolio of Sulaiman Mustafa. High-performance web apps, scalable APIs, and real-time solutions. Explore the live interactive restaurant platform demo.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sulaiman Mustafa Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sulaiman Mustafa | Full-Stack Software Developer',
    description:
      'Full-Stack Developer Portfolio showcasing architecture, production web applications, and live interactive demos.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#090a0f] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
