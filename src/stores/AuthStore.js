import { observable, action, computed } from 'mobx';

class AuthStore {
  //   constructor() {
  //     this.user_id = this.getUserId();
  //   }
  @observable user_id = sessionStorage.getItem('user_id');

  @action
  authenticateUser = user_id => {
    sessionStorage.setItem('user_id', user_id);
    this.user_id = user_id;
  };

  @action
  deauthenticateUser = () => {
    sessionStorage.removeItem('user_id');
    this.user_id = sessionStorage.getItem('user_id');
  };

  @computed
  get isUserAuthenticated() {
    console.log(this.user_id);
    return this.user_id != null;
  }

  @computed
  get getUserId() {
    return this.user_id;
  }
}

export default new AuthStore();
