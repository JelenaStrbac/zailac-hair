import React from "react"

import styles from "./GalleryCard.module.css"

const GalleryCards = props => {
  return (
    <div className={styles.galleryCards}>
      <img src={props.image} alt="gallery zailac" />
      <div className={styles.overlay}></div>
    </div>
  )
}

export default GalleryCards
