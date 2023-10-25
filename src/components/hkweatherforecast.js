import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

class HkWeatherForecast extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            weatherData: {
				weatherForecast:[]
			}
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
		const weatherImgStyle = {
			'background-color':'#1b5397',
            'border-radius': '15px',
            'padding': '5px'
		};
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">GET Request with Async/Await</h5>
                <div className="card-body">
					{weatherData.generalSituation}
                    {
                        weatherData.weatherForecast.map(
							(link, i) => (
                            <div>{link.forecastDate}<br/>{link.forecastWeather}<br/><img style={weatherImgStyle} width="77px" src={`https://www.hko.gov.hk/images/HKOWxIconOutline/pic${link.ForecastIcon}.png`} border="0"/><br/></div>
                            )
						)
                    }
                </div>
            </div>
        );
    }
}

export default HkWeatherForecast; 

