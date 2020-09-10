import React from "react"

import styles from "./Headings.module.css"

const Headings = props => {
  return (
    <div className={styles.headings}>
      <h1>{props.children}</h1>
      <h2>{props.children}</h2>
    </div>
  )
}

export default Headings
