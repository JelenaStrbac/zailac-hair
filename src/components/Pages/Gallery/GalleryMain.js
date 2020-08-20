import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./GalleryMain.module.css"
import Headings from "../../UI/Headings/Headings"
import GalleryCard from "../../UI/GalleryCards/GalleryCard"

// import One from "../../../images/01.jpg"
// import Two from "../../../images/02.jpg"
// import Three from "../../../images/03.jpg"
// import Four from "../../../images/04.jpg"
// import Five from "../../../images/05.jpg"
// import Six from "../../../images/06.jpg"
// import Seven from "../../../images/07.jpg"
// import Eight from "../../../images/08.jpg"
// import Nine from "../../../images/09.jpg"
// import Ten from "../../../images/10.jpg"
// import Eleven from "../../../images/11.jpg"
// import Twelve from "../../../images/12.jpg"

const GalleryMain = props => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWordpressWpMedia(filter: { alt_text: { eq: "galerija" } }) {
        edges {
          node {
            source_url
            alt_text
            wordpress_id
            caption
          }
        }
      }
    }
  `)
  console.log(data)
  console.log(data.allWordpressWpMedia.edges)
  console.log(data.allWordpressWpMedia.edges[0])

  return (
    <div className={styles.galleryMain}>
      <Headings>Pre & Posle</Headings>
      <div className={styles.galleryContainer}>
        {data.allWordpressWpMedia.edges.map((el, i) => (
          <GalleryCard image={el.node.source_url} key={i} />
        ))}

        {/* <GalleryCard image={Two} />
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
        <GalleryCard image={Four} /> */}
      </div>
    </div>
  )
}

export default GalleryMain
