import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMain from "../components/Pages/About/AboutMain"
import Cover from "../components/UI/Cover/Cover"
import { FadeWrapper } from "../components/UI/FadeLink/FadeWrapper"

const SecondPage = () => (
  <FadeWrapper>
    <Layout>
      <SEO title="O nama" />
      <Cover imageName="salon_01.jpg" />
      <AboutMain />
    </Layout>
  </FadeWrapper>
)

export default SecondPage
