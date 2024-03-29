import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faClock } from "@fortawesome/free-solid-svg-icons"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"

import styles from "./BlogMain.module.css"
import Headings from "../../UI/Headings/Headings"
import Pagination from "../../UI/Pagination/Pagination"

const BlogMain = props => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            content
            slug
            title
            featured_media {
              source_url
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 90) {
                    srcSet
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            date(formatString: "DD-MM-YYYY")
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
    blogPosts = slice.map((el, i) => {
      return (
        <div key={i} className={styles.postsLeftBorder}>
          <div className={styles.blogImageOutter}>
            <Img
              style={{ width: "100%", height: "100%" }}
              fluid={el.node.featured_media.localFile.childImageSharp.fluid}
              imgStyle={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.blogTextOutter}>
            <h3 dangerouslySetInnerHTML={{ __html: el.node.title }}></h3>
            <div className={styles.authorAndName}>
              <FontAwesomeIcon icon={faUser} className={styles.icon} /> Mladen
              Zailac |{" "}
              <FontAwesomeIcon icon={faClock} className={styles.icon} />{" "}
              {el.node.date}
            </div>
            <div dangerouslySetInnerHTML={{ __html: el.node.excerpt }} />
            <Link
              className={styles.cardLinkStyle}
              to={`/blog/${el.node.slug}/`}
            >
              Pročitajte više
            </Link>
          </div>
        </div>
      )
    })
  }

  return (
    <div className={styles.blogMain}>
      <Fade up>
        <Headings>Blog</Headings>

        <div className={styles.blogMainInner}>
          <div className={styles.postsLeft}>
            <div className={styles.blogpagination}>
              <Pagination
                pageCount={paginationDetails.pageCount}
                handlePageClick={handlePageClick}
              />
            </div>
            {blogPosts}
          </div>

          <div className={styles.postsRight}>
            <h3>Sve objave</h3>
            {data.allWordpressPost.edges.map((el, i) => (
              <Link
                to={`/blog/${el.node.slug}/`}
                key={i}
                dangerouslySetInnerHTML={{ __html: el.node.title }}
              ></Link>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default BlogMain
