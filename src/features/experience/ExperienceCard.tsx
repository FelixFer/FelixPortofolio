import TechBadge from '@/components/TechBadge';
import { Experience } from '@/data/experience';
import styles from './experience.module.scss';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { period, role, company, type, bullets, tech } = experience;
  return (
    <div className="card-hover mb-10 sm:grid sm:grid-cols-[30%_70%]">
      <p className={styles.period}>{period}</p>
      <div className="sm:ml-4">
        <p className={styles.role}>
          {role} · {company}
        </p>
        <p className={styles.type}>{type}</p>
        {bullets.map((bullet, i) => (
          <p key={i} className={styles.bullet}>
            {bullets.length > 1 ? `• ${bullet}` : bullet}
          </p>
        ))}
        {tech.length > 0 && (
          <ul className={styles.techList}>
            {tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
