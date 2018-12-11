import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, List } from "antd-mobile-rn";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style = { styles.container }>
        {/* 头部 */}
        <View style = { styles.header }>
          <MaterialCommunityIcons style={{  }} name = "upload" size={ 30 } />
          <Text style = {{ fontSize: 20, fontWeight: "bold", color: "#000" }}>Profile</Text>
          <MaterialCommunityIcons style={{  }} name = "trending-up" size={ 30 } />
        </View>
        
        {/* 登录 */}
        <View style = { styles.login }>

          <View style = {{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth:1, borderBottomColor: "#eee", paddingLeft: 30, paddingRight: 30}}>
            <MaterialCommunityIcons style={{ color: "#eee" }} name = "github-box" size={ 100 } />
            <Button style = {{ backgroundColor: "#09f", width:100, height: 40, borderRadius:40 }} activeStyle = {{ backgroundColor: "#eee" }}>
              <Text style = {{ color: "#fff", fontWeight: "bold" }}>登录</Text>
            </Button>
          </View>

          <View style = {{ flex: 0.8, flexDirection: "row", }}>

            <View style = { [styles.loginCell, styles.loginCell2] }>
              <Text style = { styles.loginCellFollow }>0</Text>
              <Text style = {{ fontSize: 15, }}>Repositories</Text>
            </View>

            <View style = { styles.loginCell }>
              <Text style = { styles.loginCellFollow }>0</Text>
              <Text style = {{ fontSize: 15, }}>Followers</Text>
            </View>

            <View style = { styles.loginCell }>
              <Text style = { styles.loginCellFollow }>0</Text>
              <Text style = {{ fontSize: 15, }}>Following</Text>
            </View>

          </View>
        </View>

        {/* 底部列表 */}
        <View style = { styles.bottomList }>
          <ScrollView>
            <List>
              <Item thumb = { settingsIcon } arrow="horizontal" onClick = {() => {alert("设置")}}>
                设置
              </Item>
              <Item thumb = { informationIcon } arrow="horizontal" onClick = {() => {alert("关于")}}>
                关于
              </Item>
              <Item thumb = { commentQuestionBoxIcon } arrow="horizontal" onClick = {() => {alert("反馈")}}>
                反馈
              </Item>
            </List>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const Item = List.Item; // 列表
const settingsIcon = (<MaterialCommunityIcons style = {{ marginRight: 15 }} name = "settings" size = { 35 } color = "#f30" />);
const informationIcon = (<MaterialCommunityIcons style = {{ marginRight: 15 }} name = "information" size = { 35 } color = "#f99" />);
const commentQuestionBoxIcon = (<MaterialCommunityIcons style = {{ marginRight: 15 }} name = "comment-question" size = { 35 } color = "#93f" />);

const styles = StyleSheet.create({
  // 
  container: {
    flex: 1,
    backgroundColor: "#eee"
  },
  
  // 头部
  header: {
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },

  // 登录
  login: {
    height: 170,
    backgroundColor: "#fff"
  },
    loginCell: {
      flex: 1, 
      alignItems: "center", 
      justifyContent: "center",
      borderLeftWidth: 1,
      borderLeftColor: "#eee"
    },
    loginCell2: {
      borderLeftWidth: 0
    },
      loginCellFollow: {
        fontSize: 20, 
        fontWeight: "bold"
      },

  // 底部列表
  bottomList: {
    flex: 1,
    marginTop: 15
  }
});
