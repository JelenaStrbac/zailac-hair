import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./HomeCover.module.css"
import Button from "../../UI/Button/Button"
import SocialLinks from "../../UI/SocialLinks/SocialLinks"

const HomeCover = props => {
  return (
    <div className={styles.cover} id="HomeCover">
      <SocialLinks />
      <div className={styles.marble}>
        <div className={styles.title}>Inspiracija vašom kosom</div>
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

export default HomeCover
