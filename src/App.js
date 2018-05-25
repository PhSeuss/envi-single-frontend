import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import DataTable from './components/datatable/DataTable';
import { inject, observer } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

@inject('AuthStore')
@observer
class App extends Component {
  render() {
    const { isUserAuthenticated } = this.props.AuthStore;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            render={() =>
              isUserAuthenticated ? <Redirect to="/" /> : <Login />
            }
          />
          <Route
            path="/"
            render={() =>
              !isUserAuthenticated ? <Redirect to="/login" /> : <PrivateRoute />
            }
          />
        </Switch>
      </Router>
    );
  }
}

const PrivateRoute = () => {
  return (
    <div className="wrapper">
      <SideBar />
      <Header />
      <div className="content">
        <Route exact path="/datatable" component={DataTable} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/dashboard" />
      </div>
    </div>
  );
};

export default App;
