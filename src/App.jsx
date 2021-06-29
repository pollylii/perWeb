import React, { Component } from 'react'
import Layout from './layout'
import "antd/dist/antd.css";//引入样式
import "./index.scss"

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<Layout />
			</div>
		)
	}
}
