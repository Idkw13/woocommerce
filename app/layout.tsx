"use client";
import './globals.css';
import { Inter } from 'next/font/google';
import { TopBar } from '../components/layout/TopBar';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body className={inter.className + ' bg-gray-50 text-black'}>
        <TopBar />
        <Header />
        <main className="container mx-auto px-4 py-8 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
