import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Order from './Order';
import SignUp from './components/SignUp';
import Entry from './components/Entry';

const Main = ({ auth, signUp, signIn, signOut }) => {
  return (
    <Order />
  )
}

export default Main;

const styles = {
  container: {
    flex: 1,       
  }
}