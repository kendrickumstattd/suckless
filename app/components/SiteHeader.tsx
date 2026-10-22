'use client';
import {useState} from 'react';
import {ArrowRight, Menu, X} from 'lucide-react';
import {Brand} from './Brand';
export function SiteHeader(){const [menu,setMenu]=useState(false);return <header className="site-header"><Brand/><nav className={menu?'nav open':'nav'} aria-label="Main navigation"><a href="#work" onClick={()=>setMenu(false)}>Work</a><a href="#services" onClick={()=>setMenu(false)}>Services</a><a href="/about" onClick={()=>setMenu(false)}>About</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></nav><a href="#contact" className="button primary header-cta">Get a Website Audit <ArrowRight size={16}/></a><button className="mobile-menu" aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>}
