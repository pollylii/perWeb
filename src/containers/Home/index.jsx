import React, { Component } from 'react'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import './index.css'

//定义UI组件
class Home extends Component {
	
	render() {
		return (
			<div className="homepage">
				Home1
				
			</div>
		)
	}
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
	state => ({
	}),
	{}
)(Home)

