import React, {Component} from 'react';
import {
 AppRegistry,
 StyleSheet,
 Alert,
 Button,
 View,
 ScrollView,
 Text,
 AsyncStorage,
 Dimensions
} from 'react-native';

//constants
import color from '../../style/Colors';
import {appVars, NavigationStyle} from '../../constants';

//components
import GradientBackground from '../../components/GradientBackground';
import ThemeView from '../../components/ThemeView';

//Views
import GeneralBaseView from '../../layout/GeneralBaseView';

//Text
import generalText from '../../../resources/data/generalText';

class Main extends GeneralBaseView {

 constructor(props) {
  super(props);

 }

 componentWillMount() {
  this.getData('DirstTime').then((firstTime) => {
   console.log('firstTime', firstTime);
   if (!firstTime || firstTime === Null || firstTime === undefined) {
    this.props.navigator.pop({
     screen: `Mindfull.Onboarding`, // unique ID registered with Navigation.registerScreen
     title: '',
     navigatorStyle: NavigationStyle
    });
   }
  });
 }

 getData(key) {
  return new Promise(function(resolve, reject) {
   try {
    AsyncStorage.getItem(key, (err, result) => {
     resolve(result);
    });
   } catch (error) {
    reject();
    // Error saving data
   }
  });
 }

 componentDidMount() {}

 _renderThemes() {
  var themes = generalText.themes.map((theme, index) => {
   return (
    <ThemeView theme={theme} key={index} navigator={this.props.navigator}></ThemeView>
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
   <View style={[styles.transparantBackground]}>
    {this._renderThemes()}
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

export default Main;
