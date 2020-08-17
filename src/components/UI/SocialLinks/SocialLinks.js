import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import styles from "./SocialLinks.module.css"

const SocialLinks = props => {
  return (
    <div className={styles.burger}>
      <FontAwesomeIcon icon={faBars} className={styles.burgerIcon} />
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
  )
}

export default SocialLinks
