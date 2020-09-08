import React from "react"

import styles from "./SocialLinks.module.css"
import Sidebar from "./Sidebar"
import SocialLinksIcons from "./SocialLinksIcons"

const SocialLinks = props => {
  return (
    <div className={styles.burger} id="burger">
      <Sidebar pageWrapId={"page-wrap"} outerContainexrId={"burger"} />
      <div id="page-wrap">
        <SocialLinksIcons name="burgerSocialLinks" />
      </div>
    </div>
  )
}

export default SocialLinks
