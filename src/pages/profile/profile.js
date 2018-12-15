import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, List } from "antd-mobile-rn";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,  // 登录状态
      loginInfo: {
        username: "大胖脸",
        bio: "学习使人退步！",
        joinDate: "2018-06-06",
        company: "QQ",
        location: "深圳",
        email: "email@qq.com",
        link: "dapanglian",

        contributions: {

        }
      }
    };
  }

  render() {

    let loginState = this.state.login;  // 登录状态

    return (
      <View style = { styles.container }>
        {/* 头部 */}
        {/* <View style = { styles.header }>
          <MaterialCommunityIcons style={{  }} name = "upload" size={ 30 } />
          <Text style = {{ fontSize: 20, fontWeight: "bold", color: "#000" }}>Profile</Text>
          <MaterialCommunityIcons style={{  }} name = "trending-up" size={ 30 } />
        </View> */}
        
        {/* 登录 */}
        <View style = { styles.login }>

          { loginState ? 
          // 登录成功
          <View style = {{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", borderBottomWidth:1, borderBottomColor: "#eee", paddingLeft: 30, paddingRight: 30}}> 
            <MaterialCommunityIcons style={{ color: "#eee" }} name = "github-box" size={ 100 } />
            <View style={{  }}>
              <Text style={{ color:"#36f", fontWeight:"bold", fontSize:20 }}> { this.state.loginInfo.username } </Text>
              <Text style={{ color:"#eee" }}> { this.state.loginInfo.bio } </Text>
              <Text style={{ color:"#eee" }}> { this.state.loginInfo.joinDate } </Text>
            </View>
          </View>
          : 
          // 未登录
          <View style = {{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth:1, borderBottomColor: "#eee", paddingLeft: 30, paddingRight: 30}}> 
            <MaterialCommunityIcons style={{ color: "#eee" }} name = "github-box" size={ 100 } />
            <Button style = {{ backgroundColor: "#36f", width:100, height: 40, borderRadius:40 }} activeStyle = {{ backgroundColor: "#eee" }}>
              <Text style = {{ color: "#fff", fontWeight: "bold" }}>登录</Text>
            </Button>
          </View>
          }



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
        
        {/* 中部列表 */}
        <View style = { styles.centralList }>
          <ScrollView>
            <List>
              <Item thumb = { cityIcon } extra = "公司">
                { this.state.loginInfo.company }
              </Item>
              <Item thumb = { mdLocateIcon } extra = "地址">
                { this.state.loginInfo.location }
              </Item>
              <Item thumb = { emailIcon } extra = "邮箱">
                { this.state.loginInfo.email }
              </Item>
              <Item thumb = { linkIcon } extra = "个人链接">
                { this.state.loginInfo.link }
              </Item>
            </List>
          </ScrollView>
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

// 自定义图标
const settingsIcon = ( // 设置
  <MaterialCommunityIcons
    style = {{ marginRight: 15 }} 
    name = "settings" 
    size = { 25 } 
    color = "#f00" 
  />);
const informationIcon = ( // 关于
  <MaterialCommunityIcons 
    style = {{ marginRight: 15 }} 
    name = "information" 
    size = { 25 } 
    color = "#36f"
  />);
const commentQuestionBoxIcon = ( // 反馈
  <MaterialCommunityIcons 
    style = {{ marginRight: 15 }} 
    name = "comment-question" 
    size = { 25 } 
    color = "#0f3"
  />);
const cityIcon = ( // 公司
  <MaterialCommunityIcons 
    style = {{ marginRight: 15 }} 
    name = "city" 
    size = { 25 } 
    color = "#c0f"
  />);
const mdLocateIcon = ( // 地址
  <Ionicons 
    style = {{ marginRight: 15 }} 
    name = "md-locate" 
    size = { 25 } 
    color = "#cf0"
  />);
const emailIcon = ( // email
  <MaterialCommunityIcons 
    style = {{ marginRight: 15 }} 
    name = "email" 
    size = { 25 } 
    color = "#f06"
  />);
const linkIcon = ( // 链接
  <MaterialCommunityIcons 
    style = {{ marginRight: 15 }} 
    name = "link" 
    size = { 25 } 
    color = "#ff0"
  />);

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

  // 中部列表
  centralList: {
    marginTop: 15,
  },

  // 底部列表
  bottomList: {
    flex: 1,
    marginTop: 15
  }
});
