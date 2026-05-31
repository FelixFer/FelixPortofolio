'use client';
import SocialIcons from './SocialIcons';

interface SidebarProps {
  activeLink: string;
  onNameClick: () => void;
}

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'project', label: 'Project' },
];

export default function Sidebar({ activeLink, onNameClick }: SidebarProps) {
  return (
    <aside className="sm:mx-10 lg:h-screen lg:sticky lg:top-0 lg:pt-20 lg:px-20 lg:flex lg:flex-col px-5">
      <h1
        className="text-center lg:text-left text-slate-200 text-3xl sm:text-4xl lg:text-5xl my-6 lg:mt-0 font-bold cursor-pointer lg:after:block lg:after:content-[''] lg:after:absolute lg:after:h-[5px] lg:after:bg-slate-200 lg:after:w-52 lg:after:scale-x-0 lg:after:hover:scale-x-100 after:transition after:duration-300 lg:after:origin-left"
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
      <div className="my-auto hidden lg:block">
        <ul className="text-slate-500 font-bold">
          {navLinks.map(({ id, label }) => (
            <li
              key={id}
              className={`my-4 hover:text-slate-300 hover:tracking-widest cursor-pointer transition-all ${activeLink === id ? 'text-slate-300 tracking-widest' : ''}`}
            >
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <SocialIcons />
    </aside>
  );
}
