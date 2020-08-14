import React from "react"

import styles from "./Cover.module.css"
import Women from "../../../images/women-cover.png"

const Cover = props => {
  return (
    <div className={styles.cover}>
      <div className={styles.burger}></div>
      <div className={styles.marble}>
        <div className={styles.title}>Inspiracija vašom kosom</div>
      </div>

      <div className={styles.gold}>
        <img className={styles.girl} src={Women} alt="women-with-curly-hair" />
      </div>
    </div>
  )
}

export default Cover
