import Request from "../libs/Request";
import Api from "../libs/Api";
import Global from "../libs/Global"
export default class profileModel {
  // 获取message数据,带缓存策略
  static login = code => {
    let qu = {
      client_id: "8042b87ac34d27d5b700",
      client_secret: "93d6dbb97d8340fb56ce4a51b4b08e48d663f50a",
      code: code
    };
    console.log(qu);
    return new Promise((resolve, reject) => {
      Request.post({ url: Api.login, data: qu })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  static getUserInfo = accrssToken => {
    return new Promise((resolve, reject) => {
      Request.get({ url: Api.userInfo, data: { access_token: accrssToken } })
        .then(data => {
          // 登录并保存登录信息
          globalStorage.save({
            key: "userInfo",
            data: data,
            expires: 1000 * 3600 * 24 * 365 //一年
          });
          globalStorage.save({
            key: "accrssToken",
            data: {"access_token":accrssToken},
            expires: 1000 * 3600 * 24 * 365 //一年
          });
          Global.globalAccessToken(accrssToken)
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
}
