import React, { Component } from 'react';
import { StyleSheet, Animated, Easing, View, Image } from 'react-native';
import { Components } from 'expo';
import * as Styling from '../assets/styles/style';
const { LinearGradient } = Components;

class Loading extends Component {
  constructor (props) {
    super(props);
    this.logoAnimation = new Animated.Value(0);
  }

  growMe () {
    this.logoAnimation.setValue(0);
    Animated.timing(
      this.logoAnimation,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.shrinkMe());
  }

  shrinkMe () {
    this.logoAnimation.setValue(1);
    Animated.timing(
      this.logoAnimation,
      {
        toValue: 0,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.growMe());
  }

  componentDidMount () {
    this.growMe();
  }

  render () {
    const pulse = this.logoAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.85, 1]
    });

    return (
      <LinearGradient style={this.props.appIsReady ? styles.hidden : styles.container} colors={['#F7F7F7', '#F7F7F7', '#FF5B37']}>
        <Animated.Image style={[styles.image, {transform: [{scale: pulse}]} ]} source={require('../assets/img/mine_finalWORDS.png')} />
      </LinearGradient>
    );
  }
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hidden: {
    height: 0,
    width: 0,
  },
  image: {
    height: Styling.height * 0.8,
    width: Styling.containerWidth,
    resizeMode: 'cover'
  }
});
