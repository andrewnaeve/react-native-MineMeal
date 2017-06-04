import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Components } from 'expo';
const { LinearGradient } = Components;
import * as stylings from '../../assets/styles/style';

const LoginButton = props => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={props.onPress}
    disabled={props.disabled}
  >
    <LinearGradient
      colors={['#fcb755', '#fcaa58', '#fca226']}
      style={styles.button}
    >
      {props.children}
    </LinearGradient>
  </TouchableOpacity>
);

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    height: 35,
    backgroundColor: 'transparent',
    width: stylings.width * 0.8,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 15,
    alignItems: 'center',
    elevate: 4,
  },
});
