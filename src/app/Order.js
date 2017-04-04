import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Logo from './components/Logo';
import OrderHead from './components/OrderHead';
import Selector from './components/Selector';
import FooterButtons from './components/ui/FooterButtons';


const Order = () => (
  <View style={styles.container}>
    <OrderHead />
    <Selector />
    <FooterButtons />
  </View>
)

export default Order;

const styles = {
  container: {
    flex: 1,       
  }
}