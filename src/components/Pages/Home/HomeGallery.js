import React from "react"

import styles from "./HomeGallery.module.css"
import Button from "../../UI/Button/Button"
import Before from "../../../images/before.jpeg"
import After from "../../../images/after.jpeg"
import ImageSlider from "react-image-comparison-slider"
import Headings from "../../UI/Headings/Headings"
import { Link } from "gatsby"

const HomeGallery = props => {
  return (
    <div className={styles.homeGallery}>
      <div className={styles.homeGalleryTitle}>
        <Headings>Naši radovi</Headings>
        <p>
          Frizura je jedna od najupečatljivijih formi ekspresije pojedinca koja
          ide izvan kulturnih, socijalnih i svih drugih granica. Jedinstveni i
          upečatljiv stil će uvek povezivati ljude, izražavanjem emocija,
          senzualnosti, i pre svega empatije.
        </p>
        <Button>
          <Link to="/gallery/">Pogledajte sve</Link>
        </Button>
      </div>
      <div className={styles.imageSlider}>
        <div className={styles.lace}></div>
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
      </div>
    </div>
  )
}

export default HomeGallery
