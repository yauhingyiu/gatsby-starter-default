import * as React from "react"
import { useState, useEffect } from 'react'; 
import { Link, useStaticQuery, graphql } from 'gatsby'

//import { useAirtable } from  "../../components/airtable/use-airtable"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

function AirtableReadUsers(props, children)
{
	const [exchangeRateData, setExchangeRateData] = useState({
        records:[]
    }); 
	
	useEffect(() => { 
        //console.log('AirtableReadUsers useEffect'); 
        componentDidMount();
    }, [props.reloadInd]); 
	
    const componentDidMount = async () => {
		
		//const { tokens } = useAirtable();
		console.log('AirtableReadUsers componentDidMount', new Date()); 
		
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
			<h5>Users {props.num}</h5>
			<div >
				<table>
                <thead>
				<tr>
					<th>Id</th>
					<th>Created on</th>
					<th>Name</th>
					<th>Chi Last Name</th>
					<th>Chi First Name</th>
					<th>Eng First Name</th>
					<th>Eng Last Name</th>
				</tr>
                </thead>
                <tbody>
				{
					exchangeRateData.records.map(
						(base, i) => (
							
							<tr>
								<td onClick={()=>{(props.loadRecord)?props.loadRecord(base):()=>{} }}>{base.id}</td>
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
                </tbody>
				</table>
			</div>
		</div>
	);
}

export default AirtableReadUsers; 

