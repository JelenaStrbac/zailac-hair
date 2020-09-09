import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

import styles from "./HomeCover.module.css"
import Button from "../../UI/Button/Button"
import SocialLinks from "../../UI/SocialLinks/SocialLinks"
import { removeHtml } from "../../../helper/helper"
import FadeLink from "../../UI/FadeLink/FadeLink"

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
        <FadeLink to="/services/">
          <Button>Naše usluge</Button>
        </FadeLink>
        <div className={styles.reservation}>
          <FontAwesomeIcon icon={faPhone} className={styles.icons} />{" "}
          Rezervacije na{" "}
          {removeHtml(data.telefon.content) || "+381 60 3230 250"}
        </div>
      </div>
    </div>
  )
}

export default HomeCover
