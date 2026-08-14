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
import styles from './Services.module.css';

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
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="What I Do"
          title="My"
          highlight="Services"
          subtitle="Frontend development services tailored for startups, businesses, and SaaS products."
        />
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.iconWrap}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
