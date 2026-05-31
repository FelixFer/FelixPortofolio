'use client';
import Image from 'next/image';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from '@/components/Modal';
import Carousel from '@/components/Carousel';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  return (
    <section className="lg:pt-20" id="project">
      <nav className="section-nav">
        <h4 className="text-center text-slate-300 font-bold mb-8 py-2 sm:mx-10">PROJECT</h4>
      </nav>
      <div className="mb-20 px-5 sm:mx-10 lg:ml-0">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpenModal={project.slides ? () => setOpenModalIndex(i) : undefined}
          />
        ))}
      </div>

      {projects.map((project, i) =>
        project.slides ? (
          <Modal
            key={project.title}
            open={openModalIndex === i}
            onClose={() => setOpenModalIndex(null)}
            width={project.modalWidth}
          >
            <Carousel>
              {project.slides.map((slide, j) => (
                // No width/height/style here — the .slide img CSS in
                // Carousel.module.scss constrains to max 100% × 450 px,
                // preserving aspect ratio for every image format.
                <Image
                  key={j}
                  loading="lazy"
                  src={slide}
                  alt={`${project.title} screenshot ${j + 1}`}
                />
              ))}
            </Carousel>
          </Modal>
        ) : null
      )}
    </section>
  );
}
