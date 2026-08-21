import { Briefcase, MapPin, Calendar, CheckCircle2, Sparkles, Globe2, Building2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Three.js', 'GSAP', 'Supabase', 'Firebase', 'REST APIs'],
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
    techStack: ['Next.js', 'React.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'State Mgmt', 'REST APIs', 'Git Workflow'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Career Journey"
          title="Work"
          highlight="Experience"
          subtitle="Proven track record in production frontend architecture, high-impact web apps, and international remote collaboration."
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              className="relative flex flex-col bg-card/80 border-border/60 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_45px_var(--color-accent-glow)] overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Header */}
              <div className="flex flex-col gap-4 mb-5 pb-5 border-b border-border/60">
                <div className="flex items-start gap-4">
                  <div className="w-13 h-13 flex items-center justify-center w-[52px] h-[52px] bg-primary/10 text-primary border border-primary/30 rounded-xl shrink-0 shadow-[0_0_15px_var(--color-accent-glow)] transition-transform duration-300 hover:scale-105">
                    {exp.statusType === 'current' ? <Building2 size={24} /> : <Globe2 size={24} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-1 flex-wrap">
                      <h3 className="text-xl font-extrabold text-foreground tracking-tight">{exp.company}</h3>
                      <span
                        className={`inline-flex items-center gap-1.5 text-[0.72rem] font-bold uppercase tracking-[0.05em] px-2.5 py-1 rounded-full shrink-0
                          ${exp.statusType === 'current'
                            ? 'text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                            : 'text-primary bg-primary/10 border border-primary/30 shadow-[0_0_10px_var(--color-accent-glow)]'
                          }`}
                      >
                        <span className="w-[7px] h-[7px] rounded-full bg-current shadow-[0_0_8px_currentColor] animate-pulse" />
                        {exp.status}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-primary leading-snug">{exp.role}</p>
                  </div>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-[0.78rem] font-medium text-muted-foreground bg-background border border-border/60 px-2.5 py-1 rounded-lg">
                    <Calendar size={13} className="text-primary shrink-0" />{exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[0.78rem] font-medium text-muted-foreground bg-background border border-border/60 px-2.5 py-1 rounded-lg">
                    <MapPin size={13} className="text-primary shrink-0" />{exp.location}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[0.78rem] font-medium text-foreground bg-primary/10 border border-primary/30 px-2.5 py-1 rounded-lg">
                    <Briefcase size={13} className="text-primary shrink-0" />{exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[0.92rem] text-muted-foreground leading-relaxed mb-5">{exp.description}</p>

              {/* Responsibilities */}
              <div className="flex-1 mb-6">
                <h4 className="flex items-center gap-1.5 text-[0.82rem] font-bold uppercase tracking-[0.06em] text-muted-foreground mb-3">
                  <Sparkles size={14} className="text-primary" />
                  Key Responsibilities &amp; Impact
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.86rem] text-muted-foreground leading-snug">
                      <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5 drop-shadow-[0_0_4px_var(--color-accent-glow)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Footer */}
              <div className="mt-auto pt-4 border-t border-border/60">
                <span className="block text-[0.75rem] font-semibold text-muted-foreground uppercase tracking-[0.05em] mb-2">
                  Technologies Used:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <Badge key={tech} variant="tech" className="text-xs transition-all hover:bg-primary hover:border-primary hover:text-primary-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
