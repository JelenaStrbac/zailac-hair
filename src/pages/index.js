import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeCover from "../components/Pages/Home/HomeCover"
import HomeAbout from "../components/Pages/Home/HomeAbout"
import HomeServices from "../components/Pages/Home/HomeServices"
import HomeGallery from "../components/Pages/Home/HomeGallery"
import HomeBlog from "../components/Pages/Home/HomeBlog"
import { FadeWrapper } from "../components/UI/FadeLink/FadeWrapper"

const IndexPage = () => (
  <FadeWrapper>
    <Layout>
      <SEO title="Home" />
      <HomeCover />
      <HomeAbout />
      <HomeServices />
      <HomeGallery />
      <HomeBlog />
    </Layout>
  </FadeWrapper>
)

export default IndexPage
