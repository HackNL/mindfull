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
import ThemeView from '../../components/ThemeView';

//Views
import GeneralBaseView from '../../layout/GeneralBaseView';

//Text
import generalText from '../../../resources/data/generalText';

class Main extends GeneralBaseView {

 constructor(props) {
  super(props);
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
   <View style={[styles.transparantBackground]} >
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
