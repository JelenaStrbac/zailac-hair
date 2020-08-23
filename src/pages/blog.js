import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/UI/Cover/Cover"
import BlogMain from "../components/Pages/Blog/BlogMain"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Cover imageName="blog_cover.jpg" />
    <BlogMain />
  </Layout>
)

export default BlogPage
