import * as React from "react"
import { useState, useEffect } from 'react'; 
import { Link, useStaticQuery, graphql } from 'gatsby'

//import { useAirtable } from  "../../components/airtable/use-airtable"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

function AirtableSaveUsers(props, children)
{
	const [name, setName] = useState('');
	const [chiFirstName, setChiFirstName] = useState('bb');
	const [chiLastName, setChiLastName] = useState('cc');
	const [engFirstName, setEngFirstName] = useState('dd');
	const [engLastName, setEngLastName] = useState('ee');
	const [postResponseJson, setPostResponseJson] = useState({});
	const [postResponse, setPostResponse] = useState(0);
	
	const handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	const handleSubmit = (event) => {
		console.log(
			'chi name', chiFirstName,
			'chi name', chiLastName,
			'eng name', engFirstName,
			'eng name', engLastName
		);
		event.preventDefault();
		postData();
		props.triggerReloadUserlist();
	}
	
	const postData = async() => {
		
		//const { tokens } = useAirtable();
		//console.log('saveusers postdata ', this.props);
		console.log('AirtableSaveUsers componentDidMount', new Date()); 
		
		console.log( JSON.stringify({
			"records": [
			{
				"fields": {
					'Name': engFirstName + ', ' + engLastName,
					'Chi First Name': chiFirstName,
					'Chi Last Name': chiLastName,
					'Eng First Name': engFirstName,
					'Eng Last Name': engLastName
				}
			}
			]}) );
		const response = await fetch('https://api.airtable.com/v0/appMZcSux6RuxBm2i/users', { 
            method: 'POST', 
            headers: new Headers({
                'Authorization': 'Bearer '+props.token, 
                'Content-Type': 'application/json'
            }),
			body: JSON.stringify({
			"records": [
			{
				"fields": {
					'Name': engFirstName + ', ' + engLastName,
					'Chi First Name': chiFirstName,
					'Chi Last Name': chiLastName,
					'Eng First Name': engFirstName,
					'Eng Last Name': engLastName
				}
			}
			]})
        });
		const data = await response.json();
        setPostResponseJson( data );
		setPostResponse( response.status*1 );
	}

	
	
	const div_flex_container1 = {
		'display':'flex',
		'width':'400'
	};
	
	const div_flex1 = {
		'flex':'1',
		'margin':'5px 20px'
	};
	
	const errmsg = {
		'border':'#ff0000 solid 3px',
		'borderRadius':'20px',
		'background':'#fff',
		'color':'#ff0000',
		'padding':'10px',
		'margin':'5px 20px'
	};
	
	const msg = {
		'border':'#229922 solid 3px',
		'borderRadius':'20px',
		'background':'#fff',
		'color':'#229922',
		'padding':'10px',
		'margin':'5px 20px'
	};
		
	return (
		<form onSubmit={handleSubmit}>
		
		{
			postResponse>0?
			<div style={div_flex_container1}>
			{
				(postResponse==200?(<div style={{...div_flex1,...msg}}>Saved</div>):'')
			}
			{
				(postResponse>0 && postResponse!=200?(<div style={{...div_flex1,...errmsg}}>Error occured</div>):'')
			}
			</div>:''
		}
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Name:
			</div>
			<div style={div_flex1}>
			{engFirstName}, {engLastName}
			</div>
		</div>
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Chi First Name:
			</div>
			<div style={div_flex1}>
			<input type="text" name="chiFirstName" value={chiFirstName} onChange={handleChange} />
			</div>
		</div>
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Chi Last Name:
			</div>
			<div style={div_flex1}>
			<input type="text" name="chiLastName" value={chiLastName} onChange={handleChange} />
			</div>
		</div>
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Eng First Name:
			</div>
			<div style={div_flex1}>
			<input type="text" name="engFirstName" value={engFirstName} onChange={handleChange} />
			</div>
		</div>
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Eng Last Name:
			</div>
			<div style={div_flex1}>
			<input type="text" name="engLastName" value={engLastName} onChange={handleChange} />
			</div>
		</div>
		<div style={div_flex_container1}>
			<div style={{...div_flex1,'text-align':'right'}}>
			<input type="submit" value="Submit"  />
            </div>
		</div>
		</form>
	);
	
}

export default AirtableSaveUsers; 
