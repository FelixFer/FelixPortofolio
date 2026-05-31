import { StaticImageData } from 'next/image';
import hangulClassification from '../../../public/img/hangul-prediction.png';
import djongWeather from '../../../public/img/djong-weather.png';
import seiyou from '../../../public/img/seiyou.png';
import quicRecipe from '../../../public/img/quickrecipe.png';
import gebetApp from '../../../public/img/gebetApp.png';
import gebetApp1 from '../../../public/img/gebetApp1.png';
import gebetApp2 from '../../../public/img/gebetApp2.png';
import gebetApp3 from '../../../public/img/gebetApp3.png';
import gebetApp4 from '../../../public/img/gebetApp4.png';
import sandYay1 from '../../../public/img/sandYay1.png';
import sandYay2 from '../../../public/img/sandYay2.png';
import sandYay3 from '../../../public/img/sandYay3.png';
import sandYay4 from '../../../public/img/sandYay4.png';
import hangul1 from '../../../public/img/hangul1.jpg';
import hangul2 from '../../../public/img/hangul2.jpg';
import hangul3 from '../../../public/img/hangul3.jpg';
import ocr from '../../../public/img/ocr.png';
import ocr1 from '../../../public/img/ocr1.jpg';
import ocr2 from '../../../public/img/ocr2.jpg';
import ocr3 from '../../../public/img/ocr3.jpg';
import ocr4 from '../../../public/img/ocr4.jpg';
import ocr5 from '../../../public/img/ocr5.jpg';
import ocr6 from '../../../public/img/ocr6.jpg';
import ocr7 from '../../../public/img/ocr7.jpg';
import ocr8 from '../../../public/img/ocr8.jpg';

export interface Project {
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  tech: string[];
  thumbnail: StaticImageData;
  thumbnailAlt: string;
  href?: string;
  slides?: StaticImageData[];
  modalWidth?: string;
}

export const projects: Project[] = [
  {
    title: 'Hangul Syllable Prediction',
    subtitle: '(Not Published)',
    category: 'Thesis Project',
    description:
      'Mobile application for handwriting classification of Korean language syllables. The model used in the application is trained using a machine learning algorithm, namely Convolutional Neural Network.',
    tech: ['Python', 'Flask', 'Expo', 'JavaScript'],
    thumbnail: hangulClassification,
    thumbnailAlt: 'Hangul Syllables Classification App',
    slides: [hangul1, hangul2, hangul3],
  },
  {
    title: 'Central OCR',
    subtitle: '(Not Published)',
    category: 'Internship Project',
    description:
      'A mobile application that uses the ocr feature to perform text extraction from various types of documents.',
    tech: ['React Native', 'JavaScript'],
    thumbnail: ocr,
    thumbnailAlt: 'Central OCR App',
    slides: [ocr1, ocr2, ocr3, ocr4, ocr5, ocr6, ocr7, ocr8],
    modalWidth: 'w-5/6',
  },
  {
    title: 'SeiYou',
    category: 'Group Project',
    description:
      "Application for people that like voice acting. People can upload their voice acting and search other people's voice acting.",
    tech: ['Ionic React', 'JavaScript', 'TypeScript', 'CSS', 'Firebase'],
    thumbnail: seiyou,
    thumbnailAlt: 'SeiYou App',
    href: 'https://sei-you.vercel.app/welcome',
  },
  {
    title: 'Gebet App',
    subtitle: '(Not Published)',
    category: 'Course Project',
    description: 'Dating app-like application.',
    tech: ['Ionic React', 'JavaScript', 'TypeScript', 'CSS'],
    thumbnail: gebetApp,
    thumbnailAlt: 'Gebet App',
    slides: [gebetApp1, gebetApp2, gebetApp3, gebetApp4],
  },
  {
    title: 'Quick Recipe',
    category: 'Group Project',
    description: 'Mobile application to find food recipe. People can also upload their recipe.',
    tech: ['Java', 'XML', 'Firebase'],
    thumbnail: quicRecipe,
    thumbnailAlt: 'Quick Recipe App',
    href: 'https://play.google.com/store/apps/details?id=quick_recipe.didi_x_djongers',
  },
  {
    title: 'SandwichYay',
    subtitle: '(Not Published)',
    category: 'Group Project',
    description:
      'Website to make food order. Including admin dashboard section, where admins can restock and manage transactions.',
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    thumbnail: sandYay1,
    thumbnailAlt: 'SandwichYay Website',
    slides: [sandYay1, sandYay2, sandYay3, sandYay4],
    modalWidth: 'w-5/6',
  },
  {
    title: 'Djongers Weather',
    category: 'Group Project',
    description: 'Website to check weather of all cities around the world.',
    tech: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
    thumbnail: djongWeather,
    thumbnailAlt: 'Djongers Weather Website',
    href: 'https://djong-weather.vercel.app/',
  },
];
