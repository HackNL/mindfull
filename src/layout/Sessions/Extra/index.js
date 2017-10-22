import React, {Component} from 'react';
import {
 AppRegistry,
 StyleSheet,
 Alert,
 Button,
 View,
 ScrollView,
 Text,
 Dimensions
} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';

//constants
import color from '../../../style/Colors';
import {appVars, NavigationStyle} from '../../../constants';

//components
import GenericBackComponent from '../../GenericBackComponent';
import ThemeView from '../../../components/ThemeView';
import ProgressIndicator from '../../../components/progressIndicator';
import PlayerButton from '../../../components/PlayerButton'


class ExtraSession extends GenericBackComponent {

 constructor(props) {
  super(props);
     this.width = Dimensions.get('window').width; //full width
     this.height = Dimensions.get('window').height; //full height
     this.videoHeight = this.width/16*9; //good dimension for videos
     this.orientation = 'PORTRAIT';
     this.state = {
         playing: true,
         muted: false,
         ended: false,
         progress: 0,
     }
 }


 componentWillMount() {

    this.orientation = Orientation.getInitialOrientation();

 }

 componentDidMount() {
     Orientation.addOrientationListener(this._orientationDidChange);
     if (this.orientation === 'LANDSCAPE') {
         this.player.presentFullscreenPlayer();
     } else {
         this.player.dismissFullscreenPlayer();
     }
 }

 componentWillUnmount() {
    Orientation.removeOrientationListener(this._orientationDidChange);
 }

    _renderChild() {
  return (
   <View style={[styles.darkBackground, {height: this.height}, styles.themeWrapper]}>
    <View style={[styles.titleWrapper, styles.transparantBackground]}>
     <Text style={[styles.header]}>{this.props.title}</Text>
    </View>
    <View style={[styles.videoWrapper]}>
     <Video

         style={{width: this.width, height: this.videoHeight}}
         source = {require('../../../../resources/video/sessie1.mp4')}
         ref={(ref) => { this.player = ref}}
         rate={1.0}
         volume={1}
         muted={false}
         paused={!this.state.playing}
         resizeMode="cover"
         repeat={false}
         onEnd={this._onEnd.bind(this)}
         progressUpdateInterval={250.0}
         onProgress={this._onProgress.bind(this)}
     />
    </View>
       <View style={[styles.progressWrapper]}>
           <ProgressIndicator progress={this.state.progress}></ProgressIndicator>
           <PlayerButton onPause={this._pauseVideo.bind(this)} onPlay={this._playVideo.bind(this)} playing={this.state.playing} style={styles.playerButton}></PlayerButton>
       </View>
   </View>
  );
 }

    _onProgress(data){
        this.setState({progress: data.currentTime / data.playableDuration});
    }


    _orientationDidChange = (orientation) => {
        if (orientation === 'LANDSCAPE') {
            this.player.presentFullscreenPlayer();
        } else {
            this.player.dismissFullscreenPlayer();
        }
    }

    _playVideo(){
        this.setState({playing: true});
    }

    _pauseVideo(){
        this.setState({playing: false});
    }

    _onEnd(){
        this.setState({playing: false, ended:true});

        this.props.navigator.push({
            screen: 'Mindfull.Done', // unique ID registered with Navigation.registerScreen
            title: '',
            navigatorStyle: NavigationStyle,
            passProps: {
                content: this.props.session.content
            }
        });
    }


}

const styles = StyleSheet.create({
 darkBackground: {
  flex: 1,
     flexDirection: 'column',
  backgroundColor: 'rgba(2,0,19,0.9)'
 },
    transparantBackground: {
        backgroundColor: color.transparant
    },
    titleWrapper: {
        marginTop: 25
    },
    videoWrapper: {
        marginTop: 80
    },
    header: {
        textAlign: 'center',
        fontFamily: 'OpenSans',
        fontSize: 21,
        fontWeight: '200',
        color: '#ffffff'
    },
    playerButton: {
        position: 'absolute'
    },
    progressWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default ExtraSession;
