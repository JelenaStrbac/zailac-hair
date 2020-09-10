import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./GalleryVideos.module.css"
import Headings from "../../UI/Headings/Headings"

const GalleryVideos = props => {
  const data = useStaticQuery(graphql`
    query {
      wordpressPage(title: { eq: "Video" }) {
        content
      }
    }
  `)
  useEffect(() => {
    if (window.instgrm) window.instgrm.Embeds.process()
  }, [])
  return (
    <div className={styles.galleryVideos}>
      <Headings>Follow us</Headings>
      <div>
        Pratite nas na FB & IG i pogledajte još naših video transformacija
        <span role="img" aria-label="arm" style={{ fontSize: "1.5rem" }}>
          &#128071; &#128071; &#128071;
        </span>
      </div>
      <div className={styles.galleryVideosMain}>
        <div
          dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
          className={styles.galleryVideo}
        />
      </div>
    </div>
  )
}

export default GalleryVideos
