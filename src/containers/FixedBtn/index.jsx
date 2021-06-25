import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import './index.scss'

class fixedBtn extends Component {
	render() {
		return (
			<div className="fixedBtn">
				 <Button shape="circle" icon={<MenuUnfoldOutlined />} />
			</div>
		)
	}
}

export default connect(
	state => ({
		
	}),//映射状态
	{}//映射操作状态的方法
)(fixedBtn)
