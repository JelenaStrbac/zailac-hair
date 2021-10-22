import React from "react"

import styles from "./Cover.module.css"
import SocialLinks from "../SocialLinks/SocialLinks"

const Cover = props => {
  return (
    <div
      className={styles.cover}
      style={{
        backgroundImage: `linear-gradient(to left bottom, #2c2c2cf3, #2c2c2cec),
        url("/${props.imageNameCover ? props.imageNameCover : props.imageName}")`,
      }}
    >
      <SocialLinks />
      <div>
        <img
          className={styles.imageSmallInFrame}
          src={`/${props.imageName}`}
          alt="CoverZailac"
        />
      </div>
    </div>
  )
}

export default Cover
