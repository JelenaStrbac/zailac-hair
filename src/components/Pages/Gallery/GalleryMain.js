import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import "react-bnb-gallery/dist/style.css"
// import React, { useState } from "react"
import ReactBnbGallery from "react-bnb-gallery"

import styles from "./GalleryMain.module.css"
import Headings from "../../UI/Headings/Headings"
import GalleryCard from "../../UI/GalleryCards/GalleryCard"
import Pagination from "../../UI/Pagination/Pagination"

const GalleryMain = props => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWordpressWpMedia(
        filter: { alt_text: { eq: "galerija" } }
        sort: { fields: [date], order: ASC }
      ) {
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
  // console.log(data)
  const photos = data.allWordpressWpMedia.edges.map(el => el.node.source_url)
  // console.log(photos)
  const [isOpen, setIsOpen] = useState(false)
  const [currImg, setCurrImg] = useState(0)

  const [paginationDetails, setPaginationDetails] = useState({
    offset: 0,
    data: [],
    perPage: 6,
    currentPage: 0,
    pageCount: 0,
  })

  const handlePageClick = e => {
    const selectedPage = e.selected
    const offset = selectedPage * paginationDetails.perPage

    setPaginationDetails({
      ...paginationDetails,
      currentPage: selectedPage,
      offset: offset,
    })
  }
  useEffect(() => {
    setPaginationDetails(currentPaginatedResult => ({
      ...currentPaginatedResult,
      data: data.allWordpressWpMedia.edges,
      pageCount: Math.ceil(
        data.allWordpressWpMedia.edges.length / currentPaginatedResult.perPage
      ),
    }))
  }, [data])

  const slice = data.allWordpressWpMedia.edges.slice(
    paginationDetails.offset,
    paginationDetails.offset + paginationDetails.perPage
  )

  const galleryHandler = e => {
    console.log(photos.indexOf(e.target.src))
    setCurrImg(photos.indexOf(e.target.src))
    setIsOpen(true)
  }

  let gallery = null
  if (slice) {
    gallery = slice.map((el, i) => (
      <GalleryCard
        image={el.node.source_url}
        key={i}
        galleryHandler={galleryHandler}
      />
    ))
  }

  return (
    <div className={styles.galleryMain}>
      <Headings>Pre & Posle</Headings>
      {/* <GalleryImages PHOTOS={photos} /> */}
      <ReactBnbGallery
        show={isOpen}
        activePhotoIndex={currImg}
        photos={photos}
        showThumbnails={false}
        onClose={() => setIsOpen(false)}
      />
      <div className={styles.gallerypagination}>
        <Pagination
          pageCount={paginationDetails.pageCount}
          handlePageClick={handlePageClick}
        />
      </div>
      <div className={styles.galleryContainer}>{gallery}</div>
    </div>
  )
}

export default GalleryMain
