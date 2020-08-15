import React from "react"
import { Link } from "gatsby"

import styles from "./Card.module.css"

const Card = props => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={props.image} alt="zailacBlogImage" />
      </div>
      <div className={styles.cardText}>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
        <Link className={styles.cardLinkStyle} to={`/blogPost/`}>
          Pročitajte više
        </Link>
      </div>
    </div>
  )
}

export default Card
