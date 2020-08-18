import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HomeCover from "../components/Pages/Home/HomeCover"
import HomeAbout from "../components/Pages/Home/HomeAbout"
import HomeServices from "../components/Pages/Home/HomeServices"
import HomeGallery from "../components/Pages/Home/HomeGallery"
import HomeBlog from "../components/Pages/Home/HomeBlog"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeCover />
    <HomeAbout />
    <HomeServices />
    <HomeGallery />
    <HomeBlog />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
