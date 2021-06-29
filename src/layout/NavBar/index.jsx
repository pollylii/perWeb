import React, { Component } from 'react'
import MyNavLink from '../../containers/MyNavLink'
import './index.scss'

export default class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <div className="titles">
                    {/* <span id="homepage">首页</span>
                    <span id="aboutMe">关于我</span>
                    <span id="workshow">作品集</span>
                    <span id="reachMe">联系我</span> */}
                    <MyNavLink to="/HomePage">首页</MyNavLink>
					<MyNavLink to="/Experience">关于我</MyNavLink>
					<MyNavLink to="/WheelWorks">作品集</MyNavLink>
					<MyNavLink to="/ContactWay">联系我</MyNavLink>
                </div>
            </div>
        )
    }
}
