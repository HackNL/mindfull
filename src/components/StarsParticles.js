import React, {Component} from 'react';
import appStyle from '../style/Styles';

import {AppRegistry, StyleSheet, Dimensions, View} from 'react-native';
import Star from './Star';

import TimerMixin from 'react-timer-mixin';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
const INTERVAL = 6000;

export default class GradientView extends Component {
 static propTypes = {
  children: React.PropTypes.element
 }

 constructor(props) {
  super(props);
  this.state = {}
 }
 _getRandomPosition(){
  return -Math.floor((Math.random() * 600) + 50);
 }

 render() {

  return (
   <View>
    <Star bottom={this._getRandomPosition()}></Star>
    <Star bottom={this._getRandomPosition()}></Star>
    <Star bottom={this._getRandomPosition()}></Star>
    <Star bottom={this._getRandomPosition()}></Star>
    <Star bottom={this._getRandomPosition()}></Star>
    <Star bottom={this._getRandomPosition()}></Star>
    <Star bottom={this._getRandomPosition()}></Star>
    <Star bottom={this._getRandomPosition()}></Star>
    <Star bottom={this._getRandomPosition()}></Star>
    <Star bottom={this._getRandomPosition()}></Star>
    <Star bottom={this._getRandomPosition()}></Star>
    <Star bottom={this._getRandomPosition()}></Star>
    <Star bottom={this._getRandomPosition()}></Star>
    <Star bottom={this._getRandomPosition()}></Star>
   </View>
  )
 }
}
