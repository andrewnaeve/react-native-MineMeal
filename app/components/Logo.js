import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

export default (Logo = () => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={require('../assets/img/mine_finalWORDS.png')}
    />
  </View>
));

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: -40,
    marginTop: -10,
    height: height * 0.15,
  },

  logo: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
  },
});
