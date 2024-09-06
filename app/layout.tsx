import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: './../fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: 'Calendar With',
  description: '내 일정은 비밀로, 공유는 간편하게! 함께 보는 공유 캘린더',
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
