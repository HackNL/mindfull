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

import Sound from 'react-native-sound';

//constants
import color from '../../../style/Colors';
import {appVars} from '../../../constants';

//components
import GenericBackComponent from '../../GenericBackComponent';
import ThemeView from '../../../components/ThemeView';
import ProgressIndicator from '../../../components/progressIndicator';
import PlayerButton from '../../../components/PlayerButton'

//Text
import generalText from '../../../../resources/data/generalText';

class AudioSession extends GenericBackComponent {

 constructor(props) {
  super(props);
  Sound.setCategory('Playback');

  this.music;
  this.interval = setInterval(() => {}, 5);

  this.state = {
   playing: true,
   progress: 0.1,
   duration: 0
  };
 }

 componentDidMount() {
  this.music = new Sound(this.props.session.content[0].soundUrl, Sound.MAIN_BUNDLE, (error) => {
   if (error) {
    console.log('failed to load the sound', error);
    return;
   }
   this.setState({duration: this.music.getDuration()});
   // console.log('duration in seconds: ' + test.getDuration() + ' number of channels: ' + test.getNumberOfChannels());
  });
 }

 _getCurrentTime() {
  var _this = this;
  var progress = 0;
  this.interval = setInterval(() => {
   this.music.getCurrentTime((seconds) => {

    progress = 1/this.state.duration*seconds;

    _this.setState({progress: progress});

   });
  }, 100);
 }

 _playMusic() {
  var _this = this;
  this.music.play((success) => {
   if (success) {
    console.log('successfully finished playing');

   } else {
    console.log('playback failed due to audio decoding errors');
    // reset the player to its uninitialized state (android only)
    // this is the only option to recover after an error occured and use the player again
    _this.music.reset();
   }
  });
  _this.setState({playing: true});
  _this._getCurrentTime();
 }

 _pauseMusic() {
  this.music.pause();
  this.setState({playing: false});
 }

 _renderChild() {
  return (
   <View style={[styles.transparantBackground]}>
    <View style={[styles.titleWrapper, styles.transparantBackground]}>
     <Text style={[styles.header]}>{this.props.title}</Text>
     <View style={[styles.progressWrapper]}>
      <ProgressIndicator progress={this.state.progress}></ProgressIndicator>
      <PlayerButton onPause={this._pauseMusic.bind(this)} onPlay={this._playMusic.bind(this)} playing={this.state.playing} style={styles.playerButton}></PlayerButton>
     </View>
    </View>
   </View>
  );
 }
}

// <Button onPress={this._playMusic.bind(this)} title="hiohio"></Button>
const styles = StyleSheet.create({
 transparantBackground: {
  flex: 1,
  backgroundColor: color.transparant
 },
 playerButton: {
  position: 'absolute'
 },
 progressWrapper: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 },
 titleWrapper: {
  marginTop: 25
 },
 header: {
  textAlign: 'center',
  fontFamily: 'OpenSans',
  fontSize: 21,
  fontWeight: '200',
  color: '#ffffff'
 }
});
export default AudioSession;
