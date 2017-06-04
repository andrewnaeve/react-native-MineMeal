import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Logo from './Logo';
import ShoppingIcon from '../containers/ShoppingContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import { containerWidth } from '../assets/styles/style';
import { connect } from 'react-redux';

const OrderHead = () => (
  <View>
    <Logo />
    <View style={styles.center}>
      <View style={styles.container}>
        <ShoppingIcon />
      </View>
    </View>
  </View>
);

export default OrderHead;

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  center: {
    alignItems: 'center',
    paddingTop: 70,
    marginTop: -20,
  },
});
