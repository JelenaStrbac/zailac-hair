import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/UI/Cover/Cover"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Cover imageName="blog-cover.jpg" />
  </Layout>
)

export default BlogPage
