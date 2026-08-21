'use client';

import { useState } from 'react';
import {
  Code2,
  Layout,
  Layers,
  Database,
  Sparkles,
  Zap,
  Orbit,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillItem {
  name: string;
  category: 'frontend' | 'ui' | 'state' | 'motion';
  categoryLabel: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  percentage: number;
  tags: string[];
}

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend Core' },
  { id: 'ui', label: 'UI & Design Systems' },
  { id: 'state', label: 'State & Backend' },
  { id: 'motion', label: '3D & Motion' },
];

const skillsList: SkillItem[] = [
  { name: 'React.js', category: 'frontend', categoryLabel: 'Frontend Core', level: 'Expert', percentage: 95, tags: ['Hooks', 'Context API', 'Performance'] },
  { name: 'Next.js', category: 'frontend', categoryLabel: 'Frontend Core', level: 'Expert', percentage: 92, tags: ['App Router', 'SSR / SSG', 'Server Actions'] },
  { name: 'TypeScript', category: 'frontend', categoryLabel: 'Frontend Core', level: 'Expert', percentage: 90, tags: ['Type Safety', 'Generics', 'Interfaces'] },
  { name: 'JavaScript (ES6+)', category: 'frontend', categoryLabel: 'Frontend Core', level: 'Expert', percentage: 94, tags: ['Async/Await', 'DOM Manipulation', 'ESNext'] },
  { name: 'HTML5 & CSS3', category: 'frontend', categoryLabel: 'Frontend Core', level: 'Expert', percentage: 96, tags: ['Semantic HTML', 'CSS Grid & Flex', 'BEM'] },
  { name: 'Tailwind CSS', category: 'ui', categoryLabel: 'UI & Styling', level: 'Expert', percentage: 95, tags: ['JIT Engine', 'Custom Config', 'Responsive UI'] },
  { name: 'shadcn/ui', category: 'ui', categoryLabel: 'UI & Styling', level: 'Expert', percentage: 90, tags: ['Radix Primitives', 'Accessible UI', 'Theming'] },
  { name: 'Material UI (MUI)', category: 'ui', categoryLabel: 'UI & Styling', level: 'Advanced', percentage: 88, tags: ['Theme Overrides', 'Data Grids', 'Components'] },
  { name: 'CSS Modules', category: 'ui', categoryLabel: 'UI & Styling', level: 'Expert', percentage: 92, tags: ['Scoped CSS', 'Variables', 'Animations'] },
  { name: 'Redux Toolkit', category: 'state', categoryLabel: 'State & Data', level: 'Advanced', percentage: 88, tags: ['RTK Query', 'Slices', 'Middleware'] },
  { name: 'React Query (TanStack)', category: 'state', categoryLabel: 'State & Data', level: 'Advanced', percentage: 86, tags: ['Caching', 'Optimistic Updates', 'Pagination'] },
  { name: 'Supabase', category: 'state', categoryLabel: 'State & Data', level: 'Advanced', percentage: 88, tags: ['Postgres DB', 'Auth Flow', 'Realtime Sync'] },
  { name: 'Firebase', category: 'state', categoryLabel: 'State & Data', level: 'Advanced', percentage: 87, tags: ['Firestore', 'Authentication', 'Storage'] },
  { name: 'RESTful APIs & Auth', category: 'state', categoryLabel: 'State & Data', level: 'Expert', percentage: 92, tags: ['JWT Tokens', 'OTP Flow', 'Axios Interceptors'] },
  { name: 'Three.js', category: 'motion', categoryLabel: '3D & Motion', level: 'Advanced', percentage: 82, tags: ['WebGL', '3D Models', 'Lighting & Shaders'] },
  { name: 'GSAP Animations', category: 'motion', categoryLabel: '3D & Motion', level: 'Advanced', percentage: 86, tags: ['ScrollTrigger', 'Timelines', 'Micro-Interactions'] },
  { name: 'Lenis Smooth Scroll', category: 'motion', categoryLabel: '3D & Motion', level: 'Expert', percentage: 90, tags: ['Inertia Physics', 'Parallax', 'Smooth Scroll'] },
];

