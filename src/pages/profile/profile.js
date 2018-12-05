import React, { Component } from "react";
import { View, Text } from "react-native";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#eee",
          justifyContent: "center"
        }}
      >
      <Text>
        Profile
      </Text>
      </View>
    );
  }
}
