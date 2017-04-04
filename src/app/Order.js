import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Logo from './components/Logo';
import OrderHead from './components/OrderHead';
import Selector from './components/Selector';
import FooterButtons from './components/ui/FooterButtons';


export default class Order extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <OrderHead />
        <Selector />
        <FooterButtons />
      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,       
  }
}