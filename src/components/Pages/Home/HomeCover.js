import React from "react"

import styles from "./HomeCover.module.css"
import Women from "../../../images/women-cover.png"
import Button from "../../UI/Button/Button"
import SocialLinks from "../../UI/SocialLinks/SocialLinks"
import { Link } from "gatsby"

const HomeCover = props => {
  return (
    <div className={styles.cover}>
      <SocialLinks />
      <div className={styles.marble}>
        <div className={styles.title}>Inspiracija vašom kosom</div>
        <p>
          Dobrodošli u Zailac hair, mesto gde vaša kosa dobija najbolju negu.
        </p>
        <p className={styles.bottomParagraph}>
          #coloring #balayage #nadogradnja kose
        </p>
        <Link to="/services/">
          <Button>Naše usluge</Button>
        </Link>
      </div>

      <div className={styles.gold}>
        <img className={styles.girl} src={Women} alt="women-with-curly-hair" />
      </div>
    </div>
  )
}

export default HomeCover
