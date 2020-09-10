import React from "react"
import { Link } from "gatsby"

import styles from "./ServiceImageCard.module.css"

const ServiceImageCard = props => {
  return (
    <>
      {props.left ? <div className={styles.leftText}>{props.title}</div> : null}
      <div className={styles.container}>
        <img src={props.image} alt="zailac-services" />
        <div className={styles.overlay}>
          <div className={styles.text}>{props.text}</div>
          {/* <div className={styles.text}>&#10024; Popularno: {props.price}</div> */}
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
