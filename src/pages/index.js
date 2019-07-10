import React from "react"
import { Link } from "gatsby"
import coreJsPackageJson from "core-js/package.json"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <p>
      This pages uses core-js <b>version {coreJsPackageJson.version}</b>
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
