export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Felix Ferdinand',
    jobTitle: 'Backend Developer',
    description:
      'Backend Developer and Informatics Engineering graduate from Universitas Multimedia Nusantara.',
    url: 'https://felixferdinand.vercel.app',
    sameAs: [
      'https://www.linkedin.com/in/felix-frdnnd/',
      'https://github.com/FelixFer',
      'https://www.instagram.com/felferdinand/',
    ],
    knowsAbout: ['Express.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'React Native', 'Sequelize'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
