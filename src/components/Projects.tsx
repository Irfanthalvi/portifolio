import { ExternalLink, Layers, Code, ShieldCheck, FileText } from 'lucide-react';
import SectionHeader from './SectionHeader';
import styles from './Projects.module.css';

interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: React.ReactNode;
  linkLabel: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    title: 'LMS Platforms (E-Learning)',
    category: 'EdTech & Learning Management',
    description:
      'Built multiple production LMS applications with dashboards, student/instructor flows, and secure authentication.',
    highlights: [
      'Built multiple LMS applications using React.js, Next.js, and TypeScript',
      'Developed dashboards, user flows, and analytics interfaces',
      'Integrated Firebase authentication and OTP phone/email verification',
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Firebase', 'OTP Verification', 'Tailwind CSS'],
    icon: <Layers size={22} />,
    linkLabel: 'Lms-dev',
    projectUrl: '#',
  },
  {
    title: 'Product Selling / E-Commerce Platform',
    category: 'eCommerce & Admin Approval',
    description:
      'Firebase-connected product selling platform with admin-controlled access and 3D interactive graphics.',
    highlights: [
      'Developed a Firebase-connected product selling application with secure email/password auth',
      'Implemented admin-controlled OTP verification preventing unauthorized dashboard access',
      'Added interactive 3D UI elements using Three.js',
    ],
    technologies: ['React.js', 'Firebase Auth', 'Three.js', 'Admin OTP', 'Material UI'],
    icon: <ShieldCheck size={22} />,
    linkLabel: 'Ice-Pops',
    projectUrl: '#',
  },
  {
    title: 'Production & Interactive 3D Web Projects',
    category: 'Interactive & Motion Design',
    description:
      'Modern web experiences engineered with smooth scroll momentum and 3D graphics.',
    highlights: [
      'Built modern web experiences using Next.js, React, Three.js, GSAP, and Lenis',
      'Engineered smooth momentum scrolling and 3D canvas animations',
      'Pixel-perfect responsive design across desktop, tablet, and mobile',
    ],
    technologies: ['Next.js', 'React', 'Three.js', 'GSAP', 'Lenis', 'Tailwind CSS'],
    icon: <Code size={22} />,
    linkLabel: 'Landing-page',
    projectUrl: '#',
  },
  {
    title: 'Invoice & SaaS Dashboard Systems',
    category: 'SaaS & Enterprise Tools',
    description:
      'Enterprise invoice generator dashboard with REST API integration and automated PDF invoice creation.',
    highlights: [
      'Full CRUD operations for invoice management and client billing',
      'REST API integration with state handling via React Query',
      'Automated PDF invoice generation and export features',
    ],
    technologies: ['Next.js', 'TypeScript', 'REST APIs', 'React Query', 'PDF Engine', 'shadcn/ui'],
    icon: <FileText size={22} />,
    linkLabel: 'Invoices',
    projectUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Featured Work"
          title="Production"
          highlight="Projects"
          subtitle="Real-world LMS platforms, eCommerce systems, and interactive web applications from my resume."
        />

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}>{project.icon}</div>
                <div>
                  <span className={styles.categoryBadge}>{project.category}</span>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                </div>
              </div>

              <p className={styles.cardDesc}>{project.description}</p>

              <div className={styles.highlightsBox}>
                <h4 className={styles.highlightsTitle}>Key Features &amp; Architecture:</h4>
                <ul className={styles.highlightList}>
                  {project.highlights.map((item) => (
                    <li key={item} className={styles.highlightItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.techTags}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.projectUrl}
                  className={styles.projectBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{project.linkLabel}</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
