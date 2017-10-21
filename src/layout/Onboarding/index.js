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

 constructor(props) {
  super(props);
  this.state = {
   name: ''
  }

 }

 setData(key) {
  return new Promise(function(resolve, reject) {
   try {
    AsyncStorage.setData(key, (err, result) => {
     resolve(result);
    });
   } catch (error) {
    reject();
    // Error saving data
   }
  });
 }

 _renderChild() {
  return (
   <View style={[styles.transparantBackground]}>
    <TextInput style={{
     height: 40,
     borderColor: 'gray',
     borderWidth: 1
    }} onChangeText={(name) => this.setState({name})} value={this.state.name}/>
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

export default Onboarding;
