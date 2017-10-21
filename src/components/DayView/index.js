import React, {Component} from 'react';
import {
 AppRegistry,
 StyleSheet,
 Alert,
 Button,
 View,
 TouchableWithoutFeedback,
 ScrollView,
 Text,
 Dimensions
} from 'react-native';

//constants
import color from '../../style/Colors';
import {appVars} from '../../constants';

//Text
import generalText from '../../../resources/data/generalText';

class WeekView extends Component {

 constructor(props) {
  super(props);

  
 }

 componentDidMount() {

 }

 render() {
  return (
   <View style={[styles.dayWrapper]}>
    <View style={[styles.line]}></View>
   </View>
  )
 }
}

const styles = StyleSheet.create({
 dayWrapper: {
  marginTop: 90
 },

 line: {
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: '#ffffff'
 }
});

export default WeekView;
