import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import SideBar from './sidebar/SideBar';
import Contact from './contact/Contact';
import Login from './login/Login';
import DataTable from './datatable/DataTable';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <div className="wrapper">
            <SideBar />
            <Header />
            <div className="content">
              <Route exact path="/datatable" component={DataTable} />
              <Route exact path="/contact" component={Contact} />
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
