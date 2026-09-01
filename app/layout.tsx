import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({ variable: '--font-display', subsets: ['latin'] });
const mono = Space_Mono({ variable: '--font-mono-custom', subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.PUBLIC_ORIGIN ?? 'http://localhost:3000'),
  title: 'My Website — Ideas with depth',
  description: 'An experimental 3D corner of the web where code becomes space and motion becomes meaning.',
  openGraph: { title: 'My Website — Ideas with depth', description: 'An experimental 3D corner of the web.', type: 'website', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'My Website — Ideas with depth', description: 'An experimental 3D corner of the web.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${mono.variable}`}>{children}</body></html>;
}
