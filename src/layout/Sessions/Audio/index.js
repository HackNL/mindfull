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

//Text
import generalText from '../../../../resources/data/generalText';

class AudioSession extends GenericBackComponent {

 constructor(props) {
  super(props);
 }

 componentDidMount() {}


 _renderChild() {
  return (
   <View style={[styles.transparantBackground]}>
    <Text>Audio</Text>
   </View>
  );
 }

}

const styles = StyleSheet.create({
 transparantBackground: {
  flex: 1,
  backgroundColor: color.transparant
 }
});

export default AudioSession;
