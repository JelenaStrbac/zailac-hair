import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faClock } from "@fortawesome/free-solid-svg-icons"

import styles from "./BlogMain.module.css"
import Headings from "../../UI/Headings/Headings"

const BlogMain = props => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost {
        edges {
          node {
            content
            slug
            title
            author {
              name
            }
            featured_media {
              source_url
            }
            date(formatString: "DD-MM-YYYY")
            excerpt
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className={styles.blogMain}>
      <Headings>Blog</Headings>

      <div className={styles.blogMainInner}>
        <div className={styles.postsLeft}>
          {data.allWordpressPost.edges.map((el, i) => {
            return (
              <div key={i}>
                <div className={styles.blogImageOutter}>
                  <img
                    className={styles.blogImage}
                    src={el.node.featured_media.source_url}
                    alt="zailacBlogImage"
                  />
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: el.node.title }}></h3>
                <div className={styles.authorAndName}>
                  <FontAwesomeIcon icon={faUser} className={styles.icon} />{" "}
                  {el.node.author.name} |{" "}
                  <FontAwesomeIcon icon={faClock} className={styles.icon} />{" "}
                  {el.node.date}
                </div>
                <div dangerouslySetInnerHTML={{ __html: el.node.content }} />
                <hr></hr>
              </div>
            )
          })}
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
    </div>
  )
}

export default BlogMain
