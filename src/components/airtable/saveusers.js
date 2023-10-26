import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

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
                'Authorization': 'Bearer patiUNqn39Bm9TZc9.17ceec11827dedb7d6905f18c893d8d645da839d70334eddb3ae1eef003916bd', 
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
		return (
		<form onSubmit={this.handleSubmit}>
		<label>
		<div>
		{
			(this.state.postResponse>0)? (this.state.postResponse==200?'Saved':'Error occured'):''
		}
		</div>
		</label>
		<br/>
		<label>
		Name:
		<input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
		</label>
		<br/>
		<label>
		Chi First Name:
		<input type="text" name="chiFirstName" value={this.state.chiFirstName} onChange={this.handleChange} />
		</label>
		<br/>
		<label>
		Chi Last Name:
		<input type="text" name="chiLastName" value={this.state.chiLastName} onChange={this.handleChange} />
		</label>
		<br/>
		<label>
		Eng First Name:
		<input type="text" name="engFirstName" value={this.state.engFirstName} onChange={this.handleChange} />
		</label>
		<br/>
		<label>
		Eng Last Name:
		<input type="text" name="engLastName" value={this.state.engLastName} onChange={this.handleChange} />
		</label>
		<br/>
		<label>
		<input type="submit" value="Submit" />
		</label>
		<br/>
		</form>
		);
	}
}

export default AirtableSaveUsers; 

