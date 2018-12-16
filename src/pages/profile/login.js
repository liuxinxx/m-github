import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  View,
  WebView
} from "react-native";
//获取设备的宽度和高度
var { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");
var getParamValue = function(url, key) {
  var regex = new RegExp(key + "=([^&]*)", "i");
  return url.match(regex)[1];
};
var i = 1;
var flag = true;
//默认应用的容器组件
export default class Login extends Component {
  //渲染
  render() {
    let url =
      "https://github.com/login/oauth/authorize?client_id=8042b87ac34d27d5b700";
    return (
      <View style={styles.container}>
        <WebView
          scalesPageToFit={true}
          startInLoadingState={true} //loading 动画
          source={{ uri: url, headers: { "Cache-Control": "no-cache" } }}
          javaScriptEnabled={true}
          androiddomStorageEnabled={false}
          onNavigationStateChange={navState => {
            if (navState.url.match(/api\/V1\/oauth\?code/) && flag) {
              let code = getParamValue(navState.url, "code");
              console.log('=================')
              console.log(i++);
              console.log(code);
              console.log('=================')
              flag = false;
              this.props.navigation.state.params.returnData(code);
              this.props.navigation.pop();
            }
          }}
          style={{ width: deviceWidth, height: deviceHeight }}
        />
      </View>
    );
  }
}

//样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});
