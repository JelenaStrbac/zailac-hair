import React from "react"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./HomeServices.module.css"
import Button from "../../UI/Button/Button"
import Headings from "../../UI/Headings/Headings"
import ServiceImageCard from "../../UI/ServiceImageCards/ServiceImageCard"
import FadeLink from "../../UI/FadeLink/FadeLink"

const HomeServices = props => {
  const data = useStaticQuery(graphql`
    query {
      coloring: file(relativePath: { eq: "home-services-coloring.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 320, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hairLights: file(relativePath: { eq: "home-services-hairLights.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 320, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hairCut: file(relativePath: { eq: "home-services-hairCut.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      styling: file(relativePath: { eq: "home-services-styling.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      balayage: file(relativePath: { eq: "home-services-balayage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      extensions: file(relativePath: { eq: "home-services-extensions.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={styles.homeServices}>
      <Fade up>
        <div className={styles.homeServicesTitleAndButton}>
          <Headings>Naše usluge</Headings>
          <FadeLink to="/services/">
            <Button>Pogledajte sve</Button>
          </FadeLink>
        </div>
        <div className={styles.servicesGallery}>
          <div className={styles.servicesGalleryInner}>
            <div className={styles.servicesGalleryContentImagesLeftTop}>
              <div className={styles.servicesGalleryContentImgReverse}>
                <ServiceImageCard
                  fluid={data.coloring.childImageSharp.fluid}
                  text="Bilo da želite da osvežite Vašu prirodnu boju, da
                  prekrijete sede ili da drastično promenite boju svoje
                  kose, tu smo za sve eksperimente za koje ste spremne."
                  title="Coloring"
                  right={false}
                  left={true}
                />
              </div>
            </div>

            <div className={styles.servicesGalleryContentImagesLeft}>
              <div className={styles.servicesGalleryContentImgReverse}>
                <ServiceImageCard
                  fluid={data.hairLights.childImageSharp.fluid}
                  text="Iznijansirana kosa, pramenovi koji Vašoj kosi mogu dati
                  volumen, tonovi umerenih ili intenzivnih boja koji mogu
                  itekako obogatiti Vašu kosu su naša specijalnost."
                  title="Pramenovi"
                  right={false}
                  left={true}
                />
              </div>

              <div className={styles.servicesGalleryContentImgReverse}>
                <ServiceImageCard
                  fluid={data.hairCut.childImageSharp.fluid}
                  text="Ostavite utisak dame koja drži do frizure, lepe i negovane
                  kose."
                  title="Šišanje"
                  right={false}
                  left={true}
                />
              </div>
            </div>
          </div>

          <div className={styles.servicesGalleryInner}>
            <div className={styles.servicesGalleryContentImagesRight}>
              <div className={styles.servicesGalleryContentImg}>
                <ServiceImageCard
                  fluid={data.styling.childImageSharp.fluid}
                  text="Feniranje na ravno ili lokne u zavisnosti od Vaše želje."
                  title="Stilizovanje"
                  right={true}
                  left={false}
                />
              </div>

              <div className={styles.servicesGalleryContentImg}>
                <ServiceImageCard
                  fluid={data.balayage.childImageSharp.fluid}
                  text="  Zdrava, negovana, lepo ošišana, perfektno obojena,
                  lepršava i živahna su reči kojima se može opisati Vaša
                  kosa nakon ove usluge koja je može potpuno promeniti od
                  korena do vrhova."
                  title="Balayage"
                  right={true}
                  left={false}
                />
              </div>
            </div>

            <div className={styles.servicesGalleryContentImagesRightBottom}>
              <div className={styles.servicesGalleryContentImg}>
                <ServiceImageCard
                  fluid={data.extensions.childImageSharp.fluid}
                  text="Prepustite profesionalcima da Vašu kosu srede onako kako
                zaslužuje svaka dama."
                  title="Nadogradnja"
                  right={true}
                  left={false}
                />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default HomeServices
