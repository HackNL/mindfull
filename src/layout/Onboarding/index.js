import React, {Component} from 'react';
import {
 AppRegistry,
 StyleSheet,
 Alert,

 View,
 TextInput,
 Text,
 AsyncStorage,
 Dimensions
} from 'react-native';

//constants
import color from '../../style/Colors';
import {appVars, NavigationStyle} from '../../constants';

//Views
import GeneralBaseView from '../../layout/GeneralBaseView';

//components
import Button from '../../components/Button.js';

class Onboarding extends GeneralBaseView {
 static navigatorStyle = {
  drawUnderNavBar: true,
  navBarTranslucent: true,
  navBarTransparent: true
 };

 constructor(props) {
  super(props);
  this.state = {
   name: ''
  }
 }

 _setUserData() {
     AsyncStorage.setItem('FirstTime', JSON.stringify(true));
     this.props.navigator.dismissModal();
 }


 _renderChild() {
  return (
   <View style={[styles.transparantBackground]}>
    <Text style={styles.header}>Hi! Who are you?</Text>
    <TextInput autoFocus={true} style={styles.textField} onChangeText={(name) => this.setState({name})} value={this.state.name}/>
    <Button onPress={this._setUserData.bind(this)} title={'Save'} viewStyle={styles.button} filled={true}></Button>
   </View>
  );
 }

}

const styles = StyleSheet.create({
 textField: {
  height: 40,
  margin: 40,
  borderBottomColor: color.white,
  borderBottomWidth: 2,
  color: color.white,
  backgroundColor: color.transparant
 },
 button: {
  marginLeft: 40,
  marginRight: 40
 },
 header: {
  textAlign: 'center',
  fontFamily: 'OpenSans',
  marginTop: 140,
  fontSize: 21,
  fontWeight: '300',
  color: '#ffffff'
 },
 transparantBackground: {
  flex: 1,
  backgroundColor: color.transparant
 }
});

export default Onboarding;
