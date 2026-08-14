import { Briefcase, MapPin, Calendar, CheckCircle2, Sparkles, Globe2, Building2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import styles from './Experience.module.css';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  status: string;
  statusType: 'current' | 'remote';
  description: string;
  highlights: string[];
  techStack: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'techsoab',
    company: 'Techsoab',
    role: 'Frontend Developer | React.js, Next.js & TypeScript',
    period: '2023 – Present',
    location: 'Karachi, Pakistan',
    type: 'Full-Time',
    status: 'Current Role',
    statusType: 'current',
    description:
      'Architecting and developing production web applications, LMS platforms, data dashboards, and interactive 3D web experiences.',
    highlights: [
      'Develop scalable, production-ready applications with React.js, Next.js, and TypeScript',
      'Build responsive, reusable design systems with Tailwind CSS, shadcn/ui, and Material UI',
      'Work on LMS platforms, product selling dashboards, and high-conversion client websites',
      'Integrate Firebase, Supabase, REST APIs, state managers, and authentication workflows',
      'Implement cutting-edge UI interactions and animations using Three.js, GSAP, and Lenis',
      'Optimize web performance, Core Web Vitals, and frontend architecture reliability',
    ],
    techStack: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Three.js',
      'GSAP',
      'Supabase',
      'Firebase',
      'REST APIs',
    ],
  },
  {
    id: 'belgium-product',
    company: 'Belgium-based Product',
    role: 'Frontend Developer (Remote)',
    period: '2025 – 2026',
    location: 'Belgium (Remote)',
    type: 'International Remote',
    status: 'International Contract',
    statusType: 'remote',
    description:
      'Contributing to a live international production product using modern React ecosystem with remote cross-functional teams.',
    highlights: [
      'Contributed to core production modules using Next.js, React, TypeScript, and Supabase',
      'Developed high-impact new features, polished UI modules, and maintained reusable components',
      'Collaborated with international engineering teams to deliver robust frontend solutions',
      'Enhanced page load speeds, reduced rendering latency, and ensured responsive layout perfection',
    ],
    techStack: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'State Mgmt',
      'REST APIs',
      'Git Workflow',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Career Journey"
          title="Work"
          highlight="Experience"
          subtitle="Proven track record in production frontend architecture, high-impact web apps, and international remote collaboration."
        />

        <div className={styles.rowGrid}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.card}>
              <div className={styles.cardTopGlow} />

              {/* Header */}
              <div className={styles.cardHeader}>
                <div className={styles.companyMetaRow}>
                  <div className={styles.iconWrap}>
                    {exp.statusType === 'current' ? (
                      <Building2 size={24} />
                    ) : (
                      <Globe2 size={24} />
                    )}
                  </div>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyNameWrap}>
                      <h3 className={styles.company}>{exp.company}</h3>
                      <span
                        className={`${styles.statusBadge} ${
                          exp.statusType === 'current'
                            ? styles.badgeCurrent
                            : styles.badgeRemote
                        }`}
                      >
                        <span className={styles.pulseDot} />
                        {exp.status}
                      </span>
                    </div>
                    <p className={styles.role}>{exp.role}</p>
                  </div>
                </div>

                {/* Pills Row */}
                <div className={styles.pillsRow}>
                  <span className={styles.pill}>
                    <Calendar size={13} className={styles.pillIcon} />
                    {exp.period}
                  </span>
                  <span className={styles.pill}>
                    <MapPin size={13} className={styles.pillIcon} />
                    {exp.location}
                  </span>
                  <span className={`${styles.pill} ${styles.typePill}`}>
                    <Briefcase size={13} className={styles.pillIcon} />
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className={styles.description}>{exp.description}</p>

              {/* Responsibilities */}
              <div className={styles.highlightsContainer}>
                <h4 className={styles.highlightsTitle}>
                  <Sparkles size={14} className={styles.sparkleIcon} />
                  Key Responsibilities &amp; Impact
                </h4>
                <ul className={styles.list}>
                  {exp.highlights.map((item) => (
                    <li key={item} className={styles.listItem}>
                      <CheckCircle2 size={15} className={styles.checkIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Footer */}
              <div className={styles.techStackWrap}>
                <span className={styles.techLabel}>Technologies Used:</span>
                <div className={styles.techChips}>
                  {exp.techStack.map((tech) => (
                    <span key={tech} className={styles.techChip}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

