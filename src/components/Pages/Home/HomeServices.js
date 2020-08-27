import React from "react"

import styles from "./HomeServices.module.css"
import Button from "../../UI/Button/Button"
import Coloring from "../../../images/coloring.jpg"
import HairLights from "../../../images/balayage.jpg"
import HairCut from "../../../images/sisanje.jpg"
import Styling from "../../../images/stilizovanje.jpg"
import Balayage from "../../../images/nadogradnja.jpg"
import Extensions from "../../../images/extensions.jpg"
import Headings from "../../UI/Headings/Headings"
import { Link } from "gatsby"

const HomeServices = props => {
  return (
    <div className={styles.homeServices}>
      <div className={styles.homeServicesTitleAndButton}>
        <Headings>Naše usluge</Headings>
        <Link to="/services/">
          <Button>Pogledajte sve</Button>
        </Link>
      </div>
      <div className={styles.servicesGallery}>
        <div className={styles.servicesGalleryContentImagesLeftTop}>
          <div className={styles.servicesGalleryContentImg}>
            <div className={styles.leftText}>Coloring</div>
            <img src={Coloring} alt="coloring" />
          </div>
        </div>
        <div className={styles.servicesGalleryContentImagesLeft}>
          <div className={styles.servicesGalleryContentImg}>
            <div className={styles.leftText}>Pramenovi</div>
            <img src={HairLights} alt="hairLights" />
          </div>
          <div className={styles.servicesGalleryContentImg}>
            <div className={styles.leftText}>Šišanje</div>
            <img src={HairCut} alt="hairCut" />
          </div>
        </div>
        <div className={styles.servicesGalleryContentImagesRight}>
          <div className={styles.servicesGalleryContentImg}>
            <img src={Styling} alt="styling" />
            <div className={styles.rightText}>Stilizovanje</div>
          </div>
          <div className={styles.servicesGalleryContentImg}>
            <img src={Balayage} alt="balayage" />
            <div className={styles.rightText}>Balayage</div>
          </div>
        </div>
        <div className={styles.servicesGalleryContentImagesRightBottom}>
          <div className={styles.servicesGalleryContentImg}>
            <img src={Extensions} alt="extensions" />
            <div className={styles.rightText}>Nadogradnja</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeServices
