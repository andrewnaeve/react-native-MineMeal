import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Modal, ListView, TouchableOpacity } from 'react-native';
import * as stylings from '../../assets/styles/style';

// import Icon from 'react-native-vector-icons/Ionicons';

const Avatar = () => (
  <Image source={require('../../assets/img/david.png')} style={styles.pic} />
);

export default Avatar;

const styles = StyleSheet.create({

  pic: {
    marginTop: stylings.height * 0.05,
    width: stylings.block,
    height: stylings.block,
    resizeMode: 'cover',
    borderRadius: stylings.block * 0.5,
    borderColor: 'black',
    borderWidth: 2
  }
});
