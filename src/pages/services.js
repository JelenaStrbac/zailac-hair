import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/UI/Cover/Cover"
import ServicesMain from "../components/Pages/Services/ServicesMain"

const ThirdPage = () => (
  <Layout>
    <SEO title="Usluge" />
    <Cover imageName="services_cover.jpg" />
    <ServicesMain />
  </Layout>
)

export default ThirdPage
