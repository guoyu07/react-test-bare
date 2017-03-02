import React, { Component } from 'react';
export default class Hello extends Component{
	name;
	constructor(){
		super()
		console.log(this.props.name);
		this.name = this.props.name;
	}
	render(){
		return(<div>Hello {this.name}</div>)
	}
}