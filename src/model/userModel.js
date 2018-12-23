import Request from "../libs/Request";
import Api from "../libs/Api";
export default class userModel {
  static updateUserInfo = body => {
    return new Promise((resolve, reject) => {
      console.log(body)
      let headers = { 
        Authorization:`token ${globalAccessToken}`,
        "X-OAuth-Scopes": 'admin:repo_hook',
        "X-Accepted-OAuth-Scopes": 'admin:repo_hook'
      }
      console.log(headers)
      console.log(Api.userInfo)
      Request.post({ url: Api.userInfo, data: body,headers:headers })
        .then(data => {
          // 更新用户信息
          // globalStorage.save({
          //   key: "userInfo",
          //   data: data,
          //   expires: 1000 * 3600 * 24 * 365//一个小时
          // });
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  
  static logout = () => {
    globalStorage.remove({
      key: 'userInfo'
    });

    globalStorage.remove({
      key: 'accrssToken'
    });
  }
}
