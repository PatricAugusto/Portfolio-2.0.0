'use client'; 

import { Inter } from 'next/font/google';
import './globals.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  return (
    <html lang="pt-br">
      <head>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}