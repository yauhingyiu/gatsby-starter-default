import * as React from "react"
import { useState, useEffect } from 'react'; 
import { Link, useStaticQuery, graphql } from 'gatsby'

//import { useAirtable } from  "../../components/airtable/use-airtable"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

function AirtableReadUsers(props)
{
	const [exchangeRateData, setExchangeRateData] = useState({
        records:[]
    }); 
	
	useEffect(() => { 
        console.log('Component mounted'); 
        componentDidMount();
    }, []); 
	
    const componentDidMount = async () => {
		
		//const { tokens } = useAirtable();
		//console.log('readusers postdata ', this.props);
		
		const response = await fetch('https://api.airtable.com/v0/appMZcSux6RuxBm2i/users', { 
            method: 'GET', 
            headers: new Headers({
                'Authorization': 'Bearer '+props.token, 
                //'Content-Type': 'application/json'
            })
        });
		const data = await response.json();
        setExchangeRateData( data );
	}

    const weatherImgStyle = {
		'background-color':'#1b5397',
		'border-radius': '15px',
		'padding': '5px'
	};
	
	return (
		<div>
			<h5>Users</h5>
			<div >
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

export default AirtableReadUsers; 

