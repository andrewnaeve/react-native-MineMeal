import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Components } from 'expo';
const { LinearGradient } = Components;
import * as stylings from '../../assets/styles/style';

const PairButtons = props => (
  <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
    <LinearGradient
      colors={['#fcb755', '#fcaa58', '#fca226']}
      style={styles.button}
    >
      <Text style={styles.text}>
        {props.children}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default PairButtons;

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: 'transparent',
    width: stylings.width * 0.4,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 15,
    alignItems: 'center',
    elevate: 2,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 20,
    color: '#fff',
  },
});
