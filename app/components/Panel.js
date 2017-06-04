import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import MenuModal from './MenuModal';

import {
  height,
  width,
  containerWidth,
  block,
  RStyles,
} from '../assets/styles/style';

export default class Panel extends Component {
  handlePress() {
    this.props.navigation.navigate('MenuModal', {
      menu: this.props.screenProps.menu,
      color: this.props.screenProps.color,
      handleChoice: this.props.screenProps.handleChoice,
    });
  }

  render() {
    return (
      <TouchableOpacity
        navigation={this.props.navigation}
        style={[RStyles.b1, this.props.screenProps.color, styles.container]}
        onPress={this.handlePress.bind(this)}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
