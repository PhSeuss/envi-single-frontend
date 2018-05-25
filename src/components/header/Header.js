import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">WebSiteName</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a>
                <span className="glyphicon glyphicon-user" /> Sign Up
              </a>
            </li>
            <li>
              <LinkContainer to="/login">
                <a>
                  <span className="glyphicon glyphicon-log-in" /> Login
                </a>
              </LinkContainer>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
