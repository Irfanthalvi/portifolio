'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown, Mail, Code2, Sparkles, Briefcase } from 'lucide-react';
import { GithubIcon, WhatsappIcon, FacebookIcon, LinkedinIcon } from './Icons';
import styles from './Hero.module.css';

const roles = [
  'Senior Frontend Developer',
  'React.js & Next.js Specialist',
  'TypeScript & UI Engineer',
  'Three.js & GSAP Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText !== currentRole) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 90);
    } else if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText !== '') {
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgGlowLeft} aria-hidden="true" />
      <div className={styles.bgGlowRight} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Text & Content */}
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Available for Senior &amp; Remote Roles
            </div>

            <h3 className={styles.greeting}>Hi, I&apos;m</h3>
            <h1 className={styles.name}>Irfan Ali</h1>
            
            <h2 className={styles.roleHeader}>
              <span className={styles.typedText}>{displayText}</span>
              <span className={styles.cursor}>|</span>
            </h2>

            <p className={styles.description}>
              Frontend Developer with <strong>3+ years of experience</strong> building scalable, 
              production-ready web applications using <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>. 
              Experienced in developing LMS platforms, eCommerce solutions, interactive 3D web experiences with <strong>Three.js &amp; GSAP</strong>, 
              and enterprise integrations with <strong>Supabase &amp; Firebase</strong>.
            </p>

            {/* Social Pill Row */}
            <div className={styles.socialPillRow}>
              <a
                href="https://github.com/Irfanthalvi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialPill}
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/irfan-ali-66205a2b3"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialPill}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://wa.me/923337484980?text=Hi%20I%20want%20to%20connect%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialPill}
                aria-label="WhatsApp"
              >
                <WhatsappIcon size={18} />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:irfanthalvi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialPill}
                aria-label="Email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
              <a
                href="https://www.facebook.com/irfanali.balti.1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialPill}
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
            </div>

            {/* Action Buttons */}
            <div className={styles.ctas}>
              <a href="#projects" className={styles.primaryCta}>
                <ArrowDown size={18} />
                View Featured Projects
              </a>
              <a href="#contact" className={styles.secondaryCta}>
                <Mail size={18} />
                Get in Touch
              </a>
            </div>

            {/* Stat Cards */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>3+</span>
                <span className={styles.statLabel}>Years Exp.</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>15+</span>
                <span className={styles.statLabel}>Live Projects</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Job Success</span>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Card with Floating Tech Badges */}
          <div className={styles.portraitColumn}>
            <div className={styles.portraitCard}>
              <div className={styles.portraitGlow} />
              <div className={styles.imageFrame}>
                <Image
                  src="/irfan-new.jpg"
                  alt="Irfan Ali - Senior Frontend Developer"
                  width={400}
                  height={480}
                  className={styles.portraitImg}
                  priority
                />
              </div>

              {/* Floating Badge 1 - Top Right */}
              <div className={`${styles.floatingBadge} ${styles.badgeTopRight}`}>
                <Code2 size={16} className={styles.badgeIconCyan} />
                <span>React.js &amp; Next.js</span>
              </div>

              {/* Floating Badge 2 - Bottom Left */}
              <div className={`${styles.floatingBadge} ${styles.badgeBottomLeft}`}>
                <Sparkles size={16} className={styles.badgeIconEmerald} />
                <span>Three.js &amp; GSAP</span>
              </div>

              {/* Floating Badge 3 - Bottom Right */}
              <div className={`${styles.floatingBadge} ${styles.badgeBottomRight}`}>
                <Briefcase size={16} className={styles.badgeIconGold} />
                <span>3+ Years Senior</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
