import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./Card.module.css"

const Card = props => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Img style={{ width: "100%", height: "100%" }} fluid={props.image} />
        {/* <img src={props.image} alt="zailacBlogImage" /> */}
      </div>
      <div className={styles.cardText}>
        <div>
          <h4 dangerouslySetInnerHTML={{ __html: props.title }}></h4>
          <div dangerouslySetInnerHTML={{ __html: props.text }} />
        </div>
        <Link className={styles.cardLinkStyle} to={`/blog/${props.slug}/`}>
          Pročitajte više
        </Link>
      </div>
    </div>
  )
}

export default Card
