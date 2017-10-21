import React, {Component} from 'react';
import appStyle from '../style/Styles'
import color from '../style/Colors'

import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 Image,
 TouchableOpacity
} from 'react-native';

import TextUpperCase from './TextUpperCase.js';

export default class Button extends Component {

 render() {
  return (
   <TouchableOpacity activeOpacity={0.7}
                     style={[styles.buttonStyle,
                      (this.props.filled) ? styles.buttonFilled : styles.buttonNormal,
                      this.props.viewStyle
                     ]}
                     onPress={this.props.onPress.bind(this)}>
    <View>
     <TextUpperCase style={[
      (this.props.filled) ? styles.textFilled : styles.textWhite,
      styles.textStyle
     ]}>
      {this.props.title}
     </TextUpperCase>
    </View>
   </TouchableOpacity>
  );
 }
}

const styles = StyleSheet.create({
 buttonFilled: {
  	backgroundColor: "#ffffff",
  	borderStyle: "solid",
  	borderWidth: 1,
   borderRadius: 8,
  	borderColor: "rgba(255, 255, 255, 0.49)"

 },
 buttonNormal: {
    	borderRadius: 8,
    	borderStyle: "solid",
    	borderWidth: 1,
     backgroundColor: color.transparant,
    	borderColor: "rgba(255, 255, 255, 0.49)"
 },
 buttonStyle: {
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: 10,
    backgroundColor: color.transparant,
  paddingRight: 10,
  marginTop: 5,
  marginBottom: 5,
  height: 45
 },
 textFilled: {
  color: color.primary
 },
 textWhite: {
  color: "#ffffff"
 },
 textStyle: {
  fontFamily: "OpenSans",
  fontSize: 14,
  fontWeight: "300",
  textAlign: "center"
 }
});
