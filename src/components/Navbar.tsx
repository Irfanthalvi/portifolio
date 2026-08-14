'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#freelance', label: 'Freelance' },
  { href: '#services', label: 'Services' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="text-2xl font-black tracking-tight text-foreground transition-colors hover:text-[#00eeff]"
        >
          Irfan
          <span className="text-[#00eeff] drop-shadow-[0_0_12px_#00eeff]">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 text-sm font-semibold text-muted-foreground transition-colors rounded-md hover:text-[#00eeff] hover:bg-cyan-500/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Button
            asChild
            variant="glow"
            size="sm"
            className="rounded-full px-5 py-2 text-xs uppercase tracking-wider"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground rounded-md transition-colors hover:text-[#00eeff]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed top-[68px] left-0 w-full h-[calc(100vh-68px)] bg-background/98 backdrop-blur-2xl px-6 py-8 transition-all duration-300 ${
            isOpen
              ? 'opacity-100 pointer-events-auto visible'
              : 'opacity-0 pointer-events-none invisible'
          }`}
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-lg font-semibold text-muted-foreground px-4 py-3 rounded-lg transition-colors hover:text-[#00eeff] hover:bg-cyan-500/10"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 px-4">
            <Button
              asChild
              variant="glow"
              className="w-full py-3 text-sm font-bold uppercase tracking-wider rounded-xl"
            >
              <a href="#contact" onClick={handleLinkClick}>
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
