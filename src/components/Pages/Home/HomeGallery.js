import React, { useEffect, useState } from "react"
import ImageSlider from "react-image-comparison-slider"
import Fade from "react-reveal/Fade"

import styles from "./HomeGallery.module.css"
import Button from "../../UI/Button/Button"
import Before from "../../../images/before.jpeg"
import After from "../../../images/after.jpeg"
import Headings from "../../UI/Headings/Headings"
import FadeLink from "../../UI/FadeLink/FadeLink"

const HomeGallery = props => {
  const [hasDocument, setHasDocument] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined" && window.document) {
      setHasDocument(true)
    }
  }, [])

  return (
    <div className={styles.homeGallery}>
      <Fade up>
        <div className={styles.homeGalleryTitle}>
          <Headings>Naši radovi</Headings>
          <p>
            Frizura je jedna od najupečatljivijih formi ekspresije pojedinca
            koja ide izvan kulturnih, socijalnih i svih drugih granica.
            Jedinstveni i upečatljiv stil će uvek povezivati ljude, izražavanjem
            emocija, senzualnosti, i pre svega empatije. Verujemo da frizura
            kuju nosite dosta govori o Vama, o Vašim navikama, pogledima na
            svet, o stilu i ukusu, to je ono što prvo zapazimo kada upoznamo
            nekog.
          </p>
          <p>
            Ako ste i Vi dama koja nije sigurna ša bi uradila sa kosom, na koji
            način bi od svoje kose koja joj je dosadila napravila apsolutno novu
            frizuru koja će udahnuti novi život kako kosi, tako i Vama, mi smo
            tu da Vam pomognemo - pronadjite inspiraciju u našoj galeriji.
          </p>
          <FadeLink to="/gallery/">
            <Button>Pogledajte sve</Button>
          </FadeLink>
        </div>
        <div className={styles.imageSliderOutter}>
          <div className={styles.imageSlider}>
            <div className={styles.lace}></div>
            {typeof window !== "undefined" && hasDocument ? (
              <ImageSlider
                image1={After}
                image2={Before}
                sliderColor="#dcc29c"
                handleColor="#dcc29c"
                leftLabelText="Pre"
                rightLabelText="Posle"
                onSlide={() => {
                  console.log("sliding")
                }}
              />
            ) : (
              <div>Loading</div>
            )}
          </div>
          <div className={styles.scrollText}>scroll levo / desno</div>
        </div>
      </Fade>
    </div>
  )
}

export default HomeGallery
