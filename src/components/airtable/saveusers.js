import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

//import { useAirtable } from  "../../components/airtable/use-airtable"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

class AirtableSaveUsers extends React.Component 
{
    constructor(props) {
		super(props);
		this.state = {
			name: 'aa',
			chiFirstName: 'bb',
			chiLastName: 'cc',
			engFirstName: 'dd',
			engLastName: 'ee',
			postResponseJson: {},
			postResponse: 0
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		console.log('name ', this.state.name, 
			'chi name', this.state.chiFirstName,
			'chi name', this.state.chiLastName,
			'eng name', this.state.engFirstName,
			'eng name', this.state.engLastName
		);
		event.preventDefault();
		this.postData();
	}
	
	async postData() {
		
		//const { tokens } = useAirtable();
		console.log('saveusers postdata ', this.props);
		
		console.log( JSON.stringify({
			"records": [
			{
				"fields": {
					'Name': this.state.name,
					'Chi First Name': this.state.chiFirstName,
					'Chi Last Name': this.state.chiLastName,
					'Eng First Name': this.state.engFirstName,
					'Eng Last Name': this.state.engLastName
				}
			}
			]}) );
		const response = await fetch('https://api.airtable.com/v0/appMZcSux6RuxBm2i/users', { 
            method: 'POST', 
            headers: new Headers({
                'Authorization': 'Bearer '+this.props.token, 
                'Content-Type': 'application/json'
            }),
			body: JSON.stringify({
			"records": [
			{
				"fields": {
					name: this.state.name,
					chiFirstName: this.state.chiFirstName,
					chiLastName: this.state.chiLastName,
					engFirstName: this.state.engFirstName,
					engLastName: this.state.engLastName
				}
			}
			]})
        });
		const data = await response.json();
        this.setState({ 
			postResponseJson: data,
			postResponse: response.status*1
		})
	}

	render() {
		
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
			'border-radius':'20px',
			'background':'#fff',
			'color':'#ff0000',
			'padding':'10px',
			'margin':'5px 20px'
		};
		
		const msg = {
			'border':'#229922 solid 3px',
			'border-radius':'20px',
			'background':'#fff',
			'color':'#229922',
			'padding':'10px',
			'margin':'5px 20px'
		};
		
		return (
		<form onSubmit={this.handleSubmit}>
		
		{
			this.state.postResponse>0?
			<div style={div_flex_container1}>
			{
				(this.state.postResponse==200?(<div style={{...div_flex1,...msg}}>Saved</div>):'')
			}
			{
				(this.state.postResponse>0 && this.state.postResponse!=200?(<div style={{...div_flex1,...errmsg}}>Error occured</div>):'')
			}
			</div>:''
		}
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Name:
			</div>
			<div style={div_flex1}>
			<input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
			</div>
		</div>
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Chi First Name:
			</div>
			<div style={div_flex1}>
			<input type="text" name="chiFirstName" value={this.state.chiFirstName} onChange={this.handleChange} />
			</div>
		</div>
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Chi Last Name:
			</div>
			<div style={div_flex1}>
			<input type="text" name="chiLastName" value={this.state.chiLastName} onChange={this.handleChange} />
			</div>
		</div>
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Eng First Name:
			</div>
			<div style={div_flex1}>
			<input type="text" name="engFirstName" value={this.state.engFirstName} onChange={this.handleChange} />
			</div>
		</div>
		<div style={div_flex_container1}>
			<div style={div_flex1}>
			Eng Last Name:
			</div>
			<div style={div_flex1}>
			<input type="text" name="engLastName" value={this.state.engLastName} onChange={this.handleChange} />
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
}

export default AirtableSaveUsers; 
