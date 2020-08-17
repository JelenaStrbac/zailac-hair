import React from "react"

import styles from "./AboutCover.module.css"
import SocialLinks from "../../UI/SocialLinks/SocialLinks"
import Salon from "../../../images/salon_01.jpg"

const AboutCover = props => {
  return (
    <div className={styles.aboutCover}>
      <SocialLinks />
      <div className={styles.zailacSalonImageOutter}>
        <img
          className={styles.zailacSalonImage}
          src={Salon}
          alt="Zailac Salon"
        />
      </div>
    </div>
  )
}

export default AboutCover
