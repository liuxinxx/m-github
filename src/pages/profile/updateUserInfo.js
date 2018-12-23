import React from "react";
import { ScrollView, Text, View } from "react-native";
import { List, InputItem, Toast, Icon } from "antd-mobile-rn";
import { Button, Snackbar } from "react-native-paper";
import userModel from "../..//model/userModel";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import Global from "../../libs/Global";
const dismissKeyboard = require("dismissKeyboard");
export default class updateUserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      type: "",
      disabled: true,
      btn_loading: false,
      visible: false,
      title: ""
    };
  }
  static navigationOptions = ({ navigation }) => {
    if (navigation.state.params.navigation) {
      return navigation.state.params.navigation;
    }
  };
  updateNavigation() {
    this.props.navigation.setParams({
      navigation: {
        headerTitle: this.props.navigation.state.params.title
      }
    });
  }

  componentWillMount() {
    this.updateNavigation();
    this.setState({
      value: this.props.navigation.state.params.value,
      type: this.props.navigation.state.params.type,
      title: this.props.navigation.state.params.title
    });
    globalStorage
      .load({
        key: "accrssToken"
      })
      .then(ret => {
        console.log("本地读取成功");
        console.log(ret);
        Global.globalAccessToken(ret["access_token"]);
      })
      .catch(err => {});
  }
  componentDidMount() {
    this.inputRef.focus();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#EFEFEF" }}>
        <Snackbar
          visible={this.state.visible}
          duration={2000}
          onDismiss={() => {
            this.props.navigation.pop();
          }}
          style={{
            backgroundColor: "#6abf47",
            height: 35,
            alignItems: "center",
            margin: 10,
            justifyContent: "center"
          }}
        >
          <FontAwesomeIcons name={"check-circle"} size={19} />
          <Text> </Text>
          <Text
            style={{
              fontSize: 16,
              padding: 10,
              alignSelf: "center",
              fontWeight: "700"
            }}
          >
            更新「{this.state.title}」成功
          </Text>
        </Snackbar>
        <List>
          <View style={{ backgroundColor: "#EFEFEF", height: 10 }} />
          <InputItem
            clear
            disabled={false}
            ref={el => (this.inputRef = el)}
            type="text"
            value={this.state.value}
            onChange={value => {
              this.setState({
                value: value,
                disabled: false
              });
            }}
          />
        </List>
        <View style={{ margin: 10 }}>
          <Button
            disabled={this.state.disabled}
            mode="contained"
            onPress={() => {
              // 隐藏键盘
              dismissKeyboard();
              Toast.loading("正在更新", 60);
              this.setState({
                disabled: true
              });
              let body = {};
              body[this.state.type] = this.state.value;
              userModel
                .updateUserInfo(body)
                .then(data => {
                  Toast.hide();
                  this.setState({
                    visible: true
                  });
                  console.info(data);
                })
                .catch(error => {
                  console.warn(error);
                });
            }}
          >
            更新
          </Button>
        </View>
      </View>
    );
  }
}
