import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, List, Modal,Toast } from "antd-mobile-rn";
import profileModel from "../../model/profileModel";
import DateUtil from "../../libs/DateUtil";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false, // 登录状态
      loginInfo: {
        username: "大胖脸",
        bio: "学习使人退步！",
        joinDate: "2018-06-06",
        company: "QQ",
        location: "深圳",
        email: "email@qq.com",
        link: "dapanglian",
        avatar_url: "",
        name: "",
        public_repos: 0,
        followers: 0,
        following: 0,
        contributions: {}
      }
    };
  }

  returnData(code) {
    Toast.loading('正在登陆！')
    this.login(code);
  }
  login(code) {
    console.log("开始登陆");
    profileModel
      .login(code)
      .then(ret => {
        console.log("success");
        console.log(ret);
        profileModel
          .getUserInfo(ret["access_token"])
          .then(ret => {
            this.updateState(ret);
            Toast.success('登录成功！')
          })
          .catch(error => {});
      })
      .catch(error => {
        console.log(error);
      });
  }

  // "login": "myvary",
  // "id": 19232959,
  // "node_id": "MDQ6VXNlcjE5MjMyOTU5",
  // "avatar_url": "https://avatars2.githubusercontent.com/u/19232959?v=4",
  // "gravatar_id": "",
  // "url": "https://api.github.com/users/myvary",
  // "html_url": "https://github.com/myvary",
  // "followers_url": "https://api.github.com/users/myvary/followers",
  // "following_url": "https://api.github.com/users/myvary/following{/other_user}",
  // "gists_url": "https://api.github.com/users/myvary/gists{/gist_id}",
  // "starred_url": "https://api.github.com/users/myvary/starred{/owner}{/repo}",
  // "subscriptions_url": "https://api.github.com/users/myvary/subscriptions",
  // "organizations_url": "https://api.github.com/users/myvary/orgs",
  // "repos_url": "https://api.github.com/users/myvary/repos",
  // "events_url": "https://api.github.com/users/myvary/events{/privacy}",
  // "received_events_url": "https://api.github.com/users/myvary/received_events",
  // "type": "User",
  // "site_admin": false,
  // "name": "刘鑫",
  // "company": null,
  // "blog": "https://liuxin.im",
  // "location": null,
  // "email": "liuxinworkone@gmail.com",
  // "hireable": null,
  // "bio": "学习使人进步。",
  // "public_repos": 35,
  // "public_gists": 0,
  // "followers": 17,
  // "following": 1,
  // "created_at": "2016-05-07T01:29:13Z",
  // "updated_at": "2018-12-16T02:38:05Z"
  updateState = ret => {
    this.setState({
      loginInfo: {
        username: ret.login,
        bio: ret.bio,
        joinDate: `${DateUtil.formatDate(ret.created_at, "yyyy-MM-dd")}`,
        company: ret.company,
        name: ret.name,
        location: ret.location,
        email: ret.email,
        link: ret.blog,
        avatar_url: ret.avatar_url,
        public_repos: ret.public_repos,
        followers: ret.followers,
        following: ret.following
      },
      login: true
    });
  };
  componentDidMount = () => {
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
  };

  render() {
    let loginState = this.state.login; // 登录状态
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          {/* 登录 */}
          <View style={styles.login}>
            {/* <Button 
            type="warning"
            onClick={()=>{
              globalStorage.clearMapForKey('userInfo');
              this.setState({
                login:false,
                loginInfo:{}
              })
            }}
          >
            退出
          </Button> */}
            {loginState ? (
              // 登录成功
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  borderBottomWidth: 1,
                  borderBottomColor: "#eee",
                  paddingLeft: 10,
                  paddingRight: 30
                }}
              >
                <Image
                  source={{ uri: this.state.loginInfo.avatar_url }}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 10,
                    borderColor: "#eee",
                    borderWidth: 0.5,
                    margin: 5
                  }}
                />
                <View style={{}}>
                  <Text
                    style={{ color: "#36f", fontWeight: "bold", fontSize: 18 }}
                  >
                    {this.state.loginInfo.username}(
                    <Text
                      style={{
                        color: "#222",
                        fontWeight: "bold",
                        fontSize: 16
                      }}
                    >
                      {this.state.loginInfo.name}
                    </Text>
                    )
                  </Text>
                  <Text style={{ color: "#888" }}>
                    {this.state.loginInfo.bio}
                  </Text>
                  <Text style={{ color: "#444" }}>
                    Joined on {this.state.loginInfo.joinDate}
                  </Text>
                </View>
              </View>
            ) : (
              // 未登录
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "#eee",
                  paddingLeft: 30,
                  paddingRight: 30
                }}
              >
                <MaterialCommunityIcons
                  style={{ color: "#eee" }}
                  name="github-box"
                  size={100}
                />
                <Button
                  style={{
                    backgroundColor: "#36f",
                    width: 100,
                    height: 40,
                    borderRadius: 40
                  }}
                  onClick={() => {
                    this.props.navigation.navigate("Login", {
                      returnData: this.returnData.bind(this)
                    });
                  }}
                  activeStyle={{ backgroundColor: "#eee" }}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    登录
                  </Text>
                </Button>
              </View>
            )}

            <View style={{ flexDirection: "row" }}>
              <View
                style={[styles.loginCell, styles.loginCell2, { padding: 5 }]}
              >
                <Text style={styles.loginCellFollow}>
                  {this.state.loginInfo.public_repos}
                </Text>
                <Text style={{ fontSize: 13 }}>Repositories</Text>
              </View>

              <View style={styles.loginCell}>
                <Text style={styles.loginCellFollow}>
                  {this.state.loginInfo.followers}
                </Text>
                <Text style={{ fontSize: 13 }}>Followers</Text>
              </View>

              <View style={styles.loginCell}>
                <Text style={styles.loginCellFollow}>
                  {this.state.loginInfo.following}
                </Text>
                <Text style={{ fontSize: 13 }}>Following</Text>
              </View>
            </View>
          </View>

          {/* 中部列表 */}
          <View style={styles.centralList}>
            <ScrollView>
              <List>
                <Item thumb={cityIcon} extra="公司">
                  {this.state.loginInfo.company}
                </Item>
                <Item thumb={mdLocateIcon} extra="地址">
                  {this.state.loginInfo.location}
                </Item>
                <Item thumb={emailIcon} extra="邮箱">
                  {this.state.loginInfo.email}
                </Item>
                <Item thumb={linkIcon} extra="个人链接">
                  {this.state.loginInfo.link}
                </Item>
              </List>
            </ScrollView>
          </View>

          {/* 底部列表 */}
          <View style={styles.bottomList}>
            <ScrollView>
              <List>
                <Item
                  thumb={settingsIcon}
                  arrow="horizontal"
                  onClick={() => {
                    alert("设置");
                  }}
                >
                  设置
                </Item>
                <Item
                  thumb={informationIcon}
                  arrow="horizontal"
                  onClick={() => {
                    Modal.alert("关于");
                  }}
                >
                  关于
                </Item>
                <Item
                  thumb={commentQuestionBoxIcon}
                  arrow="horizontal"
                  onClick={() => {
                    alert("反馈");
                  }}
                >
                  反馈
                </Item>
              </List>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const Item = List.Item; // 列表

