import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

const Image1 = () => {
	const data = useStaticQuery(graphql`
    query {
		file(relativePath: { eq: "Facebook.png" }) {
			childImageSharp {
				# Specify a fixed image and fragment.
				# The default width is 400 pixels
				fixed {
					...GatsbyImageSharpFixed
				},
				
				# Specify a fixed image and fragment.
				# The default width is 400 pixels
				fluid {
					...GatsbyImageSharpFluid
				}
			},
			
		}
    }
	`);
	
  
	console.log(data);
	return (
    <div>
      <h1>Hello gatsby-image</h1>
	  
	  <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
      />
	  
	  <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      />
	  
	  
    </div>
	)
}

export default Image1