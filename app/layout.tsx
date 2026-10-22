import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { siteUrl } from '../lib/site';

// next/font downloads DM Sans at build time and serves it from this site, so visitors never contact Google.
const dmSans = DM_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-dm-sans' });

const title = 'Make Things Suck Less. | Better websites for places people love';
const description = 'Design, accessibility, performance, and practical security modernization for resorts, municipalities, and organizations.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: { type: 'website', url: '/', siteName: 'Make Things Suck Less.', title, description, locale: 'en_US' },
  twitter: { card: 'summary_large_image', title, description },
};

export const viewport: Viewport = { themeColor: '#faf9f5' };

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" className={dmSans.variable}><body><a className="skip-link" href="#main-content">Skip to content</a>{children}</body></html> }
