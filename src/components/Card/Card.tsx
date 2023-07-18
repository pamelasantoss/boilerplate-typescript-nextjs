import { CardProps } from "@/types"
import styles from "./Card.module.scss"

export default function Card({ link, title, description }: CardProps) {
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
      <p>{description}</p>
    </a>
  )
}
