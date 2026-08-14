'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

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
      setScrolled(window.scrollY > 50);
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
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.logo}>
          Irfan<span className={styles.logoDot}>.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.ctaButton}>
          Get In Touch
        </a>

        {/* Mobile Toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`${styles.mobileOverlay} ${isOpen ? styles.mobileOpen : ''}`}>
          <ul className={styles.mobileLinks}>
            {navLinks.map((link, index) => (
              <li key={link.href} style={{ animationDelay: `${index * 50}ms` }}>
                <a
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
