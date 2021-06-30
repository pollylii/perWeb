import React, { Component } from 'react'
import Slideshow from '../../containers/Slideshow'
import About from '../../containers/About'
import Category from '../../containers/Category'
import Contact from '../../containers/Contact'
import "./index.scss"

export default class HomePage extends Component {
	render() {
		return (
			<div className="homePage">
				<Slideshow />
				<About />
				<Category />
				<Contact />
			</div>
		)
	}
}
