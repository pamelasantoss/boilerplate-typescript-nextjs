import styles from './Card.module.scss';

interface CardProps {
  link: string;
  title: string;
  description: string;
}

export default function Card({ link, title, description }:CardProps) {
  return (
    <a
      href={link}
      target="_blank"
      className={styles.card}
      rel="noopener noreferrer"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>
        {description}
      </p>
    </a>
  )
};