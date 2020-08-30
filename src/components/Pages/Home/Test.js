import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// import Women from "../../../images/women-cover.png"
// import Test from "../../../images/test.png"
// import TestTwo from "../../../images/testTwo.png"
import Button from "../../UI/Button/Button"
import SocialLinks from "../../UI/SocialLinks/SocialLinks"

import styles from "./Test.module.css"

const Test = props => {
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
        <AniLink
          cover
          bg="url(/aniLinkOne.jpg)"
          direction="left"
          duration={2}
          to="/services/"
        >
          <Button>Naše usluge</Button>
        </AniLink>
      </div>
    </div>
  )
}

export default Test
