import React, {Component} from 'react';
import {
 AppRegistry,
 StyleSheet,
 Alert,
 Button,
 View,
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

class StilSession extends GenericBackComponent {

 constructor(props) {
  super(props);
 }

 componentDidMount() {}

 _renderChild() {
  return (
   <View style={[styles.themeWrapper, styles.transparantBackground]}>
    <View style={[styles.titleWrapper, styles.transparantBackground]}>
     <Text style={[styles.header]}>{this.props.title}</Text>
     <Button title="hiohio"></Button>
    </View>
   </View>
  )
 }

}

const styles = StyleSheet.create({
 transparantBackground: {
  flex: 1,
  backgroundColor: color.transparant
 }
});

export default StilSession;
