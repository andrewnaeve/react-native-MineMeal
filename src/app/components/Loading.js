import React, { Component } from 'react';
import { StyleSheet, Animated, Easing, View, Image } from 'react-native';
import { Components } from 'expo';
import * as Styling from '../assets/styles/style';
const { LinearGradient } = Components;

class Loading extends Component {

  constructor(props) {
    super(props);
    this.logoAnimation = new Animated.Value(0)
  }

  growMe() {
    this.logoAnimation.setValue(0)
    Animated.timing(
      this.logoAnimation,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }
    ).start(() => this.shrinkMe())
  }

  shrinkMe() {
    this.logoAnimation.setValue(1)
    Animated.timing(
      this.logoAnimation,
      {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear
      }
    ).start(() => this.growMe())
  }

  componentDidMount() {
    this.growMe()
  }

  render() {

    const pulse = this.logoAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [.8, 1]
    })

    return(
      <LinearGradient style={styles.container} colors={['#F7F7F7', '#F7F7F7', '#FF5B37']}> 
        <Animated.Image style={[styles.image, {transform: [{scale: pulse}]} ]} source={require("../assets/img/mine_finalWORDS.png")} />
      </LinearGradient>
    );
  }
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