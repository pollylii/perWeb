import React, { Component } from 'react'
import NavBar from './NavBar'
import FixedBtn from './FixedBtn'
import Pages from '../pages'
import Router from '../router'

export default class Layout extends Component {
	render() {
		return (
			<div className="layout">
                <NavBar />
                <FixedBtn />
                <Router />
			</div>
		)
	}
}
