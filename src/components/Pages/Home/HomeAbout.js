import React from "react"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"

import styles from "./HomeAbout.module.css"
import Button from "../../UI/Button/Button"
import Headings from "../../UI/Headings/Headings"
import { useStaticQuery, graphql } from "gatsby"
import FadeLink from "../../UI/FadeLink/FadeLink"

const HomeAbout = props => {
  const data = useStaticQuery(graphql`
    query {
      aboutPage: wordpressPage(title: { eq: "Zailac Hair" }) {
        content
        excerpt
      }
      toolsImage: file(relativePath: { eq: "tools.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.about}>
      <Fade up>
        <div className={styles.homeAboutLeft}>
          <Headings>O nama</Headings>
          <div className={styles.homeAboutMain}>
            <div dangerouslySetInnerHTML={{ __html: data.aboutPage.excerpt }} />
            <FadeLink to="/about/">
              <Button>Saznajte više</Button>
            </FadeLink>
          </div>
        </div>
        <div className={styles.tools}>
          <Img
            className={styles.innerTools}
            fluid={data.toolsImage.childImageSharp.fluid}
          />
        </div>
      </Fade>
    </div>
  )
}

export default HomeAbout
