import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Modal, Text, StyleSheet } from 'react-native';
import Button from 'apsl-react-native-button';

import * as stylings from '../../assets/styles/style';
import FooterButton from './FooterButtons';

const AddCheckout = props => (
  <View style={styles.button}>
    <Text style={styles.buttonText}>{props.children}</Text>
  </View>
);

export default AddCheckout;

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
  button: {
    width: stylings.block,
    height: 50,
    borderRadius: 10,
    borderColor: 'transparent',
    marginBottom: 30,
    backgroundColor: '#fd980a',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
