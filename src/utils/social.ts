import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { IconType } from 'react-icons';

export interface SocialLink {
  link: string;
  logo: IconType;
  label: string;
}

export const social: SocialLink[] = [
  { link: 'mailto:felixfdnd@gmail.com', logo: BiLogoGmail, label: 'Email' },
  { link: 'https://www.linkedin.com/in/felix-frdnnd/', logo: AiFillLinkedin, label: 'LinkedIn' },
  { link: 'https://wa.me/082371176527', logo: AiOutlineWhatsApp, label: 'WhatsApp' },
  { link: 'https://github.com/FelixFer', logo: AiFillGithub, label: 'GitHub' },
  { link: 'https://www.instagram.com/felferdinand/', logo: AiOutlineInstagram, label: 'Instagram' },
];
