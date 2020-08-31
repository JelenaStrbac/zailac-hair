import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./HomeServices.module.css"
import Button from "../../UI/Button/Button"
import Coloring from "../../../images/coloring.jpg"
import HairLights from "../../../images/balayage.jpg"
import HairCut from "../../../images/sisanje.jpg"
import Styling from "../../../images/stilizovanje.jpg"
import Balayage from "../../../images/nadogradnja.jpg"
import Extensions from "../../../images/extensions.jpg"
import Headings from "../../UI/Headings/Headings"
// import { Link } from "gatsby"

const HomeServices = props => {
  return (
    <div className={styles.homeServices}>
      <div className={styles.homeServicesTitleAndButton}>
        <Headings>Naše usluge</Headings>
        <AniLink
          cover
          bg="url(/aniLinkOne.jpg)"
          direction="left"
          duration={2}
          to="/services/"
        >
          <Button>Pogledajte sve</Button>
        </AniLink>
      </div>
      <div className={styles.servicesGallery}>
        <div className={styles.servicesGalleryContentImagesLeftTop}>
          <div className={styles.servicesGalleryContentImg}>
            <div className={styles.leftText}>Coloring</div>
            <div className={styles.container}>
              <img src={Coloring} alt="coloring" />
              <div className={styles.overlay}>
                <div className={styles.text}>
                  Bilo da želite da osvežite Vašu prirodnu boju, da prekrijete
                  sede ili da drastično promenite boju svoje kose, tu smo za sve
                  eksperimente za koje ste spremne.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.servicesGalleryContentImagesLeft}>
          <div className={styles.servicesGalleryContentImg}>
            <div className={styles.leftText}>Pramenovi</div>
            <div className={styles.container}>
              <img src={HairLights} alt="hairLights" />
              <div className={styles.overlay}>
                <div className={styles.text}>
                  Iznijansirana kosa, pramenovi koji Vašoj kosi mogu dati
                  volumen, tonovi umerenih ili intenzivnih boja koji mogu
                  itekako obogatiti Vašu kosu su naša specijalnost.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.servicesGalleryContentImg}>
            <div className={styles.leftText}>Šišanje</div>
            <div className={styles.container}>
              <img src={HairCut} alt="hairCut" />
              <div className={styles.overlay}>
                <div className={styles.text}>
                  Ostavite utisak dame koja drži do frizure, lepe i negovane
                  kose.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.servicesGalleryContentImagesRight}>
          <div className={styles.servicesGalleryContentImg}>
            <div className={styles.container}>
              <img src={Styling} alt="styling" />
              <div className={styles.overlay}>
                <div className={styles.text}>
                  Feniranje na ravno ili lokne u zavisnosti od Vaše želje.
                </div>
              </div>
            </div>
            <div className={styles.rightText}>Stilizovanje</div>
          </div>

          <div className={styles.servicesGalleryContentImg}>
            <div className={styles.container}>
              <img src={Balayage} alt="balayage" />
              <div className={styles.overlay}>
                <div className={styles.text}>
                  Zdrava, negovana, lepo ošišana, perfektno obojena, lepršava i
                  živahna su reči kojima se može opisati Vaša kosa nakon ove
                  usluge koja je može potpuno promeniti od korena do vrhova.
                </div>
              </div>
            </div>
            <div className={styles.rightText}>Balayage</div>
          </div>
        </div>

        <div className={styles.servicesGalleryContentImagesRightBottom}>
          <div className={styles.servicesGalleryContentImg}>
            <div className={styles.container}>
              <img src={Extensions} alt="extensions" />
              <div className={styles.overlay}>
                <div className={styles.text}>
                  Prepustite profesionalcima da Vašu kosu srede onako kako
                  zaslužuje svaka dama.
                </div>
              </div>
            </div>
            <div className={styles.rightText}>Nadogradnja</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeServices
