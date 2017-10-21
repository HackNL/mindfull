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
import color from '../../../style/Colors';
import {appVars} from '../../../constants';

//components
import GenericBackComponent from '../../GenericBackComponent';
import ThemeView from '../../../components/ThemeView';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';


//Text
import generalText from '../../../../resources/data/generalText';

class VideoSession extends GenericBackComponent {

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
     />
    </View>
   </View>
  );
 }


    _orientationDidChange = (orientation) => {
        if (orientation === 'LANDSCAPE') {
            this.player.presentFullscreenPlayer();
        } else {
            this.player.dismissFullscreenPlayer();
        }
    }

    _btnPlayPressed(){
        if(this.state.ended) this.player.seek(0);
        this.setState({playing: !this.state.playing, ended:false});
    }

    _onEnd(){
        this.setState({playing: false, ended:true});
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
    }

});

export default VideoSession;
