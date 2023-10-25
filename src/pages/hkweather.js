import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import HkWeatherForecast from "../components/hkweatherforecast"

const HkWeatherPage = () => {
  

  return (
  <Layout>
    <HkWeatherForecast></HkWeatherForecast>
  </Layout>
	)
}

export const Head = () => <Seo title="HK 9-day Weather Forecast" />

export default HkWeatherPage