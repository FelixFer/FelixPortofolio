'use client';
import Image from 'next/image';
import { RxArrowTopRight } from 'react-icons/rx';
import TechBadge from './TechBadge';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onOpenModal?: () => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const { title, subtitle, category, description, tech, thumbnail, thumbnailAlt, href, slides } = project;

  const hasModal = !!slides;
  const isLandscape = ['SandwichYay', 'Djongers Weather'].includes(title);
  const thumbnailClass = isLandscape ? 'project-thumb-landscape' : 'project-thumb';

  return (
    <div className="card-hover mb-10 sm:grid sm:grid-cols-[30%_70%]">
      <div className="sm:order-last sm:ml-4">
        {hasModal ? (
          <button
            className="text-slate-300 mt-2 flex cursor-pointer hover:text-teal-400 lg:hover:text-slate-300 text-left"
            onClick={onOpenModal}
          >
            {title}&nbsp;
            {subtitle && <span className="text-slate-500">{subtitle}</span>}
            <RxArrowTopRight />
          </button>
        ) : (
          <a
            className="text-slate-300 mt-2 flex cursor-pointer hover:text-teal-400 lg:hover:text-slate-300"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
            <RxArrowTopRight />
          </a>
        )}
        <p className="text-slate-400 text-sm mb-2">{category}</p>
        <p className="text-justify text-slate-500 text-sm mb-3">{description}</p>
        <ul className="flex gap-1 flex-wrap">
          {tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </ul>
      </div>
      <div className={`${thumbnailClass} sm:order-first`}>
        <Image loading="lazy" src={thumbnail} alt={thumbnailAlt} style={{ objectFit: 'cover' }} />
      </div>
    </div>
  );
}
