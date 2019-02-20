/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,Dimensions, Button, Alert,ImageBackground,TouchableOpacity,StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';
import {Navigation} from "react-native-navigation";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var {height,width} =  Dimensions.get('window');

type Props = {};
export default class App extends Component<Props> {
  // static navigationOptions = {
  //   tabBarVisible: false, // 隐藏底部导航栏
  //   header:null,  //隐藏顶部导航栏
  // };
  render() {
    return (
        <Swiper style={styles.wrapper} showsButtons={false} autoplay={false} autoplayDirection={false} loop={false} showsPagination={false}>
          <Image style={styles.img} source={require('./img/ic_guide1.png')} />
          <Image style={styles.img} source={require('./img/ic_guide2.png')} />
          <ImageBackground style={styles.imgbackground}
                           source={require('./img/ic_guide3.png')}>
            <TouchableOpacity
                style={styles.btntouch}
                onPress={buttonClick}
                color="#841584"
                activeOpacity = {0.7}
            >
              <Text style={styles.mytext}>
                立即体验
              </Text>

            </TouchableOpacity>
          </ImageBackground>
        </Swiper>

    );
  }
}

const buttonClick = () => {
  Alert.alert("点击了按钮");
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: width,
    height: height
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  wrapper: {

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:width,
    height:height
  },
  imgbackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  btntouch: {
    height: 40,
    width: 230,
    marginBottom: 96,
    // backgroundColor: '#ff0000',
    borderWidth: 1,
    borderColor: '#6ceac4',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',

  },
  mytext: {
    color: '#6ceac4',
    fontSize: 18
  }

});
