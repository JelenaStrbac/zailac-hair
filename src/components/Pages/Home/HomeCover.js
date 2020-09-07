import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./HomeCover.module.css"
import Button from "../../UI/Button/Button"
import SocialLinks from "../../UI/SocialLinks/SocialLinks"
import { removeHtml } from "../../../helper/helper"

const HomeCover = props => {
  const data = useStaticQuery(graphql`
    query {
      telefon: wordpressPage(title: { eq: "Telefon" }) {
        content
      }
    }
  `)
  return (
    <div className={styles.cover} id="HomeCover">
      <SocialLinks />
      <div className={styles.main}>
        <div className={styles.title}>Inspiracija vašom kosom</div>
        <Link to="/services/">
          <Button>Naše usluge</Button>
        </Link>
        <div className={styles.reservation}>
          <FontAwesomeIcon icon={faPhone} className={styles.icons} />{" "}
          Rezervacije na{" "}
          {removeHtml(data.telefon.content) || "+381 60 3230 250"}
        </div>
        {/* <AniLink
          cover
          bg="url(/aniLinkOne.jpg)"
          direction="left"
          duration={2}
          to="/services/"
        >
          <Button>Naše usluge</Button>
        </AniLink> */}
      </div>
    </div>
  )
}

export default HomeCover
