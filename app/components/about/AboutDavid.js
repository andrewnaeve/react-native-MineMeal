import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Modal, ListView, TouchableOpacity } from 'react-native';
import * as stylings from '../../assets/styles/style';
import { Components } from 'expo';
const { LinearGradient } = Components;
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from './Avatar';
import Bio from './Bio';

class AboutDavid extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <LinearGradient style={styles.container} colors={['#F7F7F7', '#F7F7F7', '#16fc06']}>
        <Avatar />
        <Bio style={styles.small} />
      </LinearGradient>
    );
  }
}

export default AboutDavid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  small: {
    height: stylings.height * 0.2
  }

});
