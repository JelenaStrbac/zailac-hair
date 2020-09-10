import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
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
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.desktop.childImageSharp.fluid
  return (
    <BackgroundImage
      Tag="section"
      className={props.className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
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
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(HomeCover)`
  width: 100vw;
  height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  @media only screen and (max-width: 992px) {
    background-attachment: scroll;
  }
`

export default StyledBackgroundSection
