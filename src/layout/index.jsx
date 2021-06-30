import React, { Component } from 'react'
import { Route, Redirect, Link, Switch } from "react-router-dom";
import { Button, Menu, Dropdown } from 'antd';
import { MenuUnfoldOutlined, HomeOutlined, UserOutlined, ProfileOutlined, WhatsAppOutlined } from '@ant-design/icons';
import HomePage from '../pages/HomePage'
import Experience from '../pages/Experience'
import WheelWorks from '../pages/WheelWorks'
import ContactWay from '../pages/ContactWay'
import './index.scss'

export default class Layout extends Component {
  state = {
    constantRoutes: [
      {
        id: '1',
        path: '/pages/HomePage',
        Component: HomePage,
        title: '首页',
        icon: <HomeOutlined />,

      },
      {
        id: '2',
        path: '/pages/Experience',
        Component: Experience,
        title: '关于我',
        icon: <UserOutlined />,
      },
      {
        id: '3',
        path: '/pages/WheelWorks',
        Component: WheelWorks,
        title: '作品集',
        icon: <ProfileOutlined />,

      },
      {
        id: '4',
        path: '/pages/ContactWay',
        Component: ContactWay,
        title: '联系我',
        icon: <WhatsAppOutlined />,

      },
    ]
  }
  render() {
    const { constantRoutes } = this.state;
    const menu = (
      <Menu>
        {
          constantRoutes.map(element => {
            return (
              // <Route key={element.id} path={element.path} component={element.Component} />
              <Menu.Item>
                <Link key={element.id} to={element.path}>{element.icon}</Link>
              </Menu.Item> 

            )
          })
        }
      </Menu>
    );
    return (
      <div className="layout">
        {/* navBar */}
        <div className="navBar">
          {
            constantRoutes.map(element => {
              return (
                <Link key={element.id} to={element.path}>{element.icon}{element.title}</Link>
              )
            })
          }
        </div>
        {/* pages */}
        <div className="pages">
          <Switch>
            {
              constantRoutes.map(element => {
                return (
                  <Route key={element.id} path={element.path} component={element.Component} />
                )
              })
            }
            <Redirect to="/pages/HomePage" />
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
