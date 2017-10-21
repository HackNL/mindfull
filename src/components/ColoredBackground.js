import React, {Component} from 'react';
import appStyle from '../styles/Styles'

import {AppRegistry, StyleSheet, Dimensions, View} from 'react-native'

import TimerMixin from 'react-timer-mixin'
import LinearGradient from 'react-native-linear-gradient'
import Chroma from 'chroma-js'
import color from '../style/Colors';

var screenWidth = Dimensions.get('window').width
var screenHeight = Dimensions.get('window').height

const TOP_COLORS = ['#7da4f1', '#578bf1', '#356fe2', '#578bf1', '#796be6'];
const BOTTOM_COLORS = ['#796be6', '#578bf1', '#356fe2', '#578bf1', '#7da4f1'];
const GRADIENT_COLOR_LENGTH = 700;
const TOP_COLORS_SPECTRUM = Chroma.scale(TOP_COLORS).colors(GRADIENT_COLOR_LENGTH);
const BOTTOM_COLORS_SPECTRUM = Chroma.scale(BOTTOM_COLORS).colors(GRADIENT_COLOR_LENGTH);
const INTERVAL = 5;

export default class GradientView extends Component {
 static propTypes = {
  children: React.PropTypes.element
 }

 constructor(props) {
  super(props);
  this.currentColorStep = STEPS[this.props.step]
  this.state = {
   topIndex: 0,
   bottomIndex: 0,
   colorTop: TOP_COLORS_SPECTRUM[0],
   colorBottom: BOTTOM_COLORS_SPECTRUM[0]
  }
 }

 componentDidMount() {
  this.changeColor();
 }

 changeColor() {
  this.setInterval(() => {
   let {topIndex, bottomIndex} = this.state

   topIndex++;

   if (topIndex === TOP_COLORS_SPECTRUM.length) {
    topIndex = 0
   }

   bottomIndex++;

   if (bottomIndex === BOTTOM_COLORS_SPECTRUM.length) {
    bottomIndex = 0
   }

   this.setState({topIndex: topIndex, bottomIndex: bottomIndex, colorTop: TOP_COLORS_SPECTRUM[topIndex], colorBottom: BOTTOM_COLORS_SPECTRUM[bottomIndex]})
  }, INTERVAL);
 }

 render() {
  return (
   <LinearGradient colors={[this.state.colorTop, this.state.colorBottom]} style={[appStyle.flexContainer, this.props.style]}>
    {this.props.children}
   </LinearGradient>
  )
 }
}