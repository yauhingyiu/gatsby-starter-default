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
		reloadIndSaveUser: 0,
		reloadIndReadUser: 0,
		rec: {}
	});

	return (
  <Layout>
    <h1>Airtable Uesrs</h1>
	<AirtableSaveUsers 
		token={siteTitleJson.site.siteMetadata.airtable.tokens.savedata} 
		reloadInd={state.reloadIndSaveUser}
        triggerReloadUserlist={
			() => { 
				setState( prev=>({...prev, reloadIndReadUser: (state.reloadIndReadUser+1)%2}) ) 
			} 
		} 
		rec={state.rec}
	/>
	<AirtableReadUsers 
		token={siteTitleJson.site.siteMetadata.airtable.tokens.readdata} 
		reloadInd={state.reloadIndReadUser}
        loadRecord={
			(record) => { 
				setState( prev=>({...prev, rec: record, reloadIndSaveUser:(state.reloadIndSaveUser+1)%2}) ) 
			}
		}
	/>
    <Link to="/">Go to home</Link><br/>
    <Link to="https://airtable.com/">Go to airtable</Link>
  </Layout>
	);
}

export const Head = () => <Seo title="Airtable users" />

export default AirtableUsers