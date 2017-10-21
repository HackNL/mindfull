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

 componentDidMount() {}

 _renderDay(){

 }


 render() {
  return (
   <View style={[styles.weekWrapper]}>
    <View style={[styles.titleWrapper]}>
     <Text style={[styles.headerBold]}>{this.props.theme.number}</Text>
     <Text style={[styles.header]}>{this.props.theme.title}</Text>
    </View>

    <View style={[styles.dayWrapper]}></View>
   </View>
  )
 }
}

const styles = StyleSheet.create({
 weekWrapper: {
  marginTop: 90
 },
 header: {
  textAlign: 'center',
  fontFamily: 'OpenSans',
  fontSize: 21,
  fontWeight: '200',
  color: '#ffffff'
 },
 titleWrapper: {
  justifyContent: 'center',

  flexDirection: 'row'
 },
 headerBold: {
  fontFamily: 'OpenSans',
  fontSize: 21,
  marginRight: 20,
  fontWeight: 'bold',
  color: '#ffffff'
 },
 dayWrapper: {},
 transparantBackground: {
  backgroundColor: color.transparant
 }
});

export default WeekView;
