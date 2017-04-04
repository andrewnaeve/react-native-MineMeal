import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

export default Logo = () => (
  <View style={styles.container}>
    <Image style={styles.logo} source={require("../assets/img/mine_finalWORDS.png")}/>
  </View>
 );

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({ 
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: -60,
    marginTop: -20,
    height: height * .15,
  },

  logo: {
    width: 175,
    height: 175,
    resizeMode: 'cover',
  }
})