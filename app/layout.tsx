import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'USKEYVISION - Professional Vlogging Kits for Content Creators',
  description: 'USKEYVISION offers premium vlogging kits with AI face tracking, professional microphones, and pro LED lighting. Perfect for YouTube, TikTok, and live streaming. Shop now on Uskeyvision.com.',
  keywords: ['vlogging kit', 'microphone for video', 'face tracking tripod', 'content creator gear', 'smartphone vlogging kit', 'USKEYVISION'],
  authors: [{ name: 'USKEYVISION' }],
  openGraph: {
    title: 'USKEYVISION - Professional Vlogging Kits for Content Creators',
    description: 'Premium vlogging equipment for YouTube, TikTok, and content creators worldwide.',
    type: 'website',
    siteName: 'USKEYVISION',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USKEYVISION - Professional Vlogging Kits',
    description: 'Create like a pro with USKEYVISION vlogging kits.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎬</text></svg>" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