// 自定义图标
const settingsIcon = ( // 设置
  <MaterialCommunityIcons
    style={{ marginRight: 15 }}
    name="settings"
    size={25}
    color="#f00"
  />
);
const informationIcon = ( // 关于
  <MaterialCommunityIcons
    style={{ marginRight: 15 }}
    name="information"
    size={25}
    color="#36f"
  />
);
const commentQuestionBoxIcon = ( // 反馈
  <MaterialCommunityIcons
    style={{ marginRight: 15 }}
    name="comment-question"
    size={25}
    color="#0f3"
  />
);
const cityIcon = ( // 公司
  <MaterialCommunityIcons
    style={{ marginRight: 15 }}
    name="city"
    size={25}
    color="#c0f"
  />
);
const mdLocateIcon = ( // 地址
  <Ionicons
    style={{ marginRight: 15 }}
    name="md-locate"
    size={25}
    color="#cf0"
  />
);
const emailIcon = ( // email
  <MaterialCommunityIcons
    style={{ marginRight: 15 }}
    name="email"
    size={25}
    color="#f06"
  />
);
const linkIcon = ( // 链接
  <MaterialCommunityIcons
    style={{ marginRight: 15 }}
    name="link"
    size={25}
    color="#ff0"
  />
);

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
    paddingRight: 10
  },

  // 登录
  login: {
    height: 150,
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
    fontSize: 18,
    fontWeight: "bold"
  },

  // 中部列表
  centralList: {
    marginTop: 15
  },

  // 底部列表
  bottomList: {
    flex: 1,
    marginTop: 15
  }
});
