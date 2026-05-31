export interface Experience {
  period: string;
  role: string;
  company: string;
  type: string;
  bullets: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    period: 'Mar 2024 — Present',
    role: 'Frontend Engineer',
    company: 'PT Ganda Visi Jayatama',
    type: 'Full Time',
    bullets: [
      'Developed and maintained responsive web applications using React.js and TypeScript.',
      'Collaborated with UI/UX designers and backend developers to deliver user-focused features.',
      'Improved legacy applications through bug fixes, refactoring, and performance optimization.',
      'Maintained code quality through peer code reviews and adherence to development standards.',
      'Contributed to reusable component and boilerplate development to improve team productivity.',
    ],
    tech: ['React.js', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS', 'SCSS', 'Git', 'REST API'],
  },
  {
    period: 'Sep 2023 — Feb 2024',
    role: 'Backend Developer',
    company: 'PT Ganda Visi Jayatama',
    type: 'Part Time',
    bullets: [
      'Built RESTful APIs with Express.js and Sequelize for multiple web applications.',
      'Designed PostgreSQL database schemas and managed migrations and seed data.',
      'Integrated backend services with frontend applications to deliver end-to-end features.',
      'Ensured API reliability through testing, debugging, and performance optimization.',
      'Collaborated with the development team using Git workflows and code reviews.',
    ],
    tech: ['Express.js', 'Sequelize', 'Typescript', 'Javascript', 'PostgreSQL', 'Node.js', 'Git'],
  },
  {
    period: 'Feb 2023 — June 2023',
    role: 'Lab Assistant',
    company: 'Lab FTI Universitas Multimedia Nusantara',
    type: 'Part Time',
    bullets: [
      'Teaching Introduction to Internet Technology course:',
      'Create basic website.',
      'Create website using CSS and JavaScript framework.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'ReactJS'],
  },
  {
    period: 'Aug 2022 — Dec 2022',
    role: 'Mobile Developer',
    company: 'PT Central Artificial Intelligence',
    type: 'Internship',
    bullets: [
      'Create a mobile application using React Native as the Frontend based on the design given in Figma.',
      'Maintaining and update Central OCR mobile application.',
      'Collaborating on version control code using git.',
    ],
    tech: ['React Native', 'JavaScript', 'Git'],
  },
  {
    period: 'Nov 2021 — Apr 2022',
    role: 'Website Developer',
    company: 'TVONAIR 7.0',
    type: 'Committee',
    bullets: ['Design, create, develop, and maintain TV On Air website.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    period: 'Mar 2021 — Mar 2022',
    role: 'IT & Web Department',
    company: 'UMN TV Gen 7',
    type: 'Organization',
    bullets: ['Design, create, develop, and maintain UMN TV website.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    period: 'May 2021 — Dec 2021',
    role: 'Website Developer',
    company: 'UMN Festival 2021',
    type: 'Committee',
    bullets: ['Integrating and maintain UMN Festival website.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    period: 'Mar 2021 — Aug 2021',
    role: 'Security Division',
    company: 'Orientasi Mahasiswa Baru (OMB) UMN 2021',
    type: 'Committee',
    bullets: [
      'Supervise the flow of OMB.',
      'Maintain discipline of the committee and participants to obey OMB regulations.',
    ],
    tech: [],
  },
];
