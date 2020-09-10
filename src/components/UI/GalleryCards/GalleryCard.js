import React from "react"

import styles from "./GalleryCard.module.css"

const GalleryCards = props => {
  return (
    <div
      className={styles.galleryCards}
      role="presentation"
      onClick={e => props.galleryHandler(e)}
    >
      <img src={props.image} alt="gallery zailac" />
    </div>
  )
}

export default GalleryCards
