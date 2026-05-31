'use client';
import SocialIcons from '@/layout/SocialIcons';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  activeLink: string;
  onNameClick: () => void;
}

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'project', label: 'Project' },
];

export default function Sidebar({ activeLink, onNameClick }: SidebarProps) {
  return (
    <aside className="sm:mx-10 lg:h-screen lg:sticky lg:top-0 lg:pt-20 lg:px-20 lg:flex lg:flex-col px-5">
      <h1
        className={`text-center lg:text-left text-slate-200 text-3xl sm:text-4xl lg:text-5xl my-6 lg:mt-0 font-bold cursor-pointer ${styles.name}`}
        onClick={onNameClick}
      >
        Felix Ferdinand
      </h1>
      <h2 className="text-center lg:text-left text-slate-300 sm:text-xl lg:text-xl xl:text-2xl">
        Backend Developer
      </h2>
      <h3 className="text-center lg:text-left text-slate-400 sm:text-sm lg:text-md xl:text-lg">
        Graduate of Informatics Engineering from Universitas Multimedia Nusantara
      </h3>

      <nav className="my-auto hidden lg:block">
        <ul>
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id} className="my-4">
              <a
                href={`#${id}`}
                className={`${styles.navLink} ${activeLink === id ? styles.active : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <SocialIcons />
    </aside>
  );
}
