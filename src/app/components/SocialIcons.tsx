import { social } from '../utils/social';

export default function SocialIcons() {
  return (
    <div className="justify-center lg:justify-start flex flex-row gap-3 text-3xl text-slate-400 mt-5 mb-20 lg:mt-auto">
      {social.map(({ link, logo: Icon, label }) => (
        <a key={label} href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
          <Icon className="cursor-pointer transition-all hover:text-slate-50 hover:animate-pulse hover:scale-125" />
        </a>
      ))}
    </div>
  );
}
