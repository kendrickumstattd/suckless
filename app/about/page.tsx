import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, Layers3, MapPinned, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meet the Founder | Make Things Suck Less',
  description: 'Meet Kendrick Umstattd, a software engineer with experience across Google Maps and Material Design, and founder of Make Things Suck Less.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <main className="founder-page">
    <header className="founder-nav">
      <Link className="brand" href="/">Make Things<br/>Suck <span>Less.</span></Link>
      <nav aria-label="About page navigation"><Link href="/#work">Work</Link><Link href="/#services">Services</Link><Link href="/about" aria-current="page">About</Link><Link href="/#contact" className="founder-nav-cta">Let's talk <ArrowUpRight size={16}/></Link></nav>
    </header>
    <section id="main-content" tabIndex={-1} className="founder-hero">
      <div className="founder-hero-copy"><span className="eyebrow">MEET THE PERSON BEHIND THE PIXELS</span><h1>Hi, I'm<br/><span>Kendrick.</span></h1><p className="founder-lede">I build things that work better, look better, and make life a little easier for the people using them.</p><Link className="button primary" href="/#contact">Let's make something better <ArrowRight size={18}/></Link></div>
      <div className="founder-portrait founder-portrait-photo"><img src="/kendrick-about.webp" width={1254} height={1254} alt="Editorial portrait of Kendrick with the MTSL monogram" /><div className="founder-portrait-caption">ENGINEER BY TRAINING. FIXER BY NATURE. </div></div>
    </section>
    <section className="founder-intro"><span className="eyebrow">A LITTLE ABOUT ME</span><div><h2>Good technology shouldn't feel like work.</h2><p>I'm Kendrick Umstattd, the person behind Make Things Suck Less. I studied Electrical Engineering and Computer Science at Yale and have spent more than seven years building software at Google, from experiences in Google Maps to components and design systems that help teams create better apps.</p><p>Along the way, I've led engineering projects, worked closely with designers and product teams, and learned that the most useful technology often comes down to the smallest details: a clearer web flow, a faster page, a more secure and intuitive path to what someone came to do.</p><p>I started this studio to bring that same care to resorts, municipalities, and organizations whose websites should be helping people—not getting in their way.</p></div></section>
    <section className="founder-experience"><div className="founder-experience-head"><span className="eyebrow">THE EXPERIENCE</span><h2>Serious chops.<br/><span>Zero unnecessary jargon.</span></h2></div><div className="founder-facts"><article><MapPinned size={28}/><span>01 / PRODUCT ENGINEERING</span><h3>Google Maps</h3><p>Built and led work on consumer-facing experiences, helping people discover and interact with places.</p></article><article><Layers3 size={28}/><span>02 / DESIGN SYSTEMS</span><h3>Material Design</h3><p>Worked on Android UI components and the systems behind consistent, expressive interfaces.</p></article><article><Users size={28}/><span>03 / LEADERSHIP</span><h3>Technical & team leadership</h3><p>Led complex engineering initiatives and supported engineers through design, development, and delivery.</p></article><article><Code2 size={28}/><span>04 / FOUNDATION</span><h3>Yale University</h3><p>B.S. in Electrical Engineering & Computer Science, with distinction.</p></article></div></section>
    <section className="founder-philosophy"><span className="eyebrow">HOW I THINK ABOUT THE WORK</span><blockquote>“The best website isn't the one with the most features. It's the one that makes what people came to do feel <em>effortless.</em>”</blockquote><p>Thoughtful design. Solid engineering. Fewer headaches.</p></section>
    <section className="founder-end"><span className="eyebrow">HAVE A WEBSITE THAT COULD BE BETTER?</span><h2>Let's make it<br/><em>suck less.</em></h2><Link className="button founder-white-button" href="/#contact">Tell me about your project <ArrowRight size={18}/></Link></section>
    <footer className="founder-footer"><Link href="/"><ArrowLeft size={16}/> Back to the homepage</Link><span>MAKE THINGS SUCK LESS © {new Date().getFullYear()}</span></footer>
  </main>
}
