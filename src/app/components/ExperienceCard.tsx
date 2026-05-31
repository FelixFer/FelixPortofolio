import TechBadge from './TechBadge';
import { Experience } from '../data/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { period, role, company, type, bullets, tech } = experience;
  return (
    <div className="card-hover mb-10 sm:grid sm:grid-cols-[30%_70%]">
      <p className="text-slate-500 text-sm">{period}</p>
      <div className="sm:ml-4">
        <p className="text-slate-300 mt-2 sm:mt-0 hover:text-teal-400 lg:hover:text-slate-300">
          {role} · {company}
        </p>
        <p className="text-slate-400 text-sm mb-2">{type}</p>
        {bullets.map((bullet, i) => (
          <p key={i} className="text-slate-500 text-sm">
            {bullets.length > 1 ? `• ${bullet}` : bullet}
          </p>
        ))}
        {tech.length > 0 && (
          <ul className="flex gap-1 flex-wrap mt-3">
            {tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
