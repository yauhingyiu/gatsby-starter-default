/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

const React = require("react")
//const Layout = require("./src/components/layout").default
const IndexTemplate1 = require("./src/components/index-template1").default

// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
	console.log("new pathname", location.pathname)
	console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}



// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
	console.log('wrapPageElement', element, props);
	//return <Layout {...props}>{element}</Layout>
	
	return (<>
		<IndexTemplate1>{element}</IndexTemplate1>
	</>)
	
}
