import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/UI/Cover/Cover"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <Cover imageName="blog_cover.jpg" />
  </Layout>
)

export default GalleryPage
