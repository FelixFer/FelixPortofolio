import styles from './about.module.scss';

export default function Description() {
  const description = `
    Frontend Engineer with experience building scalable web applications using React.js and TypeScript.
    I enjoy solving complex problems, improving development workflows, and collaborating with cross-functional teams to deliver impactful software solutions.

    Beyond web development, I'm passionate about continuous learning and exploring new technologies, particularly in software architecture and Generative AI.
    `;
  return (
    <p className={styles.description}>{description}</p>
  );
}
