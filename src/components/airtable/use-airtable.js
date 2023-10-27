import { useStaticQuery, graphql } from 'gatsby'

export const useAirtable = () => {
	const {site} = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					airtable {
						tokens {
							readdata
						}
					}
				}
			}
		}
	`)
	return site.siteMetadata.airtable
}
