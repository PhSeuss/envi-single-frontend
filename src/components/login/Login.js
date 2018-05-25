import React, { Component } from 'react';
import './Login.css';
import { inject, observer } from 'mobx-react';

@inject('AuthStore')
@observer
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
    fetch('http://envihcm.com/api/user/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => this.props.AuthStore.authenticateUser(res.id))
      .catch(err => console.log(err.headers));
  }
  render() {
    return (
      <div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in</p>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group has-feedback">
              <input
                name="user_name"
                type="text"
                className="form-control"
                placeholder="User Name"
                value={this.state.user_name}
                onChange={this.handleChange}
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>

            <div className="checkbox icheck">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block btn-flat"
            >
              Sign In
            </button>
          </form>
          <br />
          <p>
            Problem with login? <a>Contact us</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
