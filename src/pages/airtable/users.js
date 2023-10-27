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
				airtable {
					tokens {
						readdata
						savedata
					}
				}
			}
		}
    }
  `)

  return (
  <Layout>
    <h1>Airtable Uesrs</h1>
	<AirtableReadUsers token={siteTitleJson.site.siteMetadata.airtable.tokens.readdata} />
    <Link to="/">Go to home</Link><br/>
    <Link to="https://airtable.com/">Go to airtable</Link>
  </Layout>
	)
}

export const Head = () => <Seo title="Airtable users" />

export default AirtableUsers