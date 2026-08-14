import { Star, CheckCircle, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import styles from './Freelance.module.css';

const focusAreas = [
  'React.js & Next.js Applications',
  'TypeScript Development',
  'SaaS Dashboard Frontends',
  'Admin Panel Interfaces',
  'CRM Frontend Systems',
  'API Integration & Data Management',
  'Responsive UI Development',
  'Existing Project Improvements',
];

const clientFeedback = [
  'Reliable',
  'Clear Communicator',
  'Committed to Quality',
  'Detail Oriented',
];

export default function Freelance() {
  return (
    <section id="freelance" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Freelance"
          title="Available for"
          highlight="Freelance Projects"
          subtitle="I partner with startups and businesses to deliver quality frontend solutions."
        />
        <div className={styles.grid}>
          <div className={styles.mainCard}>
            <p className={styles.intro}>
              I work with startups and businesses to build modern React.js and
              Next.js applications — SaaS dashboards, admin panels, CRM
              interfaces, and API-integrated frontend systems.
            </p>
            <p className={styles.subtext}>
              Available for freelance projects through Upwork with a focus on
              delivering reliable, high-quality frontend solutions.
            </p>
            <div className={styles.focusGrid}>
              {focusAreas.map((area) => (
                <div key={area} className={styles.focusItem}>
                  <CheckCircle size={16} className={styles.checkIcon} />
                  {area}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.sidebar}>
            <div className={styles.ratingCard}>
              <div className={styles.ratingHeader}>
                <Star size={20} className={styles.starIcon} />
                <span className={styles.ratingValue}>5.0 / 5</span>
              </div>
              <p className={styles.ratingLabel}>Client Rating on Upwork</p>
            </div>
            <div className={styles.feedbackCard}>
              <h4 className={styles.feedbackTitle}>Client Feedback</h4>
              <div className={styles.feedbackList}>
                {clientFeedback.map((item) => (
                  <span key={item} className={styles.feedbackChip}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="#contact"
              className={styles.hireCta}
            >
              <ArrowUpRight size={18} />
              Discuss a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
