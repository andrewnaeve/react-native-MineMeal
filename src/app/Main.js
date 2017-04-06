import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Order from './Order';
import SignUp from './components/SignUp';
import Entry from './components/Entry';

export default class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Entry />
    )
  }
}

const styles = {
  container: {
    flex: 1,       
  }
}