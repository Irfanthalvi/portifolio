import { Code, Layers, Zap, Cpu } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'shadcn/ui',
  'Material UI',
  'Redux Toolkit',
  'React Query',
  'Firebase',
  'Supabase',
  'Three.js',
  'GSAP',
  'Lenis',
];

const highlights = [
  {
    icon: Code,
    title: 'LMS & Enterprise Platforms',
    desc: 'Built multiple LMS applications with dashboards, user flows, and Firebase/Supabase authentication.',
  },
  {
    icon: Zap,
    title: '3D & Interactive Animations',
    desc: 'Implemented advanced UI interactions using Three.js, GSAP, and Lenis for smooth scroll web experiences.',
  },
  {
    icon: Layers,
    title: 'eCommerce & Security',
    desc: 'Product selling platforms with secure auth and admin-controlled OTP verification workflows.',
  },
  {
    icon: Cpu,
    title: 'Scalable Frontend Architecture',
    desc: 'Maintainable React/Next.js/TypeScript codebases with performance optimization and clean component trees.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="About Me"
          title="Building Scalable"
          highlight="Frontend Solutions"
          subtitle="Experienced Frontend Developer creating modern LMS platforms, eCommerce solutions, and interactive web experiences."
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio & Tech Chips */}
          <div className="flex flex-col gap-5 text-left">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              I&apos;m <strong className="text-primary font-bold">Irfan Ali</strong>, a Frontend Developer with{' '}
              <strong className="text-primary font-bold">3+ years of experience</strong> building modern, scalable, and
              production-ready web applications using <strong className="text-primary font-bold">React.js</strong>,{' '}
              <strong className="text-primary font-bold">Next.js</strong>, and{' '}
              <strong className="text-primary font-bold">TypeScript</strong>.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              My experience spans developing full LMS platforms, product selling/eCommerce solutions, SaaS dashboards, and
              3D interactive web experiences. I leverage UI systems like <strong className="text-foreground">Tailwind CSS</strong>,{' '}
              <strong className="text-foreground">shadcn/ui</strong>, and <strong className="text-foreground">Material UI</strong>,
              with state management via <strong className="text-foreground">Redux Toolkit</strong>,{' '}
              <strong className="text-foreground">Context API</strong>, and <strong className="text-foreground">React Query</strong>.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I specialize in advanced UI interactions using <strong className="text-foreground">Three.js</strong>,{' '}
              <strong className="text-foreground">GSAP</strong>, and <strong className="text-foreground">Lenis</strong> for
              smooth animations. I integrate backend services with <strong className="text-foreground">Firebase</strong>,{' '}
              <strong className="text-foreground">Supabase</strong>, and REST APIs, implementing secure authentication workflows
              including admin-controlled OTP verification.
            </p>

            {/* Tech Badges */}
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((tech) => (
                <Badge
                  key={tech}
                  variant="brand"
                  className="px-3.5 py-1 text-xs font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right: Highlights Bento Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => {
              const IconComp = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border/60 bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardHeader className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_10px_var(--color-accent-glow)]">
                      <IconComp size={22} />
                    </div>
                    <CardTitle className="text-base font-bold text-foreground mb-2">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
