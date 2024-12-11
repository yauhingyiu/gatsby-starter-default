import * as React from "react"
import { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import IndexTemplate1 from "../components/index-template1"
import IndexContent from "../components/index-content"
import Image1 from "../components/image1"
import HkWeatherForecast from "../components/hkweatherforecast"

const IndexPage = () => {
	
	const [targetChildComponent, setTargetChildComponent] = useState({
        name:''
    }); 
	
	/*
	return (
    <IndexTemplate1 setTargetChildComponent={setTargetChildComponent}>
	
		{targetChildComponent.name==='' && <IndexContent setTargetChildComponent={setTargetChildComponent}></IndexContent>}
		{targetChildComponent.name==='hkweather' && <HkWeatherForecast/>}
		{targetChildComponent.name==='image1' && <Image1/>}
	</IndexTemplate1>
	)
	//*/
	//*
	return (
		<IndexContent setTargetChildComponent={setTargetChildComponent}></IndexContent>
	)
	//*/
}


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
	</>
	)
}

export default IndexPage
