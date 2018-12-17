import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import News from "../pages/news/news";
import Profile from "../pages/profile/profile";
import Stars from "../pages/stars/stars";
import Repositories from "../pages/repositories/repositories";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { StatusBar } from "react-native";
import Search from "../pages/search/search";
const TabIcon = name => (
  <Ionicons
    style={{ backgroundColor: "transparent" }}
    name={name}
    color={"#333"}
    size={25}
  />
);
export default createMaterialBottomTabNavigator(
  {
    Repositories: {
      screen: Repositories,
      navigationOptions: {
        title: "Repositories",
        tabBarIcon: TabIcon("ios-flame")
      }
    },
    News: {
      screen: News,
      navigationOptions: { title: "News", tabBarIcon: TabIcon("ios-paper") }
    },
    Stars: {
      screen: Stars,
      navigationOptions: { title: "Stars", tabBarIcon: TabIcon("ios-star") }
    },
    Search: {
      screen: Search,
      navigationOptions: { title: "Search", tabBarIcon: TabIcon("ios-search") }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Profile",
        tabBarIcon: TabIcon("logo-github")
      }
    }
  },
  {
    initialRouteName: "Profile",
    barStyle: { backgroundColor: "#EFEFEF" },
    navigationOptions: {
      headerTitleStyle: {
        color: "#111"
      },
      headerStyle: {
        paddingTop: StatusBar.currentHeight,
        height: 20 + StatusBar.currentHeight,
        elevation: 1
      }
    }
  }
);
