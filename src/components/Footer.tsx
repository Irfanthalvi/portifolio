import { Mail, ArrowUp, MapPin, Phone, ExternalLink, Code2, Heart } from 'lucide-react';
import { GithubIcon, WhatsappIcon, LinkedinIcon } from './Icons';
import styles from './Footer.module.css';

const navLinks = [
  { href: '#about',      label: 'About Me' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
];

const moreLinks = [
  { href: '#freelance',  label: 'Freelance' },
  { href: '#services',   label: 'Services' },
  { href: '#education',  label: 'Education' },
  { href: '#contact',    label: 'Contact' },
];

const techStack = ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Supabase'];

const socialLinks = [
  {
    href: 'mailto:irfanthalvi@gmail.com',
    icon: Mail,
    label: 'Email',
    handle: 'irfanthalvi@gmail.com',
  },
  {
    href: 'https://www.linkedin.com/in/irfan-ali-66205a2b3',
    icon: LinkedinIcon,
    label: 'LinkedIn',
    handle: 'linkedin.com/in/irfan-ali',
  },
  {
    href: 'https://github.com/Irfanthalvi',
    icon: GithubIcon,
    label: 'GitHub',
    handle: 'github.com/Irfanthalvi',
  },
  {
    href: 'https://wa.me/923337484980?text=Hi%20I%20want%20to%20connect%20with%20you',
    icon: WhatsappIcon,
    label: 'WhatsApp',
    handle: '+92 333 748 4980',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Top CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>
              Ready to build something <span className={styles.ctaHighlight}>exceptional?</span>
            </h2>
            <p className={styles.ctaSubtitle}>
              Let&apos;s collaborate and bring your ideas to life with modern, scalable web solutions.
            </p>
          </div>
          <a href="#contact" className={styles.ctaBtn}>
            Get In Touch
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Brand Column */}
          <div className={styles.brandCol}>
            <a href="#home" className={styles.logo}>
              Irfan<span className={styles.logoDot}>.</span>
            </a>
            <p className={styles.brandDesc}>
              Frontend Developer crafting high-performance, pixel-perfect web applications with React.js, Next.js, and TypeScript.
            </p>
            <div className={styles.contactInfo}>
              <span className={styles.contactItem}>
                <MapPin size={13} className={styles.contactIcon} />
                Karachi, Pakistan
              </span>
              <span className={styles.contactItem}>
                <Mail size={13} className={styles.contactIcon} />
                irfanthalvi@gmail.com
              </span>
            </div>
            {/* Tech Chips */}
            <div className={styles.techChips}>
              {techStack.map((tech) => (
                <span key={tech} className={styles.techChip}>{tech}</span>
              ))}
            </div>
          </div>

          {/* Nav Column 1 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navigate</h4>
            <ul className={styles.linkList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}>
                    <span className={styles.linkArrow}>›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>More</h4>
            <ul className={styles.linkList}>
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}>
                    <span className={styles.linkArrow}>›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Connect Column */}
          <div className={styles.socialCol}>
            <h4 className={styles.colTitle}>Connect</h4>
            <div className={styles.socialList}>
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={styles.socialRow}
                  >
                    <span className={styles.socialIconWrap}>
                      <Icon size={16} />
                    </span>
                    <div className={styles.socialMeta}>
                      <span className={styles.socialLabel}>{s.label}</span>
                      <span className={styles.socialHandle}>{s.handle}</span>
                    </div>
                    <ExternalLink size={12} className={styles.socialArrow} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} <span className={styles.copyrightName}>Irfan Ali</span>. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Built with <Heart size={13} className={styles.heartIcon} /> using{' '}
            <Code2 size={13} className={styles.codeIcon} /> React &amp; Next.js
          </p>
          <a href="#home" className={styles.backToTop} aria-label="Back to top">
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

