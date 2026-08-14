import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, highlight, subtitle }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>
        {title}{' '}
        {highlight && <span className={styles.highlight}>{highlight}</span>}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.line} />
    </div>
  );
}
