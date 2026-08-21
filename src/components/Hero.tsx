'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown, Mail, Code2, Sparkles, Briefcase } from 'lucide-react';
import { GithubIcon, WhatsappIcon, FacebookIcon, LinkedinIcon } from './Icons';

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
      timer = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 90);
    } else if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText !== '') {
      timer = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length - 1)), 50);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      style={{ paddingTop: 'calc(72px + 30px)', paddingBottom: '80px' }}
    >
      {/* BG glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-52 -left-52 w-[650px] h-[650px] rounded-full z-0"
        style={{ background: 'radial-gradient(circle, var(--color-accent-glow) 0%, var(--color-accent-subtle) 50%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[10%] -right-52 w-[700px] h-[700px] rounded-full z-0"
        style={{ background: 'radial-gradient(circle, var(--color-accent-subtle) 0%, var(--color-accent-glow) 50%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-12">

          {/* Left — Text Content */}
          <div className="flex flex-col text-center lg:text-left items-center lg:items-start">

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.08em] uppercase text-primary bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] animate-pulse" />
              Available for Senior &amp; Remote Roles
            </div>

            <h3 className="text-xl font-semibold text-muted-foreground mb-0.5">Hi, I&apos;m</h3>
            <h1
              className="font-extrabold leading-[1.1] tracking-[-0.03em] mb-3"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)',
                background: 'linear-gradient(135deg, var(--color-text-primary) 30%, var(--color-accent) 70%, var(--color-accent-light) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 4px 24px var(--color-accent-glow))',
              }}
            >
              Irfan Ali
            </h1>

            <h2
              className="font-bold text-muted-foreground mb-6 min-h-[42px] flex items-center justify-center lg:justify-start"
              style={{ fontSize: 'clamp(1.25rem, 2.8vw, 1.875rem)' }}
            >
              <span className="text-primary">{displayText}</span>
              <span className="text-primary font-light animate-[blink_1s_infinite]">|</span>
            </h2>

            <p className="text-base text-muted-foreground leading-[1.75] mb-8 max-w-[600px]">
              Frontend Developer with <strong className="text-primary font-semibold">3+ years of experience</strong> building scalable,
              production-ready web applications using <strong className="text-primary font-semibold">React.js</strong>, <strong className="text-primary font-semibold">Next.js</strong>, and <strong className="text-primary font-semibold">TypeScript</strong>.{' '}
              Experienced in developing LMS platforms, eCommerce solutions, interactive 3D web experiences with <strong className="text-primary font-semibold">Three.js &amp; GSAP</strong>,
              and enterprise integrations with <strong className="text-primary font-semibold">Supabase &amp; Firebase</strong>.
            </p>

            {/* Social Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              {[
                { href: 'https://github.com/Irfanthalvi', icon: <GithubIcon size={18} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/irfan-ali-66205a2b3', icon: <LinkedinIcon size={18} />, label: 'LinkedIn' },
                { href: 'https://wa.me/923337484980?text=Hi%20I%20want%20to%20connect%20with%20you', icon: <WhatsappIcon size={18} />, label: 'WhatsApp' },
                { href: 'mailto:irfanthalvi@gmail.com', icon: <Mail size={18} />, label: 'Email' },
                { href: 'https://www.facebook.com/irfanali.balti.1', icon: <FacebookIcon size={18} />, label: undefined },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-card/80 border border-border/60 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:text-white hover:bg-primary hover:border-primary hover:-translate-y-[3px] hover:shadow-[0_4px_20px_var(--color-accent-glow)]"
                >
                  {s.icon}
                  {s.label && <span>{s.label}</span>}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_var(--color-accent-glow)] hover:-translate-y-[3px] hover:shadow-[0_6px_28px_var(--color-accent-glow)] hover:brightness-110"
              >
                <ArrowDown size={18} />
                View Featured Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-base font-semibold text-foreground bg-card/80 border border-border/60 px-7 py-3.5 rounded-full transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:-translate-y-[3px] hover:shadow-[0_4px_20px_var(--color-accent-glow)]"
              >
                <Mail size={18} />
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-[520px] w-full">
              {[
                { value: '3+', label: 'Years Exp.' },
                { value: '15+', label: 'Live Projects' },
                { value: '100%', label: 'Job Success' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card/80 border border-border/60 rounded-xl px-5 py-4 backdrop-blur-sm flex flex-col items-start transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5"
                >
                  <span className="text-2xl font-extrabold text-primary">{stat.value}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.05em] text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Portrait */}
          <div className="relative flex justify-center mt-10 lg:mt-0">
            <div
              className="relative w-[360px] max-w-full rounded-[28px] p-3 bg-card/80 border border-border/60 backdrop-blur-md"
              style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}
            >
              {/* Portrait glow */}
              <div
                className="absolute -inset-5 rounded-[40px] -z-10 blur-[15px] animate-[float_6s_ease-in-out_infinite]"
                style={{ background: 'radial-gradient(circle, var(--color-accent-glow) 0%, var(--color-accent-subtle) 50%, transparent 70%)' }}
              />

              {/* Image */}
              <div className="relative w-full h-[420px] rounded-[20px] overflow-hidden bg-secondary">
                <Image
                  src="/irfan-new.jpg"
                  alt="Irfan Ali - Senior Frontend Developer"
                  width={400}
                  height={480}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>

              {/* Floating Badge — Top Right */}
              <div className="absolute -top-4 -right-5 flex items-center gap-2 bg-background border border-primary/40 text-foreground px-4 py-2 rounded-[20px] text-xs font-bold backdrop-blur-md shadow-lg z-10">
                <Code2 size={16} className="text-primary" />
                <span>React.js &amp; Next.js</span>
              </div>

              {/* Floating Badge — Bottom Left */}
              <div className="absolute bottom-8 -left-6 flex items-center gap-2 bg-background border border-primary/40 text-foreground px-4 py-2 rounded-[20px] text-xs font-bold backdrop-blur-md shadow-lg z-10">
                <Sparkles size={16} className="text-cyan-400" />
                <span>Three.js &amp; GSAP</span>
              </div>

              {/* Floating Badge — Bottom Right */}
              <div className="absolute -bottom-4 right-2 flex items-center gap-2 bg-background border border-amber-400/40 text-foreground px-4 py-2 rounded-[20px] text-xs font-bold backdrop-blur-md shadow-lg z-10">
                <Briefcase size={16} className="text-amber-400" />
                <span>3+ Years Senior</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
      `}</style>
    </section>
  );
}
