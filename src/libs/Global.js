import storage from "./Storage";
class Global {
  //全局存储器
  static globalStorage() {
    global.globalStorage = storage;
  }
  // 全局accessToken
  static globalAccessToken(access_token) {
    global.globalAccessToken = access_token;
  }

  static globalUserInfo(userInfo) {
    global.globalUserInfo = userInfo;
  }
}
export default Global;
