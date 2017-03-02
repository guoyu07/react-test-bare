import React, { Component } from 'react';
export default class Hello extends Component{
	name;
	constructor(props){
		super(props)
		console.log(props.name);
		this.name = props.name;
	}
	render(){
		return(<div>Hello {this.name}</div>)
	}
}