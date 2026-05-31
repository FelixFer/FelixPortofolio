export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Felix Ferdinand',
    jobTitle: 'Frontend Engineer',
    description:
      'Frontend Engineer specializing in React.js, TypeScript, and modern web development. Experienced in building scalable web applications, REST API integration, and full-stack software development.',
    url: 'https://felixferdinand.vercel.app',
    sameAs: [
      'https://www.linkedin.com/in/felix-frdnnd/',
      'https://github.com/FelixFer',
      'https://www.instagram.com/felferdinand/',
    ],
    knowsAbout: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Redux',
      'Tailwind CSS',
      'SCSS',
      'Responsive Web Design',
      'Frontend Development',
      'Web Performance Optimization',
      'REST API Integration',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Sequelize',
      'Git',
      'Software Engineering',
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}