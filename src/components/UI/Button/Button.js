import React from "react"

import styles from "./Button.module.css"

const Button = props => {
  return (
    <div className={styles.btnOutter}>
      <button className={styles.btn}>{props.children}</button>
    </div>
  )
}

export default Button
