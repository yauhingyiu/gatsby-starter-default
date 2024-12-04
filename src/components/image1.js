import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

const Image1 = ({props, children}) => {
	const data = useStaticQuery(graphql`
    query {
		file(relativePath: { eq: "/images/Facebook.png" }) {
			childImageSharp {
				# Specify a fixed image and fragment.
				# The default width is 400 pixels
				fixed {
					...GatsbyImageSharpFixed
				}
			}
		}
    }
  `)
  return (
    <div>
      <h1>Hello gatsby-image</h1>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
      />
    </div>
  )
}

export default Image1