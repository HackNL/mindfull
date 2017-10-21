import React, {Component} from 'react';

import {Text, View, Image, TouchableOpacity} from 'react-native';

export default class TextUppercase extends React.Component {

  render() {
    return (
      <Text style={[this.props.style]}>
        {this.props.children.toUpperCase()}
      </Text>
    );
  }
}
