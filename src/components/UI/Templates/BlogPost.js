import React from "react"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faClock, faTag } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
  TumblrShareButton,
  TumblrIcon,
} from "react-share"
import { globalHistory as history } from "@reach/router"
import innertext from "innertext"

import styles from "./BlogPost.module.css"
import Layout from "../../layout"
import Cover from "../Cover/Cover"
import SEO from "../../seo"

const BlogPost = ({ data }) => {
  const post = data.wordpressPost

  const { location } = history
  const path = location.pathname
  const urlForSharing = `https://www.zailachair.com${path}`
  const tags = [...post.categories.map(res => res.name)]

  return (
    <Layout>
      <SEO
        title={innertext(post.title)}
        description={innertext(post.title)}
        image={{ src: post.featured_media.source_url, width: 300, height: 300 }}
        keywords={post.categories.map(res => res.name)}
      />
      <Cover imageName="blog_cover.jpg" />
      <div className={styles.blogMain}>
        <div className={styles.blogMainInner}>
          <div className={styles.postsLeft}>
            <div className={styles.blogImageOutter}>
              <Img
                style={{ width: "100%", height: "100%" }}
                fluid={post.featured_media.localFile.childImageSharp.fluid}
                imgStyle={{ objectFit: "cover" }}
              />
            </div>

            <h3 dangerouslySetInnerHTML={{ __html: post.title }}></h3>
            <div className={styles.authorAndName}>
              <FontAwesomeIcon icon={faUser} className={styles.icon} /> Mladen
              Zailac |{" "}
              <FontAwesomeIcon icon={faClock} className={styles.icon} />{" "}
              {post.date}
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className={styles.tags}>
              <FontAwesomeIcon icon={faTag} className={styles.icon} />
              {post.categories
                .filter(res => res.name !== "Некатегоризовано")
                .map(e => e.name)
                .join(", ")}
            </div>

            <div className={styles.socialShareButtons}>
              <FacebookShareButton
                url={urlForSharing}
                quote={innertext(post.title)}
              >
                <FacebookIcon size={36} />
              </FacebookShareButton>

              <TwitterShareButton
                url={urlForSharing}
                title={innertext(post.title)}
              >
                <TwitterIcon size={36} />
              </TwitterShareButton>

              <PinterestShareButton
                url={urlForSharing}
                description={innertext(post.title)}
                media={post.featured_media.source_url}
              >
                <PinterestIcon size={36} />
              </PinterestShareButton>

              <TumblrShareButton
                url={urlForSharing}
                title={innertext(post.title)}
                tags={tags}
              >
                <TumblrIcon size={36} />
              </TumblrShareButton>
            </div>
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
      featured_media {
        source_url
        localFile {
          childImageSharp {
            fluid(maxWidth: 750, quality: 90) {
              srcSet
              ...GatsbyImageSharpFluid
            }
          }
        }
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
