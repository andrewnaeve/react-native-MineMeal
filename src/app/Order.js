import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import Logo from './components/Logo';
import OrderHead from './components/OrderHead';
import Selector from './containers/SelectorContainer';
import FooterButtons from './containers/FooterButtons';

export default class Order extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Image source={require('./assets/img/cut2.jpg')} style={styles.container}>
        <OrderHead />
        <Selector navigation={this.props.navigation} />
        <FooterButtons />
      </Image>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    width: null,
    height: null
  }
};
