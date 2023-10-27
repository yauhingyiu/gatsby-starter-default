import * as React from "react"
import { Link } from "gatsby"

const Header2 = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
	<div style={{flex:1,
		padding:'10px'}}>
		<Link
			to="/"
			style={{
				fontSize: `var(--font-sm)`,
				textDecoration: `none`,
			}}
		>Home</Link>
	</div>
	<div style={{flex:1,
		padding:'10px'}}>
		<Link
			to="/page-3"
			style={{
				fontSize: `var(--font-sm)`,
				textDecoration: `none`,
			}}
		>About</Link>
	</div>
	<div style={{flex:1,
		padding:'10px'}}>
		<Link
			to="/airtable/users"
			style={{
				fontSize: `var(--font-sm)`,
				textDecoration: `none`,
			}}
		>Users</Link>
	</div>
  </header>
)

export default Header2
