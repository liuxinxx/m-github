export default class Api {
  static host = 'https://github.com';
  static apiHost = 'https://api.github.com'
  static baseUrl = Api.host + "/api/v1";
  static authorize = Api.host + '/login/oauth/authorize'
  static login = Api.host + '/login/oauth/access_token'
  static userInfo = Api.apiHost + '/user'
}
