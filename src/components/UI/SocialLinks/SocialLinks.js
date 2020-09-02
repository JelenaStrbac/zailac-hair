import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./SocialLinks.module.css"
import { getAnchroFromParsedDOM } from "../../../helper/helper"
import Sidebar from "./Sidebar"

const SocialLinks = props => {
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
  return (
    <div className={styles.burger} id="burger">
      <Sidebar pageWrapId={"page-wrap"} outerContainexrId={"burger"} />

      <div id="page-wrap">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={getAnchroFromParsedDOM(data.fb.content)}
          className={styles.socialNetworks}
        >
          <FontAwesomeIcon icon={faFacebookSquare} className={styles.icons} />
          Facebook
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={getAnchroFromParsedDOM(data.ig.content)}
          className={styles.socialNetworks}
        >
          <FontAwesomeIcon icon={faInstagramSquare} className={styles.icons} />
          Instagram
        </a>
      </div>
    </div>
  )
}

export default SocialLinks
