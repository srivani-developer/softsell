import './globals.css';
import ThemeToggle from '/components/ThemeToggle';
import Logo from '/components/Logo';

export const metadata = {
  title: 'SoftSell - Resell Your Software Licenses Easily',
  description: 'SoftSell helps individuals and companies sell unused software licenses quickly and securely.',
 description: 'SoftSell helps individuals and companies sell unused software licenses quickly and securely.',
  keywords: 'software resale, license marketplace, sell licenses, SoftSell',
  authors: [{ name: 'SoftSell Team' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/softsell_logo.png', // will add this file next
  },
  openGraph: {
    title: 'SoftSell',
    description: 'Easily resell your software licenses and get paid quickly.',
    url: 'https://softsell.vercel.app',
    siteName: 'SoftSell',
    images: [
      {
        url: '/og-image.png', // optional OG image
        width: 1200,
        height: 630,
        alt: 'SoftSell Logo',
      },
    ],
    type: 'website',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-1100 dark:text-white transition-colors">
      <header className="p-4 shadow-md flex items-center">
          <Logo />
        </header>
      <ThemeToggle/>
      {children}</body>
    </html>
  )
}
