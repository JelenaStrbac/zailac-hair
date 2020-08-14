import React from "react"

import styles from "./Cover.module.css"
import Women from "../../../images/women-cover.png"
import Button from "../../UI/Button/Button"

const Cover = props => {
  return (
    <div className={styles.cover}>
      <div className={styles.burger}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/pages/category/Hair-Salon/Zailac-Hair-823673054501131/"
          className={styles.socialNetworks}
        >
          Facebook
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/zailachair/?hl=en"
          className={styles.socialNetworks}
        >
          Instagram
        </a>
      </div>
      <div className={styles.marble}>
        <div className={styles.title}>Inspiracija vašom kosom</div>
        <p>Dobrodošli u Zailac hair, mesto gde vaša kosa dobija najbolju negu.</p>
        <p className={styles.bottomParagraph}>#coloring #balayage #nadogradnja kose</p>
        <Button>Naše usluge</Button>
      </div>

      <div className={styles.gold}>
        <img className={styles.girl} src={Women} alt="women-with-curly-hair" />
      </div>
    </div>
  )
}

export default Cover
