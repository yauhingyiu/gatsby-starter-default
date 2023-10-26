import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import AirtableReadUsers from "../../components/airtable/readusers"
import AirtableSaveUsers from "../../components/airtable/saveusers"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const AirtableUsers = () => {
  const siteTitleJson = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  <Layout>
    <h1>Airtable Uesrs</h1>
	<AirtableSaveUsers/>
	<AirtableReadUsers/>
    <Link to="/">Go to home</Link>
    <Link to="https://airtable.com/appMZcSux6RuxBm2i/tblhdWbDaSbwVqQit/viw91oEIqkiBs2ht9?blocks=hide">Go to airtable</Link>
  </Layout>
	)
}

export const Head = () => <Seo title="Airtable users" />

export default AirtableUsers