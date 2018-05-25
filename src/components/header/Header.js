import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './Header.css';

@inject('AuthStore')
@observer
class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(e) {
    this.props.AuthStore.deauthenticateUser();
  }
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="">
                  <span className="glyphicon glyphicon-user" /> Profile
                </a>
              </li>
              <li>
                <a href="" onClick={this.handleLogout}>
                  <span className="glyphicon glyphicon-log-in" /> Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
