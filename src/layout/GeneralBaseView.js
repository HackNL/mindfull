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
import AppStyle from '../style/Styles';

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
   <View style={styles.GradientBackground}>
    <GradientBackground style={styles.GradientBackground} colorTop={color.primary} colorBottom={color.secodary}>
     <ScrollView>
      {this._renderChild()}
     </ScrollView>
    </GradientBackground>
   </View>
  );
 }

}

const styles = StyleSheet.create({
 GradientBackground: {
  flex: 1,

  position: 'relative',
  flexDirection: 'column'
 }
});
