import { useStaticQuery, graphql } from 'gatsby'

export const useAirtable = () => {
	const {site} = useStaticQuery(graphql`
		query SiteMetaData {
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
	return site.siteMetadata.airtable
}
