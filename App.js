import React, { Component } from "react";
import { StatusBar, View, Text } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Global from "./src/libs/Global";
import Login from "./src/pages/profile/login";
import UserInfo from "./src/pages/profile/userInfo";
import updateUserInfo from "./src/pages/profile/updateUserInfo";
import TabNavigation from "./src/libs/TabNavigation";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
type Props = {};

export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}
const otherNavigationOptions = {
  headerTitleStyle: {
    flex: 1,
    alignSelf: "center",
    fontSize: 18,
    color: "#333",
    textAlign: "center"
  },
  headerRight: <View />,
  headerBackImage: (
    <View
      style={{
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "center"
      }}
    >
      <FontAwesomeIcons name="angle-left" size={25} color="#222" />
    </View>
  ),
  headerStyle: {
    elevation: 0
  }
};
const HomeStack = createStackNavigator(
  {
    TabNavigation: { screen: TabNavigation },
    Login: { screen: Login, navigationOptions: { header: null } },
    updateUserInfo: {
      screen: updateUserInfo,
      navigationOptions: otherNavigationOptions
    },
    UserInfo: { screen: UserInfo, navigationOptions: otherNavigationOptions }
  },
  {
    initialRouteName: "TabNavigation",
    initialRouteParams: { initPara: "初始页面参数" },
    headerMode: "float",
    cardStyle: { backgroundColor: "#efefef", elevation: 0 }
  }
);
Global.globalStorage();
const AppContainer = createAppContainer(HomeStack);
