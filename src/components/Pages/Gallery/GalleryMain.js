import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

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
  console.log(data)
  console.log(data.allWordpressWpMedia.edges)
  console.log(data.allWordpressWpMedia.edges[0])

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

  let gallery = null
  if (slice) {
    gallery = slice.map((el, i) => (
      <GalleryCard image={el.node.source_url} key={i} />
    ))
  }

  return (
    <div className={styles.galleryMain}>
      <Headings>Pre & Posle</Headings>
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
