import { observable, action } from 'mobx'

export class Store {
  @observable
  public readonly userInfo = {
    username: '',
    password: '',
    token: '',
    logged: true
  }

  @action
  public setToken(token: string) {
    this.userInfo.token = token
    this.userInfo.logged = true
  }

  @action
  public removeToekn() {
    this.userInfo.token = ''
    this.userInfo.logged = false
  }
}

export default new Store()
