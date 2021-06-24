import React, { Component } from 'react'
import NavBar from './containers/NavBar'
import FixedBtn from './containers/FixedBtn'
import Home from './containers/Home'
import About from './containers/About'
import "antd/dist/antd.css";//引入样式
import "./index.css"

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<FixedBtn />
				<NavBar />
				<Home />
				<About />
			</div>
		)
	}
}
