import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import Logo from './components/Logo';
import OrderHead from './components/OrderHead';
import Selector from './containers/SelectorContainer';
import FooterButtons from './containers/FooterButtons';
import Loading from './containers/LoadingContainer';
import * as stylings from './assets/styles/style';

const Order = ({ navigation, appReady }) => (
  <Image
    source={require('./assets/img/cut2.jpg')}
    style={styles.container}
    onLoad={() => appReady()}
  >
    <OrderHead />
    <Selector navigation={navigation} />
    <FooterButtons />
  </Image>
);

const styles = {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
};

export default Order;
