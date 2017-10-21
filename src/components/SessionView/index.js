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
import {appVars} from '../../constants';

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
  console.log('----------');
  console.log('this.props.session.kind', this.props.session.kind);
  console.log('----------');
  return (
   <Image source={sesionTypeImages[this.props.session.kind]['todo']}></Image>
  )
 }
 _navigateTo() {
  this.props.navigator.push({
   screen: 'Mindfull.VideoSession', // unique ID registered with Navigation.registerScreen
   title: '',

  });
 }

 render() {
  console.log('hihiuisiu');
  return (
   <TouchableWithoutFeedback style={[styles.dayWrapper]} onPress={this._navigateTo.bind(this)}>
   <View style={[styles.dayWrapper]}>
     <Text>{this.props.session.tite}</Text>
     {this._renderCircle()}
     <View style={[styles.line]}></View>
   </View>
   </TouchableWithoutFeedback>
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

export default SessionView;
