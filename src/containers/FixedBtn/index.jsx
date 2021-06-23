import React, { Component } from 'react'
import {connect} from 'react-redux'
import './index.css'

class fixedBtn extends Component {
	render() {
		return (
			<div className="fixedBtn">
				fixedBtn
			</div>
		)
	}
}

export default connect(
	state => ({
		
	}),//映射状态
	{}//映射操作状态的方法
)(fixedBtn)
