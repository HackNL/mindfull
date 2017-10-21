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

//components
import GradientBackground from '../../components/GradientBackground';

//Views
import GeneralBaseView from '../../layout/GeneralBaseView';

//Text
import generalText from '../../../resources/data/generalText';

class Main extends GeneralBaseView {

 constructor(props) {
  super(props);
 }

 componentDidMount() {}

 _renderChild(){
  return (
   <Text>hoihioi</Text>
  );
 }

}

const styles = StyleSheet.create({
 
});

export default Main;
