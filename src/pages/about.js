import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMain from "../components/Pages/About/AboutMain"
import Cover from "../components/UI/Cover/Cover"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <Cover imageName="salon_01.jpg" />
    <AboutMain />
  </Layout>
)

export default SecondPage
