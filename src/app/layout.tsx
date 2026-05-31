import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import JsonLd from './components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

const baseUrl = 'https://felixferdinand.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Felix Ferdinand — Backend Developer',
    template: '%s | Felix Ferdinand',
  },
  description:
    'Portfolio of Felix Ferdinand, a Backend Developer and Informatics Engineering graduate from Universitas Multimedia Nusantara. Skilled in Express.js, Node.js, PostgreSQL, React Native, and more.',
  keywords: [
    'Felix Ferdinand',
    'Backend Developer',
    'Portfolio',
    'Express.js',
    'Node.js',
    'React Native',
    'TypeScript',
    'PostgreSQL',
    'Informatics Engineering',
    'UMN',
  ],
  authors: [{ name: 'Felix Ferdinand', url: baseUrl }],
  creator: 'Felix Ferdinand',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Felix Ferdinand Portfolio',
    title: 'Felix Ferdinand — Backend Developer',
    description:
      'Portfolio of Felix Ferdinand, a Backend Developer with experience in Express.js, Node.js, PostgreSQL, and React Native.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Felix Ferdinand Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felix Ferdinand — Backend Developer',
    description:
      'Portfolio of Felix Ferdinand, a Backend Developer with experience in Express.js, Node.js, PostgreSQL, and React Native.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
