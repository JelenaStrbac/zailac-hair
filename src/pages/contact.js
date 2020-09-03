import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/UI/Cover/Cover"
import ContactMain from "../components/Pages/Contact/ContactMain"

const ContactPage = () => (
  <Layout>
    <SEO title="Kontakt" />
    <Cover imageName="salon_02.jpg" />
    <ContactMain />
  </Layout>
)

export default ContactPage
