import ExperienceCard from './ExperienceCard';
import { experiences } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <section className="lg:pt-20 scroll-mt-20" id="experience">
      <nav className="section-nav">
        <h4 className="text-center text-slate-300 font-bold mb-8 py-2 sm:mx-10">EXPERIENCE</h4>
      </nav>
      <div className="mb-20 px-5 lg:mb-0 sm:mx-10 lg:ml-0">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} experience={exp} />
        ))}
      </div>
    </section>
  );
}
