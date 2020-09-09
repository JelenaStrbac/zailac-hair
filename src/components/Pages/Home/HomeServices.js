import React from "react"
import Fade from "react-reveal/Fade"

import styles from "./HomeServices.module.css"
import Button from "../../UI/Button/Button"
import Coloring from "../../../images/coloring.jpg"
import HairLights from "../../../images/balayage.jpg"
import HairCut from "../../../images/sisanje.jpg"
import Styling from "../../../images/stilizovanje.jpg"
import Balayage from "../../../images/nadogradnja.jpg"
import Extensions from "../../../images/extensions.jpg"
import Headings from "../../UI/Headings/Headings"
import ServiceImageCard from "../../UI/ServiceImageCards/ServiceImageCard"
import FadeLink from "../../UI/FadeLink/FadeLink"

const HomeServices = props => {
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
                  image={Coloring}
                  text="Bilo da želite da osvežite Vašu prirodnu boju, da
                  prekrijete sede ili da drastično promenite boju svoje
                  kose, tu smo za sve eksperimente za koje ste spremne."
                  // price="Farbanje izrastka + feniranje - sve dužine - RSD 1.700"
                  title="Coloring"
                  right={false}
                  left={true}
                />
              </div>
            </div>

            <div className={styles.servicesGalleryContentImagesLeft}>
              <div className={styles.servicesGalleryContentImgReverse}>
                <ServiceImageCard
                  image={HairLights}
                  text="Iznijansirana kosa, pramenovi koji Vašoj kosi mogu dati
                  volumen, tonovi umerenih ili intenzivnih boja koji mogu
                  itekako obogatiti Vašu kosu su naša specijalnost."
                  // price="Balayage / pramenovi Loreal + žensko šišanje + feniranje + olaplex za negu - kosa srednje dužine - RSD 8.499"
                  title="Pramenovi"
                  right={false}
                  left={true}
                />
              </div>

              <div className={styles.servicesGalleryContentImgReverse}>
                <ServiceImageCard
                  image={HairCut}
                  text="Ostavite utisak dame koja drži do frizure, lepe i negovane
                  kose."
                  // price="Žensko šišanje + feniranje na ravno / lokne - sve dužine kose - RSD 1.100"
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
                  image={Styling}
                  text="Feniranje na ravno ili lokne u zavisnosti od Vaše želje."
                  // price="Feniranje sve dužine kose RSD 500"
                  title="Stilizovanje"
                  right={true}
                  left={false}
                />
              </div>

              <div className={styles.servicesGalleryContentImg}>
                <ServiceImageCard
                  image={Balayage}
                  text="  Zdrava, negovana, lepo ošišana, perfektno obojena,
                  lepršava i živahna su reči kojima se može opisati Vaša
                  kosa nakon ove usluge koja je može potpuno promeniti od
                  korena do vrhova."
                  // price="Balayage / pramenovi Echosline + žensko šišanje + feniranje + olaplex za negu - sve dužine kose RSD 5.200"
                  title="Balayage"
                  right={true}
                  left={false}
                />
              </div>
            </div>

            <div className={styles.servicesGalleryContentImagesRightBottom}>
              <div className={styles.servicesGalleryContentImg}>
                <ServiceImageCard
                  image={Extensions}
                  text="Prepustite profesionalcima da Vašu kosu srede onako kako
                zaslužuje svaka dama."
                  // price="Nadogradnja kose po pramenu RSD 400"
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
