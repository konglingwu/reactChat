import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import './App.css';
import RouterView from './router/index';//引入路由管理js
class App extends Component {
  render() {
    return (
        <Router>
            <RouterView ></RouterView>
        </Router>
    );
  }
}

export default App;
