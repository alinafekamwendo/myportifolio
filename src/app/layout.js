import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/ThemeProvider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Alinafe Kamwendo | Full Stack Developer',
    template: '%s | Alinafe Kamwendo',
  },
  description: 'Full-stack developer crafting scalable web and mobile solutions that drive business growth.',
  metadataBase: new URL('https://alinafeckamwendo.vercel.app'),
  openGraph: {
    title: 'Alinafe Kamwendo | Full Stack Developer',
    description: 'Full-stack developer crafting scalable web and mobile solutions that drive business growth.',
    url: 'https://alinafeckamwendo.vercel.app',
    siteName: 'Alinafe Kamwendo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alinafe Kamwendo | Full Stack Developer',
    description: 'Full-stack developer crafting scalable web and mobile solutions that drive business growth.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('portfolio-theme');
                if (theme) {
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                }
              } catch(e) {}
            })();
          `
        }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
