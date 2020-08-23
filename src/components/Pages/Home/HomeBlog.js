import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./HomeBlog.module.css"
import Headings from "../../UI/Headings/Headings"
import Button from "../../UI/Button/Button"
import Card from "../../UI/Cards/Card"
// import Styling from "../../../images/blog-orange.jpg"

const HomeBlog = props => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost {
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
  return (
    <div className={styles.homeBlog}>
      <div className={styles.homeBlogTitle}>
        <Headings>Blog</Headings>
        <Button>Pogledajte sve</Button>
      </div>
      <div className={styles.homeBlogCards}>
        {data.allWordpressPost.edges.map((el, idx) => (
          <Card
            title={el.node.title}
            image={el.node.featured_media.source_url}
            text={el.node.excerpt}
            slug={el.node.slug}
          />
        ))}
      </div>
    </div>
  )
}

export default HomeBlog
