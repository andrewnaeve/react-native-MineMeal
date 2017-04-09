import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Logo from './components/Logo';
import OrderHead from './components/OrderHead';
import Selector from './containers/SelectorContainer';
import FooterButtons from './containers/FooterButtons';


export default class Order extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <Selector />
        <FooterButtons />
      </View>
    )
  }
}
        // <OrderHead />


const styles = {
  container: {
    flex: 1,       
  }
}