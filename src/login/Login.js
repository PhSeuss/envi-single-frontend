import React from 'react';
import './Login.css';
import { LinkContainer } from 'react-router-bootstrap';

const Login = () => {
  return (
    <div>
      <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>

        <form>
          <div class="form-group has-feedback">
            <input type="email" class="form-control" placeholder="User Name" />
            <span class="glyphicon glyphicon-envelope form-control-feedback" />
          </div>
          <div class="form-group has-feedback">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
            />
            <span class="glyphicon glyphicon-lock form-control-feedback" />
          </div>

          <div class="checkbox icheck">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
          </div>
          <LinkContainer to="/">
            <button type="submit" class="btn btn-primary btn-block btn-flat">
              Sign In
            </button>
          </LinkContainer>
        </form>
        <br />
        <p>
          Problem with login? <a href="">Contact us</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
