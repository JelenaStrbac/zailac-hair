import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./SocialLinksIcons.module.css"
import { getAnchroFromParsedDOM } from "../../../helper/helper"

const SocialLinksIcons = props => {
  const data = useStaticQuery(graphql`
    query {
      fb: wordpressPage(title: { eq: "Facebook link" }) {
        content
      }
      ig: wordpressPage(title: { eq: "Instagram link" }) {
        content
      }
    }
  `)
  const name = props.name
  return (
    <div className={name}>
      <span className={styles.socialNetworksText}>Pronadjite nas na:</span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          getAnchroFromParsedDOM(data.fb.content) ||
          `https://www.facebook.com/pages/category/Hair-Salon/Zailac-Hair-823673054501131/`
        }
        className={styles.socialNetworks}
      >
        <FontAwesomeIcon icon={faFacebookSquare} className={styles.icons} />
        Facebook
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          getAnchroFromParsedDOM(data.ig.content) ||
          `https://www.instagram.com/zailachair/?hl=en`
        }
        className={styles.socialNetworks}
      >
        <FontAwesomeIcon icon={faInstagramSquare} className={styles.icons} />
        Instagram
      </a>
    </div>
  )
}

export default SocialLinksIcons
