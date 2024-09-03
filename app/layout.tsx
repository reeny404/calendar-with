import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: './../fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: 'Calendar With',
  description: '함께 쓰는 공유 캘린더, calendar shared with',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='kr'>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
