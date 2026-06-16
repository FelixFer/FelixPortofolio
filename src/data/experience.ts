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
      'Developed and maintained web applications using React.js and TypeScript.',
      'Built reusable components and improved frontend architecture to enhance maintainability.',
      'Coordinated frontend development activities and supported project delivery.',
      'Collaborated with UI/UX designers, backend engineers, and QA teams to deliver features efficiently.',
      'Participated in sprint planning, estimation, backlog refinement, and code reviews.',
      'Diagnosed and resolved issues in both new and existing applications.',
    ],
    tech: ['React', 'Vite', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS', 'SCSS', 'REST API'],
  },
  {
    period: 'Sep 2023 — Feb 2024',
    role: 'Backend Engineer',
    company: 'PT Ganda Visi Jayatama',
    type: 'Part Time',
    bullets: [
      'Developed RESTful APIs using Express.js and Sequelize.',
      'Designed and maintained PostgreSQL database schemas, migrations, and seed data.',
      'Integrated backend services with frontend applications to deliver end-to-end features.',
      'Performed API testing, debugging, and performance optimization.',
      'Collaborated with the development team through Git workflows and code reviews.',
    ],
    tech: ['Express.js', 'Sequelize', 'TypeScript', 'JavaScript', 'PostgreSQL', 'Node.js'],
  },
  {
    period: 'Sep 2023 — Jan 2024',
    role: 'Fullstack Developer Bootcamp',
    company: 'Coding.id',
    type: 'Bootcamp',
    bullets: [
      'Built responsive web applications with React and Vite based on Figma designs.',
      'Developed RESTful APIs using .NET Core.',
      'Designed and implemented MySQL database schemas.',
      'Integrated frontend and backend systems to enable seamless communication.',
      'Collaborated with team members using Git.',
    ],
    tech: ['React', 'Vite', 'Material UI', '.NET Core', 'C#', 'MySQL'],
  },
  {
    period: 'Feb 2023 — Jun 2023',
    role: 'Lab Assistant',
    company: 'Lab FTI Universitas Multimedia Nusantara',
    type: 'Part Time',
    bullets: [
      'Assisted in teaching the Introduction to Internet Technology course.',
      'Guided students in building websites using HTML, CSS, and JavaScript.',
      'Introduced modern frontend development using React.js and Bootstrap.',
      'Supported API integration using Axios.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'React.js'],
  },
  {
    period: 'Aug 2022 — Dec 2022',
    role: 'Mobile Developer',
    company: 'PT Central Artificial Intelligence',
    type: 'Internship',
    bullets: [
      'Developed the user interface of the Central OCR mobile application using React Native based on Figma designs.',
      'Maintained and enhanced existing application features.',
      'Collaborated with team members throughout the development process.',
    ],
    tech: ['React Native', 'JavaScript', 'Git'],
  },
  {
    period: 'Nov 2021 — Apr 2022',
    role: 'Website Developer',
    company: 'TVONAIR 7.0',
    type: 'Committee',
    bullets: [
      'Designed, developed, and maintained the TV On Air website.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    period: 'Mar 2021 — Mar 2022',
    role: 'IT & Web Department',
    company: 'UMN TV Gen 7',
    type: 'Organization',
    bullets: [
      'Designed, developed, and maintained the UMN TV website.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    period: 'May 2021 — Dec 2021',
    role: 'Website Developer',
    company: 'UMN Festival 2021',
    type: 'Committee',
    bullets: [
      'Integrated and maintained the UMN Festival website.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    period: 'Mar 2021 — Aug 2021',
    role: 'Security Division',
    company: 'Orientasi Mahasiswa Baru (OMB) UMN 2021',
    type: 'Committee',
    bullets: [
      'Supervised event operations and participant flow.',
      'Maintained discipline and ensured compliance with event regulations.',
    ],
    tech: [],
  },
];
