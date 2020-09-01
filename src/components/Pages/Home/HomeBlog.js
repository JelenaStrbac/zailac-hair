import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Fade from "react-reveal/Fade"

import styles from "./HomeBlog.module.css"
import Headings from "../../UI/Headings/Headings"
import Button from "../../UI/Button/Button"
import Card from "../../UI/Cards/Card"
import Pagination from "../../UI/Pagination/Pagination"

const HomeBlog = props => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            slug
            title
            featured_media {
              source_url
            }
            excerpt
          }
        }
      }
    }
  `)
  const [paginationDetails, setPaginationDetails] = useState({
    offset: 0,
    data: [],
    perPage: 3,
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
      data: data.allWordpressPost.edges,
      pageCount: Math.ceil(
        data.allWordpressPost.edges.length / currentPaginatedResult.perPage
      ),
    }))
  }, [data])

  const slice = data.allWordpressPost.edges.slice(
    paginationDetails.offset,
    paginationDetails.offset + paginationDetails.perPage
  )

  let blogPosts = null
  if (slice) {
    blogPosts = slice.map((el, idx) => (
      <Card
        key={idx}
        title={el.node.title}
        image={el.node.featured_media.source_url}
        text={el.node.excerpt}
        slug={el.node.slug}
      />
    ))
  }

  return (
    <div className={styles.homeBlog}>
      <Fade up>
        <div className={styles.homeBlogTitle}>
          <Headings>Blog</Headings>
          <div className={styles.homeBlogTitlePaginationAndButton}>
            <div className={styles.homeBlogpagination}>
              <Pagination
                pageCount={paginationDetails.pageCount}
                handlePageClick={handlePageClick}
              />
            </div>

            <AniLink swipe top="exit" direction="left" to="/blog/">
              <Button>Pogledajte sve</Button>
            </AniLink>
          </div>
        </div>
        <div className={styles.homeBlogCards}>{blogPosts}</div>
      </Fade>
    </div>
  )
}

export default HomeBlog
