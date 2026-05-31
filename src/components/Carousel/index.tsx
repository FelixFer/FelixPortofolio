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
    <div className={styles.wrapper}>
      <div className={styles.track} style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides}
      </div>
      <div className={styles.controls}>
        <button onClick={prev} className={styles.navBtn}>
          <AiOutlineLeft size={40} />
        </button>
        <button onClick={next} className={styles.navBtn}>
          <AiOutlineRight size={40} />
        </button>
      </div>
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <div key={i} className={`${styles.dot} ${curr === i ? styles.active : ''}`} />
        ))}
      </div>
    </div>
  );
}
