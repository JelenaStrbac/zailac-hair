import React from "react"
import Fade from "react-reveal/Fade"

import styles from "./HomeAbout.module.css"
import Tools from "../../../images/tools.png"
import Button from "../../UI/Button/Button"
import Headings from "../../UI/Headings/Headings"
import { useStaticQuery, graphql } from "gatsby"
import FadeLink from "../../UI/FadeLink/FadeLink"

const HomeAbout = props => {
  const data = useStaticQuery(graphql`
    query {
      wordpressPage(title: { eq: "Zailac Hair" }) {
        content
        excerpt
      }
    }
  `)
  return (
    <div className={styles.about}>
      <Fade up>
        <div className={styles.homeAboutLeft}>
          <Headings>O nama</Headings>
          <div className={styles.homeAboutMain}>
            <div
              dangerouslySetInnerHTML={{ __html: data.wordpressPage.excerpt }}
            />
            <FadeLink to="/about/">
              <Button>Saznajte više</Button>
            </FadeLink>
          </div>
        </div>
        <div className={styles.tools}>
          <img src={Tools} alt="hairdresser-tools" />
        </div>
      </Fade>
    </div>
  )
}

export default HomeAbout
