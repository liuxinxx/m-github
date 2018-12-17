import React, { Component } from "react";
import { StatusBar } from "react-native";
import { createAppContainer,createStackNavigator } from "react-navigation";
import Global from './src/libs/Global'
import Login from "./src/pages/profile/login";
import TabNavigation from "./src/libs/TabNavigation";

type Props = {};

export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}


const HomeStack = createStackNavigator(
  {
    TabNavigation: { screen: TabNavigation },
    Login: { screen: Login }
  },
  {
    initialRouteName: "TabNavigation",
    initialRouteParams: { initPara: "初始页面参数" },
    headerMode: "float",
    cardStyle: { backgroundColor: "#efefef" }
  }
);
Global.globalStorage();
const AppContainer = createAppContainer(HomeStack);