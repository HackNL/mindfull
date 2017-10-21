import React, {Component} from 'react';
import {
 AppRegistry,
 StyleSheet,
 Alert,
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

 _renderButtons() {
  return this.props.content.resources.data.map(function(resource, index) {
   return (
    <Button title={resource.title} filled={false}></Button>
   );
  });
  // return(
  //
  // );
 }
 _renderBottom(){
  return (
   <View style={styles.buttonWrapper}>
    {this._renderButtons()}
    <Button title={'Finish Session'} filled={true}></Button>
   </View>
  )
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
