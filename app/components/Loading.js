import React, { Component } from 'react';
import { StyleSheet, Animated, Easing, View, Image } from 'react-native';
import { Components } from 'expo';
import * as Styling from '../assets/styles/style';
const { LinearGradient } = Components;

class Loading extends Component {
  constructor({ appIsReady }) {
    super();
    this.logoAnimation = new Animated.Value(1);
    this.opaqueAnimation = new Animated.Value(1);
    this.state = {
      visible: true,
      once: true,
    };
  }

  componentWillReceiveProps({ appIsReady }) {
    console.log('prop reveived');
    if (
      appIsReady.assets === true &&
      appIsReady.app === true &&
      this.state.once === true
    ) {
      this.animate();
      this.setState({
        once: false,
      });
    }
    if (appIsReady.app === false) {
      this.setState({
        visible: true,
      });
    }
  }

  animate() {
    this.logoAnimation.setValue(1);
    this.opaqueAnimation.setValue(1);

    Animated.stagger(1000, [
      Animated.timing(this.logoAnimation, {
        toValue: 0.75,
        duration: 1000,
        easing: Easing.ease,
      }),
      Animated.parallel([
        Animated.timing(this.logoAnimation, {
          toValue: 10,
          duration: 150,
          easing: Easing.ease,
        }),
        Animated.timing(this.opaqueAnimation, {
          toValue: 0,
          duration: 150,
          easing: Easing.ease,
        }),
      ]),
    ]).start(() => {
      this.setState({
        visible: false,
        once: true,
      });
    });
  }

  render() {
    const pulse = this.logoAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const op = this.opaqueAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    return (
      <LinearGradient
        style={this.state.visible ? styles.container : styles.hidden}
        colors={['#F7F7F7', '#F7F7F7', '#FF5B37']}
      >
        <Animated.Image
          style={[
            styles.image,
            { opacity: op },
            { transform: [{ scale: pulse }] },
          ]}
          source={require('../assets/img/mine_finalWORDS.png')}
        />
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
    alignItems: 'center',
  },
  hidden: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    zIndex: -100,
  },
  image: {
    height: Styling.height * 0.7,
    width: Styling.containerWidth,
    resizeMode: 'cover',
  },
});
