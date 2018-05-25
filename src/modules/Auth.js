class Auth {
  static authenticateUser(user_id) {
    sessionStorage.setItem('user_id', user_id);
  }

  static isUserAuthenticated() {
    return sessionStorage.getItem('user_id') != null;
  }

  static deauthenticateUser() {
    sessionStorage.removeItem('user_id');
  }

  static getUserId() {
    return sessionStorage.getItem('user_id');
  }
}

export default Auth;
