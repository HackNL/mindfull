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
import WeekView from '../../components/weekView';

//Views
import GeneralBaseView from '../../layout/GeneralBaseView';

//Text
import generalText from '../../../resources/data/generalText';

class Main extends GeneralBaseView {

 constructor(props) {
  super(props);
 }

 componentDidMount() {}

 _renderWeeks() {
  var themes = generalText.themes.map(function(theme) {
   return (
    <WeekView theme={theme}></WeekView>
   )
  });
  return (
   <View>
    {themes}
   </View>
  )
 }

 _renderChild() {
  return (
   <View style={[
    {
     flex: 1
    },
    styles.transparantBackground
   ]}>
    {this._renderWeeks()}

   </View>
  );
 }

}

const styles = StyleSheet.create({
 transparantBackground: {
  backgroundColor: color.transparant
 }
});

export default Main;
