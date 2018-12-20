import React from "react";
import { ScrollView, Text, View } from "react-native";
import { List, InputItem, Toast, Icon } from "antd-mobile-rn";
import { Button } from "react-native-paper";
import userModel from "../..//model/userModel";
import Global from "../../libs/Global"
export default class updateUserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      type: "",
      disabled: true
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
      type: this.props.navigation.state.params.type
    });
    globalStorage
      .load({
        key: "accrssToken"
      })
      .then(ret => {
        console.log("本地读取成功");
        console.log(ret);
        Global.globalAccessToken(ret['access_token'])
      })
      .catch(err => {});
  }
  componentDidMount() {
    this.inputRef.focus();
  }
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: "#EFEFEF" }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
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
            style={{ backgroundColor: "#36f" }}
            mode="contained"
            onPress={() => {
              let body = { };
              body[this.state.type] = this.state.value;
              userModel
                .updateUserInfo(body)
                .then(data => {
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
      </ScrollView>
    );
  }
}
