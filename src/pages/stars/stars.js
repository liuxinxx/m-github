import React, { Component } from "react";
import { View, Text } from "react-native";
export default class Stars extends Component {
  constructor(props) {
    super(props);
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
        Stars
      </Text>
      </View>
    );
  }
}
