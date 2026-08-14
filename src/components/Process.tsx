import { Search, PenTool, Code, Rocket } from 'lucide-react';
import SectionHeader from './SectionHeader';
import styles from './Process.module.css';

interface Step {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Search size={22} />,
    number: '01',
    title: 'Discovery',
    description:
      'Understanding your requirements, goals, target users, and project scope to define the right approach.',
  },
  {
    icon: <PenTool size={22} />,
    number: '02',
    title: 'Design & Planning',
    description:
      'Planning the architecture, component structure, and UI layout before writing any code.',
  },
  {
    icon: <Code size={22} />,
    number: '03',
    title: 'Development',
    description:
      'Building the application with clean, modular code, reusable components, and API integrations.',
  },
  {
    icon: <Rocket size={22} />,
    number: '04',
    title: 'Testing & Launch',
    description:
      'Testing across devices, fixing issues, optimizing performance, and deploying the final product.',
  },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="How I Work"
          title="Development"
          highlight="Process"
          subtitle="A structured approach to delivering quality frontend solutions."
        />
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
              {index < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
