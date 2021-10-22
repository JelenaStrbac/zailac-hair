import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/UI/Cover/Cover"
import ContactMain from "../components/Pages/Contact/ContactMain"
import { FadeWrapper } from "../components/UI/FadeLink/FadeWrapper"

const ContactPage = () => (
  <FadeWrapper>
    <Layout>
      <SEO title="Kontakt" />
      <Cover imageName="salon-enterijer.jpeg" />
      <ContactMain />
    </Layout>
  </FadeWrapper>
)

export default ContactPage
