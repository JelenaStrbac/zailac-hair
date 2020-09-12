import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./ServiceImageCard.module.css"

const ServiceImageCard = props => {
  return (
    <>
      {props.left ? <div className={styles.leftText}>{props.title}</div> : null}
      <div className={styles.container}>
        <Img fluid={props.fluid} style={{ width: "290px", height: "auto" }} />
        <div className={styles.overlay}>
          <div className={styles.text}>{props.text}</div>
          <Link to="/services/">
            <div className={styles.textPricelist}>Vidi cenovnik</div>
          </Link>
        </div>
      </div>
      {props.right ? (
        <div className={styles.rightText}>{props.title}</div>
      ) : null}
    </>
  )
}

export default ServiceImageCard
