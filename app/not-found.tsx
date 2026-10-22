import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Brand } from './components/Brand';

export const metadata: Metadata = { title: 'Page not found | Make Things Suck Less', robots: { index: false } };

export default function NotFound() {
  return <main id="top" className="founder-page">
    <header className="founder-nav">
      <Link className="brand" href="/">Make Things<br/>Suck <span>Less.</span></Link>
      <nav aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/#services">Services</Link><Link href="/about">About</Link><Link href="/#contact" className="founder-nav-cta">Let's talk <ArrowUpRight size={16}/></Link></nav>
    </header>
    <section id="main-content" tabIndex={-1} className="founder-end not-found">
      <span className="eyebrow">ERROR 404</span>
      <h1>This page<br/><em>sucks.</em></h1>
      <p>It doesn't exist, anyway. It may have moved or the link may have a typo.</p>
      <Link className="button founder-white-button" href="/"><ArrowLeft size={18}/> Back to the homepage</Link>
    </section>
    <footer className="footer"><Brand inverse/><p>The internet has enough problems.</p><div><a href="/privacy">Privacy notice</a><a href="#top">Back to top ↑</a><span>© {new Date().getFullYear()} Make Things Suck Less.</span></div></footer>
  </main>
}
