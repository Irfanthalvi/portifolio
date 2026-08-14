'use client';

import { useState } from 'react';
import {
  Code2,
  Layout,
  Layers,
  Database,
  Sparkles,
  Zap,
  Boxes,
  Cpu,
  Flame,
  CheckCircle2,
  Workflow,
  Orbit,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import styles from './Skills.module.css';

interface SkillItem {
  name: string;
  category: 'frontend' | 'ui' | 'state' | 'motion';
  categoryLabel: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  percentage: number;
  tags: string[];
  icon: string;
}

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend Core' },
  { id: 'ui', label: 'UI & Design Systems' },
  { id: 'state', label: 'State & Backend' },
  { id: 'motion', label: '3D & Motion' },
];

const skillsList: SkillItem[] = [
  // Frontend
  {
    name: 'React.js',
    category: 'frontend',
    categoryLabel: 'Frontend Core',
    level: 'Expert',
    percentage: 95,
    tags: ['Hooks', 'Context API', 'Performance'],
    icon: 'react',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    categoryLabel: 'Frontend Core',
    level: 'Expert',
    percentage: 92,
    tags: ['App Router', 'SSR / SSG', 'Server Actions'],
    icon: 'next',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    categoryLabel: 'Frontend Core',
    level: 'Expert',
    percentage: 90,
    tags: ['Type Safety', 'Generics', 'Interfaces'],
    icon: 'ts',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    categoryLabel: 'Frontend Core',
    level: 'Expert',
    percentage: 94,
    tags: ['Async/Await', 'DOM Manipulation', 'ESNext'],
    icon: 'js',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'frontend',
    categoryLabel: 'Frontend Core',
    level: 'Expert',
    percentage: 96,
    tags: ['Semantic HTML', 'CSS Grid & Flex', 'BEM'],
    icon: 'html',
  },

  // UI Frameworks
  {
    name: 'Tailwind CSS',
    category: 'ui',
    categoryLabel: 'UI & Styling',
    level: 'Expert',
    percentage: 95,
    tags: ['JIT Engine', 'Custom Config', 'Responsive UI'],
    icon: 'tailwind',
  },
  {
    name: 'shadcn/ui',
    category: 'ui',
    categoryLabel: 'UI & Styling',
    level: 'Expert',
    percentage: 90,
    tags: ['Radix Primitives', 'Accessible UI', 'Theming'],
    icon: 'shadcn',
  },
  {
    name: 'Material UI (MUI)',
    category: 'ui',
    categoryLabel: 'UI & Styling',
    level: 'Advanced',
    percentage: 88,
    tags: ['Theme Overrides', 'Data Grids', 'Components'],
    icon: 'mui',
  },
  {
    name: 'CSS Modules',
    category: 'ui',
    categoryLabel: 'UI & Styling',
    level: 'Expert',
    percentage: 92,
    tags: ['Scoped CSS', 'Variables', 'Animations'],
    icon: 'css',
  },

  // State & APIs
  {
    name: 'Redux Toolkit',
    category: 'state',
    categoryLabel: 'State & Data',
    level: 'Advanced',
    percentage: 88,
    tags: ['RTK Query', 'Slices', 'Middleware'],
    icon: 'redux',
  },
  {
    name: 'React Query (TanStack)',
    category: 'state',
    categoryLabel: 'State & Data',
    level: 'Advanced',
    percentage: 86,
    tags: ['Caching', 'Optimistic Updates', 'Pagination'],
    icon: 'query',
  },
  {
    name: 'Supabase',
    category: 'state',
    categoryLabel: 'State & Data',
    level: 'Advanced',
    percentage: 88,
    tags: ['Postgres DB', 'Auth Flow', 'Realtime Sync'],
    icon: 'supabase',
  },
  {
    name: 'Firebase',
    category: 'state',
    categoryLabel: 'State & Data',
    level: 'Advanced',
    percentage: 87,
    tags: ['Firestore', 'Authentication', 'Storage'],
    icon: 'firebase',
  },
  {
    name: 'RESTful APIs & Auth',
    category: 'state',
    categoryLabel: 'State & Data',
    level: 'Expert',
    percentage: 92,
    tags: ['JWT Tokens', 'OTP Flow', 'Axios Interceptors'],
    icon: 'api',
  },

  // 3D & Animation
  {
    name: 'Three.js',
    category: 'motion',
    categoryLabel: '3D & Motion',
    level: 'Advanced',
    percentage: 82,
    tags: ['WebGL', '3D Models', 'Lighting & Shaders'],
    icon: 'three',
  },
  {
    name: 'GSAP Animations',
    category: 'motion',
    categoryLabel: '3D & Motion',
    level: 'Advanced',
    percentage: 86,
    tags: ['ScrollTrigger', 'Timelines', 'Micro-Interactions'],
    icon: 'gsap',
  },
  {
    name: 'Lenis Smooth Scroll',
    category: 'motion',
    categoryLabel: '3D & Motion',
    level: 'Expert',
    percentage: 90,
    tags: ['Inertia Physics', 'Parallax', 'Smooth Scroll'],
    icon: 'lenis',
  },
];

