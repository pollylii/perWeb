import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import "./index.scss"

export default class MyNavLink extends Component {
	render() {
		// console.log(this.props);
		return (
			<NavLink activeClassName="customStyle" className="list-group-item" {...this.props}/>
		)
	}
}