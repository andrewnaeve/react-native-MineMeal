import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as stylings from '../assets/styles/style';

export default (Backdrop = () => <View style={styles.container} />);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: stylings.height,
    width: stylings.width,
    zIndex: -1,
    backgroundColor: '#F7F7F7',
  },
});
