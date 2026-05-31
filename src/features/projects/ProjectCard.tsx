'use client';
import Image from 'next/image';
import { RxArrowTopRight } from 'react-icons/rx';
import TechBadge from '@/components/TechBadge';
import { Project } from '@/data/projects';
import styles from './projects.module.scss';

interface ProjectCardProps {
  project: Project;
  onOpenModal?: () => void;
}

const LANDSCAPE_PROJECTS = ['SandwichYay', 'Djongers Weather'];

// Arrow that moves diagonally up-right on hover (Brittany Chiang style)
function ArrowIcon() {
  return (
    <RxArrowTopRight className="ml-1 shrink-0 transition-transform duration-150 group-hover:-translate-y-1 group-hover:translate-x-1" />
  );
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const { title, subtitle, category, description, tech, thumbnail, thumbnailAlt, href, slides } =
    project;

  const thumbClass = LANDSCAPE_PROJECTS.includes(title) ? styles.thumbLandscape : styles.thumb;

  return (
    <div className="card-hover mb-10 sm:grid sm:grid-cols-[30%_70%]">
      <div className="sm:order-last sm:ml-4">
        {slides ? (
          <button className={`${styles.titleBtn} group`} onClick={onOpenModal}>
            {title}&nbsp;
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            <ArrowIcon />
          </button>
        ) : (
          <a
            className={`${styles.titleBtn} group`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
            <ArrowIcon />
          </a>
        )}
        <p className={styles.category}>{category}</p>
        <p className={styles.description}>{description}</p>
        <ul className={styles.techList}>
          {tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </ul>
      </div>
      <div className={`${thumbClass} sm:order-first`}>
        <Image loading="lazy" src={thumbnail} alt={thumbnailAlt} style={{ objectFit: 'cover' }} />
      </div>
    </div>
  );
}
