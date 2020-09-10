import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/UI/Cover/Cover"
import GalleryMain from "../components/Pages/Gallery/GalleryMain"
import { FadeWrapper } from "../components/UI/FadeLink/FadeWrapper"

const GalleryPage = () => (
  <FadeWrapper>
    <Layout>
      <SEO title="Galerija" />
      <Cover imageName="cover_gallery.jpg" />
      <GalleryMain />
    </Layout>
  </FadeWrapper>
)

export default GalleryPage
