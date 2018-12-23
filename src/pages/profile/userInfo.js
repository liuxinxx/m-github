import React from "react";
import { Image, ScrollView, View, Text, StyleSheet } from "react-native";
import { List, InputItem, Toast, Icon } from "antd-mobile-rn";
import { Button } from "react-native-paper";
import userModel from '../..//model/userModel'
const Item = List.Item;
const styles = StyleSheet.create({
  interval: {
    height: 20,
    backgroundColor: "#eee"
  }
});
export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
      company: "",
      name: "",
      location: "",
      link: ""
    };
  }
  static navigationOptions = ({ navigation }) => {
    if (navigation.state.params.navigation) {
      return navigation.state.params.navigation;
    }
  };
  updateNavigation(title) {
    this.props.navigation.setParams({
      navigation: {
        headerTitle: this.props.navigation.state.params.title
      }
    });
  }
  updateState = ret => {
    this.setState({
      bio: ret.bio,
      company: ret.company,
      name: ret.name,
      location: ret.location,
      link: ret.blog
    });
  };
  componentWillMount() {
    this.updateNavigation();
  }
  goUpdateUserInfo = type => {
    let body = { title: type };
    switch (type) {
      case "姓名":
        body["value"] = this.state.name;
        body["type"] = "name";
        break;
      case "简介":
        body["value"] = this.state.bio;
        body["type"] = "bio";
        break;
      case "公司":
        body["value"] = this.state.company;
        body["type"] = "company";
        break;
      case "地址":
        body["value"] = this.state.location;
        body["type"] = "location";
        break;
      case "个人主页":
        body["value"] = this.state.link;
        body["type"] = "link";
        break;
    }
    this.props.navigation.navigate("updateUserInfo", body);
  };
  componentDidMount() {
    globalStorage
      .load({
        key: "userInfo"
      })
      .then(ret => {
        console.log("本地读取成功");
        console.log(ret);
        this.updateState(ret);
      })
      .catch(err => {});
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: "#eee" }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List>
          <Item
            arrow="horizontal"
            onClick={() => {
              this.goUpdateUserInfo("姓名");
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 70 }}>姓名</Text>
              <Text style={{ flex: 1 }}>{this.state.name}</Text>
            </View>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => {
              this.goUpdateUserInfo("简介");
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 70 }}>简介</Text>
              <Text style={{ flex: 1 }}>{this.state.bio}</Text>
            </View>
          </Item>
        </List>
        <View style={styles.interval} />
        <List>
          <Item
            arrow="horizontal"
            onClick={() => {
              this.goUpdateUserInfo("公司");
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 70 }}>公司</Text>
              <Text style={{ flex: 1 }}>{this.state.company}</Text>
            </View>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => {
              this.goUpdateUserInfo("地址");
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 70 }}>地址</Text>
              <Text style={{ flex: 1 }}>{this.state.location}</Text>
            </View>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => {
              this.goUpdateUserInfo("个人主页");
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ width: 70 }}>个人主页</Text>
              <Text style={{ flex: 1 }}>{this.state.link}</Text>
            </View>
          </Item>
        </List>
        <View style={styles.interval} />
        <View style={{ margin: 10 }}>
          <Button
            style={{ backgroundColor: "#f4333c" }}
            mode="contained"
            onPress={() =>{
              userModel.logout()
              this.props.navigation.pop()
            }}
          >
            退出
          </Button>
        </View>
      </ScrollView>
    );
  }
}
