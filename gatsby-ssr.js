const React = require("react")

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ 
	setHtmlAttributes,
	setHeadComponents
}) => {
	setHtmlAttributes({ lang: `en` });
	setHeadComponents([
		<link href={'/bootstrap-5.3.3-dist/css/bootstrap.min.css'} rel="stylesheet"></link>,
		<link href={'/custom.css'} rel="stylesheet"></link>,
		<script src={'/bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js'}></script>,
		<script src={'/bootstrap-5.3.3-dist/js/masonry.pkgd.min.js'}></script>
	])
}
