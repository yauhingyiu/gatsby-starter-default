import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <h1>Hi from the third page</h1>
    
    <Link to="./page-2">Go to page 2</Link>
  </Layout>
)

export const Head = () => <Seo title="Page three" />

export default ThirdPage