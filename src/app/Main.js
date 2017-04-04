import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Order from './Order';
import SignIn from './SignIn';

export default class Main extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <SignIn />
    )
  }
}

const styles = {
  container: {
    flex: 1,       
  }
}