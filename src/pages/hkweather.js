import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

class HkWeatherPage //extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            weatherData: null
        };
    }

    async componentDidMount() {
		// GET request using fetch with async/await
		const response = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc');
		const data = await response.json();
		this.setState({ weatherData: data })
	}

    render() {
        const { weatherData } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">GET Request with Async/Await</h5>
                <div className="card-body">
                    Total react packages: {weatherData}
                </div>
            </div>
        );
    }
}

//export { GetRequestAsyncAwait }; 
export const Head = () => <Seo title="HK 9-day Weather Forecast" />

export default HkWeatherPage