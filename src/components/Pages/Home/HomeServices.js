import React from "react"

import styles from "./HomeServices.module.css"
import Button from "../../UI/Button/Button"
import Balayage from "../../../images/balayage.jpg"
import HairCut from "../../../images/sisanje.jpg"
import Styling from "../../../images/stilizovanje.jpg"
import Extensions from "../../../images/nadogradnja.jpg"

const HomeServices = props => {
  return (
    <div className={styles.homeServices}>
      <h1>Usluge</h1>
      <h2>Usluge</h2>
      <Button>Pogledajte sve</Button>
      {/* <div className={styles.servicesGallery}>
        <div>
          <div>Balayage</div>
          <img src={Balayage} alt="balayage" />
        </div>
        <div>
          <div>Balayage</div>
          <img src={HairCut} alt="hairCut" />
        </div>
        <div>
          <div>Balayage</div>
          <img src={Styling} alt="styling" />
        </div>
        <div>
          <div>Balayage</div>
          <img src={Extensions} alt="extensions" />
        </div>
      </div> */}
    </div>
  )
}

export default HomeServices
