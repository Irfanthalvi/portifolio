import { ExternalLink, Layers, Code, ShieldCheck, FileText } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
    projectUrl: 'https://shadcn-lms-dev-afif.vercel.app/',
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
    projectUrl: 'https://lush-crush.vercel.app/',
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
    projectUrl: 'https://ai-lms-ashy.vercel.app/',
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
    projectUrl: 'https://invoice-form-three.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Featured Work"
          title="Production"
          highlight="Projects"
          subtitle="Real-world LMS platforms, eCommerce systems, and interactive web applications from my resume."
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col border-border/80 bg-card/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary shrink-0 shadow-[0_0_12px_var(--color-accent-glow)]">
                  {project.icon}
                </div>
                <div>
                  <Badge variant="cyan" className="mb-1 text-[10px] font-bold tracking-wider uppercase">
                    {project.category}
                  </Badge>
                  <h3 className="text-lg sm:text-xl font-extrabold text-foreground leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights Box */}
              <div className="mb-6 flex-1 rounded-xl border border-border/50 bg-background/50 p-4 sm:p-5">
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  Key Features &amp; Architecture:
                </h4>
                <ul className="flex flex-col gap-2">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="relative pl-4 text-xs sm:text-sm text-foreground/85 leading-relaxed before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary before:shadow-[0_0_6px_var(--color-accent-glow)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-4 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="tech"
                      className="text-[11px] font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button
                  asChild
                  variant="glow"
                  size="sm"
                  className="rounded-full px-4 py-1.5 text-xs font-bold shrink-0"
                >
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{project.linkLabel}</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
