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

const sesionTypeImages = {
 video: {
  active: require('../../../resources/images/icon-play-start.png'),
  done: require('../../../resources/images/icon-play-success.png'),
  todo: require('../../../resources/images/icon-play.png')
 },
 audio: {
  active: require('../../../resources/images/icon-audio-start.png'),
  done: require('../../../resources/images/icon-play-success.png'), //TODO
  todo: require('../../../resources/images/icon-audio.png')
 },
 stil: {
  active: require('../../../resources/images/icon-silence-start.png'),
  done: require('../../../resources/images/icon-play-success.png'), //TODO
  todo: require('../../../resources/images/icon-silence.png')
 },
 extra: {
  // active: require('../../../resources/images/btn_start.png'),
  // done: require('../../../resources/images/btn_start.png'),
  // todo: require('../../../resources/images/btn_start.png')
 }
}

class SessionView extends Component {

 constructor(props) {
  super(props);

 }

 _renderCircle() {
  return (
   <Image source={backgroundImages[this.props.session.kind]['todo']}></Image>
  )
 }

 render() {
  return (
   <View style={[styles.dayWrapper]}>
    <Text>{this.props.session.tite}</Text>
    {this._renderCircle()}
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

export default SessionView;
