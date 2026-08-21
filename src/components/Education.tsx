import {
  GraduationCap,
  Calendar,
  MapPin,
  Trophy,
  Medal,
  Star,
  BookOpen,
  Award,
  CheckCircle2,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import styles from './Education.module.css';

interface Achievement {
  icon: React.ElementType;
  text: string;
}

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  board: string;
  period: string;
  location: string;
  status: 'Completed' | 'In Progress';
  statusClass: 'completed' | 'ongoing';
  description?: string;
  achievements: Achievement[];
  certificates: string[];
}

const educationData: EducationItem[] = [
  {
    id: 'fsc',
    degree: 'FSc — Computer-Science (Part I & II)',
    institution: 'Islamabad Model College',
    board: 'Federal Board of Intermediate Education (FBISE), Islamabad',
    period: '2020 – 2022',
    location: 'Islamabad, Pakistan',
    status: 'Completed',
    statusClass: 'completed',
    description:
      'Completed FSc Computer-Science with Distinction from FBISE Islamabad, securing 1st Position in both 11th and 12th Grade and earning multiple merit certificates from the college.',
    achievements: [
      { icon: Trophy, text: '1st Position — FSc Part I (11th Grade), FBISE Islamabad' },
      { icon: Trophy, text: '1st Position — FSc Part II (12th Grade), FBISE Islamabad' },
      { icon: Star, text: 'Merit Certificate for Academic Excellence — Federal Govt College' },
      { icon: Medal, text: 'Certificate of Achievement — Top Performer of the Batch' },
    ],
    certificates: [
      'FBISE Merit Certificate — Part I',
      'FBISE Merit Certificate — Part II',
      'Certificate of Excellence',
      'Certificate of Achievement',
    ],
  },
  {
    id: 'bs',
    degree: 'BS — Software Engineering',
    institution: 'Virtual University of Pakistan',
    board: 'Higher Education Commission (HEC) Recognized',
    period: '2023 – 2027 (Expected)',
    location: 'Pakistan',
    status: 'In Progress',
    statusClass: 'ongoing',
    description:
      "Currently pursuing a 4-year Bachelor's in Software Engineering, focusing on web technologies, software architecture, data structures, and full-stack development.",
    achievements: [
      { icon: BookOpen, text: 'Core focus on Software Engineering & Modern Web Technologies' },
      { icon: CheckCircle2, text: 'Applying academic knowledge in real production projects simultaneously' },
      { icon: Star, text: '2+ years of professional frontend experience running alongside studies' },
      { icon: Award, text: 'Consistent performance combining industry work with university coursework' },
    ],
    certificates: [
      'Enrolled — BS Software Engineering',
      'HEC-Recognized Program',
      'Virtual University of Pakistan',
      'Expected Graduation: 2027',
    ],
  },
];


export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Academic Background"
          title="Education &amp;"
          highlight="Achievements"
          subtitle="Combining strong academic foundations with real-world production experience in modern frontend development."
        />

        <div className={styles.educationGrid}>
          {educationData.map((edu) => (
            <div key={edu.id} className={styles.card}>
              <div className={styles.cardGlow} />

              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}>
                  <GraduationCap size={26} />
                </div>
                <div className={styles.headerContent}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <span
                      className={`${styles.statusBadge} ${edu.statusClass === 'completed'
                        ? styles.badgeCompleted
                        : styles.badgeOngoing
                        }`}
                    >
                      <span className={styles.pulseDot} />
                      {edu.status}
                    </span>
                  </div>
                  <p className={styles.institution}>{edu.institution}</p>
                  <p className={styles.board}>{edu.board}</p>

                  {/* Meta Pills */}
                  <div className={styles.metaRow}>
                    <span className={styles.pill}>
                      <Calendar size={13} className={styles.pillIcon} />
                      {edu.period}
                    </span>
                    <span className={styles.pill}>
                      <MapPin size={13} className={styles.pillIcon} />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              {edu.description && (
                <p className={styles.description}>{edu.description}</p>
              )}

              {/* Achievements */}
              {edu.achievements.length > 0 && (
                <div className={styles.achievementsWrap}>
                  <h4 className={styles.achievementsTitle}>
                    <Trophy size={14} className={styles.trophyIcon} />
                    Achievements &amp; Honors
                  </h4>
                  <ul className={styles.achievementList}>
                    {edu.achievements.map((item, i) => {
                      const IconComp = item.icon;
                      return (
                        <li key={i} className={styles.achievementItem}>
                          <IconComp size={15} className={styles.achieveIcon} />
                          <span>{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Certificates */}
              {edu.certificates.length > 0 && (
                <div className={styles.certificatesWrap}>
                  <h4 className={styles.certTitle}>
                    <Award size={14} className={styles.certIcon} />
                    Certificates Received
                  </h4>
                  <div className={styles.certChips}>
                    {edu.certificates.map((cert) => (
                      <span key={cert} className={styles.certChip}>
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

