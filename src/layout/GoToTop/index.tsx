'use client';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-24 right-5 z-50 transition-opacity duration-300 lg:bottom-10 lg:right-10 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-teal-500/20 hover:bg-teal-500/30 backdrop-blur-sm text-teal-300 p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 border border-teal-400/20"
        aria-label="Go to top"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
}
