import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import DataTable from './components/datatable/DataTable';
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
