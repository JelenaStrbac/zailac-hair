import React from "react"

import styles from "./HomeAbout.module.css"
import Tools from "../../../images/tools.png"
import Button from "../../UI/Button/Button"
import Headings from "../../UI/Headings/Headings"
import { useStaticQuery, graphql, Link } from "gatsby"

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
      <div className={styles.homeAboutLeft}>
        <Headings>O nama</Headings>
        <div className={styles.homeAboutMain}>
          <div
            dangerouslySetInnerHTML={{ __html: data.wordpressPage.excerpt }}
          />
          <Button>
            <Link to="/about/">Saznajte više</Link>
          </Button>
        </div>
      </div>
      <img src={Tools} alt="hairdresser-tools" />
    </div>
  )
}

export default HomeAbout
