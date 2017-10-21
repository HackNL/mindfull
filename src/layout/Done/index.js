import React, {Component} from 'react';
import {
 AppRegistry,
 StyleSheet,
 Alert,
 View,
 ScrollView,
 Linking,
 Text,
 Dimensions
} from 'react-native';

//constants
import color from '../../style/Colors';
import {appVars} from '../../constants';

//components
import GradientBackground from '../../components/GradientBackground';
import ThemeView from '../../components/ThemeView';
import Button from '../../components/Button';

//Views
import GenericBackComponent from '../../layout/GenericBackComponent';

//Text
import generalText from '../../../resources/data/generalText';

class Done extends GenericBackComponent {

 constructor(props) {
  super(props);

 }

 componentDidMount() {}

 _renderExternalButtons() {
  return this.props.content.resources.data.map((resource, index) => {
   return (
    <Button title={resource.title} filled={false} index={index} onPress={this._openURL.bind(this, resource.url)}></Button>
   );
  });
 }

 _renderTipButton() {
  return this.props.content.resources.task.map((resource, index) => {
   return (
    <Button title={resource.title} filled={false} index={index} onPress={this._openPopup.bind(this, resource)}></Button>
   );
  });
 }

 _openPopup(resource) {
  Alert.alert(resource.title, resource.body, [
   {
    text: 'Thanks!',
    onPress: () => console.log('OK Pressed')
   }
  ], {cancelable: false})
 }

 _openURL(url) {
  Linking.openURL(url).catch(err => console.error('An error occurred', err));
 }

 _renderBottom() {
  return (
   <View style={styles.buttonWrapper}>
    {this._renderTipButton()}
    {this._renderExternalButtons()}
    <Button title={'Finish Session'} filled={true} onPress={() => this._goToHome()}></Button>
   </View>
  )
 }

 _goToHome() {
  this.props.navigator.popToRoot({animated: false})
 }

 _renderChild() {
  return (
   <View style={[styles.transparantBackground]}>
    <View style={[styles.textWrapper, styles.transparantBackground]}>
     <Text style={[styles.header]}>{this.props.content.resources.title}</Text>
     <Text style={[styles.body]}>{this.props.content.resources.body}</Text>
    </View>

   </View>
  );
 }

}

const styles = StyleSheet.create({
 header: {
  fontFamily: "OpenSans",
  fontSize: 25,
  paddingTop: 40,
  textAlign: 'center',
  color: "#ffffff"
 },
 body: {
  fontFamily: "OpenSans",
  fontSize: 24,
  paddingTop: 40,
  maxWidth: 300,

  textAlign: 'center',
  fontWeight: "300",
  textAlign: "center",
  color: "#ffffff"
 },
 textWrapper: {
  justifyContent: 'center',
  alignItems: 'center'
 },
 buttonWrapper: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  margin: 30
 },
 transparantBackground: {
  flex: 1,
  backgroundColor: color.transparant
 }
});

export default Done;
