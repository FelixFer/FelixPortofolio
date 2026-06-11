import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import JsonLd from '@/layout/JsonLd';

const inter = Inter({ subsets: ['latin'] });

const baseUrl = 'https://felixferdinand.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Felix Ferdinand — Frontend Engineer',
    template: '%s | Felix Ferdinand',
  },
  description:
    'Felix Ferdinand — Frontend Engineer specializing in React.js, TypeScript, and scalable web applications. View my projects, experience, and skills.',
  keywords: [
    'Felix Ferdinand',
    'Frontend Engineer',
    'React.js',
    'TypeScript',
    'Redux',
    'Next.js',
    'Tailwind CSS',
    'Portfolio',
    'Web Developer',
    'Indonesia',
    'UMN',
  ],
  authors: [{ name: 'Felix Ferdinand', url: baseUrl }],
  creator: 'Felix Ferdinand',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Felix Ferdinand Portfolio',
    title: 'Felix Ferdinand — Frontend Engineer',
    description:
      'Felix Ferdinand — Frontend Engineer specializing in React.js, TypeScript, and scalable web applications.',
    images: [
      {
        url: `${baseUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: 'Felix Ferdinand — Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felix Ferdinand — Frontend Engineer',
    description:
      'Felix Ferdinand — Frontend Engineer specializing in React.js, TypeScript, and scalable web applications.',
    images: [`${baseUrl}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
