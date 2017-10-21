import React, {Component} from 'react';

import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 Image,
 TouchableOpacity,
 ScrollView
} from 'react-native';
import color from '../style/Colors';

import GeneralBaseView from './GeneralBaseView';

export default class GenericBackComponent extends GeneralBaseView {
 constructor(props) {
  super(props);
  this.props.navigator.setStyle({screenBackgroundColor: this._setBackgroundColor()});

  this.props.navigator.setButtons({
   leftButtons: [
    {
     buttonFontSize: 14,
     icon: require('../../resources/images/back.png'),
     id: 'back'
    }
   ]
  });

  this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
 }

 _setBackgroundColor() {
  return color.lighterBlue;
 }

 onNavigatorEvent(event) {
  if (event.id == 'back') {
   this.props.navigator.pop({
    animated: true, // does the pop have transition animation or does it happen immediately (optional)
    // animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
    navigatorStyle: {
     navBarTextFontSize: 13
    }
   });
  }
 }

}
