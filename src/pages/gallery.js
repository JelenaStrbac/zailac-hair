import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/UI/Cover/Cover"
import GalleryMain from "../components/Pages/Gallery/GalleryMain"

const GalleryPage = () => (
  <Layout>
    <SEO title="Galerija" />
    <Cover imageName="cover_gallery.jpg" />
    <GalleryMain />
  </Layout>
)

export default GalleryPage