const engineeringHighlights = [
  {
    icon: Zap,
    title: 'Performance & Optimization',
    desc: 'Deep knowledge in code-splitting via React Lazy & Suspense, dynamic imports, and sub-second page loads with 95+ Lighthouse scores.',
  },
  {
    icon: Layout,
    title: 'Pixel-Perfect UI & Design Systems',
    desc: 'Translating complex Figma prototypes into clean, responsive, and fully accessible component libraries with Tailwind CSS & shadcn/ui.',
  },
  {
    icon: Orbit,
    title: 'Interactive 3D & Motion UX',
    desc: 'Crafting memorable user journeys with Three.js viewports, choreographed GSAP ScrollTrigger timelines, and fluid Lenis scrolling.',
  },
  {
    icon: Database,
    title: 'Full-Stack Integration & APIs',
    desc: 'Architecting robust state flows, Supabase/Firebase backends, secure JWT/OTP authentication, and reliable RESTful API communication.',
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills =
    activeTab === 'all'
      ? skillsList
      : skillsList.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Skills &amp; Capabilities"
          title="Technical &amp;"
          highlight="Professional Stack"
          subtitle="A comprehensive toolkit of modern frameworks, UI architecture systems, and interactive 3D web technologies."
        />

        {/* Category Filter Tabs */}
        <div className={styles.filterBar}>
          {categories.map((cat) => {
            const count =
              cat.id === 'all'
                ? skillsList.length
                : skillsList.filter((s) => s.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`${styles.filterBtn} ${
                  activeTab === cat.id ? styles.activeFilter : ''
                }`}
              >
                <span>{cat.label}</span>
                <span className={styles.tabBadge}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.cardHeader}>
                <div className={styles.skillTitleGroup}>
                  <div className={styles.categoryBadgeRow}>
                    {skill.category === 'frontend' && (
                      <Code2 size={13} className={styles.categoryIcon} />
                    )}
                    {skill.category === 'ui' && (
                      <Layout size={13} className={styles.categoryIcon} />
                    )}
                    {skill.category === 'state' && (
                      <Database size={13} className={styles.categoryIcon} />
                    )}
                    {skill.category === 'motion' && (
                      <Sparkles size={13} className={styles.categoryIcon} />
                    )}
                    <span className={styles.categoryBadge}>
                      {skill.categoryLabel}
                    </span>
                  </div>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                </div>
                <span
                  className={`${styles.levelBadge} ${
                    skill.level === 'Expert'
                      ? styles.levelExpert
                      : skill.level === 'Advanced'
                      ? styles.levelAdvanced
                      : styles.levelProficient
                  }`}
                >
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar & Value */}
              <div className={styles.progressArea}>
                <div className={styles.progressMeta}>
                  <span className={styles.proficiencyLabel}>Proficiency</span>
                  <span className={styles.percentText}>{skill.percentage}%</span>
                </div>
                <div className={styles.progressBarTrack}>
                  <div
                    className={styles.progressBarFill}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>

              {/* Tags */}
              <div className={styles.tagList}>
                {skill.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Highlights Bento Grid */}
        <div className={styles.bentoSection}>
          <div className={styles.bentoHeader}>
            <Sparkles size={20} className={styles.bentoSparkle} />
            <h3 className={styles.bentoTitle}>Core Engineering Strengths</h3>
          </div>

          <div className={styles.bentoGrid}>
            {engineeringHighlights.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} className={styles.bentoCard}>
                  <div className={styles.bentoIconWrap}>
                    <IconComp size={24} />
                  </div>
                  <h4 className={styles.bentoCardTitle}>{item.title}</h4>
                  <p className={styles.bentoCardDesc}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

