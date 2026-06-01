'use client';
import { FaUser, FaBriefcase, FaCode } from 'react-icons/fa';

interface MobileNavProps {
  activeLink: string;
}

const NAV_LINKS = [
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'experience', label: 'Experience', icon: FaBriefcase },
  { id: 'project', label: 'Project', icon: FaCode },
];

export default function MobileNav({ activeLink }: MobileNavProps) {
  return (
    <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-indigo-950/90 backdrop-blur-xl border border-indigo-400/20 rounded-full px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <ul className="flex items-center gap-1">
          {NAV_LINKS.map(({ id, label, icon: Icon }) => {
            const isActive = activeLink === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] [-webkit-tap-highlight-color:transparent] ${isActive
                    ? 'bg-teal-500/10 text-teal-300 shadow-[inset_0_1px_1px_rgba(94,234,212,0.1)]'
                    : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  <Icon
                    size={18}
                    className={`shrink-0 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}
                  />

                  <span
                    className={`text-xs font-bold tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${isActive ? 'max-w-[100px] opacity-100' : 'max-w-0 opacity-0'
                      }`}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
