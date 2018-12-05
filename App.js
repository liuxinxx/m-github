import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import News from "./src/pages/news/news";
import Profile from "./src/pages/profile/profile";
import Stars from "./src/pages/stars/stars";
import Repositories from "./src/pages/repositories/repositories";

import Search from "./src/pages/search/search";

class TabIcon extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Ionicons
          style={{ color: this.props.focused ? "#3366ff" : "#999" }}
          name={this.props.iconName}
          size={25}
        />
      </View>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Router sceneStyle={{ backgroundColor: "white" }}>
        <Scene
          key="Tabbar"
          tabs
          headerMode="screen"
          hideNavBar={true}
          abBarPosition={"bottom"}
          default="News"
          showLabel={false}
          inactiveBackgroundColor="rgba(255, 255, 255, 0.5)"
        >
          <Scene
            title={"Repositories"}
            key="Repositories"
            component={Repositories}
            icon={TabIcon}
            hideNavBar
            iconName={"ios-flame"}
          />
          <Scene
            title={"News"}
            key="News"
            component={News}
            icon={TabIcon}
            hideNavBar
            iconName={"ios-paper"}
            component={News}
          />

          <Scene
            title={"Stars"}
            key="Stars"
            component={Stars}
            icon={TabIcon}
            hideNavBar
            iconName={"ios-star"}
          />
          <Scene
            key={"Search"}
            title={"Search"}
            icon={TabIcon}
            iconName={"ios-search"}
            hideNavBar
            component={Search}
          />
          <Scene
            title={"Profile"}
            component={Profile}
            icon={TabIcon}
            hideNavBar
            iconName={"logo-github"}
            initial //第一次加载的页面
          />
        </Scene>
      </Router>
    );
  }
}

export default App;
