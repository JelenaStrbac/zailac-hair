import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./HomeCover.module.css"
import Women from "../../../images/women-cover.png"
// import Frame from "../../../images/frameL.png"
// import Frame from "../../../images/zailac.png"
// import TEST from "../../../images/TESTL.png"
// import Test from "../../../images/goll.png"
// import TestTwo from "../../../images/goldwellHigh.png"
import Button from "../../UI/Button/Button"
import SocialLinks from "../../UI/SocialLinks/SocialLinks"

const HomeCover = props => {
  return (
    <div className={styles.cover} id="HomeCover">
      <SocialLinks />
      <div className={styles.marble}>
        <div className={styles.title}>Inspiracija vašom kosom</div>
        {/* <img src={Frame} className={styles.frame} alt="frame" /> */}
        {/* <p>
          Dobrodošli u <span className={styles.zailac}>Zailac hair</span>, mesto
          gde vaša kosa dobija najbolju negu.
        </p> */}
        {/* <div className={styles.frameOutter}>
          Dobrodošli u
          <img src={Frame} className={styles.frame} alt="frame" />
          Mesto gde vaša kosa dobija najbolju negu.
        </div> */}
        {/* <img src={TEST} alt="test" /> */}
        {/* <p className={styles.bottomParagraph}>
          #coloring #balayage #nadogradnja kose
        </p> */}
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

      <div className={styles.gold}>
        <img className={styles.girl} src={Women} alt="women-with-curly-hair" />
      </div>
    </div>
  )
}

export default HomeCover
