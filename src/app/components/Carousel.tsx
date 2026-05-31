'use client';
import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface CarouselProps {
  children: React.ReactNode[];
}

export default function Carousel({ children: slides }: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurr((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button onClick={prev} className="p-1 rounded-full shadow text-yellow-50">
          <AiOutlineLeft size={40} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow text-yellow-50">
          <AiOutlineRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? 'p-2' : 'bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
