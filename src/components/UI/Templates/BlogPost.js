import React from "react"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faClock } from "@fortawesome/free-solid-svg-icons"

import styles from "./BlogPost.module.css"
import Layout from "../../layout"
import Cover from "../Cover/Cover"
import SEO from "../../seo"
// import FadeLink from "../FadeLink/FadeLink"

const BlogPost = ({ data }) => {
  const post = data.wordpressPost
  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={{ src: post.featured_media.source_url, width: 300, height: 300 }}
        keywords={post.categories.map(res => res.name).join(", ")}
      />
      <Cover imageName="blog_cover.jpg" />
      <div className={styles.blogMain}>
        <div className={styles.blogMainInner}>
          <div className={styles.postsLeft}>
            <div className={styles.blogImageOutter}>
              <img
                className={styles.blogImage}
                src={post.featured_media.source_url}
                alt="zailacBlogImage"
              />
            </div>

            <h3 dangerouslySetInnerHTML={{ __html: post.title }}></h3>
            <div className={styles.authorAndName}>
              <FontAwesomeIcon icon={faUser} className={styles.icon} />{" "}
              {post.author.name} |{" "}
              <FontAwesomeIcon icon={faClock} className={styles.icon} />{" "}
              {post.date}
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
      author {
        name
      }
      featured_media {
        source_url
      }
      date(formatString: "DD-MM-YYYY")
      categories {
        id
        name
        slug
      }
    }
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`
