import * as React from "react"
import { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import IndexTemplate1 from "../components/index-template1"
import IndexContent from "../components/index-content"
import HkWeatherForecast from "../components/hkweatherforecast"


const IndexPage = () => {
	
	const [targetChildComponent, setTargetChildComponent] = useState({
        name:''
    }); 
	
	
	return (
    <IndexTemplate1 setTargetChildComponent={setTargetChildComponent}>
	
		<IndexContent setTargetChildComponent={setTargetChildComponent}></IndexContent>
		{targetChildComponent.name==='hkweather' && <HkWeatherForecast/>}
		{targetChildComponent.name==='image1' && <Image1/>}
	</IndexTemplate1>
	)
}

export default IndexPage

export const Head = () => {
	
	const useSiteMetadata = () => {
		const {site} = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					siteUrl
					siteTitle
				}
			}
		}
		`)
		return site.siteMetadata
	}
	
	const {siteUrl, siteTitle} = useSiteMetadata();
	
	return (
	<>
		<title>{siteTitle}</title>
		<link href={'/bootstrap-5.3.3-dist/css/bootstrap.min.css'} rel="stylesheet"></link>
		<link href={'/custom.css'} rel="stylesheet"></link>
		<script src={'/bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js'}></script>
		<script src={'/bootstrap-5.3.3-dist/js/masonry.pkgd.min.js'}></script>
	</>
	)
}