const engineeringHighlights = [
  { icon: Zap, title: 'Performance & Optimization', desc: 'Deep knowledge in code-splitting via React Lazy & Suspense, dynamic imports, and sub-second page loads with 95+ Lighthouse scores.' },
  { icon: Layout, title: 'Pixel-Perfect UI & Design Systems', desc: 'Translating complex Figma prototypes into clean, responsive, and fully accessible component libraries with Tailwind CSS & shadcn/ui.' },
  { icon: Orbit, title: 'Interactive 3D & Motion UX', desc: 'Crafting memorable user journeys with Three.js viewports, choreographed GSAP ScrollTrigger timelines, and fluid Lenis scrolling.' },
  { icon: Database, title: 'Full-Stack Integration & APIs', desc: 'Architecting robust state flows, Supabase/Firebase backends, secure JWT/OTP authentication, and reliable RESTful API communication.' },
];

const levelStyles: Record<string, string> = {
  Expert: 'text-primary bg-primary/10 border border-primary/30',
  Advanced: 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30',
  Proficient: 'text-violet-400 bg-violet-400/10 border border-violet-400/30',
};

const categoryIcon: Record<string, React.ReactNode> = {
  frontend: <Code2 size={13} className="text-primary" />,
  ui: <Layout size={13} className="text-primary" />,
  state: <Database size={13} className="text-primary" />,
  motion: <Sparkles size={13} className="text-primary" />,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills =
    activeTab === 'all'
      ? skillsList
      : skillsList.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Skills & Capabilities"
          title="Technical &amp;"
          highlight="Professional Stack"
          subtitle="A comprehensive toolkit of modern frameworks, UI architecture systems, and interactive 3D web technologies."
        />

        {/* Category Filter Tabs */}
        <div className="flex justify-center items-center flex-wrap gap-3 mt-8 mb-10">
          {categories.map((cat) => {
            const count = cat.id === 'all' ? skillsList.length : skillsList.filter((s) => s.category === cat.id).length;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-[18px] py-[10px] rounded-full text-sm font-semibold backdrop-blur-sm border transition-all duration-200
                  ${isActive
                    ? 'text-white bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] border-primary shadow-[0_0_20px_var(--color-accent-glow)] -translate-y-0.5'
                    : 'text-muted-foreground bg-card/80 border-border hover:text-foreground hover:border-primary/40 hover:bg-background hover:-translate-y-0.5'
                  }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[0.72rem] font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black/20 text-white' : 'bg-white/15 text-inherit'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {filteredSkills.map((skill) => (
            <Card
              key={skill.name}
              className="flex flex-col bg-card/80 border-border/60 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_36px_var(--color-accent-glow)]"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start gap-2 mb-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-[5px]">
                    {categoryIcon[skill.category]}
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
                      {skill.categoryLabel}
                    </span>
                  </div>
                  <h3 className="text-[1.1rem] font-bold text-foreground tracking-tight">{skill.name}</h3>
                </div>
                <span className={`text-[0.68rem] font-bold uppercase tracking-[0.05em] px-2 py-0.5 rounded-full shrink-0 ${levelStyles[skill.level]}`}>
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="text-muted-foreground font-medium">Proficiency</span>
                  <span className="text-primary font-bold font-mono">{skill.percentage}%</span>
                </div>
                <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent-glow)] transition-[width] duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border/60">
                {skill.tags.map((tag) => (
                  <Badge key={tag} variant="tech" className="text-[0.72rem]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Engineering Highlights Bento Grid */}
        <div className="mt-8 pt-10 border-t border-border/60">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles size={20} className="text-primary" />
            <h3 className="text-2xl font-extrabold text-foreground tracking-tight">Core Engineering Strengths</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {engineeringHighlights.map((item) => {
              const IconComp = item.icon;
              return (
                <Card
                  key={item.title}
                  className="flex flex-col bg-card/80 border-border/60 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_30px_var(--color-accent-glow)]"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary border border-primary/30 rounded-xl mb-4 shadow-[0_0_15px_var(--color-accent-glow)]">
                    <IconComp size={24} />
                  </div>
                  <h4 className="text-[1.05rem] font-bold text-foreground mb-2 leading-snug">{item.title}</h4>
                  <p className="text-[0.84rem] text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
