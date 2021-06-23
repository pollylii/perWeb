import React, { Component } from 'react'
import './index.css'

export default class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <div className="titles">
                    <div id="homepage">首页</div>
                    <div id="aboutMe">关于我</div>
                    <div id="workshow">作品集</div>
                    <div id="reachMe">联系我</div>
                </div>
            </div>
        )
    }
}
