import * as React from "react"
import { useState, useEffect } from 'react'; 
import { Link, useStaticQuery, graphql } from 'gatsby'

//import { useAirtable } from  "../../components/airtable/use-airtable"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

function AirtableSaveUsers(props, children)
{
	const [state, setState] = useState({ 
        id: '',
		chiFirstName: 'bb', 
		chiLastName: 'cc',
		engFirstName: 'dd',
		engLastName: 'ee',
		postResponseJson: {},
		postResponse: 0,
	});
	
    useEffect(() => { 
        console.log('AirtableSaveUsers useEffect', new Date()); 
        if(props.rec && props.rec.fields)
        {
            setState(prevState => ({ ...prevState,
                id: props.rec.id,
                chiFirstName: props.rec.fields['Chi First Name'], 
                chiLastName: props.rec.fields['Chi Last Name'], 
                engFirstName: props.rec.fields['Eng First Name'], 
                engLastName: props.rec.fields['Eng Last Name'],  }));
        }
        
    }, [props.rec]); 

	const handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
        //const { name, value } = event.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	}

	const handleSubmit = (event) => {
		console.log(
			'handleSubmit', state
		);
		event.preventDefault();
		postData();
	}
	
	const postData = async() => {
		
		//const { tokens } = useAirtable();
		//console.log('saveusers postdata ', this.props);
		
		var mydata = JSON.stringify({
			"records": [
			{
				"fields": {
					'Name': state.engFirstName + ', ' + state.engLastName,
					'Chi First Name': state.chiFirstName,
					'Chi Last Name': state.chiLastName,
					'Eng First Name': state.engFirstName,
					'Eng Last Name': state.engLastName
				},
				id: state.id
			}
			]});
			
		var form_method = (state.id=='')? 'POST':'PATCH';
		console.log( 'postdata', mydata );
		const response = await fetch('https://api.airtable.com/v0/appMZcSux6RuxBm2i/users', { 
            method: 'POST', 
            headers: new Headers({
                'Authorization': 'Bearer '+props.token, 
                'Content-Type': 'application/json'
            }),
			body: mydata
        });
		const data = await response.json();
        setState(prevState => ({ ...prevState, postResponseJson: data, postResponse: response.status*1 }));
		props.triggerReloadUserlist();
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
			state.postResponse>0?
			<div style={div_flex_container1}>
			{
				(state.postResponse==200?(<div style={{...div_flex1,...msg}}>Saved</div>):'')
			}
			{
				(state.postResponse>0 && state.postResponse!=200?(<div style={{...div_flex1,...errmsg}}>Error occured</div>):'')
			}
			</div>:''
		}
        <div style={div_flex_container1}>
			<div style={div_flex1}>
			ID:
			</div>
			<div style={div_flex1}>
			{state.id}
			</div>
		</div>
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Name:
			</div>
			<div style={div_flex1}>
			{state.engFirstName}, {state.engLastName}
			</div>
		</div>
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Chi First Name:
			</div>
			<div style={div_flex1}>
			<input type="text" name="chiFirstName" value={state.chiFirstName} onChange={handleChange} />
			</div>
		</div>
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Chi Last Name:
			</div>
			<div style={div_flex1}>
			<input type="text" name="chiLastName" value={state.chiLastName} onChange={handleChange} />
			</div>
		</div>
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Eng First Name:
			</div>
			<div style={div_flex1}>
			<input type="text" name="engFirstName" value={state.engFirstName} onChange={handleChange} />
			</div>
		</div>
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Eng Last Name:
			</div>
			<div style={div_flex1}>
			<input type="text" name="engLastName" value={state.engLastName} onChange={handleChange} />
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
