import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Navas Mastery',
  description: 'Navas Mastery Resources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100'>{children}</body>
    </html>
  )
}
