import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./SocialLinks.module.css"
import { getAnchroFromParsedDOM } from "../../../helper/helper"

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
    <div className={styles.burger}>
      <FontAwesomeIcon icon={faBars} className={styles.burgerIcon} />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={getAnchroFromParsedDOM(data.fb.content)}
        className={styles.socialNetworks}
      >
        Facebook
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={getAnchroFromParsedDOM(data.ig.content)}
        className={styles.socialNetworks}
      >
        Instagram
      </a>
    </div>
  )
}

export default SocialLinks
