import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Notice | Make Things Suck Less',
  description: 'What Make Things Suck Less collects through this website, how it is used, and how to ask for it to be deleted.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return <main className="founder-page">
    <header className="founder-nav">
      <Link className="brand" href="/">Make Things<br/>Suck <span>Less.</span></Link>
      <nav aria-label="Privacy page navigation"><Link href="/#work">Work</Link><Link href="/#services">Services</Link><Link href="/about">About</Link><Link href="/#contact" className="founder-nav-cta">Let's talk <ArrowUpRight size={16}/></Link></nav>
    </header>
    <section id="main-content" tabIndex={-1} className="founder-intro legal-page">
      <div><span className="eyebrow">PRIVACY NOTICE</span><p className="legal-updated">Last updated October 18, 2026</p></div>
      <div>
        <h1>Your information, kept simple.</h1>
        <p>This website exists so you can learn about Make Things Suck Less and get in touch. It collects as little as possible.</p>
        <h2>What we collect</h2>
        <p>When you send the contact form, we receive what you type: your name, email address, organization, current website, the service you're interested in, and your message. Nothing else is collected about you unless you choose to share it.</p>
        <h2>How it's used</h2>
        <p>Your details are used only to reply to your inquiry and talk about your project. They are never sold, rented, or added to a marketing list.</p>
        <h2>Where it's stored</h2>
        <p>Form submissions are sent over an encrypted (HTTPS) connection and stored with Netlify, the company that hosts this site. A copy is emailed to the studio inbox so we can reply. Old inquiries that didn't turn into a project are deleted periodically.</p>
        <h2>No tracking</h2>
        <p>This site doesn't use analytics, advertising, or tracking cookies. Fonts and images, including all illustrations and photos, are stored on and served from this site. Nothing is loaded from third-party image or font services.</p>
        <h2>Your choices</h2>
        <p>You can ask to see, correct, or delete anything you've sent us. Just reply to any email from us, or send a request through <Link className="privacy-link" href="/#contact">the contact form</Link>.</p>
      </div>
    </section>
    <footer className="founder-footer"><Link href="/"><ArrowLeft size={16}/> Back to the homepage</Link><span>MAKE THINGS SUCK LESS © {new Date().getFullYear()}</span></footer>
  </main>
}
