import {
  Code,
  Layout,
  BarChart3,
  Settings,
  Users,
  Plug,
  Smartphone,
  RefreshCw,
  Bug,
} from 'lucide-react';
import { FigmaIcon } from './Icons';
import SectionHeader from './SectionHeader';
import { Card } from '@/components/ui/card';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Code size={22} />,
    title: 'React.js Development',
    description:
      'Building dynamic, component-based web applications with React.js and modern JavaScript.',
  },
  {
    icon: <Layout size={22} />,
    title: 'Next.js Development',
    description:
      'Server-side rendered and statically generated applications with Next.js for performance and SEO.',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'SaaS Dashboard Development',
    description:
      'Data-driven SaaS dashboards with analytics, reporting interfaces, and data visualization.',
  },
  {
    icon: <Settings size={22} />,
    title: 'Admin Panel Development',
    description:
      'Feature-rich admin panels with user management, data tables, search, filtering, and CRUD operations.',
  },
  {
    icon: <Users size={22} />,
    title: 'CRM Frontend Development',
    description:
      'Customer relationship management interfaces with role-based dashboards and data management.',
  },
  {
    icon: <Plug size={22} />,
    title: 'API Integration',
    description:
      'REST API integration, data fetching, state management, and third-party service connections.',
  },
  {
    icon: <FigmaIcon size={22} />,
    title: 'Figma to React / Next.js',
    description:
      'Pixel-perfect conversion of Figma designs into responsive React and Next.js components.',
  },
  {
    icon: <Smartphone size={22} />,
    title: 'Responsive UI Development',
    description:
      'Mobile-first responsive interfaces that work seamlessly across all screen sizes and devices.',
  },
  {
    icon: <RefreshCw size={22} />,
    title: 'Existing Project Improvements',
    description:
      'Upgrading, refactoring, and enhancing existing frontend projects with modern practices.',
  },
  {
    icon: <Bug size={22} />,
    title: 'Bug Fixing & Optimization',
    description:
      'Debugging frontend issues, resolving performance bottlenecks, and improving user experience.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#080c14] relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="What I Do"
          title="My"
          highlight="Services"
          subtitle="Frontend development services tailored for startups, businesses, and SaaS products."
        />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/80 bg-card/60 p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-[#00eeff] shadow-[0_0_10px_rgba(0,238,255,0.2)] transition-transform duration-300 group-hover:scale-105">
                {service.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-foreground group-hover:text-[#00eeff] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
