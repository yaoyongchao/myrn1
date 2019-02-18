/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var {height,width} =  Dimensions.get('window');
// const imgs = ['./img/ic_guide1.png','./img/ic_guide2.png','./img/ic_guide3.png'];

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Swiper style={styles.wrapper} showsButtons={false} autoplay={false} autoplayDirection={false} loop={false}>
          <Image style={styles.img} source={require('./img/ic_guide1.png')} />
          <Image style={styles.img} source={require('./img/ic_guide2.png')} />
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  }
});
