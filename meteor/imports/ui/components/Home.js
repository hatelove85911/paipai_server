import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import PaishouGuanli from './PaishouGuanli'
import PaishouGuanliContainer from './PaishouGuanliContainer'
import BiaoshuGuanli from './BiaoshuGuanli'
import BidGuanli from './BidGuanli'
import { Menu } from 'antd';

export default class Home extends Component {
  componentWillMount() {
    if (!Meteor.userId()) {
      const {history} = this.props
      history.push('/login')
      return
    }
  }
  render() {

    return (
      <div className="Home">
        <Menu
          mode="horizontal"
        >
          <Menu.Item key="paishouguanli">
            <Link to="/paishouguanli">拍手管理</Link>
          </Menu.Item>
          <Menu.Item key="biaoshuguanli">
            <Link to="/biaoshuguanli">标书管理</Link>
          </Menu.Item>
          <Menu.Item key="bidguanli">
            <Link to="/bidguanli">拍牌管理</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route exact path="/" component={PaishouGuanliContainer}/>
          <Route exact path="/paishouguanli" component={PaishouGuanliContainer}/>
          <Route exact path="/biaoshuguanli" component={BiaoshuGuanli}/>
          <Route exact path="/bidguanli" component={BidGuanli}/>
        </Switch>
      </div>
    );
  }
}
