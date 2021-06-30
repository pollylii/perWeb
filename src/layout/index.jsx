import React, { Component } from 'react'
import {Route, Redirect,Link,Switch  } from "react-router-dom";
import { Button, Menu, Dropdown  } from 'antd';
import { MenuUnfoldOutlined, HomeOutlined,UserOutlined,ProfileOutlined,WhatsAppOutlined  } from '@ant-design/icons';
import HomePage from '../pages/HomePage'
import Experience from '../pages/Experience'
import WheelWorks from '../pages/WheelWorks'
import ContactWay from '../pages/ContactWay'
import './index.scss'

export default class NavBar extends Component {
	state = {
		
	}
    render() {
        const  menu = (
            <Menu>
              <Menu.Item>
                <Link to="/pages/HomePage"><HomeOutlined /></Link> 
              </Menu.Item>
              <Menu.Item>
                <Link to="/pages/Experience"><UserOutlined /></Link> 
              </Menu.Item>
              <Menu.Item>
                <Link to="/pages/WheelWorks"><ProfileOutlined /></Link>
              </Menu.Item>
              <Menu.Item >
                <Link to="/pages/ContactWay"><WhatsAppOutlined /></Link>
              </Menu.Item>
            </Menu>
          );
        return (
            <div className="layout">
                {/* navBar */}
                <div className="navBar">
                    <Link to="/pages/HomePage">首页</Link>
					<Link to="/pages/Experience">关于我</Link>
					<Link to="/pages/WheelWorks">作品集</Link>
					<Link to="/pages/ContactWay">联系我</Link>
                </div>
                {/* pages */}
                <div className="pages">
                    <Switch>
                        <Route path="/pages/HomePage" component={HomePage}/>
                        <Route path="/pages/Experience" component={Experience}/>
                        <Route path="/pages/WheelWorks" component={WheelWorks}/>
                        <Route path="/pages/ContactWay" component={ContactWay}/>
                        <Redirect to="/pages/HomePage"/>
                    </Switch>
                </div>
                {/* fixedBtn */}
                <div className="fixedBtn">
                    <Dropdown overlay={menu} placement="topLeft" arrow>
                        <Button shape="circle" icon={<MenuUnfoldOutlined />} />
                    </Dropdown>
                </div>
            </div>
        )
    }
}
