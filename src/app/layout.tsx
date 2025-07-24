import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Originall - Çok Yakında',
  description:
    "Originall'dan büyük duyuru için hazır olun. Değişim başlıyor, çok yakında! - Özgün Biçer",
  keywords: ['originall', 'özgün biçer', 'değişim', 'yenilik', 'danışmanlık'],
  authors: [{ name: 'Özgün Biçer' }],
  creator: 'Özgün Biçer',
  openGraph: {
    title: 'Originall - Çok Yakında',
    description:
      "Originall'dan büyük duyuru için hazır olun. Değişim başlıyor, çok yakında!",
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Originall',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originall - Çok Yakında',
    description:
      "Originall'dan büyük duyuru için hazır olun. Değişim başlıyor, çok yakında!",
    creator: '@originall',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='tr'>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        {children}
      </body>
    </html>
  )
}
