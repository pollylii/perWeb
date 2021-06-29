import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button, Menu, Dropdown  } from 'antd';
import { MenuUnfoldOutlined, HomeOutlined,UserOutlined,ProfileOutlined,WhatsAppOutlined  } from '@ant-design/icons';
import './index.scss'

class fixedBtn extends Component {	
	
	render() {
		const  menu = (
			<Menu>
			  <Menu.Item>
			  	<HomeOutlined />
			  </Menu.Item>
			  <Menu.Item>
			  	<UserOutlined />
			  </Menu.Item>
			  <Menu.Item>
			  	<ProfileOutlined />
			  </Menu.Item>
			  <Menu.Item >
			  	<WhatsAppOutlined />
			  </Menu.Item>
			</Menu>
		  );
		return (
			<div className="fixedBtn">
				 <Dropdown overlay={menu} placement="topLeft" arrow>
					<Button shape="circle" icon={<MenuUnfoldOutlined />} />
				</Dropdown>
			</div>
		)
	}
}

export default connect(
	state => ({
		
	}),//映射状态
	{}//映射操作状态的方法
)(fixedBtn)
