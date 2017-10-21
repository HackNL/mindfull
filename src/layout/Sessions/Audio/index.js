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
import {appVars, NavigationStyle} from '../../../constants';

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
  this.interval = setInterval(() => {}, 1000);
  this.helperInterval = setInterval(() => {}, 1000);
  this.helpText = this.props.session.content.helpText;

  this.state = {
   playing: false,
   progress: 0,
   duration: 0,
   helpText: this.helpText[0]
  };
 }

 componentWillMount() {
  this.music = new Sound(this.props.session.content.soundUrl, Sound.MAIN_BUNDLE, (error) => {
   if (error) {
    console.log('failed to load the sound', error);
    return;
   }
   this.setState({duration: this.music.getDuration()});
   // console.log('duration in seconds: ' + test.getDuration() + ' number of channels: ' + test.getNumberOfChannels());
  });
  this._setHelpText();
 }

 componentWillUnmount(){
  this._pauseMusic();
 }
 _randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
 }

 _setHelpText() {

  this.helperInterval = setInterval(() => {

   this.setState({
    helpText: this.helpText[this._randomNumber(0, this.props.session.content.helpText.length)]
   });
  }, 10000);
 }

 _getCurrentTime() {
  var _this = this;
  var progress = 0;
  this.interval = setInterval(() => {
   this.music.getCurrentTime((seconds) => {

    progress = 1 / this.state.duration * seconds;

    _this.setState({progress: progress});

   });
  }, 100);
 }

 _playMusic() {
  this.music.play((success) => {
   if (success) {
    console.log('successfully finished playing');
    this._navigateToDone();
   } else {
    console.log('playback failed due to audio decoding errors');
    // reset the player to its uninitialized state (android only)
    // this is the only option to recover after an error occured and use the player again
    this.music.reset();
   }
  });
  this.setState({playing: true});
  this._getCurrentTime();
 }

 _pauseMusic() {
  this.music.pause();
  clearInterval(this.interval);
  clearInterval(this.helperInterval);

  this.setState({playing: false});
 }

 _navigateToDone() {
  this._pauseMusic();
  this.props.navigator.push({
   screen: 'Mindfull.Done', // unique ID registered with Navigation.registerScreen
   title: '',
   navigatorStyle: NavigationStyle,
   passProps: {
    content: this.props.session.content
   }
  });
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
     <TouchableWithoutFeedback onPress={this._navigateToDone.bind(this)}>
      <Text style={styles.helpText}>{this.state.helpText}</Text>
     </TouchableWithoutFeedback>
    </View>
   </View>
  );
 }
}

const styles = StyleSheet.create({
 transparantBackground: {
  flex: 1,
  backgroundColor: color.transparant
 },
 playerButton: {
  position: 'absolute'
 },
 progressWrapper: {
  marginTop: 80,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 },
 titleWrapper: {
  marginTop: 25
 },
 helpText: {
  textAlign: 'center',
  height: 24,
  marginTop: '30%',
  fontFamily: 'OpenSans',
  fontSize: 18,
  fontWeight: '300',
  textAlign: 'center',
  color: '#ffffff'
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
