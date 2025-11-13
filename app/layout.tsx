import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gamefinity – AR for Tabletop Games | BLIK!',
  description:
    'Gamefinity builds premium WebAR experiences for tabletop games and education. Explore BLIK!, our Dobble-style AR card game for brands and learning.',
  openGraph: {
    title: 'Gamefinity – Augmented Reality for Tabletop Games',
    description:
      'BLIK! by Gamefinity brings cards to life with WebAR: 3D, voice, and interactivity.',
    type: 'website',
    url: 'https://gamefinity.example',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gamefinity – AR for Tabletop Games',
    description:
      'We create WebAR experiences that bring cards to life. Fast, visual and educational.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden bg-bg antialiased`}>
        {/* Background spotlight */}
        <div className="pointer-events-none fixed inset-0 bg-spotlight" />
        {children}
      </body>
    </html>
  );
}


