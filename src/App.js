import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './component/login'
import Home from './component/home'
import {  HashRouter as Router,  Route,} from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path='/' component={Login}></Route>
        <Route path='/home' component={Home}></Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
