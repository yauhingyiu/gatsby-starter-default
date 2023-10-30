import * as React from "react"
import { useState, useEffect } from 'react'; 
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
  
	const [saveusersCount, setSaveusersCount] = useState(0);

	return (
  <Layout>
    <h1>Airtable Uesrs</h1>
	<AirtableSaveUsers token={siteTitleJson.site.siteMetadata.airtable.tokens.savedata} triggerReloadUserlist={()=>{setSaveusersCount(saveusersCount+1)}} />
	<AirtableReadUsers token={siteTitleJson.site.siteMetadata.airtable.tokens.readdata} saveusersCount={saveusersCount}/>
    <Link to="/">Go to home</Link><br/>
    <Link to="https://airtable.com/">Go to airtable</Link>
  </Layout>
	)
}

export const Head = () => <Seo title="Airtable users" />

export default AirtableUsers