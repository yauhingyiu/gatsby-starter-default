import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <h1>Hi from the third page</h1>
	<ol type="1">
	<li><a href="#">山崎まさよし公演 なぜ炎上</a></li>
	</ol>
    <Link to="../page-2">Go to page 2</Link>
  </Layout>
)

export const Head = () => <Seo title="Page three" />

export default ThirdPage