import React from "react"

import styles from "./GalleryMain.module.css"
import Headings from "../../UI/Headings/Headings"
import GalleryCard from "../../UI/GalleryCards/GalleryCard"

import One from "../../../images/01.jpg"
import Two from "../../../images/02.jpg"
import Three from "../../../images/03.jpg"
import Four from "../../../images/04.jpg"

const GalleryMain = props => {
  return (
    <div className={styles.galleryMain}>
      <Headings>Pre & Posle</Headings>
      <div className={styles.galleryContainer}>
        <GalleryCard image={One} />
        <GalleryCard image={Two} />
        <GalleryCard image={Three} />
        <GalleryCard image={Four} />
        <GalleryCard image={One} />
        <GalleryCard image={Two} />
        <GalleryCard image={Three} />
        <GalleryCard image={Four} />
        <GalleryCard image={One} />
        <GalleryCard image={Two} />
        <GalleryCard image={Three} />
        <GalleryCard image={Four} />
        <GalleryCard image={One} />
        <GalleryCard image={Two} />
        <GalleryCard image={Three} />
        <GalleryCard image={Four} />
      </div>
    </div>
  )
}

export default GalleryMain
