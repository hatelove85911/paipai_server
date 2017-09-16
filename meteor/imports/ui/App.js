import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    );
  }
}
