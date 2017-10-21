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
   <Image source={sesionTypeImages[this.props.session.kind][state]}></Image>
  )
 }
 _renderLine() {
  if (this.props.session.kind !== 'extra') {
   return (
    <View style={[styles.line]}>
     <Image source={require('../../../resources/images/line.png')}></Image>
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
   navigatorStyle: NavigationStyle
  });
 }

 render() {
  return (
   <TouchableWithoutFeedback style={[styles.dayWrapper]} onPress={this._navigateTo.bind(this)}>
    <View style={[styles.dayWrapper]}>
     <Text>{this.props.session.tite}</Text>
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
  alignItems: 'center',
 },
 line: {
  // borderStyle: 'dotted',
  //
  // borderWidth: 2,
  // width: 2,
  // height: 100,
  // borderColor: '#ffffff'
 }
});

export default SessionView;
