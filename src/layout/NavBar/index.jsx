import React, { Component } from 'react'
import './index.scss'

export default class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <div className="titles">
                    <span id="homepage">首页</span>
                    <span id="aboutMe">关于我</span>
                    <span id="workshow">作品集</span>
                    <span id="reachMe">联系我</span>
                </div>
            </div>
        )
    }
}
