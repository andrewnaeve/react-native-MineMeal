import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Components } from 'expo';
import * as Styling from '../assets/styles/style';

const Loading = () => {
  return (
    <View style={styles.container} >
      <Image style={styles.image} source={require("../assets/img/mine_final.png")}></Image>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: Styling.height * .8,
    width: Styling.containerWidth,
    resizeMode: 'cover',
  }
})