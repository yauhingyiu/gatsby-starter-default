import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from "../../components/layout"
import Seo from "../../components/seo"

class AirtableReadUsers extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            exchangeRateData: {
				records:[]
			}
        };
    }

    async componentDidMount() {
		const token_readdata = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					airtable {
						tokens {
							readdata
						}
					}
				}
			}
		}
		`);
		
		const response = await fetch('https://api.airtable.com/v0/appMZcSux6RuxBm2i/users', { 
            method: 'GET', 
            headers: new Headers({
                'Authorization': 'Bearer '+token_readdata, 
                //'Content-Type': 'application/json'
            })
        });
		const data = await response.json();
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
                <h5 className="card-header">Users</h5>
                <div className="card-body">
					<br/>
                    <table>
                    <tr>
						<th>Id</th>
						<th>Created on</th>
						<th>Name</th>
						<th>Chi Last Name</th>
						<th>Chi First Name</th>
						<th>Eng First Name</th>
						<th>Eng Last Name</th>
                    </tr>
                    {
						exchangeRateData.records.map(
							(base, i) => (
								
								<tr>
                                    <td>{base.id}</td>
                                    <td>{base.createdTime}</td>
                                    <td>{base.fields['Name']}</td>
                                    <td>{base.fields['Chi Last Name']}</td>
                                    <td>{base.fields['Chi First Name']}</td>
                                    <td>{base.fields['Eng First Name']}</td>
                                    <td>{base.fields['Eng Last Name']}</td>
                                </tr>
							)
						)
					}
                    </table>
                </div>
            </div>
        );
    }
}

export default AirtableReadUsers; 

