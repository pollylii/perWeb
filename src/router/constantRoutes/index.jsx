import React, {Component} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage'
import Experience from '../../pages/Experience'
import WheelWorks from '../../pages/WheelWorks'
import ContactWay from '../../pages/ContactWay'

export default class constantRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/pages/HomePage" component={HomePage}/>
        <Route path="/pages/Experience" component={Experience}/>
        <Route path="/pages/WheelWorks" component={WheelWorks}/>
        <Route path="/pages/ContactWay" component={ContactWay}/>
        <Redirect to="/pages/HomePage"/>
    </Switch>
    )
  }
}
