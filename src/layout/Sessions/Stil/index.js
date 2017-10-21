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
   <View style={[styles.themeWrapper]}>
    <View style={[styles.titleWrapper]}>
     <Text style={[styles.headerBold]}>{this.props.theme.number}</Text>
     <Text style={[styles.header]}>{this.props.theme.title}</Text>
    </View>

    <View style={[styles.sessionWrapper]}>
     {this._renderSessions()}
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
