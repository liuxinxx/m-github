import Storage from "react-native-storage";
import Request from "../libs/Request";
import Api from "../libs/Api";
import Global from "../libs/Global";
import { AsyncStorage } from "react-native";

var storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24 * 365,
  enableCache: true,
  sync: {}
});

storage.sync = {
  // sync方法的名字必须和所存数据的key完全相同
  // 方法接受的参数为一整个object，所有参数从object中解构取出
  // 这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject。
  // 红包记录获取分页情况
  // userInfo(params) {
  //   console.log('----------------')
  //   console.log('获取最新数据')
  //   console.log('----------------')

  //   let { resolve, reject } = params;
  //   let url = Api.userInfo;
  //   Request.get({ url: url, data: {} })
  //     .then(data => {
  //       let temp = data.data;
        
  //       globalStorage.save({
  //         key: "userInfo",
  //         data: temp,
  //         expires: 1000 * 3600 //一个小时
  //       });
  //       resolve && resolve(temp);
  //     })
  //     .catch(error => {
  //       reject && reject(error);
  //     });
  // },
};
export default storage;
