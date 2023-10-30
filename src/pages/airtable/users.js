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
  
	const [state, setState] = useState({ 
		saveusersCount:0,
		rec: {}
	});

	return (
  <Layout>
    <h1>Airtable Uesrs</h1>
	<AirtableSaveUsers token={siteTitleJson.site.siteMetadata.airtable.tokens.savedata} 
		triggerReloadUserlist={
			() => { setState( prev=>({...prev, saveusersCount: state.saveusersCount+1}) ) 
		} }
		rec={state.rec}
	/>
	<AirtableReadUsers token={siteTitleJson.site.siteMetadata.airtable.tokens.readdata} 
		saveusersCount={state.saveusersCount}
		loadRecord={(record) => { console.log(record);setState( prev=>({...prev, rec: record}) ) }} 
	/>
    <Link to="/">Go to home</Link><br/>
    <Link to="https://airtable.com/">Go to airtable</Link>
  </Layout>
	);
}

export const Head = () => <Seo title="Airtable users" />

export default AirtableUsers