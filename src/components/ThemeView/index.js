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

//components
import SessionView from '../SessionView/index';


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

 _renderSessions(){
  return this.props.theme.sessions.map((session, index) => {
   return (
    <SessionView session={session} state={1} key={index} navigator={this.props.navigator}></SessionView>
   );
  });
 }


 render() {
  return (
   <View style={[styles.themeWrapper]}>
    <View style={[styles.titleWrapper]}>
     <Text style={[styles.headerBold]}>{this.props.theme.number}</Text>
     <Text style={[styles.header]}>{this.props.theme.title}</Text>
    </View>

    <View style={[styles.sessionWrapper]}>
     {this._renderSessions()}
    </View>
   </View>
  )
 }
}

const styles = StyleSheet.create({
 themeWrapper: {
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
  paddingBottom: 40,
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
 sessionWrapper: {
  flexDirection: 'column',
  marginBottom: 100,
 },
 transparantBackground: {
  backgroundColor: color.transparant
 }
});

export default WeekView;
