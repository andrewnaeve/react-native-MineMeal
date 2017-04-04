import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Order from './Order';
import SignIn from './SignIn';

export default class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Order />
    )
  }
}

const styles = {
  container: {
    flex: 1,       
  }
}