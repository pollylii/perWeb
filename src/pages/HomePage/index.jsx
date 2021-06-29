import React, { Component } from 'react'
import Home from '../../containers/Home'
import About from '../../containers/About'
import Category from '../../containers/Category'
import "./index.scss"

export default class HomePage extends Component {
	render() {
		return (
			<div className="homePage">
				<Home />
				<About />
				<Category />
				<About />
			</div>
		)
	}
}
