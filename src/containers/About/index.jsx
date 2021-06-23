import React, { Component } from 'react'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import './index.css'

//定义UI组件
class About extends Component {
	
	render() {
		//console.log('UI组件接收到的props是',this.props);
		return (
			<div className="about">
				About
			</div>
		)
	}
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
	state => ({
	}),
	{}
)(About)

