import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

const FIXER_API_KEY = '005f7476cbeafb38c25e5d11fdab764b';

class ExchangeRate extends React.Component 
{
	constructor(props) {
		super(props);

		this.state = {
			exchangeRateData: {
				rates: {}
			}
		};
    }

	async componentDidMount() {
		// GET request using fetch with async/await
		//const response = await fetch('http://data.fixer.io/api/latest?access_key=' + FIXER_API_KEY);
		//const data = await response.json();
		const data = {"success":true,"timestamp":1698220083,"base":"EUR","date":"2023-10-25","rates":{"AED":3.889196,"AFN":79.120075,"ALL":105.680885,"AMD":426.914784,"ANG":1.912844,"AOA":877.79205,"ARS":370.548856,"AUD":1.665392,"AWG":1.905942,"AZN":1.797429,"BAM":1.953598,"BBD":2.142985,"BDT":117.018106,"BGN":1.954321,"BHD":0.399217,"BIF":3012.704318,"BMD":1.058857,"BND":1.451364,"BOB":7.333665,"BRL":5.286768,"BSD":1.061304,"BTC":3.1382822e-5,"BTN":88.187602,"BWP":14.589556,"BYN":3.496159,"BYR":20753.5882,"BZD":2.139389,"CAD":1.457145,"CDF":2737.143873,"CHF":0.947253,"CLF":0.035729,"CLP":985.858693,"CNY":7.746274,"COP":4475.648947,"CRC":563.659365,"CUC":1.058857,"CUP":28.059698,"CVE":110.139819,"CZK":24.653145,"DJF":188.977,"DKK":7.464928,"DOP":60.331429,"DZD":145.031266,"EGP":32.755743,"ERN":15.882848,"ETB":59.256551,"EUR":1,"FJD":2.41647,"FKP":0.870335,"GBP":0.871542,"GEL":2.853583,"GGP":0.870335,"GHS":12.539748,"GIP":0.870335,"GMD":69.884601,"GNF":9118.722099,"GTQ":8.320543,"GYD":222.047628,"HKD":8.283901,"HNL":26.202219,"HRK":7.590897,"HTG":141.690298,"HUF":384.651061,"IDR":16809.347586,"ILS":4.301753,"IMP":0.870335,"INR":88.041064,"IQD":1390.332927,"IRR":44749.924599,"ISK":147.106972,"JEP":0.870335,"JMD":164.29482,"JOD":0.751051,"JPY":158.736369,"KES":159.093378,"KGS":94.577103,"KHR":4390.051881,"KMF":492.474091,"KPW":952.974425,"KRW":1429.148991,"KWD":0.327356,"KYD":0.884503,"KZT":506.21943,"LAK":21954.254904,"LBP":15952.120035,"LKR":347.608204,"LRD":198.006253,"LSL":20.150128,"LTL":3.126528,"LVL":0.640492,"LYD":5.198141,"MAD":10.930077,"MDL":19.295252,"MGA":4814.573394,"MKD":61.616253,"MMK":2228.887774,"MNT":3664.129464,"MOP":8.55208,"MRO":378.011603,"MUR":47.017368,"MVR":16.317561,"MWK":1205.041772,"MXN":19.384438,"MYR":5.061008,"MZN":66.972623,"NAD":20.12356,"NGN":842.246223,"NIO":38.836227,"NOK":11.849489,"NPR":141.098632,"NZD":1.811756,"OMR":0.407584,"PAB":1.061304,"PEN":4.103874,"PGK":3.99446,"PHP":60.167934,"PKR":296.754522,"PLN":4.463768,"PYG":7907.087757,"QAR":3.855318,"RON":4.964024,"RSD":117.17414,"RUB":98.62824,"RWF":1315.017816,"SAR":3.971907,"SBD":8.903206,"SCR":13.877413,"SDG":635.875496,"SEK":11.796408,"SGD":1.449696,"SHP":1.288364,"SLE":23.909056,"SLL":20912.417025,"SOS":604.07753,"SSP":635.842493,"SRD":40.259311,"STD":21916.192572,"SYP":13766.9594,"SZL":20.268155,"THB":38.293019,"TJS":11.653665,"TMT":3.716586,"TND":3.343337,"TOP":2.544592,"TRY":29.776348,"TTD":7.21287,"TWD":34.286819,"TZS":2646.08268,"UAH":38.806261,"UGX":3985.470254,"USD":1.058857,"UYU":42.331887,"UZS":12948.283436,"VEF":3698203.324439,"VES":36.990282,"VND":26003.398929,"VUV":129.95837,"WST":2.917456,"XAF":655.21849,"XAG":0.046374,"XAU":0.000537,"XCD":2.861613,"XDR":0.809288,"XOF":655.21849,"XPF":119.597563,"YER":265.084963,"ZAR":20.209389,"ZMK":9530.977641,"ZMW":23.026047,"ZWL":340.951374}};
		this.setState({ exchangeRateData: data })
	}

    render() {
		
        const { exchangeRateData } = this.state;
		const weatherImgStyle = {
			'background-color':'#1b5397',
            'border-radius': '15px',
            'padding': '5px'
		};
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Exchange Rate - (Base: EUR)</h5>
                <div className="card-body">
					Time: {exchangeRateData.timestamp}<br/>
                    {
                        Object.keys(exchangeRateData.rates).map((key, i) => {
							return (<div>{key} - {exchangeRateData.rates[key]}</div>);
						})
                    }
                </div>
            </div>
        );
    }
}

export default ExchangeRate; 

