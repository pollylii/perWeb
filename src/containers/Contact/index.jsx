import React, { Component } from 'react'
import { WechatOutlined,QqOutlined,GithubOutlined } from '@ant-design/icons';
import './index.scss'
export default class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<WechatOutlined />
				<QqOutlined />
				<GithubOutlined />
			</div>
		)
	}
}
