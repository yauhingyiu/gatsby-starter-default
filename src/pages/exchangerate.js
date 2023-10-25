import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import ExchangeRate from "../components/exchangerate"

const HkWeatherPage = () => {
  

  return (
  <Layout>
    <ExchangeRate/>
  </Layout>
	)
}

export const Head = () => <Seo title="Exchange Rate base eur" />

export default ExchangeRate