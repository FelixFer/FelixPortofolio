'use client';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import styles from './Carousel.module.scss';

interface CarouselProps {
  children: React.ReactNode[];
}

export default function Carousel({ children: slides }: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurr((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className={styles.outer}>
      {/* Arrow buttons are siblings of the viewport, NOT overlaid on the image */}
      <div className={styles.row}>
        <button onClick={prev} className={styles.navBtn} aria-label="Previous image">
          <AiOutlineLeft size={16} />
        </button>

        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className={styles.slide}>
                {slide}
              </div>
            ))}
          </div>
        </div>

        <button onClick={next} className={styles.navBtn} aria-label="Next image">
          <AiOutlineRight size={16} />
        </button>
      </div>

      {/* Dot indicators below the image — clickable */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${curr === i ? styles.active : ''}`}
            onClick={() => setCurr(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
