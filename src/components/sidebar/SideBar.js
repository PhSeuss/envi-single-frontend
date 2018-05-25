import React from 'react';
import './SideBar.css';
import { LinkContainer } from 'react-router-bootstrap';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="nav-side-menu">
        <div className="brand">Menu chinh</div>
        <i
          className="fa fa-bars fa-2x toggle-btn"
          data-toggle="collapse"
          data-target="#menu-content"
        />

        <div className="menu-list">
          <ul id="menu-content" className="menu-content collapse out">
            <LinkContainer to="/dashboard">
              <li>
                <a>
                  <i className="fa fa-desktop" /> So lieu thuc
                </a>
              </li>
            </LinkContainer>
            <LinkContainer to="/datatable">
              <li>
                <a>
                  <i className="fa fa-table" /> Bang du lieu
                </a>
              </li>
            </LinkContainer>
            <LinkContainer to="/chart">
              <li>
                <a>
                  <i className="fa fa-pie-chart" /> Bieu do
                </a>
              </li>
            </LinkContainer>
            <LinkContainer to="/setting">
              <li>
                <a>
                  <i className="fa fa-gear" /> Cai dat
                </a>
              </li>
            </LinkContainer>
            <LinkContainer to="/contact">
              <li>
                <a>
                  <i className="fa fa-envelope" /> Lien he
                </a>
              </li>
            </LinkContainer>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
