import React, { Component } from 'react'
import {Route, Redirect,Link,Switch  } from "react-router-dom";
import HomePage from '../../pages/HomePage'
import Experience from '../../pages/Experience'
import WheelWorks from '../../pages/WheelWorks'
import ContactWay from '../../pages/ContactWay'
import './index.scss'

export default class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <div className="titles">
                    <Link to="/pages/HomePage">首页</Link>
					<Link to="/pages/Experience">关于我</Link>
					<Link to="/pages/WheelWorks">作品集</Link>
					<Link to="/pages/ContactWay">联系我</Link>
                </div>
                <div>
                    <Switch>
                        <Route path="/pages/HomePage" component={HomePage}/>
                        <Route path="/pages/Experience" component={Experience}/>
                        <Route path="/pages/WheelWorks" component={WheelWorks}/>
                        <Route path="/pages/ContactWay" component={ContactWay}/>
                        <Redirect to="/pages/HomePage"/>
                    </Switch>
                </div>
            </div>
        )
    }
}
