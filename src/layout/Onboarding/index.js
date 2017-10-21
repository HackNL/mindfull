import React, {Component} from 'react';
import {
 AppRegistry,
 StyleSheet,
 Alert,
 Button,
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
 componentDidMount() {
  this._setData('FirstTime', true).this(() => {
   console.log('done');
  }).catch((err) => {
   console.log(err);
  });
 }

 _setData(key, data) {
  return new Promise(function(resolve, reject) {
   try {
    AsyncStorage.setData(key, (err, result) => {
     resolve(result);
    });
   } catch (error) {
    reject(error);
    // Error saving data
   }
  });
 }

 _renderChild() {
  return (
   <View style={[styles.transparantBackground]}>
    <Text style={styles.header}>Hi! Who are you?</Text>
    <TextInput autoFocus={true} style={{
     height: 40,
     borderBottomColor: color.white,
     borderBottomWidth: 2,
     backgroundColor: color.transparant
    }} onChangeText={(name) => this.setState({name})} value={this.state.name}/>
   </View>
  );
 }

}

const styles = StyleSheet.create({
 header: {
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
