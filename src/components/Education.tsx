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
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    certificates: ['FBISE Merit Certificate — Part I', 'FBISE Merit Certificate — Part II', 'Certificate of Excellence', 'Certificate of Achievement'],
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
    certificates: ['Enrolled — BS Software Engineering', 'HEC-Recognized Program', 'Virtual University of Pakistan', 'Expected Graduation: 2027'],
  },
];

const achieveIconColor = (icon: React.ElementType) => {
  if (icon === Trophy || icon === Medal || icon === Star) return 'text-amber-400 drop-shadow-[0_0_4px_rgba(245,158,11,0.4)]';
  return 'text-primary drop-shadow-[0_0_4px_var(--color-accent-glow)]';
};

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Academic Background"
          title="Education &amp;"
          highlight="Achievements"
          subtitle="Combining strong academic foundations with real-world production experience in modern frontend development."
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {educationData.map((edu) => (
            <Card
              key={edu.id}
              className="relative flex flex-col bg-card/80 border-border/60 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_45px_var(--color-accent-glow)] overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-50" />

              {/* Card Header */}
              <div className="flex items-start gap-4 mb-5 pb-5 border-b border-border/60">
                <div className="w-[54px] h-[54px] flex items-center justify-center bg-primary/10 text-primary border border-primary/30 rounded-xl shrink-0 shadow-[0_0_15px_var(--color-accent-glow)]">
                  <GraduationCap size={26} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                    <h3 className="text-[1.15rem] font-extrabold text-foreground tracking-tight leading-snug flex-1">
                      {edu.degree}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.05em] px-2.5 py-1 rounded-full shrink-0
                        ${edu.statusClass === 'completed'
                          ? 'text-emerald-500 bg-emerald-500/10 border border-emerald-500/30'
                          : 'text-amber-400 bg-amber-400/10 border border-amber-400/30'
                        }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-primary mb-0.5">{edu.institution}</p>
                  <p className="text-[0.78rem] text-muted-foreground font-medium mb-3 leading-snug">{edu.board}</p>

                  {/* Meta Pills */}
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 text-[0.76rem] font-medium text-muted-foreground bg-background border border-border/60 px-2.5 py-1 rounded-lg">
                      <Calendar size={13} className="text-primary shrink-0" />{edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[0.76rem] font-medium text-muted-foreground bg-background border border-border/60 px-2.5 py-1 rounded-lg">
                      <MapPin size={13} className="text-primary shrink-0" />{edu.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              {edu.description && (
                <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-5">{edu.description}</p>
              )}

              {/* Achievements */}
              {edu.achievements.length > 0 && (
                <div className="mb-5">
                  <h4 className="flex items-center gap-1.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-muted-foreground mb-3">
                    <Trophy size={14} className="text-amber-400" />
                    Achievements &amp; Honors
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {edu.achievements.map((item, i) => {
                      const IconComp = item.icon;
                      return (
                        <li key={i} className="flex items-start gap-2.5 text-[0.84rem] text-muted-foreground leading-snug">
                          <IconComp size={15} className={`shrink-0 mt-0.5 ${achieveIconColor(item.icon)}`} />
                          <span>{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Certificates */}
              {edu.certificates.length > 0 && (
                <div className="mt-auto pt-4 border-t border-border/60">
                  <h4 className="flex items-center gap-1.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-muted-foreground mb-3">
                    <Award size={14} className="text-primary" />
                    Certificates Received
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.certificates.map((cert) => (
                      <Badge key={cert} variant="tech" className="text-[0.74rem] transition-all hover:bg-primary hover:border-primary hover:text-primary-foreground">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
