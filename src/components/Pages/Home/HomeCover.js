import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

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
      desktop: file(relativePath: { eq: "background-cover.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobile: file(relativePath: { eq: "background-cover-min.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  // const imageData = data.desktop.childImageSharp.fluid
  const sources = [
    data.desktop.childImageSharp.fluid,
    {
      ...data.mobile.childImageSharp.fluid,
      media: `(max-width: 480px)`,
    },
  ]
  return (
    <div className={styles.cover} id="HomeCover">
      <SocialLinks />
      <BackgroundImage
        Tag="section"
        className={styles.mybg}
        fluid={sources}
        backgroundColor={`#040e18`}
      >
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
      </BackgroundImage>
    </div>
  )
}

export default HomeCover
