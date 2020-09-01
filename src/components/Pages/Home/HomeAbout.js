import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Fade from "react-reveal/Fade"

import styles from "./HomeAbout.module.css"
import Tools from "../../../images/ToolsTwoTest.png"
// import Gold from "../../../images/goldMakeUp.png"
// import Scissors from "../../../images/scissors.png"
import Button from "../../UI/Button/Button"
import Headings from "../../UI/Headings/Headings"
import { useStaticQuery, graphql } from "gatsby"

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
          {/* <img src={Scissors} alt="hairdresser-tools" /> */}
          <Headings>O nama</Headings>
          <div className={styles.homeAboutMain}>
            <div
              dangerouslySetInnerHTML={{ __html: data.wordpressPage.excerpt }}
            />
            <AniLink fade to="/about/">
              <Button>Saznajte više</Button>
            </AniLink>
          </div>
        </div>
        {/* <img src={Gold} alt="hairdresser-tools" /> */}
        <div className={styles.tools}>
          <img src={Tools} alt="hairdresser-tools" />
        </div>
      </Fade>
    </div>
  )
}

export default HomeAbout
