import React, {Component} from 'react';
import appStyle from '../style/Styles';

import {View, Dimensions} from 'react-native';

const INTERVAL = 70;
const HEIGHT = Dimensions.get('window').height;

export default class GradientView extends Component {
 static propTypes = {
  children: React.PropTypes.element
 }

 constructor(props) {
  super(props);
  this.interval = null;

  this.state = {
   bottom: this.props.bottom,
   left: Math.floor((Math.random() * Dimensions.get('window').width) + 1),
   size: Math.floor((Math.random() * 10) + 1),
   opacity: (Math.random() * 1) + 0.1
  }
 }

 componentDidMount() {
  this.moveStar();
 }
 componentWillUnmount() {
  clearInterval(this.interval);
 }

 moveStar() {
  this.interval = setInterval(() => {
   this.setState({
    bottom: this.state.bottom - 0.5
   });

   if (this.state.bottom < (HEIGHT - HEIGHT - HEIGHT)) {
    this.setState({
     bottom: 0,
     left: Math.floor((Math.random() * Dimensions.get('window').width) + 1),
     size: Math.floor((Math.random() * 10) + 1)
    });
   }

  }, INTERVAL);
 }

 render() {
  return (
   <View style={{
    position: 'absolute',
    bottom: 0,
    opacity: this.state.opacity,
    transform: [
     {
      translateY: this.state.bottom
     }
    ],
    left: this.state.left,
    width: this.state.size,
    height: this.state.size,
    borderRadius: this.state.size,
    backgroundColor: 'rgba(255,255,255,0.6)'
   }}></View>
  )
 }
}
