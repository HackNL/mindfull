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
 Image,
 Dimensions
} from 'react-native';

//constants
import color from '../../style/Colors';
import {appVars, NavigationStyle} from '../../constants';

//Text
import generalText from '../../../resources/data/generalText';

const sesionTypeImages = {
 video: {
  active: require('../../../resources/images/icon-play-start.png'),
  done: require('../../../resources/images/icon-play-success.png'),
  todo: require('../../../resources/images/icon-play.png')
 },
 audio: {
  active: require('../../../resources/images/icon-audio-start.png'),
  done: require('../../../resources/images/icon-audio-success.png'), //TODO
  todo: require('../../../resources/images/icon-audio.png')
 },
 stil: {
  active: require('../../../resources/images/icon-silence-start.png'),
  done: require('../../../resources/images/icon-silence-success.png'), //TODO
  todo: require('../../../resources/images/icon-silence.png')
 },
 extra: {
  active: require('../../../resources/images/icon-extra.png'),
  done: require('../../../resources/images/icon-extra-locked.png'), //TODO
  todo: require('../../../resources/images/icon-extra.png')
 }
}

class SessionView extends Component {

 constructor(props) {
  super(props);

 }

 _renderCircle() {
  var state = 'todo';
  //TODO; save progress in DB
  if (this.props.session.kind === 'video') {
   state = 'active'
  }
  return (
   <View style={[styles.titleWrapper]}>
    <View style={{
     width: 140,  justifyContent: 'center', alignItems: 'center' }}>
     <Image source={sesionTypeImages[this.props.session.kind][state]}></Image>
    </View>
    <Text style={[(state === 'active')
      ? styles.textBig
      : styles.text]}>{this.props.session.title}</Text>
   </View>
  )
 }

 _renderLine() {
  if (this.props.session.kind !== 'extra') {
   return (
    <View style={{
     width: 220,
     justifyContent: 'center',
     alignItems: 'center'
    }}>
     <Image resizeMode={'center'} source={require('../../../resources/images/line.png')}></Image>
    </View>
   )
  } else {
   return (
    <View></View>
   )
  }

 }

 _navigateTo() {
  this.props.navigator.push({
   screen: `Mindfull.session.${this.props.session.kind}`, // unique ID registered with Navigation.registerScreen
   title: '',
   navigatorStyle: NavigationStyle,
   passProps: {
    session: this.props.session,
    title: this.props.session.title
   }
  });
 }

 render() {

  return (
   <TouchableWithoutFeedback style={[styles.dayWrapper]} onPress={this._navigateTo.bind(this)}>
    <View style={[styles.dayWrapper]}>
     {this._renderCircle()}

     {this._renderLine()}
    </View>
   </TouchableWithoutFeedback>
  )
 }
}

const styles = StyleSheet.create({
 dayWrapper: {
  justifyContent: 'center',
  // alignItems: 'center'
 },
 titleWrapper: {
  width: appVars.width,
  marginLeft: 40,
  justifyContent: 'flex-start',
  flexDirection: 'row',
  alignItems: 'center'
 },
 text: {
  fontFamily: 'OpenSans',
  fontSize: 21,
  marginLeft: 20,
  fontWeight: '300',
  color: '#ffffff'
 },
 textBig: {
  fontFamily: 'OpenSans',
  fontSize: 25,
  marginLeft: 20,
  fontWeight: '300',
  color: '#ffffff'
 }
});

export default SessionView;
