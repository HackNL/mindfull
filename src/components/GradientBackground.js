import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Dimensions, View,Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import appStyle from '../style/Styles'


export default class GradientBackground extends Component {
 static propTypes = {
  children: React.PropTypes.element,
  colorTop: React.PropTypes.string,
  colorBottom: React.PropTypes.string
 }

 constructor(props) {
  super(props);
 }

 render() {
  return (
    <LinearGradient colors={[this.props.colorTop, this.props.colorBottom]} style={[appStyle.flexContainer, this.props.style]}>
     {this.props.children}
    </LinearGradient>
  )
 }
}
