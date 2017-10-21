import React, {Component} from 'react';
import {
 AppRegistry,
 StyleSheet,
 Alert,
 Button,
 View,
 Image,
 TouchableOpacity,
 ScrollView,
 Text,
 Dimensions
} from 'react-native';

//constants
import color from '../../style/Colors';
import {appVars} from '../../constants';

class PlayerButton extends Component {

 constructor(props) {
  super(props);

 }

 _renderButton() {
  if (this.props.playing === false) {
   return (
    <TouchableOpacity onPress={this.props.onPlay.bind(this)}>
     <Image source={require('../../../resources/images/icon_play.png')}></Image>
    </TouchableOpacity>
   );
  } else {
   return (
    <TouchableOpacity onPress={this.props.onPause.bind(this)} style={[style.button]}>
     <Image source={require('../../../resources/images/icon_pause.png')}></Image>
    </TouchableOpacity>
   );
  }
 }

 render() {
  return (
   <View style={this.props.style}>
    {this._renderButton()}
   </View>
  );
 }
}

const styles = StyleSheet.create({
 button: {
  justifyContent: 'center',
  alignItems: 'center'
 }
});
export default PlayerButton;
