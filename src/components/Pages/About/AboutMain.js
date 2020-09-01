import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { graphql, useStaticQuery } from "gatsby"
import Fade from "react-reveal/Fade"
// import Img from "gatsby-image"

import styles from "./AboutMain.module.css"
import Headings from "../../UI/Headings/Headings"
// import Mladen from "../../../images/mladen.jpg"
// import Gold from "../../../images/goldMakeUp.png"
// import GoldAbout from "../../../images/goldAbout.png"
import Cadiveu from "../../../images/cadiveu_logo.jpg"
import Echosline from "../../../images/echosline_logo.png"
import Loreal from "../../../images/loreal_logo.jpg"
import Olaplex from "../../../images/olaplex_logo.jpg"

const AboutMain = props => {
  const data = useStaticQuery(graphql`
    query {
      salon: wordpressPage(title: { eq: "Zailac Hair" }) {
        content
      }
      mladen: wordpressPage(title: { eq: "Mladen" }) {
        content
        excerpt
      }
      mladenImg: wordpressWpMedia(alt_text: { eq: "Mladen" }) {
        source_url
      }
    }
  `)
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allFile(filter: { relativeDirectory: { eq: "brands" } }) {
  //       edges {
  //         node {
  //           childImageSharp {
  //             fluid(maxWidth: 150) {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <div className={styles.aboutMain}>
      <Fade>
        <div className={styles.aboutWhy}>
          <Headings>Zašto Zailac Hair?</Headings>
          <div
            dangerouslySetInnerHTML={{ __html: data.salon.content }}
            className={styles.aboutWhyText}
          />
        </div>
        <div className={styles.aboutHairDresser}>
          <div>
            <div className={styles.aboutHairDresserImageOutterLarge}>
              <div className={styles.aboutHairDresserImageOutter}>
                <img
                  className={styles.aboutHairDresserImageInner}
                  src={data.mladenImg.source_url}
                  alt="Mladen Zailac"
                />
              </div>
            </div>
            <div className={styles.quotation}>
              <FontAwesomeIcon
                icon={faQuoteRight}
                className={styles.quoteMark}
              />
              <div
                className={styles.q}
                dangerouslySetInnerHTML={{ __html: data.mladen.excerpt }}
              ></div>
            </div>
          </div>
          <div className={styles.aboutHairDresserText}>
            <Headings>Frizer</Headings>
            <div dangerouslySetInnerHTML={{ __html: data.mladen.content }} />
            <p className={styles.signature}>Mladen</p>
          </div>
        </div>
        <div className={styles.aboutBrands}>
          <Headings>Preparati</Headings>
          <div className={styles.aboutBrandsInner}>
            {/* {data.allFile.edges.map(el => (
            <div
              key={el.node.childImageSharp.fluid.src}
              style={{ width: "25%", padding: "4rem" }}
            >
              <Img fluid={el.node.childImageSharp.fluid} />
            </div>
          ))} */}
            <img src={Cadiveu} alt="Cadiveu" />
            <img src={Echosline} alt="Echosline" />
            <img src={Loreal} alt="Loreal" />
            <img src={Olaplex} alt="Olaplex" />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default AboutMain

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "01.jpg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
