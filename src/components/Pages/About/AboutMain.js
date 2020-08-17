import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"

import styles from "./AboutMain.module.css"
import Headings from "../../UI/Headings/Headings"
import Mladen from "../../../images/mladen.jpg"
import Cadiveu from "../../../images/cadiveu_logo.jpg"
import Echosline from "../../../images/echosline_logo.png"
import Loreal from "../../../images/loreal_logo.jpg"
import Olaplex from "../../../images/olaplex_logo.jpg"

const AboutMain = props => {
  return (
    <div className={styles.aboutMain}>
      <div className={styles.aboutWhy}>
        <Headings>Zašto Zailac Hair?</Headings>
        <p>
          ZAILAC HAIR je osnovan pre vise od dve godine, a danas pretenduje da
          postane jedan od veoma uspešnih i prepoznatih salona u Beogradu koji
          se bavi koloringom kose. Sam salon je otvoren pre svega za one koje
          odlikuje moderan i urbani stil, a koji žele istovremeno i lepu i
          negovanu kosu.
        </p>
        <p></p>
      </div>
      <div className={styles.aboutHairDresser}>
        <div>
          <div className={styles.aboutHairDresserImageOutterLarge}>
            <div className={styles.aboutHairDresserImageOutter}>
              <img
                className={styles.aboutHairDresserImageInner}
                src={Mladen}
                alt="Mladen Zailac"
              />
            </div>
          </div>
          <div className={styles.quotation}>
            <FontAwesomeIcon icon={faQuoteRight} className={styles.quoteMark} />
            <div className={styles.q}>
              Polovinu ženske lepote čini lepa i negovana kosa.
            </div>
          </div>
        </div>
        <div className={styles.aboutHairDresserText}>
          <Headings>Frizer</Headings>
          <p>
            Svoju karijeru frizera sam poceo, odma posle zavrsene srednje
            frizerske skole, po zavrsetku skole, dolazim sa svoji 18godina u
            Beograd i pocinjem sa radom u jednom salonu. sa svoji 21godina
            otvaram svoj i salon zailac hair. time se odlucim da se bavim
            iskljucivo kolorisanjem kose, i nadogradnjom kose. dugogodisnje
            iskutvo mi je pokazalo, da se uvek treba nadogradjivati, posetom
            mnogo brojnim edukacijama sam usavrsio svoje znanje. kako kazu 70%
            je trud ostalo je talenat.{" "}
          </p>
          <p className={styles.signature}>Mladen</p>
        </div>
      </div>
      <div className={styles.aboutBrands}>
        <Headings>Brendovi</Headings>
        <div className={styles.aboutBrandsInner}>
          <img src={Cadiveu} alt="Cadiveu" />
          <img src={Echosline} alt="Echosline" />
          <img src={Loreal} alt="Loreal" />
          <img src={Olaplex} alt="Olaplex" />
        </div>
      </div>
    </div>
  )
}

export default AboutMain
