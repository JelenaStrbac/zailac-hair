import React from "react"

import styles from "./GalleryMain.module.css"
import Headings from "../../UI/Headings/Headings"
import GalleryCard from "../../UI/GalleryCards/GalleryCard"

import One from "../../../images/01.jpg"
import Two from "../../../images/02.jpg"
import Three from "../../../images/03.jpg"
import Four from "../../../images/04.jpg"
import Five from "../../../images/05.jpg"
import Six from "../../../images/06.jpg"
import Seven from "../../../images/07.jpg"
import Eight from "../../../images/08.jpg"
import Nine from "../../../images/09.jpg"
import Ten from "../../../images/10.jpg"
import Eleven from "../../../images/11.jpg"
import Twelve from "../../../images/12.jpg"

const GalleryMain = props => {
  return (
    <div className={styles.galleryMain}>
      <Headings>Pre & Posle</Headings>
      <div className={styles.galleryContainer}>
        <GalleryCard image={One} />
        <GalleryCard image={Two} />
        <GalleryCard image={Three} />
        <GalleryCard image={Four} />
        <GalleryCard image={Five} />
        <GalleryCard image={Six} />
        <GalleryCard image={Seven} />
        <GalleryCard image={Eight} />
        <GalleryCard image={Nine} />
        <GalleryCard image={Ten} />
        <GalleryCard image={Eleven} />
        <GalleryCard image={Twelve} />
        <GalleryCard image={One} />
        <GalleryCard image={Two} />
        <GalleryCard image={Three} />
        <GalleryCard image={Four} />
      </div>
    </div>
  )
}

export default GalleryMain
