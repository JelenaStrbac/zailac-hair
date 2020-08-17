import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutCover from "../components/Pages/About/AboutCover"
import AboutMain from "../components/Pages/About/AboutMain"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutCover />
    <AboutMain />
  </Layout>
)

export default IndexPage
