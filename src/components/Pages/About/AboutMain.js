import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { graphql, useStaticQuery } from "gatsby"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"

import styles from "./AboutMain.module.css"
import Headings from "../../UI/Headings/Headings"

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
        localFile {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              srcSet
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      brands: allFile(filter: { relativeDirectory: { eq: "brands" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 150, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
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
          <div className={styles.aboutHairDresserImgContainer}>
            <div className={styles.aboutHairDresserImageOutterLarge}>
              <div className={styles.aboutHairDresserImageOutter}>
                <Img
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  fluid={data.mladenImg.localFile.childImageSharp.fluid}
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
            {data.brands.edges.map((el, i) => (
              <Img
                key={i}
                fluid={el.node.childImageSharp.fluid}
                style={{ width: "150px", paddingTop: "2rem" }}
                imgStyle={{ objectFit: "contain" }}
              />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default AboutMain
