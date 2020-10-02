import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Images from "../components/images"
import Grid from "../components/grid"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Images />
    <Grid />
    <Footer />
  </Layout>
)

export default IndexPage
