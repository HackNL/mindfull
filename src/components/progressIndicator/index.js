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

import * as Progress from 'react-native-progress';

//constants
import color from '../../style/Colors';
import {appVars} from '../../constants';

class ProgressIndicator extends Component {

 constructor(props) {
  super(props);

 }

 componentDidMount() {}

 render() {
  return (
   <View style={[styles.transparantBackground]}>
    <Progress.Circle size={160} thickness={8} showsText={false} direction={'counter-clockwise'} progress={this.props.progress} borderWidth={0} color={'rgba(255, 255, 255, 0.41)"'}/>
   </View>
  );
 }
}

const styles = StyleSheet.create({
 transparantBackground: {
  // flex: 1,

  borderRadius: 100,
  backgroundColor: 'rgba(255, 255, 255, 0.05)'
 }
});
export default ProgressIndicator;
