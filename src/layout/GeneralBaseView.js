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

//global vars
import color from '../style/Colors';
import appStyle from '../style/Styles';
import {appVars} from '../constants';

//components
import GradientBackground from '../components/GradientBackground';

export default class GeneralBaseView extends Component {
 constructor(props) {
  super(props);
  this.props.navigator.setStyle({screenBackgroundColor: this._setBackgroundColor()});

 }

 _setBackgroundColor() {
  return color.primary;
 }

 _renderChild() {}

 render() {
  return (
   <GradientBackground style={styles.GradientBackground} colorTop={color.primary} colorBottom={color.secondary}>
    <Image source={require('../../resources/images/bg_stars.png')} style={styles.stars}></Image>
    <ScrollView styles={[appStyle.flexContainer]}>
     {this._renderChild()}
    </ScrollView>
   </GradientBackground>

  );
 }

}

const styles = StyleSheet.create({
 GradientBackground: {
  flexDirection: 'row',
  flex: 1
 },
 stars: {
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  width: appVars.width
 }
});
