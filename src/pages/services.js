import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/UI/Cover/Cover"
import ServicesMain from "../components/Pages/Services/ServicesMain"
import { FadeWrapper } from "../components/UI/FadeLink/FadeWrapper"

const ThirdPage = () => (
  <FadeWrapper>
    <Layout>
      <SEO title="Usluge" />
      <Cover imageName="services_cover.jpg" />
      <ServicesMain />
    </Layout>
  </FadeWrapper>
)

export default ThirdPage
