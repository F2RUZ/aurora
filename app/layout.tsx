import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aurora — Маркетинговое агентство',
  description: 'Озаряй свой бренд. Комплексный маркетинг: аналитика, реклама, веб-разработка, брендинг, SMM.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}