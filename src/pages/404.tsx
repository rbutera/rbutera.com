import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>
      Are you here to find out more about me?{" "}
      <Link to="/">Check out my CV</Link>
    </p>
  </Layout>
)

export default NotFoundPage
