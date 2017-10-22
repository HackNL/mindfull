import React, {Component} from 'react';
import {
 AppRegistry,
 StyleSheet,
 Alert,
 View,
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
import Button from '../../../components/Button.js';

//Text
import generalText from '../../../../resources/data/generalText';

class StilSession extends GenericBackComponent {

 constructor(props) {
  super(props);
  this.music = null;

  this.state = {
   playing: false
  }
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

 }

 componentWillUnmount() {
  this._pauseMusic();
 }

 componentDidMount() {
  setTimeout(() => {
   this._playMusic();
  },10);
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
 }

 _pauseMusic() {
  this.music.pause();
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
   <View style={[styles.themeWrapper, styles.transparantBackground]}>
    <View style={[styles.contentWrapper, styles.transparantBackground]}>
     <Text style={[styles.header]}>{this.props.title}</Text>
     <View style={styles.textWrapper}>
      <Text style={styles.textBasis}>As you travel through life there are always those times, When decisions just have to be made, When the choices are hard, and solutions seem scarce, And the rain seems to soak your parade.</Text>
     </View>
     <View style={styles.textWrapper}>

      <Text style={styles.textBasis}>There are some situations where all you can do Is simply
       <Text style={styles.corsiva}>let go and move on,
       </Text>Gather your courage and choose a direction That carries you toward
       <Text style={styles.newdawn}>a new dawn.</Text>
      </Text>

     </View>
     <View style={styles.textWrapper}>

      <Text style={styles.textBasis}>So pack up your troubles and
       <Text style={styles.forward}>take a step forward -</Text>
       The process of change can be tough, But think about all the excitement ahead
      </Text>

     </View>
     <View style={styles.textWrapper}>

      <Text style={styles.textBasis}>There might be...
       <Text style={styles.adventures}>
        adventures you never imagined</Text>
       Just waiting around the next bend, And wishes and dreams just about to come trueIn ways you can't yet comprehend!
      </Text>
     </View>
     <View style={styles.textWrapper}>

      <Text style={styles.textBasis}>
       <Text style={styles.friendship}>Perhaps you'll find friendships that spring from new things</Text>
       As you challenge your status quo,And learn there are so many options in life,
      </Text>

     </View>
     <View style={styles.textWrapper}>
      <Text style={styles.textBasis}>
       <Text style={styles.friendship}>Perhaps you'll go places you never expected And see things that you've never seen,</Text>
       Or travel to fabulous, faraway worlds And wonderful spots in between!
      </Text>

     </View>
     <View style={styles.textWrapper}>
      <Text style={styles.textBasis}>
       <Text style={styles.friendship}>Perhaps you'll find warmth and affection and caring And somebody special who's there</Text>

       To help you stay cantered and listen with interest To stories and feelings you share.
      </Text>

     </View>

     <View style={styles.textWrapper}>
      <Text style={styles.textBasis}>
       <Text style={styles.friendship}>Perhaps you'll find comfort in knowing your friends Are supportive of all that you do,</Text>

       And believe that whatever decisions you make, They'll be the right choices for you.
      </Text>

     </View>

     <View style={styles.textWrapper}>

      <Text style={styles.textBasis}>So keep putting one foot in front of the other, And taking your life day by day...
       <Text style={styles.friendship}>There's a brighter tomorrow</Text>
       that's just down the road -</Text>

      <Text style={styles.big}>Don't look back!</Text>

      <Text style={styles.big}>You're not going that way!</Text>
     </View>
    </View>
    <View style={styles.buttonWrapper}>

     <Button title="Finsch" filled={true} onPress={this._navigateToDone.bind(this)}></Button>
    </View>
   </View>
  )
 }

}

const styles = StyleSheet.create({
 buttonWrapper: {
  margin: 40
 },
 header: {
  fontFamily: 'OpenSans',
  fontSize: 25,
  marginTop: 40,
  textAlign: 'center',
  color: '#ffffff'
 },
 transparantBackground: {
  flex: 1,
  backgroundColor: color.transparant
 },
 contentWrapper: {
  margin: 40
 },
 body: {

  // backgroundImage: url("BackgroundSessionText3.jpg");

 },
 h1: {
  color: color.white,
  fontFamily: 'Courgette',
  fontSize: 30,
  marginTop: 27,
  textAlign: 'center'
 },
 textBasis: {
  fontFamily: 'OpenSans',
  fontSize: 20,
  fontWeight: '200',
  color: color.white
 },
 textWrapper: {
  marginTop: 60,
  marginBottom: 60
 },
 view: {
  paddingBottom: 150,
  textAlign: 'left'
 },
 corsiva: {
  fontFamily: 'Courgette',
  fontSize: 30,
  color: color.white,
  lineHeight: 40
 },
 newdawn: {
  fontFamily: 'Indie Flower',
  fontSize: 30,
  color: color.white,
  lineHeight: 40
 },
 forward: {
  fontFamily: 'Ubuntu Condensed',
  fontSize: 30,
  color: color.white,
  lineHeight: 40
 },
 adventures: {
  fontFamily: 'Permanent Marker',
  fontSize: 30,
  color: color.white,
  lineHeight: 40
 },
 friendship: {
  fontFamily: 'Lobster Two',
  color: color.white,
  fontSize: 30
 },
 // bright: {
 //  TextShadow: 1 1 yellow
 // },
 big: {
  fontSize: 30,
  color: color.white,
  // textAlign: 'center',
 }
});

export default StilSession;
