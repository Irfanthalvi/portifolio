import { Code, Layers, Zap, Cpu } from 'lucide-react';
import SectionHeader from './SectionHeader';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="About Me"
          title="Building Scalable"
          highlight="Frontend Solutions"
          subtitle="Experienced Frontend Developer creating modern LMS platforms, eCommerce solutions, and interactive web experiences."
        />
        <div className={styles.grid}>
          <div className={styles.text}>
            <p className={styles.intro}>
              I&apos;m <strong>Irfan Ali</strong>, a Frontend Developer with <strong>3+ years of experience</strong> building modern, scalable, and production-ready web applications using <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>.
            </p>
            <p className={styles.detail}>
              My experience spans developing full LMS platforms, product selling/eCommerce solutions, SaaS dashboards, and 3D interactive web experiences. I leverage UI systems like <strong>Tailwind CSS</strong>, <strong>Material UI</strong>, and <strong>shadcn/ui</strong>, with state management via <strong>Redux Toolkit</strong>, <strong>Context API</strong>, and <strong>React Query</strong>.
            </p>
            <p className={styles.detail}>
              I specialize in advanced UI interactions using <strong>Three.js</strong>, <strong>GSAP</strong>, and <strong>Lenis</strong> for smooth animations. I integrate backend services with <strong>Firebase</strong>, <strong>Supabase</strong>, and REST APIs, implementing secure authentication workflows including admin-controlled OTP verification.
            </p>
            <div className={styles.badgeGroup}>
              <span className={styles.techChip}>React.js</span>
              <span className={styles.techChip}>Next.js</span>
              <span className={styles.techChip}>TypeScript</span>
              <span className={styles.techChip}>Tailwind CSS</span>
              <span className={styles.techChip}>shadcn/ui</span>
              <span className={styles.techChip}>Material UI</span>
              <span className={styles.techChip}>Redux Toolkit</span>
              <span className={styles.techChip}>React Query</span>
              <span className={styles.techChip}>Firebase</span>
              <span className={styles.techChip}>Supabase</span>
              <span className={styles.techChip}>Three.js</span>
              <span className={styles.techChip}>GSAP</span>
              <span className={styles.techChip}>Lenis</span>
            </div>
          </div>

          <div className={styles.highlights}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Code size={22} />
              </div>
              <h3 className={styles.cardTitle}>LMS &amp; Enterprise Platforms</h3>
              <p className={styles.cardDesc}>
                Built multiple LMS applications with dashboards, user flows, and Firebase/Supabase authentication.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Zap size={22} />
              </div>
              <h3 className={styles.cardTitle}>3D &amp; Interactive Animations</h3>
              <p className={styles.cardDesc}>
                Implemented advanced UI interactions using Three.js, GSAP, and Lenis for smooth scroll web experiences.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Layers size={22} />
              </div>
              <h3 className={styles.cardTitle}>eCommerce &amp; Security</h3>
              <p className={styles.cardDesc}>
                Product selling platforms with secure auth and admin-controlled OTP verification workflows.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Cpu size={22} />
              </div>
              <h3 className={styles.cardTitle}>Scalable Frontend Architecture</h3>
              <p className={styles.cardDesc}>
                Maintainable React/Next.js/TypeScript codebases with performance optimization and clean component trees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
