import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Keania_One } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const fontSans = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '900'],
  variable: '--font-sans',
});

const fontBG = Keania_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bg',
});

export const metadata: Metadata = {
  title: 'Sakib Ahmed - Flutter Developer',
  description: 'Portfolio of Md. Sakib Ahmed Tushar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('font-sans', fontSans.variable, fontBG.variable)}>{children}</body>
    </html>
  );
}
